import c from 'chalk';

export const VSCODE_SETTINGS = {
  // Disable the default formatter, use eslint instead
  'prettier.enable': false,
  'editor.formatOnSave': false,

  // Auto fix
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': 'explicit',
    'source.organizeImports': 'never',
  },

  // Silent the stylistic rules in your IDE, but still auto fix them
  'eslint.rules.customizations': [
    { rule: 'style/*', severity: 'off', fixable: true },
    { rule: 'format/*', severity: 'off', fixable: true },
    { rule: '*-indent', severity: 'off', fixable: true },
    { rule: '*-spacing', severity: 'off', fixable: true },
    { rule: '*-spaces', severity: 'off', fixable: true },
    { rule: '*-order', severity: 'off', fixable: true },
    { rule: '*-dangle', severity: 'off', fixable: true },
    { rule: '*-newline', severity: 'off', fixable: true },
    { rule: '*quotes', severity: 'off', fixable: true },
    { rule: '*semi', severity: 'off', fixable: true },
  ],

  // Enable eslint for all supported languages
  'eslint.validate': [
    'javascript',
    'javascriptreact',
    'typescript',
    'typescriptreact',
    'vue',
    'html',
    'markdown',
    'json',
    'json5',
    'jsonc',
    'yaml',
    'toml',
    'xml',
    'gql',
    'graphql',
    'astro',
    'svelte',
    'css',
    'less',
    'scss',
    'pcss',
    'postcss',
  ],
};

export const FRAMEWORK_OPTIONS = [
  {
    label: c.green('Vue'),
    value: 'vue',
  },
  {
    label: c.cyan('React'),
    value: 'react',
  },
  {
    label: c.magenta('Next.js'),
    value: 'next',
  },

  // {
  //   label: c.red('Svelte'),
  //   value: 'svelte',
  // },
  // {
  //   label: c.magenta('Astro'),
  //   value: 'astro',
  // },
  // {
  //   label: c.cyan('Solid'),
  //   value: 'solid',
  // },
  // {
  //   label: c.blue('Slidev'),
  //   value: 'slidev',
  // },
];

export const FRAMEWORKS = FRAMEWORK_OPTIONS.map(({ value }) => (value));

export const EXTRA_OPTIONS = [
  {
    label: c.red('Markdown'),
    value: 'markdown',
  },
  {
    label: c.cyan('JSONC'),
    value: 'jsonc',
  },
];

export const EXTRAS = EXTRA_OPTIONS.map(({ value }) => (value));
