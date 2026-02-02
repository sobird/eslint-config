// eslint.config.js
import { defineConfig } from "eslint/config";
import { Linter } from 'eslint';
import {default as ts, } from 'typescript-eslint'
export { default as pluginTs } from '@typescript-eslint/eslint-plugin'

// @ts-check


const config: Linter.Config[] = [
  {
    rules: {
      // 完整的类型安全
      'prefer-const': ['error', { destructuring: 'all' }],
    },
  },
];


export default defineConfig([
  {
    files: ["**/*.ts"],

    // anything from here will override myconfig
    rules: {
      "no-unused-vars": "warn",
    },
  },
]);
