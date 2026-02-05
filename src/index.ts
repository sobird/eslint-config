import { imports } from './configs/imports';
import { javascript } from './configs/javascript';
import { node } from './configs/node';
import { stylistic } from './configs/stylistic';
import { typescript } from './configs/typescript';
import type { RuleConfig, RulesConfig } from '@eslint/core';
import type { Linter } from 'eslint';

export type WrapRuleConfig<T extends Record<string, unknown>> = {
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

export interface ConfigObject<Rules extends Record<string, unknown> = RulesConfig, ParserOptions extends Linter.ParserOptions = Linter.ParserOptions> extends Linter.Config<Rules> {
  languageOptions?: LanguageOptions<ParserOptions>
}

export function sobird() {
  return [
    javascript(),
    node(),
    imports(),
    stylistic(),
    typescript(),
  ];
}
