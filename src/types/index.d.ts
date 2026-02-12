import type { BuiltinRules, InferBuiltinRules } from './rules';
import type { RuleConfig } from '@eslint/core';
import type { Rule, Linter, ESLint } from 'eslint';

export type BuiltinRulesConfig = WrapRuleConfig<BuiltinRules>;
export type BuiltinRulesInfer = WrapRuleConfig<InferBuiltinRules<{ vue: true }>>;

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

export type ExactProps<T> = {
  [K in keyof T as
  string extends K ? never
    : number extends K ? never
      : symbol extends K ? never
        : K
  ]: T[K]
};

export type ESLintPlugin = Pick<ESLint.Plugin, 'rules'> & {
  meta: {
    pkgname?: string;
    version?: string;

    /**
     * rule prefix
     */
    namespace: string;
    title: string;
  };

};
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
