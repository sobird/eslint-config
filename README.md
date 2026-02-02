# eslint-config-sobird

Sobird's ESLint config

[![npm][npm]][npm-url]
[![Build Status][build-status]][build-status-url]
[![Install Size][size]][size-url]

<!-- Badges -->

[npm]: https://img.shields.io/npm/v/eslint-config-sobird.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-sobird
[build-status]: https://img.shields.io/github/actions/workflow/status/sobird/eslint-config/npm-publish.yml?label=CI&logo=github
[build-status-url]: https://github.com/sobird/eslint-config/actions
[size]: https://packagephobia.com/badge?p=eslint-config-sobird
[size-url]: https://packagephobia.com/result?p=eslint-config-sobird

## 使用

```js
// .eslintrc.cjs

module.exports = {
  root: true,
  extends: [
    'sobird/typescript.cjs'
  ],
  rules: {
    // 
  },
};

```

## ESLint Plugins

* eslint-plugin-react-hooks
* @eslint/css
* @eslint/js
* @eslint/json
* @eslint/markdown
* eslint-plugin-react
* typescript-eslint


## 参考
[Share Configurations](https://eslint.org/docs/latest/extend/shareable-configs)
