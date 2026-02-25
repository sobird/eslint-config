import fsp from 'node:fs/promises';
import path from 'node:path';

import { log } from '@clack/prompts';
import c from 'chalk';

import { devDependencies, name, version } from '../../../package.json';

import type { Options } from '../index';

export async function updatePackageJson(result: Options): Promise<void> {
  const cwd = process.cwd();
  const packageJSONFile = path.join(cwd, 'package.json');

  log.step(c.cyan`Bumping ${name} to v${version}`);

  const pkgContent = await fsp.readFile(packageJSONFile, 'utf-8');
  const pkg = JSON.parse(pkgContent);

  pkg.devDependencies ??= {};
  pkg.devDependencies[name] = `^${version}`;
  pkg.devDependencies.eslint ??= devDependencies.eslint;

  await fsp.writeFile(packageJSONFile, JSON.stringify(pkg, null, 2));
  log.success(c.green`Changes wrote to package.json`);
}
