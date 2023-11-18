/**
 * Typescirpt ESLint
 * 
 * @see https://typescript-eslint.io/play
 */

import { type Linter } from 'eslint';

const config: Linter.BaseConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // plugins: ['@typescript-eslint'],
  // 规则共享参数
  settings: {},
  // typescript 解析器
  // parser: '@typescript-eslint/parser',
  // 解析器配置项
  // parserOptions: {
  //   sourceType: 'module'
  // },

  /**
   * 自定义规则
   * 
   * @see https://eslint.org/docs/latest/use/configure/rules
   * 
   * "off" or 0 - turn the rule off
   * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
   * "error" or 2 - turn the rule on as an error (exit code will be 1)
   */
  rules: {
    // todo
    '@typescript-eslint/indent': ['error', 2],
  }
};

export default config;
