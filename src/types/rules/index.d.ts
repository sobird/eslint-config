import type { ESLintRules } from './eslint';
import type { ImportRules } from './import';
import type { NodeRules } from './node';
import type { StylisticRules } from './stylistic';
import type { TypescriptRules } from './typescript';

export type BuiltinRules = ESLintRules
  & ImportRules
  & NodeRules
  & StylisticRules
  & TypescriptRules;

export interface ConfigOptions {
  typescript?: boolean | object;
  stylistic?: boolean | object;
}

export type InferBuiltinRules<T extends ConfigOptions> = ESLintRules
  & (T['typescript'] extends true | object ? TypescriptRules : {})
  & (T['stylistice'] extends true | object ? StylisticRules : {});
