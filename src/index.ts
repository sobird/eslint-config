/* eslint-disable @typescript-eslint/no-explicit-any */
import { imports } from './configs/imports';
import { javascript } from './configs/javascript';
import { node } from './configs/node';
import { stylistic } from './configs/stylistic';
import { typescript } from './configs/typescript';
import type { RuleConfig, RulesConfig } from '@eslint/core';
import type { Linter } from 'eslint';
import type { ESLintRuleOptions } from 'types/rules/eslint';
import type { TypescriptESLintRuleOptions } from 'types/rules/typescript';


type AddSlash<T extends string> = T extends '' ? '' : T extends `${string}/` ? T : `${T}/`;

type Prefix<T extends Record<string, any>, Pre extends string> = {
  [K in keyof T as `${Pre}${K & string}`]: T[K];
};

type ESLintRuleOptions1 = Prefix<ESLintRuleOptions, 'test'>;
type TypescriptESLintRuleOptions1 = Prefix<TypescriptESLintRuleOptions, 'test1'>;

type HHH = ESLintRuleOptions1 & TypescriptESLintRuleOptions1;

type MergeIntersection<T extends Record<any, any>> = {
  [K in keyof T]: T[K];
} & {};

type My = MergeIntersection<HHH>;

export type WrapRuleConfig<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<NonNullable<T[K]>>
};

type Test = WrapRuleConfig<ESLintRuleOptions>;
const test: Test = {
  'accessor-pairs': ['error', {}],
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
  parserOptions: P;
}

export interface ConfigObject<Rules extends Record<string, any> = RulesConfig, ParserOptions extends Linter.ParserOptions = Linter.ParserOptions> extends Linter.Config<Rules> {
  languageOptions?: LanguageOptions<ParserOptions>;
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
