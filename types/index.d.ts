import type { RuleConfig, RulesConfig } from '@eslint/core';
import type { Rule } from 'eslint';

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


export type WrapRuleConfig<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<NonNullable<T[K]>>
};
