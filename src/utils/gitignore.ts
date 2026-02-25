import fs from 'node:fs';
import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';

import type { ESLintConfigObject } from '../types';

interface Options {
  /**
   * Name of the configuration.
   * @default 'gitignore'
   */
  name?: string;
  /**
   * Path to `.gitignore` files, or files with compatible formats like `.eslintignore`.
   * @default ['.gitignore'] // or findUpSync('.gitignore')
   */
  files?: string | string[];
}

export type GitignoreOptions = Options | boolean;

export function gitignore(options: GitignoreOptions): ESLintConfigObject {
  if (options === false) {
    return {};
  }
  const {
    name = 'gitignore',
    files = [],
  } = options === true ? {} : options;

  const possiblePaths = [
    ...(Array.isArray(files) ? files : [files]),
    path.resolve(process.cwd(), '.gitignore'),
    path.resolve(import.meta.dirname, '.gitignore'),
  ].filter(Boolean);

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      try {
        return includeIgnoreFile(p, name);
      } catch {
        // eslint-disable-next-line no-console
        console.warn(`Get .gitignore file error: ${p}`);
        return {};
      }
    }
  }
  return {};
}
