import { defineConfig, type Config } from 'eslint/config';

import {
  imports, javascript, jsonc, node, stylistic, typescript, ignores, vue, react,
  type ReactOptions,
} from './configs';

import type { BuiltinRulesInfer } from './types';
import type { ConfigOptions } from './types/rules';

interface Options extends ConfigOptions {
  typescript?: {
    hh: string;
  } | boolean;
  react: ReactOptions;
}

export function sobird<T extends Options>(
  config?: T & { rules?: BuiltinRulesInfer },
): Config[] {
  const { react: reactOptions } = config || {};

  return defineConfig(
    ignores(),
    javascript(),
    node(),
    imports(),
    stylistic(),
    jsonc(),
    typescript(),
    vue(),
    react(reactOptions),
  );
}
