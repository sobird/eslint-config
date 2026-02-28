import type {
  BuiltinRules, InferBuiltinRules, ComposeRules, RulesName,
} from './rules';
import type { Linter, ESLint, Rule } from 'eslint';

export type * from './rules';

export type BuiltinRulesConfig = WrapRuleConfig<BuiltinRules>;
export type InferBuiltinRulesConfig<T> = WrapRuleConfig<InferBuiltinRules<T>>;
export type ComposeRulesConfig<T extends RulesName = RulesName> = WrapRuleConfig<ComposeRules<T>>;

export type WrapRuleConfig<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends Linter.RuleEntry ? T[K] : Linter.RuleEntry<NonNullable<T[K]>>
};

interface LanguageOptions<P extends Linter.ParserOptions = Linter.ParserOptions> extends Linter.LanguageOptions {
  parserOptions?: P;
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
    name?: string;
    title: string;
    version?: string;
    namespace: string;
  };

};

declare module 'eslint' {
  export namespace Rule {
    export interface RuleModule {
      meta?: RuleMeta;
    }
  }
}

export interface RuleMeta extends Rule.RuleMetaData {
  version?: string;
}

// type Prettify<T> = {
//   [K in keyof T]: T[K];
// } & {};
