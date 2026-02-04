import importPlugin from 'eslint-plugin-import';

import type { ConfigObject } from '@/index';

const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx', '.js', '.cjs'];
const allExtensions = [...typeScriptExtensions, '.js', '.jsx', '.mjs', '.cjs'];

export function imports(): ConfigObject[] {
  const stylistic = true;

  return [
    {
      name: 'sobird:imports',

      plugins: {
        import: importPlugin,
      },

      rules: {
        'import/no-unresolved': ['error', { commonjs: false, caseSensitive: true }],
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/no-namespace': 'error',
        'import/export': 'error',
        'import/no-mutable-exports': 'error',
        'import/extensions': 'error',
        'import/no-restricted-paths': 'error',
        'import/no-internal-modules': 'off',
        'import/group-exports': 'error',
        'import/no-relative-packages': 'error',
        'import/no-relative-parent-imports': 'off',
        // 'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        'import/no-self-import': 'error',
        'import/no-cycle': 'error',
        'import/no-named-default': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-anonymous-default-export': 'error',
        'import/no-unused-modules': 'error',
        'import/no-commonjs': 'error',
        'import/no-amd': 'error',
        // 'no-duplicate-imports': 'off',
        'import/no-duplicates': ['error', { 'considerQueryString': true, 'prefer-inline': true }],
        'import/first': 'error',
        'import/max-dependencies': 'error',
        'import/no-extraneous-dependencies': ['error', {
          optionalDependencies: false,
        }],
        'import/no-absolute-path': 'error',
        'import/no-nodejs-modules': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'sort-imports': 'off',
        'import/order': ['error', {
          'groups': [
            // 内置模块
            'builtin',
            // 第三方包
            'external',
            ['internal', 'parent', 'sibling', 'index', 'object', 'type'],
            'unknown',
          ],
          'pathGroups': [
            {
              // pattern：当前组中模块的最短路径匹配
              pattern: '@/**', // 在规定的组中选其一，index、sibling、parent、internal、external、builtin、object、type、unknown
              group: 'external',
              // 定义组的位置，after、before
              position: 'after',
            },
          ],
          'pathGroupsExcludedImportTypes': ['builtin'],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
        }],
        'import/newline-after-import': ['error', { considerComments: true, count: 1 }],
        'import/prefer-default-export': 'error',
        // this is a terrible rule, do not use it.
        'import/no-default-export': 'off',
        // this is a terrible rule, do not use it.
        'import/no-named-export': 'off',
        'import/no-dynamic-require': 'error',
        'import/unambiguous': 'error',
        'import/no-unassigned-import': 'error',
        'import/no-useless-path-segments': 'error',
        'import/dynamic-import-chunkname': 'error',
        'import/no-import-module-exports': 'error',
        'import/no-empty-named-blocks': 'error',
        'import/enforce-node-protocol-usage': ['error', 'always'],
        'import/exports-last': 'error',
        'import/no-deprecated': 'error',
        // 废弃的别名规则也保留并添加前缀
        'import/imports-first': 'error',
      },
    },

    {
      files: ['**/*.{ts,tsx}'],
      settings: {
        'import/extensions': allExtensions,
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': {
          '@typescript-eslint/parser': typeScriptExtensions,
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
          },
        },
      },
    },

    // {
    //   files: ['**/*.{ts,tsx}'],
    //   extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    // },
  ];
}
