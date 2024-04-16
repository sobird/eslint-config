const config = {
  extends: [
    'airbnb-base',
    './base.cjs',
    './import.cjs',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  globals: {
    Promise: true,
  },
};

export default config;
