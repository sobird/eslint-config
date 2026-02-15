import type { ESLintRules } from './eslint';
import type { ImportRules } from './import';
import type { JsoncRules } from './jsonc';
import type { JsxA11YRules } from './jsx-a11y';
import type { NextRules } from './next';
import type { NodeRules } from './node';
import type { ReactRules } from './react';
import type { ReactHooksRules } from './react-hooks';
import type { ReactRefreshRules } from './react-refresh';
import type { StylisticRules } from './stylistic';
import type { TypescriptRules } from './typescript';
import type { VueRules } from './vue';

interface Rules {
  eslint: ESLintRules;
  import: ImportRules;
  jsonc: JsoncRules;
  jsxA11y: JsxA11YRules;
  next: NextRules;
  node: NodeRules;
  react: ReactRules;
  reactHooks: ReactHooksRules;
  reactRefresh: ReactRefreshRules;
  stylistic: StylisticRules;
  typescript: TypescriptRules;
  vue: VueRules;
}

type RulesName = keyof Rules;

export type ComposeRules<T extends RulesName = RulesName> = { [K in T]: Rules[K] }[T];

export type BuiltinRules = ComposeRules;

// todo
export type InferBuiltinRules<T> = ESLintRules
  & (T['typescript'] extends true | object ? TypescriptRules : {})
  & (T['stylistice'] extends true | object ? StylisticRules : {})
  & (T['react'] extends true | object ? ReactRules : {})
  & (T['react']['hooks'] extends true | object ? ReactHooksRules : {})
  & (T['react']['refresh'] extends true | object ? ReactRefreshRules : {})
  & (T['vue'] extends true | object ? VueRules : {});
