import { defineConfig, type Config } from 'eslint/config';

import {
  imports, javascript, jsonc, node, stylistic, typescript, ignores, vue, react,
  type ImportOptions, type ReactOptions, type JsoncOptions, type TypeScriptOptions, type StylisticOptions,
} from './configs';

import type { InferBuiltinRulesConfig, ESLintConfigObject } from './types';

interface Options {
  stylistic?: StylisticOptions;
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
    stylistic: stylisticOptions, import: importOptions, react: reactOptions, typescript: typescriptOptions,
  } = config || {};

  return defineConfig(
    ignores(),
    javascript(),
    node(),
    imports(importOptions),
    stylistic(stylisticOptions),
    jsonc(),
    typescript(typescriptOptions),
    vue(),
    react(reactOptions),
    ...configs,
  );
}
