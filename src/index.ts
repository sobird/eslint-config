import { defineConfig, type Config } from 'eslint/config';

import {
  imports,
  javascript,
  jsx,
  jsonc,
  node,
  stylistic,
  typescript,
  ignores,
  vue,
  react,
  next,
  type JavaScriptOptions,
  type JsxOptions,
  type IgnoresOptions, type ImportOptions, type ReactOptions,
  type JsoncOptions, type TypeScriptOptions, type StylisticOptions,
  type NextOptions,
  type NodeOptions,
  type VueOptions,
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
}

export default function sobird<T extends Options>(
  config?: Omit<T, 'rules'> & { rules?: InferBuiltinRulesConfig<T> },
  ...configs: ESLintConfigObject[]
): Config[] {
  const {
    ignores: ignoresOptions,
    javascript: javascriptOptions,
    stylistic: stylisticOptions,
    jsx: jsxOptions,
    import: importOptions,
    react: reactOptions,
    typescript: typescriptOptions,
    jsonc: jsoncOptions,
    next: nextOptions,
    node: nodeOptions,
    vue: vueOptions,
  } = config ?? {};

  return defineConfig(
    ignores(ignoresOptions),
    javascript(javascriptOptions),
    jsx(jsxOptions),
    node(nodeOptions),
    imports(importOptions),
    stylistic(stylisticOptions),
    jsonc(jsoncOptions),
    typescript(typescriptOptions),
    vue(vueOptions),
    react(reactOptions),
    next(nextOptions),
    ...configs,
  );
}
