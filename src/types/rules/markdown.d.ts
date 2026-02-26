/* eslint-disable */

/**
 * @minItems 1
 * @maxItems 1
 */
export type FencedCodeLanguage = [
  {
    required?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type HeadingIncrement = [
  {
    frontmatterTitle?: string;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDuplicateDefinitions = [
  {
    allowDefinitions?: string[];
    allowFootnoteDefinitions?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDuplicateHeadings = [
  {
    checkSiblingsOnly?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoEmptyDefinitions = [
  {
    allowDefinitions?: string[];
    allowFootnoteDefinitions?: string[];
    checkFootnoteDefinitions?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoHtml = [
  {
    allowed?: string[];
    allowedIgnoreCase?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMissingAtxHeadingSpace = [
  {
    checkClosedHeadings?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMissingLabelRefs = [
  {
    allowLabels?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMissingLinkFragments = [
  {
    ignoreCase?: boolean;
    allowPattern?: string;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMultipleH1 = [
  {
    frontmatterTitle?: string;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoSpaceInEmphasis = [
  {
    checkStrikethrough?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnusedDefinitions = [
  {
    allowDefinitions?: string[];
    allowFootnoteDefinitions?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type TableColumnCount = [
  {
    checkMissingCells?: boolean;
  }
];

/**
 * 20 ESLint rules for markdown
 *
 * @package `@eslint/markdown`
 * @namespace `markdown`
 * @version 7.5.1
 */
export interface MarkdownRules {
  /**
   * Require languages for fenced code blocks
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/fenced-code-language.md fenced-code-language}
   */
  "markdown/fenced-code-language"?: FencedCodeLanguage;
  /**
   * Enforce heading levels increment by one
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/heading-increment.md heading-increment}
   */
  "markdown/heading-increment"?: HeadingIncrement;
  "markdown/no-bare-urls"?: unknown;
  /**
   * Disallow duplicate definitions
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-definitions.md no-duplicate-definitions}
   */
  "markdown/no-duplicate-definitions"?: NoDuplicateDefinitions;
  /**
   * Disallow duplicate headings in the same document
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-headings.md no-duplicate-headings}
   */
  "markdown/no-duplicate-headings"?: NoDuplicateHeadings;
  /**
   * Disallow empty definitions
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-definitions.md no-empty-definitions}
   */
  "markdown/no-empty-definitions"?: NoEmptyDefinitions;
  "markdown/no-empty-images"?: unknown;
  "markdown/no-empty-links"?: unknown;
  /**
   * Disallow HTML tags
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/no-html.md no-html}
   */
  "markdown/no-html"?: NoHtml;
  "markdown/no-invalid-label-refs"?: unknown;
  /**
   * Disallow headings without a space after the hash characters
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-atx-heading-space.md no-missing-atx-heading-space}
   */
  "markdown/no-missing-atx-heading-space"?: NoMissingAtxHeadingSpace;
  /**
   * Disallow missing label references
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-label-refs.md no-missing-label-refs}
   */
  "markdown/no-missing-label-refs"?: NoMissingLabelRefs;
  /**
   * Disallow link fragments that do not reference valid headings
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-link-fragments.md no-missing-link-fragments}
   */
  "markdown/no-missing-link-fragments"?: NoMissingLinkFragments;
  /**
   * Disallow multiple H1 headings in the same document
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/no-multiple-h1.md no-multiple-h1}
   */
  "markdown/no-multiple-h1"?: NoMultipleH1;
  "markdown/no-reference-like-urls"?: unknown;
  "markdown/no-reversed-media-syntax"?: unknown;
  /**
   * Disallow spaces around emphasis markers
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/no-space-in-emphasis.md no-space-in-emphasis}
   */
  "markdown/no-space-in-emphasis"?: NoSpaceInEmphasis;
  /**
   * Disallow unused definitions
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/no-unused-definitions.md no-unused-definitions}
   */
  "markdown/no-unused-definitions"?: NoUnusedDefinitions;
  "markdown/require-alt-text"?: unknown;
  /**
   * Disallow data rows in a GitHub Flavored Markdown table from having more cells than the header row
   *
   * @see {@link https://github.com/eslint/markdown/blob/main/docs/rules/table-column-count.md table-column-count}
   */
  "markdown/table-column-count"?: TableColumnCount;
}
