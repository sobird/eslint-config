/* GENERATED, DO NOT EDIT DIRECTLY */

/**
 * @minItems 1
 * @maxItems 1
 */
export type DisableEnablePair = [
  {
    allowWholeFile?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoAggregatingEnable = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDuplicateDisable = [];
export type NoRestrictedDisable = string[];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnlimitedDisable = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnusedDisable = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnusedEnable = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUse = [
  {
    allow?: (
      | "eslint"
      | "eslint-disable"
      | "eslint-disable-line"
      | "eslint-disable-next-line"
      | "eslint-enable"
      | "eslint-env"
      | "exported"
      | "global"
      | "globals"
    )[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireDescription = [
  {
    ignore?: (
      | "eslint"
      | "eslint-disable"
      | "eslint-disable-line"
      | "eslint-disable-next-line"
      | "eslint-enable"
      | "eslint-env"
      | "exported"
      | "global"
      | "globals"
    )[];
  }
];

/**
 * 9 ESLint rules for comments
 *
 * @package `@eslint-community/eslint-plugin-eslint-comments`
 * @namespace `eslint-comments`
 */
export interface CommentsRules {
  /**
   * require a `eslint-enable` comment for every `eslint-disable` comment
   *
   * @see {@link https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html disable-enable-pair}
   */
  "eslint-comments/disable-enable-pair"?: DisableEnablePair;
  /**
   * disallow a `eslint-enable` comment for multiple `eslint-disable` comments
   *
   * @see {@link https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html no-aggregating-enable}
   */
  "eslint-comments/no-aggregating-enable"?: NoAggregatingEnable;
  /**
   * disallow duplicate `eslint-disable` comments
   *
   * @see {@link https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html no-duplicate-disable}
   */
  "eslint-comments/no-duplicate-disable"?: NoDuplicateDisable;
  /**
   * disallow `eslint-disable` comments about specific rules
   *
   * @see {@link https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html no-restricted-disable}
   */
  "eslint-comments/no-restricted-disable"?: NoRestrictedDisable;
  /**
   * disallow `eslint-disable` comments without rule names
   *
   * @see {@link https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html no-unlimited-disable}
   */
  "eslint-comments/no-unlimited-disable"?: NoUnlimitedDisable;
  /**
   * disallow unused `eslint-disable` comments
   *
   * @see {@link https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html no-unused-disable}
   */
  "eslint-comments/no-unused-disable"?: NoUnusedDisable;
  /**
   * disallow unused `eslint-enable` comments
   *
   * @see {@link https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html no-unused-enable}
   */
  "eslint-comments/no-unused-enable"?: NoUnusedEnable;
  /**
   * disallow ESLint directive-comments
   *
   * @see {@link https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-use.html no-use}
   */
  "eslint-comments/no-use"?: NoUse;
  /**
   * require include descriptions in ESLint directive-comments
   *
   * @see {@link https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html require-description}
   */
  "eslint-comments/require-description"?: RequireDescription;
}
