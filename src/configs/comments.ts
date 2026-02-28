import pluginComments from '@eslint-community/eslint-plugin-eslint-comments';

import type { ESLintConfigObject, ESLintPlugin, ComposeRulesConfig } from '../types';
import type { ESLint } from 'eslint';

const { meta, rules: pluginRules } = pluginComments as ESLint.Plugin;
const {
  name = '@eslint-community/eslint-plugin-eslint-comments',
  namespace = 'eslint-comments',
  version,
} = meta ?? {};
export const COMMENTS: ESLintPlugin = {
  meta: {
    name,
    namespace,
    title: 'comments',
    version,
  },
  rules: pluginRules,
};

interface Options {
  rules?: ComposeRulesConfig<'comments'>;
}
export type CommentsOptions = boolean | Options;

export function comments(options: CommentsOptions = true): ESLintConfigObject[] {
  if (options === false) {
    return [];
  }
  const {
    rules = {},
  } = options === true ? {} : options;

  return [
    {
      name: 'sobird:eslint-comments:rules',
      plugins: {
        [namespace]: pluginComments,
      },
      rules: {
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',

        ...rules,
      },
    },
  ];
}
