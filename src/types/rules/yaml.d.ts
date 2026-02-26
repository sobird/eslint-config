/* eslint-disable */

/**
 * @minItems 1
 * @maxItems 1
 */
export type BlockMappingColonIndicatorNewline = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type BlockMappingQuestionIndicatorNewline = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type BlockMapping = [
  | ("always" | "never")
  | {
      singleline?: "always" | "never" | "ignore";
      multiline?: "always" | "never" | "ignore";
    }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type BlockSequenceHyphenIndicatorNewline = [
  "always" | "never",
  {
    nestedHyphen?: "always" | "never";
    blockMapping?: "always" | "never";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type BlockSequence = [
  | ("always" | "never")
  | {
      singleline?: "always" | "never" | "ignore";
      multiline?: "always" | "never" | "ignore";
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type FileExtension = [
  {
    extension?: "yaml" | "yml";
    caseSensitive?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type FlowMappingCurlyNewline = [
  | ("always" | "never")
  | {
      multiline?: boolean;
      minProperties?: number;
      consistent?: boolean;
    }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type FlowMappingCurlySpacing = [
  "always" | "never",
  {
    arraysInObjects?: boolean;
    objectsInObjects?: boolean;
    emptyObjects?: "ignore" | "always" | "never";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type FlowSequenceBracketNewline = [
  | ("always" | "never" | "consistent")
  | {
      multiline?: boolean;
      minItems?: number | null;
    }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type FlowSequenceBracketSpacing = [
  "always" | "never",
  {
    singleValue?: boolean;
    objectsInArrays?: boolean;
    arraysInArrays?: boolean;
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type Indent = [
  number,
  {
    indentBlockSequences?: boolean;
    indicatorValueIndent?: number;
    alignMultilineFlowScalars?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type KeyNameCasing = [
  {
    camelCase?: boolean;
    PascalCase?: boolean;
    SCREAMING_SNAKE_CASE?: boolean;
    "kebab-case"?: boolean;
    snake_case?: boolean;
    ignores?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type KeySpacing = [
  | {
      align?:
        | ("colon" | "value")
        | {
            on?: "colon" | "value";
            mode?: "strict" | "minimum";
            beforeColon?: boolean;
            afterColon?: boolean;
          };
      mode?: "strict" | "minimum";
      beforeColon?: boolean;
      afterColon?: boolean;
    }
  | {
      singleLine?: {
        mode?: "strict" | "minimum";
        beforeColon?: boolean;
        afterColon?: boolean;
      };
      multiLine?: {
        align?:
          | ("colon" | "value")
          | {
              on?: "colon" | "value";
              mode?: "strict" | "minimum";
              beforeColon?: boolean;
              afterColon?: boolean;
            };
        mode?: "strict" | "minimum";
        beforeColon?: boolean;
        afterColon?: boolean;
      };
    }
  | {
      singleLine?: {
        mode?: "strict" | "minimum";
        beforeColon?: boolean;
        afterColon?: boolean;
      };
      multiLine?: {
        mode?: "strict" | "minimum";
        beforeColon?: boolean;
        afterColon?: boolean;
      };
      align?: {
        on?: "colon" | "value";
        mode?: "strict" | "minimum";
        beforeColon?: boolean;
        afterColon?: boolean;
      };
    }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoEmptyDocument = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoEmptyKey = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoEmptyMappingValue = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoEmptySequenceEntry = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoIrregularWhitespace = [
  {
    skipComments?: boolean;
    skipQuotedScalars?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMultipleEmptyLines = [
  {
    max: number;
    maxEOF?: number;
    maxBOF?: number;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoTabIndent = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoTrailingZeros = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type PlainScalar = [
  "always" | "never",
  {
    ignorePatterns?: string[];
    overrides?: {
      mappingKey?: "always" | "never" | null;
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Quotes = [
  {
    prefer?: "double" | "single";
    avoidEscape?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireStringKey = [];
export type SortKeys =
  | [
      {
        pathPattern: string;
        hasProperties?: string[];
        order:
          | (
              | string
              | {
                  keyPattern?: string;
                  order?: {
                    type?: "asc" | "desc";
                    caseSensitive?: boolean;
                    natural?: boolean;
                  };
                }
            )[]
          | {
              type?: "asc" | "desc";
              caseSensitive?: boolean;
              natural?: boolean;
            };
        minKeys?: number;
        allowLineSeparatedGroups?: boolean;
      },
      ...{
        pathPattern: string;
        hasProperties?: string[];
        order:
          | (
              | string
              | {
                  keyPattern?: string;
                  order?: {
                    type?: "asc" | "desc";
                    caseSensitive?: boolean;
                    natural?: boolean;
                  };
                }
            )[]
          | {
              type?: "asc" | "desc";
              caseSensitive?: boolean;
              natural?: boolean;
            };
        minKeys?: number;
        allowLineSeparatedGroups?: boolean;
      }[]
    ]
  | []
  | ["asc" | "desc"]
  | [
      "asc" | "desc",
      {
        caseSensitive?: boolean;
        natural?: boolean;
        minKeys?: number;
        allowLineSeparatedGroups?: boolean;
      }
    ];
/**
 * @minItems 1
 */
export type SortSequenceValues = [
  {
    pathPattern: string;
    order:
      | (
          | string
          | {
              valuePattern?: string;
              order?: {
                type?: "asc" | "desc";
                caseSensitive?: boolean;
                natural?: boolean;
              };
            }
        )[]
      | {
          type?: "asc" | "desc";
          caseSensitive?: boolean;
          natural?: boolean;
        };
    minValues?: number;
  },
  ...{
    pathPattern: string;
    order:
      | (
          | string
          | {
              valuePattern?: string;
              order?: {
                type?: "asc" | "desc";
                caseSensitive?: boolean;
                natural?: boolean;
              };
            }
        )[]
      | {
          type?: "asc" | "desc";
          caseSensitive?: boolean;
          natural?: boolean;
        };
    minValues?: number;
  }[]
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type SpacedComment = [
  "always" | "never",
  {
    exceptions?: string[];
    markers?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type VueCustomBlockNoParsingError = [];

/**
 * 28 ESLint rules for yaml
 *
 * @package `eslint-plugin-yml`
 * @namespace `yaml`
 * @version 3.3.0
 */
export interface YamlRules {
  /**
   * enforce consistent line breaks after `:` indicator
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html block-mapping-colon-indicator-newline}
   */
  "yaml/block-mapping-colon-indicator-newline"?: BlockMappingColonIndicatorNewline;
  /**
   * enforce consistent line breaks after `?` indicator
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html block-mapping-question-indicator-newline}
   */
  "yaml/block-mapping-question-indicator-newline"?: BlockMappingQuestionIndicatorNewline;
  /**
   * require or disallow block style mappings.
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html block-mapping}
   */
  "yaml/block-mapping"?: BlockMapping;
  /**
   * enforce consistent line breaks after `-` indicator
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html block-sequence-hyphen-indicator-newline}
   */
  "yaml/block-sequence-hyphen-indicator-newline"?: BlockSequenceHyphenIndicatorNewline;
  /**
   * require or disallow block style sequences.
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html block-sequence}
   */
  "yaml/block-sequence"?: BlockSequence;
  /**
   * enforce YAML file extension
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html file-extension}
   */
  "yaml/file-extension"?: FileExtension;
  /**
   * enforce consistent line breaks inside braces
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html flow-mapping-curly-newline}
   */
  "yaml/flow-mapping-curly-newline"?: FlowMappingCurlyNewline;
  /**
   * enforce consistent spacing inside braces
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html flow-mapping-curly-spacing}
   */
  "yaml/flow-mapping-curly-spacing"?: FlowMappingCurlySpacing;
  /**
   * enforce linebreaks after opening and before closing flow sequence brackets
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html flow-sequence-bracket-newline}
   */
  "yaml/flow-sequence-bracket-newline"?: FlowSequenceBracketNewline;
  /**
   * enforce consistent spacing inside flow sequence brackets
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html flow-sequence-bracket-spacing}
   */
  "yaml/flow-sequence-bracket-spacing"?: FlowSequenceBracketSpacing;
  /**
   * enforce consistent indentation
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html indent}
   */
  "yaml/indent"?: Indent;
  /**
   * enforce naming convention to key names
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html key-name-casing}
   */
  "yaml/key-name-casing"?: KeyNameCasing;
  /**
   * enforce consistent spacing between keys and values in mapping pairs
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html key-spacing}
   */
  "yaml/key-spacing"?: KeySpacing;
  /**
   * disallow empty document
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html no-empty-document}
   */
  "yaml/no-empty-document"?: NoEmptyDocument;
  /**
   * disallow empty mapping keys
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html no-empty-key}
   */
  "yaml/no-empty-key"?: NoEmptyKey;
  /**
   * disallow empty mapping values
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html no-empty-mapping-value}
   */
  "yaml/no-empty-mapping-value"?: NoEmptyMappingValue;
  /**
   * disallow empty sequence entries
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html no-empty-sequence-entry}
   */
  "yaml/no-empty-sequence-entry"?: NoEmptySequenceEntry;
  /**
   * disallow irregular whitespace
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html no-irregular-whitespace}
   */
  "yaml/no-irregular-whitespace"?: NoIrregularWhitespace;
  /**
   * disallow multiple empty lines
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html no-multiple-empty-lines}
   */
  "yaml/no-multiple-empty-lines"?: NoMultipleEmptyLines;
  /**
   * disallow tabs for indentation.
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html no-tab-indent}
   */
  "yaml/no-tab-indent"?: NoTabIndent;
  /**
   * disallow trailing zeros for floats
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-zeros.html no-trailing-zeros}
   */
  "yaml/no-trailing-zeros"?: NoTrailingZeros;
  /**
   * require or disallow plain style scalar.
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html plain-scalar}
   */
  "yaml/plain-scalar"?: PlainScalar;
  /**
   * enforce the consistent use of either double, or single quotes
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html quotes}
   */
  "yaml/quotes"?: Quotes;
  /**
   * disallow mapping keys other than strings
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html require-string-key}
   */
  "yaml/require-string-key"?: RequireStringKey;
  /**
   * require mapping keys to be sorted
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-keys.html sort-keys}
   */
  "yaml/sort-keys"?: SortKeys;
  /**
   * require sequence values to be sorted
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html sort-sequence-values}
   */
  "yaml/sort-sequence-values"?: SortSequenceValues;
  /**
   * enforce consistent spacing after the `#` in a comment
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html spaced-comment}
   */
  "yaml/spaced-comment"?: SpacedComment;
  /**
   * disallow parsing errors in Vue custom blocks
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html vue-custom-block/no-parsing-error}
   */
  "yaml/vue-custom-block/no-parsing-error"?: VueCustomBlockNoParsingError;
}
