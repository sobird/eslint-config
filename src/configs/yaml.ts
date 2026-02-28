/* eslint-disable import/no-namespace */
import eslintPluginYml from 'eslint-plugin-yml';
import * as yamlParser from 'yaml-eslint-parser';

import { YAML_FILES } from '../files';

import type { ESLintConfigObject, ESLintPlugin, ComposeRulesConfig } from '../types';
import type { Options as StylisticOptions } from './stylistic';
import type { ESLint } from 'eslint';

const {
  name,
  version,
  namespace = 'yaml',
} = (eslintPluginYml as ESLint.Plugin).meta ?? {};
export const YAML: ESLintPlugin = {
  meta: {
    name,
    namespace,
    title: namespace,
    version,
  },
  rules: eslintPluginYml.rules,
};

interface Options {
  files?: string[];
  rules?: ComposeRulesConfig<'yaml'>;
  stylistic?: boolean | Pick<StylisticOptions, 'indent' | 'quotes'>;
}
export type YamlOptions = Options | boolean;

export function yaml(options: YamlOptions = false): ESLintConfigObject[] {
  if (options === false) {
    return [];
  }

  const {
    files = [...YAML_FILES],
    rules = {},
    stylistic = true,
  } = options === true ? {} : options;

  const {
    indent = 2,
    quotes = 'single',
  } = typeof stylistic === 'boolean' ? {} : stylistic;

  return [
    {
      name: 'sobird:yaml:setup',
      plugins: {
        yaml: eslintPluginYml,
      },
    },
    {
      files,
      languageOptions: {
        parser: yamlParser,
      },
      name: 'sobird:yaml:rules',
      rules: {
        '@stylistic/spaced-comment': 'off',

        'yaml/block-mapping': 'error',
        'yaml/block-sequence': 'error',
        'yaml/no-empty-key': 'error',
        'yaml/no-empty-sequence-entry': 'error',
        'yaml/no-irregular-whitespace': 'error',
        'yaml/plain-scalar': 'error',

        'yaml/vue-custom-block/no-parsing-error': 'error',

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        ...stylistic
          ? {
              'yaml/block-mapping-question-indicator-newline': 'error',
              'yaml/block-sequence-hyphen-indicator-newline': 'error',
              'yaml/flow-mapping-curly-newline': 'error',
              'yaml/flow-mapping-curly-spacing': 'error',
              'yaml/flow-sequence-bracket-newline': 'error',
              'yaml/flow-sequence-bracket-spacing': 'error',
              'yaml/indent': ['error', typeof indent === 'number' ? indent : 2],
              'yaml/key-spacing': 'error',
              'yaml/no-tab-indent': 'error',
              'yaml/quotes': ['error', { avoidEscape: true, prefer: quotes === 'backtick' ? 'single' : quotes }],
              'yaml/spaced-comment': 'error',
            }
          : {},

        ...rules,
      },
    },
  ];
}
