# eslint-config-sobird

[![npm][npm]][npm-url]
[![Build Status][build-status]][build-status-url]
[![Install Size][size]][size-url]

> [!NOTE]
> 自 v1.0.0 版本起，该配置已重写为新的 [ESLint Flat 配置](https://eslint.org/docs/latest/use/configure/configuration-files-new)，详细信息请查看 [发布说明](https://github.com/sobird/eslint-config/releases/tag/v1.0.0)。

## 使用
### 入门向导

我们提供了一个命令行工具，可以帮助您设置项目，或者通过一条命令将旧版配置迁移到新的扁平化配置。

```bash
pnpm dlx eslint-config-sobird@latest
```

### 手动安装

如果您更喜欢手动设置：

```bash
pnpm i -D eslint-config-sobird
```

然后在您的项目根目录下创建 `eslint.config.ts` 文件：

```js
// eslint.config.ts
import { sobird } from "eslint-config-sobird";

export default sobird();
```

### 在 package.json 中添加脚本

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## 参考
* [Share Configurations](https://eslint.org/docs/latest/extend/shareable-configs)
* [@antfu/eslint-config](https://github.com/antfu/eslint-config)



<!-- Badges -->

[npm]: https://img.shields.io/npm/v/eslint-config-sobird.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-sobird
[build-status]: https://img.shields.io/github/actions/workflow/status/sobird/eslint-config/release.yaml?label=CI&logo=github
[build-status-url]: https://github.com/sobird/eslint-config/actions
[size]: https://packagephobia.com/badge?p=eslint-config-sobird
[size-url]: https://packagephobia.com/result?p=eslint-config-sobird