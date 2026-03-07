import type { ComposeRulesConfig, ESLintConfigObject, ESLintPlugin } from '../types';

import pluginPerfectionist from 'eslint-plugin-perfectionist';

const { meta, rules } = pluginPerfectionist;
const {
  name = 'eslint-plugin-perfectionist',
  namespace = 'perfectionist',
  version,
} = meta ?? {};
export const PERFECTIONIST: ESLintPlugin = {
  meta: {
    name,
    title: namespace,
    namespace,
    version,
  },
  rules,
};

interface Options {
  files?: string[];
  rules?: ComposeRulesConfig<'perfectionist'>;
}
export type PerfectionistOptions = boolean | Options;

/**
 * Perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export function perfectionist(options: PerfectionistOptions = true): ESLintConfigObject[] {
  if (options === false) {
    return [];
  }
  const { rules: overrides = {} } = options === true ? {} : options;
  return [
    {
      name: 'antfu/perfectionist/setup',
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        'perfectionist/sort-array-includes': 'off',
        '@typescript-eslint/member-ordering': 'off',
        'perfectionist/sort-classes': ['error',
          {
            type: 'natural',
            order: 'asc',
          },
        ],
        // 'perfectionist/sort-decorators': 'error',
        // 'perfectionist/sort-enums': 'error',
        // 'perfectionist/sort-export-attributes': 'error',
        'perfectionist/sort-exports': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-heritage-clauses': ['error', { type: 'natural', order: 'asc' }],
        // 'perfectionist/sort-import-attributes': 'error',
        'import/order': 'off',
        'perfectionist/sort-imports': ['error', {
          type: 'natural',
          order: 'asc',
          groups: [
            'type-builtin',
            'type-import',
            'type-internal',
            ['type-parent', 'type-sibling', 'type-index'],
            'value-builtin',
            'value-external',
            'value-internal',
            ['value-parent', 'value-sibling', 'value-index'],
            'side-effect',
            'ts-equals-import',
            'unknown',
          ],
        }],
        // 'perfectionist/sort-interfaces': 'error',
        'perfectionist/sort-intersection-types': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-jsx-props': ['error', {
          order: 'asc',
          type: 'natural',
          groups: [
            'shorthand-prop',
            'unknown',
            'multiline-prop',
            'callback',
          ],
          customGroups: [
            {
              groupName: 'callback',
              elementNamePattern: '^on.+',
            },
          ],
        }],
        // 'perfectionist/sort-maps': 'error',
        // 'perfectionist/sort-modules': 'error',
        'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
        'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
        // 'perfectionist/sort-object-types': 'error',
        // 'perfectionist/sort-objects': 'error',
        // 'perfectionist/sort-sets': 'error',
        // 'perfectionist/sort-switch-case': 'error',
        'perfectionist/sort-union-types': ['error', { order: 'asc', type: 'natural' }],
        // 'perfectionist/sort-variable-declarations': 'error'

        ...overrides,
      },
    },
  ];
}
