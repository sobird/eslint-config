import eslintPluginJsonc from 'eslint-plugin-jsonc';
import jsoncParser from 'jsonc-eslint-parser';

import type { ESLintConfigObject, ESLintPlugin } from '../types';
import type { ESLint } from 'eslint';

const { meta, rules } = eslintPluginJsonc;
const {
  name = 'eslint-plugin-jsonc',
  version,
} = meta;
const namespace = 'jsonc';

export const jsoncPlugin: ESLintPlugin = {
  meta: {
    pkgname: name,
    namespace,
    title: namespace,
    version,
  },
  rules,
};

export function jsonc(): ESLintConfigObject[] {
  return [
    // {
    //   files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
    //   rules: {
    //     // ESLint core rules known to cause problems with JSON.
    //   strict: "off",
    //   "no-unused-expressions": "off",
    //   "no-unused-vars": "off",
    //   }
    // },
    {
      name: 'sobird:jsonc:rules',
      files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
      plugins: {
        jsonc: eslintPluginJsonc as ESLint.Plugin,
      },
      languageOptions: {
        parser: jsoncParser,
        parserOptions: {},
      },
      rules: {
        'jsonc/array-bracket-newline': 'error',
        'jsonc/array-bracket-spacing': 'error',
        'jsonc/array-element-newline': 'error',
        // 'jsonc/auto': 'error',
        'jsonc/comma-dangle': 'error',
        'jsonc/comma-style': 'error',
        // todo
        'jsonc/indent': ['error', 2],
        'jsonc/key-name-casing': 'off',
        'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
        'jsonc/no-bigint-literals': 'error',
        'jsonc/no-binary-expression': 'error',
        'jsonc/no-binary-numeric-literals': 'error',
        'jsonc/no-comments': 'error',
        'jsonc/no-dupe-keys': 'error',
        'jsonc/no-escape-sequence-in-identifier': 'error',
        'jsonc/no-floating-decimal': 'error',
        'jsonc/no-hexadecimal-numeric-literals': 'error',
        'jsonc/no-infinity': 'error',
        'jsonc/no-irregular-whitespace': 'error',
        'jsonc/no-multi-str': 'error',
        'jsonc/no-nan': 'error',
        'jsonc/no-number-props': 'error',
        'jsonc/no-numeric-separators': 'error',
        'jsonc/no-octal-escape': 'error',
        'jsonc/no-octal-numeric-literals': 'error',
        'jsonc/no-octal': 'error',
        'jsonc/no-parenthesized': 'error',
        'jsonc/no-plus-sign': 'error',
        'jsonc/no-regexp-literals': 'error',
        'jsonc/no-sparse-arrays': 'error',
        'jsonc/no-template-literals': 'error',
        'jsonc/no-undefined-value': 'error',
        'jsonc/no-unicode-codepoint-escapes': 'error',
        'jsonc/no-useless-escape': 'error',
        'jsonc/object-curly-newline': 'error',
        'jsonc/object-curly-spacing': 'error',
        'jsonc/object-property-newline': 'error',
        'jsonc/quote-props': 'error',
        'jsonc/quotes': 'error',
        'jsonc/sort-array-values': 'error',
        'jsonc/sort-keys': 'error',
        'jsonc/space-unary-ops': 'error',
        'jsonc/valid-json-number': 'error',
        'jsonc/vue-custom-block/no-parsing-error': 'error',
      },
    },
    {
      files: ['**/package.json'],
      name: 'sobird:sort-package',
      rules: {
        'jsonc/sort-array-values': [
          'error',
          {
            order: { type: 'asc' },
            pathPattern: '^files$',
          },
        ],
        'jsonc/sort-keys': [
          'error',
          {
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
            pathPattern: '^$',
          },
          {
            order: { type: 'asc' },
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          },
          {
            order: { type: 'asc' },
            pathPattern: '^resolutions$',
          },
          {
            order: { type: 'asc' },
            pathPattern: '^pnpm.overrides$',
          },
          {
            order: [
              'types',
              'import',
              'require',
              'default',
            ],
            pathPattern: '^exports.*$',
          },
        ],
      },
    },
  ];
}
