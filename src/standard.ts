import { type Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['eslint:recommended'],
  rules: {
    // 使用单引号，字符串中包含了一个其它引号 允许 "a string containing 'single' quotes"
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    // console.log 警告提示
    'no-console': 'warn',
    // 不允许连续空格
    'no-multi-spaces': 'error',
    'linebreak-style': ['error', 'unix'],
  }
};

export default config;
