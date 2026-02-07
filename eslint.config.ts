// https://eslint.org/docs/latest/use/configure/configuration-files

import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

import { sobird } from './src';

export default defineConfig(
  // {
  //   files: ['**/*.{ts,tsx}'],
  //   extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
  //   // other configs...
  // },
  sobird({
    typescript: true,
    rules: {
      '@typescript/no-explicit-any': [{ fixToUnknown: true }],
    },
  }),
);
