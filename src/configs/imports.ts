

import  importPlugin from 'eslint-plugin-import'
import type { ConfigObject } from "..";

export function imports(): ConfigObject[] {
  const stylistic = true

  return [
    {
      name: 'sobird:imports',
      plugins: {
        import: importPlugin,
      },
      rules: {
        "import/no-unresolved": ['error', { commonjs: true, caseSensitive: true }],
        "import/named": "error",
        "import/default": "error",
        "import/namespace": "error",
        "import/no-namespace": "error",
        "import/export": "error",
        "import/no-mutable-exports": "error",
        "import/extensions": "error",
        "import/no-restricted-paths": "error",
        "import/no-internal-modules": "error",
        "import/group-exports": "error",
        "import/no-relative-packages": "error",
        "import/no-relative-parent-imports": "error",
        "import/consistent-type-specifier-style": "error",
        "import/no-self-import": "error",
        "import/no-cycle": "error",
        "import/no-named-default": "error",
        "import/no-named-as-default": "error",
        "import/no-named-as-default-member": "error",
        "import/no-anonymous-default-export": "error",
        "import/no-unused-modules": "error",
        "import/no-commonjs": "error",
        "import/no-amd": "error",
        "import/no-duplicates": "error",
        "import/first": "error",
        "import/max-dependencies": "error",
        "import/no-extraneous-dependencies": ["error", {
          optionalDependencies: false,
        }],
        "import/no-absolute-path": "error",
        "import/no-nodejs-modules": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/order": ['error', {
          groups: [
            'builtin',
            'external',
            ['internal', 'parent', 'sibling', 'index', 'object', 'type'],
            'unknown',
          ],
          pathGroups: [
            {
              // pattern：当前组中模块的最短路径匹配
              pattern: '@/**', // 在规定的组中选其一，index、sibling、parent、internal、external、builtin、object、type、unknown
              group: 'external',
              // 定义组的位置，after、before
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        }],
        "import/newline-after-import": ['error', { considerComments: true, count: 1 }],
        "import/prefer-default-export": "error",
        "import/no-default-export": "error",
        "import/no-named-export": "error",
        "import/no-dynamic-require": "error",
        "import/unambiguous": "error",
        "import/no-unassigned-import": "error",
        "import/no-useless-path-segments": "error",
        "import/dynamic-import-chunkname": "error",
        "import/no-import-module-exports": "error",
        "import/no-empty-named-blocks": "error",
        "import/enforce-node-protocol-usage": "error",
        "import/exports-last": "error",
        "import/no-deprecated": "error",
        // 废弃的别名规则也保留并添加前缀
        "import/imports-first": "error" 
      },
    },
  ]
}
