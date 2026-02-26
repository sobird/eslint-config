# eslint-config-sobird

[![npm][npm]][npm-url]
[![Build Status][build-status]][build-status-url]
[![Install Size][size]][size-url]
[![License][license]][license-url]
[![javascript_code style][code-style-image]][code-style-url]

- 自动修复格式（旨在独立使用 **无需** Prettier）
- 合理的默认设置，最佳实践，只需一行配置
- 开箱即用，支持 TypeScript、JSX、React、Vue、JSON 等多种格式。
- 对json，yaml，toml，markdown等进行语法检查
- 具有一定的设计理念，但[高度可定制](#自定义)
- [ESLint Flat配置](https://eslint.org/docs/latest/use/configure/configuration-files-new)，轻松组合！
- 可选的[React](#react), [Next.js](#nextjs), [Vue](#vue)支持
- 可选的[格式化程序](#formatters)支持CSS，HTML，XML等。
- **风格原则**：简洁易读、稳定可靠、保持一致
  - 导入语句已排序，避免悬空逗号
  - 使用单引号，必须使用分号
  - 使用 [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic)
- 默认遵循 `.gitignore` 文件
- 需要 ESLint `v9.5.0` 或更高版本

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
import sobird from "eslint-config-sobird";

export default sobird();
```

<details>
<summary>
 结合旧版配置:
</summary>

如果您仍然使用旧版`eslintrc`的一些配置，您可以使用[`@eslint/eslintrc`](https://www.npmjs.com/package/@eslint/eslintrc)将它们转换为flat config

```js
import { FlatCompat } from "@eslint/eslintrc";
// eslint.config.ts
import sobird from "eslint-config-sobird";

const compat = new FlatCompat();

export default sobird(
  {
    ignores: [],
  },

  // Legacy config
  ...compat.config({
    extends: [
      "eslint:recommended",
      // Other extends...
    ],
  })

  // Other flat configs...
);
```

> 请注意，在Flat配置中不再支持 `.eslintignore`，请查看[自定义](#自定义)以获取更多详细信息。

</details>

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

## IDE 支持（保存时自动修复）

<details>
<summary><img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white" height="20" align="center"></summary>

<br>

安装 [VS Code ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

在 `.vscode/settings.json` 中添加以下设置：

```jsonc
{
  // 禁用默认格式化器，使用 eslint 代替
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // 自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // 在IDE中静默样式规则，但仍然自动修复
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // 为所有支持的语言启用 eslint
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

</details>

<details>
<summary><img src="https://img.shields.io/badge/NeoVim-%2357A143.svg?style=flat-square&logo=neovim&logoColor=white" height="20" align="center"></summary>

<br>

更新你的配置，使用以下内容：

```lua
local customizations = {
  { rule = 'style/*', severity = 'off', fixable = true },
  { rule = 'format/*', severity = 'off', fixable = true },
  { rule = '*-indent', severity = 'off', fixable = true },
  { rule = '*-spacing', severity = 'off', fixable = true },
  { rule = '*-spaces', severity = 'off', fixable = true },
  { rule = '*-order', severity = 'off', fixable = true },
  { rule = '*-dangle', severity = 'off', fixable = true },
  { rule = '*-newline', severity = 'off', fixable = true },
  { rule = '*quotes', severity = 'off', fixable = true },
  { rule = '*semi', severity = 'off', fixable = true },
}

local lspconfig = require('lspconfig')
-- 为所有支持的语言启用 eslint
lspconfig.eslint.setup(
  {
    filetypes = {
      "javascript",
      "javascriptreact",
      "javascript.jsx",
      "typescript",
      "typescriptreact",
      "typescript.tsx",
      "vue",
      "html",
      "markdown",
      "json",
      "jsonc",
      "yaml",
      "toml",
      "xml",
      "gql",
      "graphql",
      "astro",
      "svelte",
      "css",
      "less",
      "scss",
      "pcss",
      "postcss"
    },
    settings = {
      -- 在IDE中静默样式规则，但仍然自动修复
      rulesCustomizations = customizations,
    },
  }
)
```

### Neovim 保存时格式化

在 Neovim 中实现保存时格式化有几种方法：

- `nvim-lspconfig` 预定义了 `EslintFixAll` 命令，你可以创建一个 autocmd，在保存文件后调用该命令。

```lua
lspconfig.eslint.setup({
  --- ...
  on_attach = function(client, bufnr)
    vim.api.nvim_create_autocmd("BufWritePre", {
      buffer = bufnr,
      command = "EslintFixAll",
    })
  end,
})
```

- 使用 [conform.nvim](https://github.com/stevearc/conform.nvim)。
- 使用 [none-ls](https://github.com/nvimtools/none-ls.nvim)。
- 使用 [nvim-lint](https://github.com/mfussenegger/nvim-lint)。

</details>

## 自定义

从v1.0开始，我们迁移到了[ESLint Flat 配置](https://eslint.org/docs/latest/use/configure/configuration-files-new)。它提供了更好的组织和组合。

通常，您只需要导入 `sobird` 预设：

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird();
```

就是这样！或者您还可以单独配置每个集成，例如：

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird({
  // 启用风格格式规则
  // stylistic: true,

  // 或自定义风格规则
  stylistic: {
    indent: 2, // 4或'tab'
    quotes: "double", // 或'single'
  },

  // TypeScript和Vue会自动检测，您也可以显式启用它们：
  typescript: true,
  vue: true,

  // 禁用jsonc和yaml支持
  jsonc: false,
  yaml: false,

  // 在Flat配置中不再支持`.eslintignore`，请使用`ignores`代替
  ignores: [
    "**/fixtures",
    // ...globs
  ]
});
```

`sobird` 工厂函数还接受任意数量的自定义配置覆盖：

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird(
  {
    // Configures for sobird's config
  },

  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    files: ["**/*.ts"],
    rules: {},
  },
  {
    rules: {},
  },
);
```

### 规则覆盖

某些规则仅在特定文件中启用，例如， `ts/*` 规则仅在 `.ts` 文件中启用， `vue/*` 规则仅在 `.vue` 文件中启用。如果要覆盖规则，需要指定文件扩展名：

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird(
  {
    vue: true,
    typescript: true
  },
  {
    // 记得在这里指定文件glob，否则可能会导致vue插件处理非vue文件
    files: ["**/*.vue"],
    rules: {
      "vue/operator-linebreak": ["error", "before"],
    },
  },
  {
    // 没有`files`，它们是所有文件的一般规则
    rules: {
      "style/semi": ["error", "never"],
    },
  }
);
```

我们还提供了一个 `rules` 选项，以使其更容易：

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird({
  vue: {
    rules: {
      "vue/operator-linebreak": ["error", "before"],
    },
  },
  typescript: {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    },
  },
  yaml: {
    rules: {
      // ...
    },
  },
});
```

### Vue

对于Vue框架的支持，是通过检查项目中是否安装了`vue`来自动检测的。您也可以明确地启用或禁用它：

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird({
  vue: true
});
```

#### Vue 2

对于Vue 2的有限支持（因为它已经达到了[生命周期结束](https://v2.vuejs.org/eol/)），如果您仍在使用Vue 2，可以通过设置`vueVersion`为`2`来手动配置它：

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird({
  vue: {
    vueVersion: 2
  },
});
```

由于Vue 2目前已经进入维护模式，我们只接受针对Vue 2的错误修复。当`eslint-plugin-vue`停止支持Vue 2时，我们可能会在未来移除对Vue 2的支持。如果可能的话，我们推荐您升级到Vue 3。

### 可选配置

我们为特定的使用场景提供了一些可选的配置，默认情况下不包含它们的依赖。这些可选配置允许您根据项目的具体需求来选择性地引入和使用，从而避免不必要的依赖引入和性能开销。您可以根据项目需要，选择启用或禁用这些可选配置。如果您想了解更多关于如何使用这些可选配置的信息，可以查阅相关文档或在社区中寻求帮助。

#### 格式化器

使用外部格式化器格式化ESLint无法处理的文件（`.css`，`.html`等）。由[`eslint-plugin-format`](https://github.com/antfu/eslint-plugin-format)提供支持。

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird({
  formatters: {
    /**
     * 格式化CSS、LESS、SCSS文件，以及Vue中的`<style>`块
     * 默认情况下使用Prettier
     */
    css: true,
    /**
     * 格式化HTML文件
     * 默认情况下使用Prettier
     */
    html: true,
    /**
     * 格式化Markdown文件
     * 支持Prettier和dprint
     * 默认情况下使用Prettier
     */
    markdown: "prettier"
  }
});
```

运行`npx eslint`时，它应该会提示您安装所需的依赖项，如果没有，您可以手动安装它们：

```bash
npm i -D eslint-plugin-format
```

#### React

要启用React框架的支持，您需要明确地将其打开：

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird({
  react: true,
});
```

运行`npx eslint`时，它应该会提示您安装所需的依赖项，如果没有，您可以手动安装它们：

```bash
npm i -D @eslint-react/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh
```

#### Next.js

要启用 Next.js 支持，您需要显式启用它：

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird({
  nextjs: true,
});
```

运行 `npx eslint` 应该会提示您安装所需的依赖项，否则，您可以手动安装它们：

```bash
npm i -D @next/eslint-plugin-next
```

### 类型感知规则

您可以通过将选项对象传递给`typescript`配置来选择启用[类型感知规则](https://typescript-eslint.io/linting/typed-linting/)：

```js
// eslint.config.js
import sobird from "eslint-config-sobird";

export default sobird({
  typescript: {
    typed: true,
  },
});
```

### Lint Staged

如果您想在每次提交之前应用lint和自动修复，可以将以下内容添加到您的 `package.json` 中：

```json
{
  "scripts": {
    "prepare": "husky"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

然后运行：

```bash
pnpm i -D lint-staged husky

# 安装 husky 并初始化
# 这会自动在 package.json 添加 prepare 脚本，并创建 .husky 目录
pnpm exec husky init
```

编辑文件 `.husky/pre-commit`（如果该文件不存在请手动创建），将其内容修改为：

```bash
pnpm lint-staged
```

## 查看启用的规则

我创建了一个可视化工具，帮助您查看项目中启用了哪些规则，并将它们应用于哪些文件，[@eslint/config-inspector](https://github.com/eslint/config-inspector)

前往包含 `eslint.config.js` 的项目根目录，并运行：

```bash
npx @eslint/config-inspector
```

## 版本控制策略

本项目遵循[语义化版本控制](https://semver.org/)用于发布。然而，由于这只是一个配置文件，涉及意见和许多不断变化的部分，我们不将规则更改视为破坏性更改。

### 被视为破坏性更改的变化

- Node.js 版本要求的更改
- 可能破坏配置的大规模重构
- 插件进行了可能破坏配置的重大更改
- 可能影响大部分代码库的更改

### 被视为非破坏性更改的变化

- 启用/禁用规则和插件（可能更加严格）
- 规则选项的更改
- 依赖项的版本升级

## 徽章

在你的项目中使用此配置？在你的自述文件中包括以下徽章，以告知人们你的代码正在使用`sobird`的代码风格。

[![javascript_code style][code-style-image]][code-style-url]

```markdown
[![sobird-code-style-image](https://img.shields.io/badge/code__style-eslint--config--sobird-3491fa?style=flat-square&colorA=080f12&colorB=3491fa)](https://github.com/sobird/eslint-config/)
```

## 参考
* [Share Configurations](https://eslint.org/docs/latest/extend/shareable-configs)
* [@antfu/eslint-config](https://github.com/antfu/eslint-config)

<!-- Badges -->

[npm]: https://img.shields.io/npm/v/eslint-config-sobird.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/eslint-config-sobird
[build-status]: https://img.shields.io/github/actions/workflow/status/sobird/eslint-config/release.yaml?label=CI&logo=github&style=flat-square
[build-status-url]: https://github.com/sobird/eslint-config/actions
[size]: https://packagephobia.com/badge?p=eslint-config-sobird
[size-url]: https://packagephobia.com/result?p=eslint-config-sobird
[license]: https://img.shields.io/github/license/sobird/eslint-config.svg?style=flat&colorA=080f12&colorB=3491fa
[license-url]: https://github.com/sobird/eslint-config/blob/main/LICENSE
[code-style-image]: https://img.shields.io/badge/code__style-eslint--config--sobird-3491fa?style=flat-square&colorA=080f12&colorB=3491fa
[code-style-url]: https://github.com/sobird/eslint-config/