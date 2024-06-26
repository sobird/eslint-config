import { rules as airbnbImportsRules } from 'eslint-config-airbnb-base/rules/imports';

const config = {
  rules: {
    // 要求 import/first, 但是不要求绝对路径的依赖位于前方（关闭'absolute-first'）
    'import/first': 'error',
    // 禁止使用commonjs规范
    'import/no-unresolved': ['warn', { commonjs: false }],

    // 禁止无关的依赖(Forbid the use of extraneous packages)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': ['warn', airbnbImportsRules['import/no-extraneous-dependencies'][1]],

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': ['error', 'ignorePackages', {
      '': 'never',
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],

    // Reports the use of import declarations with CommonJS exports in any module except for the main module.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': ['error', {
      exceptions: ['**/*'],
    }],

    // Forbid Webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'warn',

    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // ensure absolute imports are above relative imports and that unassigned imports are ignored
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    // TODO: enforce a stricter convention in module import order?
    'import/order': ['error', {
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
  },
};

export default config;
