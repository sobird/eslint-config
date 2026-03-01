// https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js

import { fixupPluginRules } from '@eslint/compat';
import eslintPluginImport from 'eslint-plugin-import';

import { SCRIPT_FILES } from '../files';

import type { ESLintConfigObject, ESLintPlugin, ComposeRulesConfig } from '../types';

const namespace = 'import';

const { rules: pluginRules } = eslintPluginImport;

export const IMPORT: ESLintPlugin = {
  meta: {
    name: 'eslint-plugin-import',
    namespace,
    title: 'import',
  },
  rules: pluginRules,
};

interface Options {
  rules?: ComposeRulesConfig<'import'>;
}
export type ImportOptions = Options | boolean;

export function imports(options: ImportOptions = true): ESLintConfigObject[] {
  if (options === false) {
    return [];
  }
  const {
    rules = {},
  } = options === true ? {} : options;

  return [
    {
      name: 'sobird:imports:rules',
      files: [...SCRIPT_FILES],
      plugins: {
        [namespace]: fixupPluginRules(eslintPluginImport),
      },
      rules: {
        'import/no-unresolved': ['error', { commonjs: false, caseSensitive: true }],
        'import/named': 'off',
        'import/default': 'off',
        'import/namespace': 'off',
        'import/no-namespace': 'error',
        'import/export': 'off',
        'import/no-mutable-exports': 'error',
        'import/extensions': ['error', 'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            json: 'always',
            svg: 'always',
            css: 'always',
          },
        ],
        'import/no-restricted-paths': 'off',
        'import/no-internal-modules': 'off',

        // If you do not mind having your exports spread across the file, you can safely turn this rule off.
        'import/group-exports': 'off',
        'import/no-relative-packages': 'error',
        'import/no-relative-parent-imports': 'off',

        // @see @typescript-eslint/no-import-type-side-effects
        // 'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        'import/no-self-import': 'error',
        'import/no-cycle': ['error', { maxDepth: 10 }],
        'import/no-named-default': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'off',
        'import/no-anonymous-default-export': ['error', {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true, // The true value here is for backward compatibility
          // allowNew: false,
          // allowLiteral: false,
          allowObject: true,
        }],
        'import/no-unused-modules': 'off',
        // see @typescript-eslint/no-require-imports
        'import/no-commonjs': 'error',
        'import/no-amd': 'error',

        // 'no-duplicate-imports': 'off',
        'import/no-duplicates': ['error', { 'considerQueryString': true, 'prefer-inline': true }],
        'import/first': 'error',
        'import/max-dependencies': ['off', {
          max: 15,
          ignoreTypeImports: true,
        }],
        'import/no-extraneous-dependencies': ['error', {
          devDependencies: [
            // 测试文件
            '**/*.{test,spec}.{js,jsx,ts,tsx}',
            'test.{js,jsx}',
            'test-*.{js,jsx}',

            // 测试目录
            '**/tests/**/*',
            '**/test/**/*',
            '**/__tests__/**/*',
            '**/__mocks__/**/*',
            '**/spec/**/*',
            '**/e2e/**/*',
            '**/cypress/**/*',
            '**/playwright/**/*',

            // 构建工具
            '**/webpack.config.{js,ts}',
            '**/webpack.config.*.{js,ts}',
            '**/vite.config.*.{js,ts}',
            '**/rollup.config.{js,ts}',
            '**/rollup.config.*.{js,ts}',
            '**/tsup.config.*',

            // 框架
            '**/next.config.{js,ts}',
            '**/nuxt.config.{js,ts}',
            '**/vue.config.{js,ts}',

            // 测试
            '**/jest.config.{js,ts}',
            '**/vitest.config.{js,ts}',
            '**/playwright.config.{js,ts}',
            '**/cypress.config.{js.ts}',
            '**/jest.setup.{js,ts}',
            '**/jest.config.{js,ts}',
            '**/setupTests.{js,ts}',

            // 其他
            '**/eslint.config.{js,mjs,cjs,ts}',
            '**/prisma/seed.{js,ts}',

            // 脚本
            '**/scripts/**/*',
            '**/bin/**/*',
            '**/*.d.ts',
          ],
          optionalDependencies: false,
        }],
        'import/no-absolute-path': 'error',
        'import/no-nodejs-modules': 'off',
        'import/no-webpack-loader-syntax': 'error',

        // @see sort-imports
        'sort-imports': 'off',
        'import/order': ['error', {
          'groups': [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
            'unknown',
          ],
          'pathGroups': [
            {
              pattern: 'react{,-dom,-dom/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '*.{css,scss,sass,less}',
              group: 'unknown',
              position: 'after',
            },
            {
              pattern: '**/*.{css,scss,sass,less}',
              group: 'unknown',
              position: 'after',
            },
            {
              pattern: '@/**',
              group: 'external',
              position: 'after',
            },
          ],
          'distinctGroup': false,
          'pathGroupsExcludedImportTypes': ['builtin'],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
            orderImportKind: 'asc',
          },
          'warnOnUnassignedImports': true,
        }],
        'import/newline-after-import': ['error', { considerComments: true, count: 1 }],

        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        'import/no-named-export': 'off',

        // see import/no-commonjs: 'error'
        'import/no-dynamic-require': 'off',
        'import/unambiguous': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-useless-path-segments': ['error', { commonjs: true }],
        'import/dynamic-import-chunkname': ['off',
          {
            importFunctions: ['import'],
            webpackChunkNameMatch: '[0-9a-zA-Z-_/.]+',
          },
        ],
        'import/no-import-module-exports': 'error',
        'import/no-empty-named-blocks': 'error',
        'import/enforce-node-protocol-usage': ['error', 'always'],
        'import/exports-last': 'off',
        'import/no-deprecated': 'error',

        // 废弃的别名规则也保留并添加前缀
        // 'import/imports-first': 'error',

        ...rules,
      },
    },
    {
      name: 'sobird:imports:disables',
      files: ['**/*.test.ts', '**/*.spec.ts'],
      rules: {

      },
    },
  ];
}
