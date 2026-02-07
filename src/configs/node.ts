import nodePlugin from 'eslint-plugin-n';

import type { ESLintConfigObject } from 'types';

export function node(): ESLintConfigObject[] {
  return [
    {
      name: 'sobird:node',
      plugins: {
        node: nodePlugin,
      },
      rules: {
        'node/callback-return': 'error',
        'node/exports-style': 'error',
        'node/file-extension-in-import': ['off', 'never'],
        'node/global-require': 'error',
        'node/handle-callback-err': ['error', '^(err|error)$'],
        'node/no-callback-literal': 'error',
        'node/no-deprecated-api': 'error',
        'node/no-exports-assign': 'error',
        'node/no-extraneous-import': 'error',
        'node/no-extraneous-require': 'error',
        // see import/no-unresolved
        'node/no-missing-import': 'off',
        'node/no-missing-require': 'off',
        'node/no-mixed-requires': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/no-process-env': 'error',
        'node/no-process-exit': 'error',
        'node/no-restricted-import': 'error',
        'node/no-restricted-require': 'error',
        'node/no-sync': 'error',
        // 'node/no-top-level-await': 'error',
        'node/no-unpublished-bin': 'error',
        'node/no-unpublished-import': [
          'error',
          {
            ignorePrivate: true,
            ignoreTypeImport: true,
            tryExtensions: ['.js', '.ts', '.tsx', '.json'],
            allowModules: [],
          },
        ],
        'node/no-unpublished-require': 'error',
        'node/no-unsupported-features/es-builtins': 'error',
        'node/no-unsupported-features/es-syntax': 'error',
        'node/no-unsupported-features/node-builtins': 'error',
        'node/prefer-global/buffer': ['error', 'never'],
        'node/prefer-global/console': 'error',
        'node/prefer-global/process': ['error', 'never'],
        'node/prefer-global/text-decoder': 'error',
        'node/prefer-global/text-encoder': 'error',
        'node/prefer-global/url-search-params': 'error',
        'node/prefer-global/url': 'error',
        'node/prefer-node-protocol': 'error',
        'node/prefer-promises/dns': 'error',
        'node/prefer-promises/fs': 'error',
        'node/process-exit-as-throw': 'error',
        'node/hashbang': 'error',
        // 废弃规则也添加前缀
        'node/no-hide-core-modules': 'error',
        'node/shebang': 'error',
      },
    },

    {
      files: ['**/*.test.ts', '**/*.test.js', 'scripts/**/*'],
      rules: {
        // 测试/脚本文件不检查「未发布导入」（因为这些文件本身不会被发布）
        'node/no-unpublished-import': 'off',
      },
    },
  ];
}
