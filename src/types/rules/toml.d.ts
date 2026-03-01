/* GENERATED, DO NOT EDIT DIRECTLY */

/**
 * @minItems 1
 * @maxItems 1
 */
export type ArrayBracketNewline = [
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
export type ArrayBracketSpacing = [
  "always" | "never",
  {
    singleValue?: boolean;
    objectsInArrays?: boolean;
    arraysInArrays?: boolean;
  }
];
export type ArrayElementNewline =
  | []
  | [
      | (
          | ("always" | "never" | "consistent")
          | {
              multiline?: boolean;
              minItems?: number | null;
            }
        )
      | {
          ArrayExpression?:
            | ("always" | "never" | "consistent")
            | {
                multiline?: boolean;
                minItems?: number | null;
              };
          ArrayPattern?:
            | ("always" | "never" | "consistent")
            | {
                multiline?: boolean;
                minItems?: number | null;
              };
          TOMLArray?:
            | ("always" | "never" | "consistent")
            | {
                multiline?: boolean;
                minItems?: number | null;
              };
        }
    ];
/**
 * @minItems 2
 * @maxItems 2
 */
export type CommaStyle = [
  "first" | "last",
  {
    exceptions?: {
      [k: string]: boolean;
    };
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type Indent = [
  "tab" | number,
  {
    subTables?: number;
    keyValuePairs?: number;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type InlineTableCurlyNewline = [
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
export type InlineTableCurlySpacing = [
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
export type InlineTableKeyValueNewline = [
  {
    allowAllPropertiesOnSameLine?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type KeySpacing = [
  | {
      align?:
        | ("equal" | "value")
        | {
            on?: "equal" | "value";
            mode?: "strict" | "minimum";
            beforeEqual?: boolean;
            afterEqual?: boolean;
          };
      mode?: "strict" | "minimum";
      beforeEqual?: boolean;
      afterEqual?: boolean;
    }
  | {
      singleLine?: {
        mode?: "strict" | "minimum";
        beforeEqual?: boolean;
        afterEqual?: boolean;
      };
      multiLine?: {
        align?:
          | ("equal" | "value")
          | {
              on?: "equal" | "value";
              mode?: "strict" | "minimum";
              beforeEqual?: boolean;
              afterEqual?: boolean;
            };
        mode?: "strict" | "minimum";
        beforeEqual?: boolean;
        afterEqual?: boolean;
      };
    }
  | {
      singleLine?: {
        mode?: "strict" | "minimum";
        beforeEqual?: boolean;
        afterEqual?: boolean;
      };
      multiLine?: {
        mode?: "strict" | "minimum";
        beforeEqual?: boolean;
        afterEqual?: boolean;
      };
      align?: {
        on?: "equal" | "value";
        mode?: "strict" | "minimum";
        beforeEqual?: boolean;
        afterEqual?: boolean;
      };
    }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type KeysOrder = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMixedTypeInArray = [
  {
    typeMap?: {
      string?: string;
      boolean?: string;
      integer?: string;
      float?: string;
      offsetDateTime?: string;
      localDateTime?: string;
      localDate?: string;
      localTime?: string;
      array?: string;
      inlineTable?: string;
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoNonDecimalInteger = [
  {
    allowHexadecimal?: boolean;
    allowOctal?: boolean;
    allowBinary?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSpaceDots = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnreadableNumberSeparator = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PaddingLineBetweenPairs = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PaddingLineBetweenTables = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PrecisionOfFractionalSeconds = [
  {
    max?: number;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PrecisionOfInteger = [
  {
    maxBit?: number;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type QuotedKeys = [
  {
    prefer?: "as-needed" | "always";
    numbers?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type SpaceEqSign = [];
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
 * @minItems 1
 * @maxItems 1
 */
export type TableBracketSpacing = ["always" | "never"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type TablesOrder = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type VueCustomBlockNoParsingError = [];

/**
 * 24 ESLint rules for toml
 *
 * @package `eslint-plugin-toml`
 * @namespace `toml`
 * @version 1.3.0
 */
export interface TomlRules {
  /**
   * enforce linebreaks after opening and before closing array brackets
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/array-bracket-newline.html array-bracket-newline}
   */
  "toml/array-bracket-newline"?: ArrayBracketNewline;
  /**
   * enforce consistent spacing inside array brackets
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/array-bracket-spacing.html array-bracket-spacing}
   */
  "toml/array-bracket-spacing"?: ArrayBracketSpacing;
  /**
   * enforce line breaks between array elements
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/array-element-newline.html array-element-newline}
   */
  "toml/array-element-newline"?: ArrayElementNewline;
  /**
   * enforce consistent comma style in array
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/comma-style.html comma-style}
   */
  "toml/comma-style"?: CommaStyle;
  /**
   * enforce consistent indentation
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/indent.html indent}
   */
  "toml/indent"?: Indent;
  /**
   * enforce linebreaks after opening and before closing braces
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-curly-newline.html inline-table-curly-newline}
   */
  "toml/inline-table-curly-newline"?: InlineTableCurlyNewline;
  /**
   * enforce consistent spacing inside braces
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-curly-spacing.html inline-table-curly-spacing}
   */
  "toml/inline-table-curly-spacing"?: InlineTableCurlySpacing;
  /**
   * enforce placing inline table key-value pairs on separate lines
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-key-value-newline.html inline-table-key-value-newline}
   */
  "toml/inline-table-key-value-newline"?: InlineTableKeyValueNewline;
  /**
   * enforce consistent spacing between keys and values in key/value pairs
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/key-spacing.html key-spacing}
   */
  "toml/key-spacing"?: KeySpacing;
  /**
   * disallow defining pair keys out-of-order
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/keys-order.html keys-order}
   */
  "toml/keys-order"?: KeysOrder;
  /**
   * disallow mixed data types in array
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/no-mixed-type-in-array.html no-mixed-type-in-array}
   */
  "toml/no-mixed-type-in-array"?: NoMixedTypeInArray;
  /**
   * disallow hexadecimal, octal and binary integer
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/no-non-decimal-integer.html no-non-decimal-integer}
   */
  "toml/no-non-decimal-integer"?: NoNonDecimalInteger;
  /**
   * disallow spacing around infix operators
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/no-space-dots.html no-space-dots}
   */
  "toml/no-space-dots"?: NoSpaceDots;
  /**
   * disallow number separators that to not enhance readability.
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/no-unreadable-number-separator.html no-unreadable-number-separator}
   */
  "toml/no-unreadable-number-separator"?: NoUnreadableNumberSeparator;
  /**
   * require or disallow padding lines between pairs
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/padding-line-between-pairs.html padding-line-between-pairs}
   */
  "toml/padding-line-between-pairs"?: PaddingLineBetweenPairs;
  /**
   * require or disallow padding lines between tables
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/padding-line-between-tables.html padding-line-between-tables}
   */
  "toml/padding-line-between-tables"?: PaddingLineBetweenTables;
  /**
   * disallow precision of fractional seconds greater than the specified value.
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/precision-of-fractional-seconds.html precision-of-fractional-seconds}
   */
  "toml/precision-of-fractional-seconds"?: PrecisionOfFractionalSeconds;
  /**
   * disallow precision of integer greater than the specified value.
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/precision-of-integer.html precision-of-integer}
   */
  "toml/precision-of-integer"?: PrecisionOfInteger;
  /**
   * require or disallow quotes around keys
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/quoted-keys.html quoted-keys}
   */
  "toml/quoted-keys"?: QuotedKeys;
  /**
   * require spacing around equals sign
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/space-eq-sign.html space-eq-sign}
   * @deprecated This rule is deprecated. It was replaced by key-spacing.
   */
  "toml/space-eq-sign"?: SpaceEqSign;
  /**
   * enforce consistent spacing after the `#` in a comment
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/spaced-comment.html spaced-comment}
   */
  "toml/spaced-comment"?: SpacedComment;
  /**
   * enforce consistent spacing inside table brackets
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/table-bracket-spacing.html table-bracket-spacing}
   */
  "toml/table-bracket-spacing"?: TableBracketSpacing;
  /**
   * disallow defining tables out-of-order
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/tables-order.html tables-order}
   */
  "toml/tables-order"?: TablesOrder;
  /**
   * disallow parsing errors in Vue custom blocks
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-toml/rules/vue-custom-block/no-parsing-error.html vue-custom-block/no-parsing-error}
   */
  "toml/vue-custom-block/no-parsing-error"?: VueCustomBlockNoParsingError;
}
