import { IGNORES_FILES } from '../files';
import { gitignore } from '../utils';

import type { ESLintConfigObject } from '../types';

interface GitignoreOptions {
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

interface Options {
  /**
   * Enable gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @default true
   */
  gitignore?: boolean | GitignoreOptions;
  ignores?: string[];
}

export type IgnoresOptions = Options | boolean | string[];

export function ignores(options: IgnoresOptions = true): ESLintConfigObject[] {
  if (options === false) {
    return [];
  }

  const {
    ignores: userIgnores = [],
    gitignore: gitignoreOptions = true,
  // eslint-disable-next-line no-nested-ternary
  } = Array.isArray(options)
    ? {
        ignores: options,
      }
    : (options === true ? {} : options);

  const config = gitignore(gitignoreOptions);

  return [
    {
      name: 'sobird:ignores',
      ignores: [
        ...IGNORES_FILES,
        ...userIgnores,
      ],
    },
    config,
  ];
}
