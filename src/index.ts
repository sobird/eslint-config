import type { Linter } from "eslint";
import type { RuleConfig, RulesConfig} from '@eslint/core'



import { javascript } from "./configs/javascript";
import {typescript} from './configs/typescript'

export type WrapRuleConfig<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<T[K]>
}

export type ExactProps<T> = {
  [K in keyof T as 
    string extends K ? never :
    number extends K ? never :
    symbol extends K ? never :
    K
  ]: T[K]
};

export interface ConfigObject<Rules extends Record<string, any> = RulesConfig> extends Linter.Config<Rules> {
  languageOptions?: Linter.LanguageOptions
}

export function sobird() {
  return [
    // ...javascript(),
    ...typescript()
  ]
}