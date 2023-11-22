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

    /** import: begin */
    'import/extensions': 'off',
    'import/no-import-module-exports': ['error', {
      exceptions: ['**/*'],
    }],
    /** import: end */
  },
};

export default config;
