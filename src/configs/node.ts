import pluginNode from 'eslint-plugin-n';

import type { ESLintConfigObject, ESLintPlugin } from '../types';

const {
  name = 'eslint-plugin-n',
  version,
  namespace = 'n',
} = pluginNode.meta || {};

export function node(): ESLintConfigObject[] {
  return [
    {
      name: 'sobird:node',
      plugins: {
        [namespace]: pluginNode,
      },
      rules: {
        'n/callback-return': 'error',
        'n/exports-style': 'error',
        'n/file-extension-in-import': ['off', 'never'],
        'n/global-require': 'error',
        'n/handle-callback-err': ['error', '^(err|error)$'],
        'n/no-callback-literal': 'error',
        'n/no-deprecated-api': 'error',
        'n/no-exports-assign': 'error',
        'n/no-extraneous-import': 'error',
        'n/no-extraneous-require': 'error',
        // see import/no-unresolved
        'n/no-missing-import': 'off',
        'n/no-missing-require': 'off',
        'n/no-mixed-requires': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/no-process-env': 'error',
        'n/no-process-exit': 'error',
        'n/no-restricted-import': 'error',
        'n/no-restricted-require': 'error',
        'n/no-sync': 'error',
        // 'n/no-top-level-await': 'error',
        'n/no-unpublished-bin': 'error',
        'n/no-unpublished-import': [
          'error',
          {
            ignorePrivate: true,
            ignoreTypeImport: true,
            tryExtensions: ['.js', '.ts', '.tsx', '.json'],
            allowModules: [],
          },
        ],
        'n/no-unpublished-require': 'error',
        'n/no-unsupported-features/es-builtins': 'error',
        'n/no-unsupported-features/es-syntax': 'error',
        'n/no-unsupported-features/node-builtins': 'error',
        'n/prefer-global/buffer': ['error', 'never'],
        'n/prefer-global/console': 'error',
        'n/prefer-global/process': ['error', 'never'],
        'n/prefer-global/text-decoder': 'error',
        'n/prefer-global/text-encoder': 'error',
        'n/prefer-global/url-search-params': 'error',
        'n/prefer-global/url': 'error',
        'n/prefer-node-protocol': 'error',
        'n/prefer-promises/dns': 'error',
        'n/prefer-promises/fs': 'error',
        'n/process-exit-as-throw': 'error',
        'n/hashbang': 'error',
        // 废弃规则也添加前缀
        'n/no-hide-core-modules': 'error',
        'n/shebang': 'error',
      },
    },

    {
      files: ['**/*.test.ts', '**/*.test.js', 'scripts/**/*'],
      rules: {
        // 测试/脚本文件不检查「未发布导入」（因为这些文件本身不会被发布）
        'n/no-unpublished-import': 'off',
      },
    },
  ];
}

export const nodePlugin: ESLintPlugin = {
  meta: {
    pkgname: name,
    namespace,
    version,
    title: 'node',
  },
  rules: pluginNode.rules,
};
