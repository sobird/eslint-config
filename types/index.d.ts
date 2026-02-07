import type { BuiltinRules } from './rules';
import type { RuleConfig } from '@eslint/core';
import type { Rule, Linter } from 'eslint';

export type BuiltinRulesConfig = WrapRuleConfig<BuiltinRules>;

export type WrapRuleConfig<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<NonNullable<T[K]>>
};


interface LanguageOptions<P extends Linter.ParserOptions = Linter.ParserOptions> extends Linter.LanguageOptions {
  parserOptions: P;
}

export interface ESLintConfigObject<ParserOptions extends Linter.ParserOptions = Linter.ParserOptions,
  Rules extends Record<string, unknown> = BuiltinRulesConfig> extends Linter.Config<Rules> {
  languageOptions?: LanguageOptions<ParserOptions>;
}

// declare module 'eslint' {
//   export namespace Rule {
//     export interface RuleModule {
//       meta?: RuleMeta;
//     }
//   }
// }

// export interface RuleMeta extends Rule.RuleMetaData {
//   version?: string;
// }

// type Prettify<T> = {
//   [K in keyof T]: T[K];
// } & {};
