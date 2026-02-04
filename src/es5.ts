const test = require('next.ts');

module.exports = {
  extends: [
    'airbnb-base/legacy',
    './base.cjs',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ['@babel/preset-env'],
    },
  },
};
