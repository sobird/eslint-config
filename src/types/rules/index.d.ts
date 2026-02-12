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

export type BuiltinRules = ESLintRules
  & ImportRules
  & NodeRules
  & StylisticRules
  & TypescriptRules
  & ReactRules
  & ReactHooksRules
  & ReactRefreshRules
  & NextRules
  & JsoncRules
  & VueRules
  & JsxA11YRules;

export type InferBuiltinRules<T> = ESLintRules
  & (T['typescript'] extends true | object ? TypescriptRules : {})
  & (T['stylistice'] extends true | object ? StylisticRules : {})
  & (T['react'] extends true | object ? ReactRules : {})
  & (T['react']['hooks'] extends true | object ? ReactHooksRules : {})
  & (T['react']['refresh'] extends true | object ? ReactRefreshRules : {})
  & (T['vue'] extends true | object ? VueRules : {});
