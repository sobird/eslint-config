import type { Rule } from 'eslint';

declare module 'eslint' {
  export namespace Rule {
    export interface RuleModule {
      meta?: RuleMeta;
    }
  }
}

export interface RuleMeta extends Rule.RuleMetaData {
  version: string;
}
