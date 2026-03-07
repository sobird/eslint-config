import type { Config } from 'eslint/config';

import type {
  CommentsOptions,
  IgnoresOptions,
  ImportOptions,
  JavaScriptOptions,
  JsoncOptions,
  JsxOptions,
  MarkdownOptions,
  NextOptions,
  NodeOptions,
  PerfectionistOptions,
  ReactOptions,
  StylisticOptions,
  TomlOptions,
  TypeScriptOptions,
  VueOptions,
  YamlOptions,
} from './configs';
import type { ESLintConfigObject } from './types';

import { defineConfig } from 'eslint/config';

import {
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  jsx,
  markdown,
  next,
  node,
  perfectionist,
  react,
  stylistic,
  toml,
  typescript,
  vue,
  yaml,

} from './configs';

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
  perfectionist?: PerfectionistOptions;
}

export default function sobird(config?: Options, ...configs: ESLintConfigObject[]): Config[] {
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
    perfectionist: perfectionistOptions,
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
    perfectionist(perfectionistOptions),
    vue(vueOptions),
    react(reactOptions),
    next(nextOptions),
    yaml(yamlOptions),
    toml(tomlOptions),
    markdown(markdownOptions),

    ...configs,
  );
}
