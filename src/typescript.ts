/**
 * Typescirpt ESLint
 *
 * @see https://typescript-eslint.io/play
 */

import baseImports from './import';

const config = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    './base.cjs',
    './import.cjs',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      baseImports.rules['import/extensions'][0],
      baseImports.rules['import/extensions'][1],
      {
        ...baseImports.rules['import/extensions'][2] as any,
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};

export default config;
