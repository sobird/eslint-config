import { defineConfig, type Config } from 'eslint/config';

import {
  imports, javascript, jsonc, node, stylistic, typescript, ignores, vue, react,
  type ImportOptions,
  type ReactOptions,
  type JsoncOptions,
} from './configs';

import type { InferBuiltinRulesConfig, ESLintConfigObject } from './types';

interface Options {
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
  const { import: importOptions, react: reactOptions } = config || {};

  return defineConfig(
    ignores(),
    javascript(),
    node(),
    imports(importOptions),
    stylistic(),
    jsonc(),
    typescript(),
    vue(),
    react(reactOptions),
    ...configs,
  );
}
