// https://eslint.org/docs/latest/use/configure/configuration-files

import { sobird } from './src';

export default sobird({
  ignores: {
    gitignore: true,
    ignores: [],
  },
  javascript: {
    rules: {
      'accessor-pairs': 'error',
    },
  },
  typescript: true,
  import: {
    rules: {
      //
    },
  },
  jsonc: {
    package: false,
  },
  jsx: {
    a11y: true,
  },
  next: {
    vitals: true,
    rules: {
      '@next/next/google-font-display': 'error',
    },
  },
});
