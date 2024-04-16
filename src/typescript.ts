/**
 * Typescirpt ESLint
 *
 * @see https://typescript-eslint.io/play
 */

import base from './base';

const config = {
  extends: [
    './base.cjs',
    'airbnb-typescript/base',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      base.rules['import/extensions'][0],
      base.rules['import/extensions'][1],
      {
        ...base.rules['import/extensions'][2] as any,
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};

export default config;
