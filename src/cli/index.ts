/* eslint-disable n/no-process-env */
import fs from 'node:fs';
import path from 'node:path';

import {
  intro, log, group, confirm, multiselect, cancel, spinner, outro,
} from '@clack/prompts';
import chalk from 'chalk';
import { Command } from 'commander';

import {
  extras, extraOptions, frameworkOptions, frameworks,
} from './constants';
import {
  isGitClean, updateESLintConfig, updateVscodeSettings, updatePackageJson,
} from './utils';
import { name, version } from '../../package.json';

export type Options = ReturnType<typeof program.opts>;

const program = new Command(name)
  .description('Run the initialization or migration')
  .exitOverride()
  .option('-y, --yes', 'skip prompts and use default values', Boolean(process.env.SKIP_PROMPT) || false)
  .option('-f, --framework <frameworks...>', 'use the framework template for optimal customization: react, vue', [] as string[])
  .option('-e, --extra <extras...>', 'use the extra utils: formatter / perfectionist / unocss', [] as string[])
  .option('-v, --update-vscode-settings', 'update VSCode settings', false)
  .option('-u, --uncommitted-confirmed', 'git uncommitted confirmed', false)
  .version(version)
  .action(async (options) => {
    intro(`${chalk.green(name)} ${chalk.dim(`v${version}`)}`);

    if (fs.existsSync(path.join(process.cwd(), 'eslint.config.js'))) {
      log.warn(chalk.yellow`eslint.config.js already exists, migration wizard exited.`);
      return;
    }

    const { yes, framework, extra } = options;

    if (!yes) {
      const result = await group({
        uncommittedConfirmed: async () => {
          if (isGitClean()) {
            return true;
          }
          return confirm({
            initialValue: false,
            message: 'There are uncommitted changes in the current repository, are you sure to continue?',
          });
        },
        framework: async ({ results }) => {
          const { uncommittedConfirmed } = results;
          const isAllValid = framework.length > 0 && framework.every(f => frameworks.includes(f));

          if (!uncommittedConfirmed || isAllValid) {
            return [];
          }

          return multiselect({
            message: chalk.reset('Select frameworks:'),
            options: frameworkOptions,
            required: false,
          });
        },
        extra: async ({ results }) => {
          const { uncommittedConfirmed } = results;
          const isAllValid = extra.length > 0 && extra.every(e => extras.includes(e));

          if (!uncommittedConfirmed || isAllValid) {
            return [];
          }

          return multiselect({
            message: chalk.reset('Select extra utils:'),
            options: extraOptions,
            required: false,
          });
        },
        updateVscodeSettings: async ({ results }) => {
          if (!results.uncommittedConfirmed) {
            return true;
          }

          return confirm({
            initialValue: true,
            message: 'Update .vscode/settings.json for better VS Code experience?',
          });
        },
      }, {
        onCancel: () => {
          cancel('Operation cancelled.');
          throw Error('Operation cancelled.');
        },
      });
      if (!result.uncommittedConfirmed) {
        log.error(chalk.red`Operation aborted due to uncommitted changes.`);
        return;
      }
      Object.assign(options, result);
    }

    const s = spinner();
    s.start(chalk.dim('Updating configurations...'));

    try {
      await updateESLintConfig(options);
      await updateVscodeSettings(options);
      await updatePackageJson(options);

      s.stop(chalk.dim('Configurations updated.'));
    } catch (error) {
      s.stop('Update failed.');
      return;
    }

    log.success(chalk.green('Setup completed'));
    outro(`Now you can update the dependencies by run ${chalk.blue('pnpm install')} and run ${chalk.blue('eslint --fix')}\n`);
  });

try {
  await program.parseAsync(process.argv);
} catch (error) {
  //
}
