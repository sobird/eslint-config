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
  type JsxOptions,
  type IgnoresOptions, type ImportOptions, type ReactOptions,
  type JsoncOptions, type TypeScriptOptions, type StylisticOptions,
} from './configs';

import type { InferBuiltinRulesConfig, ESLintConfigObject } from './types';

interface Options {
  ignores?: IgnoresOptions;
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
}

export function sobird<T extends Options>(
  config?: Omit<T, 'rules'> & { rules?: InferBuiltinRulesConfig<T> },
  ...configs: ESLintConfigObject[]
): Config[] {
  const {
    ignores: ignoresOptions,
    stylistic: stylisticOptions,
    jsx: jsxOptions,
    import: importOptions,
    react: reactOptions,
    typescript: typescriptOptions,
    jsonc: jsoncOptions,
  } = config || {};

  return defineConfig(
    ignores(ignoresOptions),
    javascript(),
    jsx(jsxOptions),
    node(),
    imports(importOptions),
    stylistic(stylisticOptions),
    jsonc(jsoncOptions),
    typescript(typescriptOptions),
    vue(),
    react(reactOptions),
    ...configs,
  );
}
