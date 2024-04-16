const config = {
  root: true,
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
  },
};

export default config;
