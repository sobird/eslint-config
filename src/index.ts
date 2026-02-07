import { defineConfig, globalIgnores } from 'eslint/config';

import { imports } from './configs/imports';
import { javascript } from './configs/javascript';
import { node } from './configs/node';
import { stylistic } from './configs/stylistic';
import { typescript } from './configs/typescript';
import type { ConfigOptions, InferBuiltinRules } from 'types/rules';

interface Options extends ConfigOptions {
  typescript?: {
    hh: string;
  };
}

// eslint-disable-next-line @typescript/explicit-function-return-type, @typescript/explicit-module-boundary-types
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
