import { defineConfig, globalIgnores } from 'eslint/config';

import type { ConfigOptions, InferBuiltinRules } from '@/types/rules';

import { javascript } from './configs/eslint';
import { imports } from './configs/imports';
import { node } from './configs/node';
import { stylistic } from './configs/stylistic';
import { typescript } from './configs/typescript';

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
