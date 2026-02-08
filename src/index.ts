import { defineConfig, globalIgnores } from 'eslint/config';

import {
  javascript, imports, node, stylistic, typescript,
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
    javascript(),
    node(),
    imports(),
    stylistic(),
    typescript(),
  );
}
