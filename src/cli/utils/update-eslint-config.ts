import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

import { log, note } from '@clack/prompts';
import { includeIgnoreFile } from '@eslint/compat';
import c from 'chalk';

import { genESLintConfig } from './gen-eslint-config';

import type { Options } from '../index';

export async function updateESLintConfig(options: Options): Promise<void> {
  const cwd = process.cwd();

  let isModule = false;
  try {
    const pkgContent = await fsp.readFile(path.join(cwd, 'package.json'), 'utf-8');
    isModule = JSON.parse(pkgContent).type === 'module';
  } catch {
    log.warn('Could not find package.json, defaulting to CommonJS naming.');
  }

  const configFileName = isModule ? 'eslint.config.js' : 'eslint.config.mjs';
  const flatConfigFile = path.join(cwd, configFileName);
  const eslintignoreFile = path.join(cwd, '.eslintignore');

  const eslintIgnores: string[] = [];
  if (fs.existsSync(eslintignoreFile)) {
    log.step(c.cyan`Migrating existing .eslintignore`);
    try {
      const parsed = includeIgnoreFile(eslintignoreFile);
      if (parsed.ignores) {
        eslintIgnores.push(...parsed.ignores);
      }
    } catch (e) {
      log.error(`Failed to parse .eslintignore: ${(e as Error).message}`);
    }
  }

  const configs: string[] = [];

  if (eslintIgnores.length) {
    configs.push(`ignores: ${JSON.stringify(eslintIgnores)},`);
  }

  const { extra = [], framework = [] } = options;
  if (extra.includes('formatter')) {
    configs.push('formatters: true,');
  }

  if (extra.includes('unocss')) {
    configs.push('unocss: true,');
  }

  for (const fw of framework) {
    configs.push(`${fw}: true,`);
  }

  const mainConfig = configs.map(i => `  ${i}`).join('\n');
  const additionalConfig: string[] = [];

  await genESLintConfig(flatConfigFile, mainConfig, additionalConfig);
  log.success(c.green(`Created ${configFileName}`));

  const files = await fsp.readdir(cwd);
  const legacyConfigs = files.filter(file => (/eslint|prettier/u).test(file) && !(/eslint\.config\./u).test(file));

  if (legacyConfigs.length) {
    note(c.dim(legacyConfigs.join(', ')), 'You can now remove those files manually');
  }
}
