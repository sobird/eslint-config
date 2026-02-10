/* eslint-disable */

/**
 * @minItems 1
 * @maxItems 1
 */
export type ExhaustiveDeps = [
  {
    additionalHooks?: string;
    enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean;
    experimental_autoDependenciesHooks?: string[];
    requireExplicitEffectDeps?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RulesOfHooks = [
  {
    additionalHooks?: string;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Hooks = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type CapitalizedCalls = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type StaticComponents = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type UseMemo = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type VoidUseMemo = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ComponentHookFactories = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreserveManualMemoization = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type IncompatibleLibrary = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Immutability = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Globals = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Refs = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MemoizedEffectDependencies = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SetStateInEffect = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDerivingStateInEffects = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ErrorBoundaries = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Purity = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SetStateInRender = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Invariant = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Todo = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Syntax = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type UnsupportedSyntax = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Config = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Gating = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RuleSuppression = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AutomaticEffectDependencies = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Fire = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Fbt = [
  {
    [k: string]: unknown;
  }
];

/**
 * 29 ESLint rules for react-hooks
 *
 * @package `eslint-plugin-react-hooks`
 * @namespace `react-hooks`
 * @version 7.0.0
 */
export interface ReactHooksRules {
  /**
   * verifies the list of dependencies for Hooks like useEffect and similar
   *
   * @see {@link https://github.com/facebook/react/issues/14920 exhaustive-deps}
   */
  "react-hooks/exhaustive-deps"?: ExhaustiveDeps;
  /**
   * enforces the Rules of Hooks
   *
   * @see {@link https://react.dev/reference/rules/rules-of-hooks rules-of-hooks}
   */
  "react-hooks/rules-of-hooks"?: RulesOfHooks;
  /**
   * Validates the rules of hooks
   *
   * @see {@link undefined hooks}
   */
  "react-hooks/hooks"?: Hooks;
  /**
   * Validates against calling capitalized functions/methods instead of using JSX
   *
   * @see {@link undefined capitalized-calls}
   */
  "react-hooks/capitalized-calls"?: CapitalizedCalls;
  /**
   * Validates that components are static, not recreated every render. Components that are recreated dynamically can reset state and trigger excessive re-rendering
   *
   * @see {@link undefined static-components}
   */
  "react-hooks/static-components"?: StaticComponents;
  /**
   * Validates usage of the useMemo() hook against common mistakes. See [`useMemo()` docs](https://react.dev/reference/react/useMemo) for more information.
   *
   * @see {@link undefined use-memo}
   */
  "react-hooks/use-memo"?: UseMemo;
  /**
   * Validates that useMemos always return a value and that the result of the useMemo is used by the component/hook. See [`useMemo()` docs](https://react.dev/reference/react/useMemo) for more information.
   *
   * @see {@link undefined void-use-memo}
   */
  "react-hooks/void-use-memo"?: VoidUseMemo;
  /**
   * Validates against higher order functions defining nested components or hooks. Components and hooks should be defined at the module level
   *
   * @see {@link undefined component-hook-factories}
   */
  "react-hooks/component-hook-factories"?: ComponentHookFactories;
  /**
   * Validates that existing manual memoized is preserved by the compiler. React Compiler will only compile components and hooks if its inference [matches or exceeds the existing manual memoization](https://react.dev/learn/react-compiler/introduction#what-should-i-do-about-usememo-usecallback-and-reactmemo)
   *
   * @see {@link undefined preserve-manual-memoization}
   */
  "react-hooks/preserve-manual-memoization"?: PreserveManualMemoization;
  /**
   * Validates against usage of libraries which are incompatible with memoization (manual or automatic)
   *
   * @see {@link undefined incompatible-library}
   */
  "react-hooks/incompatible-library"?: IncompatibleLibrary;
  /**
   * Validates against mutating props, state, and other values that [are immutable](https://react.dev/reference/rules/components-and-hooks-must-be-pure#props-and-state-are-immutable)
   *
   * @see {@link undefined immutability}
   */
  "react-hooks/immutability"?: Immutability;
  /**
   * Validates against assignment/mutation of globals during render, part of ensuring that [side effects must render outside of render](https://react.dev/reference/rules/components-and-hooks-must-be-pure#side-effects-must-run-outside-of-render)
   *
   * @see {@link undefined globals}
   */
  "react-hooks/globals"?: Globals;
  /**
   * Validates correct usage of refs, not reading/writing during render. See the "pitfalls" section in [`useRef()` usage](https://react.dev/reference/react/useRef#usage)
   *
   * @see {@link undefined refs}
   */
  "react-hooks/refs"?: Refs;
  /**
   * Validates that effect dependencies are memoized
   *
   * @see {@link undefined memoized-effect-dependencies}
   */
  "react-hooks/memoized-effect-dependencies"?: MemoizedEffectDependencies;
  /**
   * Validates against calling setState synchronously in an effect, which can lead to re-renders that degrade performance
   *
   * @see {@link undefined set-state-in-effect}
   */
  "react-hooks/set-state-in-effect"?: SetStateInEffect;
  /**
   * Validates against deriving values from state in an effect
   *
   * @see {@link undefined no-deriving-state-in-effects}
   */
  "react-hooks/no-deriving-state-in-effects"?: NoDerivingStateInEffects;
  /**
   * Validates usage of error boundaries instead of try/catch for errors in child components
   *
   * @see {@link undefined error-boundaries}
   */
  "react-hooks/error-boundaries"?: ErrorBoundaries;
  /**
   * Validates that [components/hooks are pure](https://react.dev/reference/rules/components-and-hooks-must-be-pure) by checking that they do not call known-impure functions
   *
   * @see {@link undefined purity}
   */
  "react-hooks/purity"?: Purity;
  /**
   * Validates against setting state during render, which can trigger additional renders and potential infinite render loops
   *
   * @see {@link undefined set-state-in-render}
   */
  "react-hooks/set-state-in-render"?: SetStateInRender;
  /**
   * Internal invariants
   *
   * @see {@link undefined invariant}
   */
  "react-hooks/invariant"?: Invariant;
  /**
   * Unimplemented features
   *
   * @see {@link undefined todo}
   */
  "react-hooks/todo"?: Todo;
  /**
   * Validates against invalid syntax
   *
   * @see {@link undefined syntax}
   */
  "react-hooks/syntax"?: Syntax;
  /**
   * Validates against syntax that we do not plan to support in React Compiler
   *
   * @see {@link undefined unsupported-syntax}
   */
  "react-hooks/unsupported-syntax"?: UnsupportedSyntax;
  /**
   * Validates the compiler configuration options
   *
   * @see {@link undefined config}
   */
  "react-hooks/config"?: Config;
  /**
   * Validates configuration of [gating mode](https://react.dev/reference/react-compiler/gating)
   *
   * @see {@link undefined gating}
   */
  "react-hooks/gating"?: Gating;
  /**
   * Validates against suppression of other rules
   *
   * @see {@link undefined rule-suppression}
   */
  "react-hooks/rule-suppression"?: RuleSuppression;
  /**
   * Verifies that automatic effect dependencies are compiled if opted-in
   *
   * @see {@link undefined automatic-effect-dependencies}
   */
  "react-hooks/automatic-effect-dependencies"?: AutomaticEffectDependencies;
  /**
   * Validates usage of `fire`
   *
   * @see {@link undefined fire}
   */
  "react-hooks/fire"?: Fire;
  /**
   * Validates usage of fbt
   *
   * @see {@link undefined fbt}
   */
  "react-hooks/fbt"?: Fbt;
}
