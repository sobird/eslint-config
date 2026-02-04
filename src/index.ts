import { imports } from './configs/imports';
import { javascript } from './configs/javascript';
import { stylistic } from './configs/stylistic';
import { typescript } from './configs/typescript';
import type { RuleConfig, RulesConfig } from '@eslint/core';
import type { Linter } from 'eslint';

export type WrapRuleConfig<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<T[K]>
};

export type ExactProps<T> = {
  [K in keyof T as
  string extends K ? never
    : number extends K ? never
      : symbol extends K ? never
        : K
  ]: T[K]
};

interface LanguageOptions<P extends Linter.ParserOptions = Linter.ParserOptions> extends Linter.LanguageOptions {
  parserOptions: P
}

export interface ConfigObject<Rules extends Record<string, any> = RulesConfig, ParserOptions extends Linter.ParserOptions = Linter.ParserOptions> extends Linter.Config<Rules> {
  languageOptions?: LanguageOptions<ParserOptions>
}

export function sobird() {
  return [
    ...javascript(),
    ...imports(),
    ...stylistic(),
    ...typescript(),
  ];
}
