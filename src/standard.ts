import { type Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['eslint:recommended'],
  rules: {
    // todo
    'no-console': 'warn',
  }
};

export default config;
