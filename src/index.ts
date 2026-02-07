import { defineConfig, globalIgnores } from 'eslint/config';

import type { ConfigOptions, InferBuiltinRules } from '@/types/rules';

import {
  javascript, imports, node, stylistic, typescript,
} from './configs';

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
