import PluginJSONC from 'eslint-plugin-jsonc';

import type { ESLintConfigObject, ESLintPlugin } from '../types';
import type { ESLint } from 'eslint';

const { meta, rules } = PluginJSONC;
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
    {
      name: 'sobird:jsonc',
      plugins: {
        [namespace]: PluginJSONC as ESLint.Plugin,
      },
      rules: {
        'jsonc/array-bracket-newline': 'error',
        'jsonc/array-bracket-spacing': 'error',
        'jsonc/array-element-newline': 'error',
        'jsonc/auto': 'error',
        'jsonc/comma-dangle': 'error',
        'jsonc/comma-style': 'error',
        'jsonc/indent': 'error',
        'jsonc/key-name-casing': 'error',
        'jsonc/key-spacing': 'error',
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
  ];
}
