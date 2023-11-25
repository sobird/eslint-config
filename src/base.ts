// import { type Linter } from 'eslint';

const config = {
  rules: {
    /** style: begin */
    'arrow-body-style': ['error', 'always'],
    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'consistent-return': 'off',
    /** style: end */

    /** errors: begin */
    /** 不允许对函数参数赋值 */
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for store state
        ],
      },
    ],
    // 对 for 循环禁用
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    /** errors: end */

    /** import: begin */
    'import/extensions': 'off',
    'import/no-import-module-exports': ['error', {
      exceptions: ['**/*'],
    }],
    'import/no-webpack-loader-syntax': 'warn',
    /** import: end */

    // 非 required 的 prop 必须有 defaultProps
    // @off 不强制要求写 defaultProps
    'react/require-default-props': 'off',
    // 防止React被错误地标记为未使用
    'react/jsx-uses-react': 'error',
    // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': ['error', {
      allowAsProps: true,
    }],
    'react-hooks/exhaustive-deps': 'off',
    // 禁用
    'react/jsx-props-no-spreading': 'off',
  },
};

export default config;
