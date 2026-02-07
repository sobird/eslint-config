import { imports } from './configs/imports';
import { javascript } from './configs/javascript';
import { node } from './configs/node';
import { stylistic } from './configs/stylistic';
import { typescript } from './configs/typescript';


// export type WrapRuleConfig<T extends Record<string, any>> = {
//   [K in keyof T]: T[K] extends RuleConfig ? T[K] : RuleConfig<NonNullable<T[K]>>
// };

// type Test = WrapRuleConfig<ESLintRuleOptions>;
// const test: Test = {
//   'accessor-pairs': ['error', {}],
// };

export type ExactProps<T> = {
  [K in keyof T as
  string extends K ? never
    : number extends K ? never
      : symbol extends K ? never
        : K
  ]: T[K]
};


export function sobird() {
  return [
    javascript(),
    node(),
    imports(),
    stylistic(),
    typescript(),
  ];
}
