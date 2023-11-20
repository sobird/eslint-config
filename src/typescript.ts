/**
 * Typescirpt ESLint
 *
 * @see https://typescript-eslint.io/play
 */

import { type Linter } from 'eslint';

const config: Linter.BaseConfig = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    // 'plugin:@typescript-eslint/recommended',
  ],
  // plugins: ['@typescript-eslint'],
  // 规则共享参数
  settings: {},
  parserOptions: {
    project: './tsconfig.json',
  },
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
   * @see https://typescript-eslint.io/rules/[rule-id]
   *
   * "off" or 0 - turn the rule off
   * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
   * "error" or 2 - turn the rule on as an error (exit code will be 1)
   */
  rules: {
    // todo
    '@typescript-eslint/indent': ['error', 2],

    // 'semi': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],

    // 'no-unused-vars': 'off',
    // 定义过的变量必须使用
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    // 逗号前后的空格
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
    // 语句块前面必须有空格
    '@typescript-eslint/space-before-blocks': ['error', 'never'],
    // 对象使用一致的空格
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    // 类型声明使用一致的空格
    '@typescript-eslint/type-annotation-spacing': ['error'],
    // 关键字使用一致的空格
    '@typescript-eslint/keyword-spacing': ['error'],
    // 字面量key使用一致的空格 todo move to 'standard',
    'key-spacing': 'error',
    // 函数调佣使用一致的空格
    '@typescript-eslint/func-call-spacing': 'error',
    // 语句块使用一致的空格
    '@typescript-eslint/block-spacing': 'error',
  },
};

export default config;
