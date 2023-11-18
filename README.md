# @sobird/eslint-config

Sobird's ESLint config

[![npm][npm]][npm-url]
[![Build Status][build-status]][build-status-url]
[![Install Size][size]][size-url]

<!-- Badges -->

[npm]: https://img.shields.io/npm/v/@sobird/eslint-config.svg
[npm-url]: https://www.npmjs.com/package/@sobird/eslint-config
[build-status]: https://img.shields.io/github/actions/workflow/status/sobird/eslint-config/npm-publish.yml?label=CI&logo=github
[build-status-url]: https://github.com/sobird/eslint-config/actions
[size]: https://packagephobia.com/badge?p=@sobird/eslint-config
[size-url]: https://packagephobia.com/result?p=@sobird/eslint-config

## 使用

```js
// .eslintrc.cjs

module.exports = {
  extends: [
    '@sobird/eslint-config/typescript.cjs'
  ],
  rules: {
    // 
  },
};

```


## 参考
[Share Configurations](https://eslint.org/docs/latest/extend/shareable-configs)
