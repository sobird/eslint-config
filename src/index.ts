import { defineConfig, type Config } from 'eslint/config';

import {
  ignores,
  javascript,
  comments,
  stylistic,
  imports,
  jsx,
  jsonc,
  node,
  typescript,
  vue,
  react,
  next,
  yaml,
  toml,
  markdown,
  type CommentsOptions,
  type JavaScriptOptions,
  type JsxOptions,
  type IgnoresOptions, type ImportOptions, type ReactOptions,
  type JsoncOptions, type TypeScriptOptions, type StylisticOptions,
  type NextOptions,
  type NodeOptions,
  type VueOptions,
  type YamlOptions,
  type TomlOptions,
  type MarkdownOptions,
} from './configs';

import type { InferBuiltinRulesConfig, ESLintConfigObject } from './types';

interface Options {
  ignores?: IgnoresOptions;
  javascript?: JavaScriptOptions;
  stylistic?: StylisticOptions;
  jsx?: JsxOptions;

  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?: TypeScriptOptions;
  /**
   * Options for eslint-plugin-import.
   *
   * @default true
   */
  import?: ImportOptions;
  react?: ReactOptions;
  jsonc?: JsoncOptions;
  next?: NextOptions;
  node?: NodeOptions;
  vue?: VueOptions;
  yaml?: YamlOptions;
  toml?: TomlOptions;
  markdown?: MarkdownOptions;
  comments?: CommentsOptions;
}

export default function sobird<T extends Options>(
  config?: Omit<T, 'rules'> & { rules?: InferBuiltinRulesConfig<T> },
  ...configs: ESLintConfigObject[]
): Config[] {
  const {
    ignores: ignoresOptions,
    javascript: javascriptOptions,
    comments: commentsOptions,
    stylistic: stylisticOptions,
    jsx: jsxOptions,
    import: importOptions,
    react: reactOptions,
    typescript: typescriptOptions,
    jsonc: jsoncOptions,
    next: nextOptions,
    node: nodeOptions,
    vue: vueOptions,
    yaml: yamlOptions,
    toml: tomlOptions,
    markdown: markdownOptions,
  } = config ?? {};

  return defineConfig(
    ignores(ignoresOptions),
    javascript(javascriptOptions),
    comments(commentsOptions),
    jsx(jsxOptions),
    node(nodeOptions),
    imports(importOptions),
    stylistic(stylisticOptions),
    jsonc(jsoncOptions),
    typescript(typescriptOptions),
    vue(vueOptions),
    react(reactOptions),
    next(nextOptions),
    yaml(yamlOptions),
    toml(tomlOptions),
    markdown(markdownOptions),
    ...configs,
  );
}
