import pluginToml from 'eslint-plugin-toml';

import { TOML_FILES } from '../files';

import type { ESLintConfigObject, ESLintPlugin, ComposeRulesConfig } from '../types';
import type { Options as StylisticOptions } from './stylistic';
import type { ESLint } from 'eslint';

const { meta, rules } = pluginToml as ESLint.Plugin;
const {
  name,
  version,
  namespace = 'toml',
} = meta ?? {};
export const TOML: ESLintPlugin = {
  meta: {
    name,
    namespace,
    title: namespace,
    version,
  },
  rules,
};

interface Options {
  files?: string[];
  rules?: ComposeRulesConfig<'toml'>;
  stylistic?: boolean | Pick<StylisticOptions, 'indent'>;
}
export type TomlOptions = boolean | Options;

export function toml(options: TomlOptions = false): ESLintConfigObject[] {
  if (options === false) {
    return [];
  }

  const {
    files = [...TOML_FILES],
    rules: overrides = {},
    stylistic = true,
  } = options === true ? {} : options;

  const {
    indent = 2,
  } = typeof stylistic === 'boolean' ? {} : stylistic;

  return [
    {
      name: 'sobird:toml:setup',
      plugins: {
        toml: pluginToml,
      },
    },
    {
      files,
      name: 'sobird:toml:rules',
      language: 'toml/toml',
      rules: {
        '@stylistic/spaced-comment': 'off',

        'toml/comma-style': 'error',
        'toml/keys-order': 'error',
        'toml/no-space-dots': 'error',
        'toml/no-unreadable-number-separator': 'error',
        'toml/precision-of-fractional-seconds': 'error',
        'toml/precision-of-integer': 'error',
        'toml/tables-order': 'error',

        'toml/vue-custom-block/no-parsing-error': 'error',

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        ...stylistic
          ? {
              'toml/array-bracket-newline': 'error',
              'toml/array-bracket-spacing': 'error',
              'toml/array-element-newline': 'error',
              // eslint-disable-next-line no-nested-ternary
              'toml/indent': ['error', typeof indent === 'number' ? indent : indent === 'tab' ? 'tab' : 2],
              'toml/inline-table-curly-spacing': 'error',
              'toml/key-spacing': 'error',
              'toml/padding-line-between-pairs': 'error',
              'toml/padding-line-between-tables': 'error',
              'toml/quoted-keys': 'error',
              'toml/spaced-comment': 'error',
              'toml/table-bracket-spacing': 'error',
            }
          : {},

        ...overrides,
      },
    },
  ];
}
