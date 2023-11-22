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
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
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
    /** errors: end */

    /** import: begin */
    'import/extensions': 'off',
    'import/no-import-module-exports': ['error', {
      exceptions: ['**/*'],
    }],
    /** import: end */
  },
};

export default config;
