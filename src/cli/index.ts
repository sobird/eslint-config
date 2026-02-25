/* eslint-disable n/no-process-env */
import fs from 'node:fs';
import path from 'node:path';

// eslint-disable-next-line import/no-namespace
import * as p from '@clack/prompts';
import chalk from 'chalk';
import { Command } from 'commander';

import {
  extra, extraOptions, frameworkOptions, frameworks,
} from './constants';
import { isGitClean } from './utils';
import { name, version } from '../../package.json';

const program = new Command(name)

  // .name(name)
  .description('Run the initialization or migration');

program.exitOverride();

program
  .option('-y, --yes', 'Skip prompts and use default values', Boolean(process.env.SKIP_PROMPT) || false)
  .option('-t, --template <frameworks...>', 'Use the framework template for optimal customization: react, vue', [] as string[])
  .option('-e, --extra <extra...>', 'Use the extra utils: formatter / perfectionist / unocss', [] as string[])
  .version(version)
  .action(async (options) => {
    p.intro(`${chalk.green(name)} ${chalk.dim(`v${version}`)}`);

    if (fs.existsSync(path.join(process.cwd(), 'eslint.config.js'))) {
      p.log.warn(chalk.yellow`eslint.config.js already exists, migration wizard exited.`);
      throw Error('dd');
    }

    const { yes, template, extra } = options;

    if (!yes) {
      const result = await p.group({
        uncommittedConfirmed: () => {
          if (yes || isGitClean()) {
            return Promise.resolve(true);
          }

          return p.confirm({
            initialValue: false,
            message: 'There are uncommitted changes in the current repository, are you sure to continue?',
          });
        },
        frameworks: ({ results }) => {
          console.log('template', template);
          const isArgTemplateValid = typeof template === 'string' && Boolean(frameworks.includes((template)));

          if (!results.uncommittedConfirmed || isArgTemplateValid) {
            return;
          }

          const message = !isArgTemplateValid && template
            ? `"${template}" isn't a valid template. Please choose from below: `
            : 'Select a framework:';

          return p.multiselect({
            message: chalk.reset(message),
            options: frameworkOptions,
            required: false,
          });
        },
        extra: ({ results }) => {
          const isArgExtraValid = extra?.length && !extra.filter(element => !extra.includes(element)).length;

          if (!results.uncommittedConfirmed || isArgExtraValid) {
            return;
          }

          const message = !isArgExtraValid && extra
            ? `"${extra}" isn't a valid extra util. Please choose from below: `
            : 'Select a extra utils:';

          return p.multiselect({
            message: chalk.reset(message),
            options: extraOptions,
            required: false,
          });
        },
        updateVscodeSettings: ({ results }) => {
          if (!results.uncommittedConfirmed) {
            return;
          }

          return p.confirm({
            initialValue: true,
            message: 'Update .vscode/settings.json for better VS Code experience?',
          });
        },
      }, {
        onCancel: () => {
          p.cancel('Operation cancelled.');
          process.exit(0);
        },
      });

      console.log('result', result);
    }

    p.log.success(chalk.green('Setup completed'));
    p.outro(`Now you can update the dependencies by run ${chalk.blue('pnpm install')} and run ${chalk.blue('eslint --fix')}\n`);
  });

try {
  await program.parseAsync(process.argv);
} catch (error) {
  //
}
