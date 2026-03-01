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
          JSONArrayExpression?:
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
        }
    ];
/**
 * @minItems 0
 * @maxItems 0
 */
export type Auto = [];
export type CommaDangle =
  | []
  | [
      | ("always-multiline" | "always" | "never" | "only-multiline")
      | {
          arrays?: "always-multiline" | "always" | "ignore" | "never" | "only-multiline";
          objects?: "always-multiline" | "always" | "ignore" | "never" | "only-multiline";
          imports?: "always-multiline" | "always" | "ignore" | "never" | "only-multiline";
          exports?: "always-multiline" | "always" | "ignore" | "never" | "only-multiline";
          functions?: "always-multiline" | "always" | "ignore" | "never" | "only-multiline";
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
    SwitchCase?: number;
    VariableDeclarator?:
      | (number | ("first" | "off"))
      | {
          var?: number | ("first" | "off");
          let?: number | ("first" | "off");
          const?: number | ("first" | "off");
        };
    outerIIFEBody?: number | "off";
    MemberExpression?: number | "off";
    FunctionDeclaration?: {
      parameters?: number | ("first" | "off");
      body?: number;
    };
    FunctionExpression?: {
      parameters?: number | ("first" | "off");
      body?: number;
    };
    StaticBlock?: {
      body?: number;
    };
    CallExpression?: {
      arguments?: number | ("first" | "off");
    };
    ArrayExpression?: number | ("first" | "off");
    ObjectExpression?: number | ("first" | "off");
    ImportDeclaration?: number | ("first" | "off");
    flatTernaryExpressions?: boolean;
    offsetTernaryExpressions?: boolean;
    ignoredNodes?: string[];
    ignoreComments?: boolean;
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
            mode?: "strict" | "minimum";
            on?: "colon" | "value";
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
              mode?: "strict" | "minimum";
              on?: "colon" | "value";
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
        mode?: "strict" | "minimum";
        on?: "colon" | "value";
        beforeColon?: boolean;
        afterColon?: boolean;
      };
    }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoBigintLiterals = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoBinaryExpression = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoBinaryNumericLiterals = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoComments = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDupeKeys = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoEscapeSequenceInIdentifier = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoFloatingDecimal = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoHexadecimalNumericLiterals = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoInfinity = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoIrregularWhitespace = [
  {
    skipComments?: boolean;
    skipStrings?: boolean;
    skipTemplates?: boolean;
    skipRegExps?: boolean;
    skipJSXText?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoMultiStr = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNan = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNumberProps = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNumericSeparators = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoOctalEscape = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoOctalNumericLiterals = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoOctal = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoParenthesized = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoPlusSign = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoRegexpLiterals = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSparseArrays = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoTemplateLiterals = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUndefinedValue = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnicodeCodepointEscapes = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUselessEscape = [
  {
    allowRegexCharacters?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ObjectCurlyNewline = [
  | (
      | ("always" | "never")
      | {
          multiline?: boolean;
          minProperties?: number;
          consistent?: boolean;
        }
    )
  | {
      ObjectExpression?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ObjectPattern?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ImportDeclaration?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ExportDeclaration?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
    }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type ObjectCurlySpacing = [
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
export type ObjectPropertyNewline = [
  {
    allowAllPropertiesOnSameLine?: boolean;
    allowMultiplePropertiesPerLine?: boolean;
  }
];
export type QuoteProps =
  | []
  | ["always" | "as-needed" | "consistent" | "consistent-as-needed"]
  | []
  | ["always" | "as-needed" | "consistent" | "consistent-as-needed"]
  | [
      "always" | "as-needed" | "consistent" | "consistent-as-needed",
      {
        keywords?: boolean;
        unnecessary?: boolean;
        numbers?: boolean;
      }
    ];
/**
 * @minItems 2
 * @maxItems 2
 */
export type Quotes = [
  "single" | "double" | "backtick",
  (
    | "avoid-escape"
    | {
        avoidEscape?: boolean;
        allowTemplateLiterals?: boolean;
      }
  )
];
/**
 * @minItems 1
 */
export type SortArrayValues = [
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
 * @maxItems 1
 */
export type SpaceUnaryOps = [
  {
    words?: boolean;
    nonwords?: boolean;
    overrides?: {
      [k: string]: boolean;
    };
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidJsonNumber = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type VueCustomBlockNoParsingError = [];

/**
 * 44 ESLint rules for jsonc
 *
 * @package `eslint-plugin-jsonc`
 * @namespace `jsonc`
 * @version 3.1.1
 */
export interface JsoncRules {
  /**
   * enforce line breaks after opening and before closing array brackets
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html array-bracket-newline}
   */
  "jsonc/array-bracket-newline"?: ArrayBracketNewline;
  /**
   * disallow or enforce spaces inside of brackets
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html array-bracket-spacing}
   */
  "jsonc/array-bracket-spacing"?: ArrayBracketSpacing;
  /**
   * enforce line breaks between array elements
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html array-element-newline}
   */
  "jsonc/array-element-newline"?: ArrayElementNewline;
  /**
   * apply jsonc rules similar to your configured ESLint core rules
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html auto}
   */
  "jsonc/auto"?: Auto;
  /**
   * require or disallow trailing commas
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html comma-dangle}
   */
  "jsonc/comma-dangle"?: CommaDangle;
  /**
   * enforce consistent comma style
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html comma-style}
   */
  "jsonc/comma-style"?: CommaStyle;
  /**
   * enforce consistent indentation
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html indent}
   */
  "jsonc/indent"?: Indent;
  /**
   * enforce naming convention to property key names
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-name-casing.html key-name-casing}
   */
  "jsonc/key-name-casing"?: KeyNameCasing;
  /**
   * enforce consistent spacing between keys and values in object literal properties
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html key-spacing}
   */
  "jsonc/key-spacing"?: KeySpacing;
  /**
   * disallow BigInt literals
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html no-bigint-literals}
   */
  "jsonc/no-bigint-literals"?: NoBigintLiterals;
  /**
   * disallow binary expression
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html no-binary-expression}
   */
  "jsonc/no-binary-expression"?: NoBinaryExpression;
  /**
   * disallow binary numeric literals
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html no-binary-numeric-literals}
   */
  "jsonc/no-binary-numeric-literals"?: NoBinaryNumericLiterals;
  /**
   * disallow comments
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html no-comments}
   */
  "jsonc/no-comments"?: NoComments;
  /**
   * disallow duplicate keys in object literals
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html no-dupe-keys}
   */
  "jsonc/no-dupe-keys"?: NoDupeKeys;
  /**
   * disallow escape sequences in identifiers.
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html no-escape-sequence-in-identifier}
   */
  "jsonc/no-escape-sequence-in-identifier"?: NoEscapeSequenceInIdentifier;
  /**
   * disallow leading or trailing decimal points in numeric literals
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html no-floating-decimal}
   */
  "jsonc/no-floating-decimal"?: NoFloatingDecimal;
  /**
   * disallow hexadecimal numeric literals
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html no-hexadecimal-numeric-literals}
   */
  "jsonc/no-hexadecimal-numeric-literals"?: NoHexadecimalNumericLiterals;
  /**
   * disallow Infinity
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html no-infinity}
   */
  "jsonc/no-infinity"?: NoInfinity;
  /**
   * disallow irregular whitespace
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html no-irregular-whitespace}
   */
  "jsonc/no-irregular-whitespace"?: NoIrregularWhitespace;
  /**
   * disallow multiline strings
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html no-multi-str}
   */
  "jsonc/no-multi-str"?: NoMultiStr;
  /**
   * disallow NaN
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html no-nan}
   */
  "jsonc/no-nan"?: NoNan;
  /**
   * disallow number property keys
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html no-number-props}
   */
  "jsonc/no-number-props"?: NoNumberProps;
  /**
   * disallow numeric separators
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html no-numeric-separators}
   */
  "jsonc/no-numeric-separators"?: NoNumericSeparators;
  /**
   * disallow octal escape sequences in string literals
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html no-octal-escape}
   */
  "jsonc/no-octal-escape"?: NoOctalEscape;
  /**
   * disallow octal numeric literals
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html no-octal-numeric-literals}
   */
  "jsonc/no-octal-numeric-literals"?: NoOctalNumericLiterals;
  /**
   * disallow legacy octal literals
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html no-octal}
   */
  "jsonc/no-octal"?: NoOctal;
  /**
   * disallow parentheses around the expression
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html no-parenthesized}
   */
  "jsonc/no-parenthesized"?: NoParenthesized;
  /**
   * disallow plus sign
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html no-plus-sign}
   */
  "jsonc/no-plus-sign"?: NoPlusSign;
  /**
   * disallow RegExp literals
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html no-regexp-literals}
   */
  "jsonc/no-regexp-literals"?: NoRegexpLiterals;
  /**
   * disallow sparse arrays
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html no-sparse-arrays}
   */
  "jsonc/no-sparse-arrays"?: NoSparseArrays;
  /**
   * disallow template literals
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html no-template-literals}
   */
  "jsonc/no-template-literals"?: NoTemplateLiterals;
  /**
   * disallow `undefined`
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html no-undefined-value}
   */
  "jsonc/no-undefined-value"?: NoUndefinedValue;
  /**
   * disallow Unicode code point escape sequences.
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html no-unicode-codepoint-escapes}
   */
  "jsonc/no-unicode-codepoint-escapes"?: NoUnicodeCodepointEscapes;
  /**
   * disallow unnecessary escape usage
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html no-useless-escape}
   */
  "jsonc/no-useless-escape"?: NoUselessEscape;
  /**
   * enforce consistent line breaks inside braces
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html object-curly-newline}
   */
  "jsonc/object-curly-newline"?: ObjectCurlyNewline;
  /**
   * enforce consistent spacing inside braces
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html object-curly-spacing}
   */
  "jsonc/object-curly-spacing"?: ObjectCurlySpacing;
  /**
   * enforce placing object properties on separate lines
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html object-property-newline}
   */
  "jsonc/object-property-newline"?: ObjectPropertyNewline;
  /**
   * require quotes around object literal property names
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html quote-props}
   */
  "jsonc/quote-props"?: QuoteProps;
  /**
   * enforce use of double or single quotes
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html quotes}
   */
  "jsonc/quotes"?: Quotes;
  /**
   * require array values to be sorted
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html sort-array-values}
   */
  "jsonc/sort-array-values"?: SortArrayValues;
  /**
   * require object keys to be sorted
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html sort-keys}
   */
  "jsonc/sort-keys"?: SortKeys;
  /**
   * disallow spaces after unary operators
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html space-unary-ops}
   */
  "jsonc/space-unary-ops"?: SpaceUnaryOps;
  /**
   * disallow invalid number for JSON
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html valid-json-number}
   */
  "jsonc/valid-json-number"?: ValidJsonNumber;
  /**
   * disallow parsing errors in Vue custom blocks
   *
   * @see {@link https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html vue-custom-block/no-parsing-error}
   */
  "jsonc/vue-custom-block/no-parsing-error"?: VueCustomBlockNoParsingError;
}
