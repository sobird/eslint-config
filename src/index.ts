import { defineConfig, globalIgnores } from 'eslint/config';

import {
  imports, javascript, jsonc, node, stylistic, typescript, ignores, vue, react,
} from './configs';

import type { ConfigOptions, InferBuiltinRules } from './types/rules';

interface Options extends ConfigOptions {
  typescript?: {
    hh: string;
  };
}

export function sobird<T extends Options>(
  config?: T & { rules?: InferBuiltinRules<T> },
) {
  return defineConfig(
    ignores(),
    javascript(),
    node(),
    imports(),
    stylistic(),
    jsonc(),
    typescript(),
    vue(),
    react(),
  );
}
