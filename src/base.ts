// import { type Linter } from 'eslint';

const config = {
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // style

    // Disallow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': ['off'],

    // 要求箭头函数体使用大括号(Require braces around arrow function bodies)
    // https://eslint.org/docs/latest/rules/arrow-body-style
    'arrow-body-style': ['error', 'always'],

    // 禁止使用一元操作符 ++ 和 --(disallow use of unary operators, ++ and --)
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // 代码行最大长度(specify the maximum length of a line in your program)
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', {
      code: 150,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // 要求使用一致的 return 语句(require return statements to either always or never specify values)
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // 禁止标识符中有悬空下划线(disallow dangling underscores in identifiers)
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['error', {
      allow: ['__filename', '__dirname'],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],

    // best-practices
    // 禁止对函数参数再赋值(Disallow reassigning function parameters)
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        'state', // for store state
        'accu', // for reduce
      ],
    }],

    // import
    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': 'off',

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

    // 禁止无关的依赖(Forbid the use of extraneous packages)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': 'off',
  },
};

export default config;
