// https://eslint.org/docs/latest/use/configure/configuration-files

import sobird from './src';

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
  typescript: {
    typed: true,
  },
  import: {
    rules: {
      //
    },
  },
  jsonc: {
    // package: false,
    stylistic: true,
  },
  jsx: {
    a11y: true,
  },
  next: {
    rules: {
      '@next/next/google-font-display': 'error',
    },
  },
  vue: true,

  yaml: true,
  toml: {
    stylistic: {
      indent: 2,
    },
  },
  markdown: {
    gfm: false,
    rules: {

    },
    blockRules: {

    },
  },
});
