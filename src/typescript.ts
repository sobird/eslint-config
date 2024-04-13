/**
 * Typescirpt ESLint
 *
 * @see https://typescript-eslint.io/play
 */

import { type Linter } from 'eslint';

const config: Linter.BaseConfig = {
  extends: [
    './base.cjs',
    'airbnb-typescript/base',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {},
};

export default config;
