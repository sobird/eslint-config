# eslint-config-sobird

[![npm][npm]][npm-url]
[![Build Status][build-status]][build-status-url]
[![Install Size][size]][size-url]

> [!NOTE]
> 自 v1.0.0 版本起，该配置已重写为新的 [ESLint Flat 配置](https://eslint.org/docs/latest/use/configure/configuration-files-new)，详细信息请查看 [发布说明](https://github.com/sobird/eslint-config/releases/tag/v1.0.0)。

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



<!-- Badges -->

[npm]: https://img.shields.io/npm/v/eslint-config-sobird.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-sobird
[build-status]: https://img.shields.io/github/actions/workflow/status/sobird/eslint-config/release.yaml?label=CI&logo=github
[build-status-url]: https://github.com/sobird/eslint-config/actions
[size]: https://packagephobia.com/badge?p=eslint-config-sobird
[size-url]: https://packagephobia.com/result?p=eslint-config-sobird