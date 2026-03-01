// https://eslint.org/docs/latest/use/configure/configuration-files

import sobird from './src';

export default sobird({
  ignores: {
    gitignore: true,
    ignores: ['**/*.sobird'],
  },
  javascript: {
    rules: {
      'accessor-pairs': 'error',
    },
  },
  typescript: {
    typed: true,
  },
  comments: true,
  import: {
    rules: {},
  },
  jsonc: {
    stylistic: true,
  },
  jsx: {
    a11y: true,
  },
  markdown: {
    gfm: false,
    rules: {},
    blockRules: {},
  },
  next: {
    vitals: true,
    rules: {
      '@next/next/google-font-display': 'error',
    },
  },
  node: true,
  react: true,
  stylistic: true,
  vue: true,
  toml: {
    stylistic: {
      indent: 2,
    },
  },
  yaml: true,
});
