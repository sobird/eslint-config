import { type Linter } from "eslint";
import {type RulesConfig} from '@eslint/core'

import { javascript } from "./configs/javascript";

export interface ConfigObject<Rules extends RulesConfig> extends Linter.Config<Rules> {
  languageOptions?: Linter.LanguageOptions
}

export function sobird() {
  return [
    ...javascript()
  ]
}