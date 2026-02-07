/* eslint-disable */

/**
 * @minItems 1
 * @maxItems 1
 */
export type BooleanPropNaming = [
  {
    /**
     * @minItems 1
     */
    propTypeNames?: [string, ...string[]];
    rule?: string;
    message?: string;
    validateNested?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ButtonHasType = [
  {
    button?: boolean;
    submit?: boolean;
    reset?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type CheckedRequiresOnchangeOrReadonly = [
  {
    ignoreMissingProperties?: boolean;
    ignoreExclusiveCheckedAttribute?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DefaultPropsMatchPropTypes = [
  {
    allowRequiredDefaults?: boolean;
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type DestructuringAssignment = [
  "always" | "never",
  {
    ignoreClassFields?: boolean;
    destructureInSignature?: "always" | "ignore";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DisplayName = [
  {
    ignoreTranspilerName?: boolean;
    checkContextObjects?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ForbidComponentProps = [
  {
    forbid?: (
      | string
      | {
          propName?: string;
          allowedFor?: string[];
          allowedForPatterns?: string[];
          message?: string;
        }
      | (
          | {
              [k: string]: unknown;
            }
          | {
              [k: string]: unknown;
            }
        )
      | {
          propNamePattern?: string;
          allowedFor?: string[];
          allowedForPatterns?: string[];
          message?: string;
        }
      | (
          | {
              [k: string]: unknown;
            }
          | {
              [k: string]: unknown;
            }
        )
    )[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ForbidDomProps = [
  {
    forbid?: (
      | string
      | {
          propName?: string;
          disallowedFor?: string[];
          message?: string;
          [k: string]: unknown;
        }
    )[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ForbidElements = [
  {
    forbid?: (
      | string
      | {
          element: string;
          message?: string;
        }
    )[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ForbidForeignPropTypes = [
  {
    allowInPropTypes?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ForbidPropTypes = [
  {
    forbid?: string[];
    checkContextTypes?: boolean;
    checkChildContextTypes?: boolean;
    [k: string]: unknown;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ForwardRefUsesRef = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type FunctionComponentDefinition = [
  {
    namedComponents?:
      | ("function-declaration" | "arrow-function" | "function-expression")
      | ("function-declaration" | "arrow-function" | "function-expression")[];
    unnamedComponents?: ("arrow-function" | "function-expression") | ("arrow-function" | "function-expression")[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type HookUseState = [
  {
    allowDestructuredState?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type IframeMissingSandbox = [];
export type JsxBooleanValue =
  | []
  | ["always" | "never"]
  | []
  | ["always"]
  | [
      "always",
      {
        never?: string[];
        assumeUndefinedIsFalse?: boolean;
      }
    ]
  | []
  | ["never"]
  | [
      "never",
      {
        always?: string[];
        assumeUndefinedIsFalse?: boolean;
      }
    ];
/**
 * @minItems 0
 * @maxItems 0
 */
export type JsxChildElementSpacing = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxClosingBracketLocation = [
  | ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
  | {
      location?: "after-props" | "props-aligned" | "tag-aligned" | "line-aligned";
    }
  | {
      nonEmpty?: "after-props" | "props-aligned" | "tag-aligned" | "line-aligned" | false;
      selfClosing?: "after-props" | "props-aligned" | "tag-aligned" | "line-aligned" | false;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxClosingTagLocation = [
  | ("tag-aligned" | "line-aligned")
  | {
      location?: "tag-aligned" | "line-aligned";
    }
];
export type JsxCurlySpacing =
  | []
  | [
      | (BasicConfig & {
          attributes?: BasicConfig | boolean;
          children?: BasicConfig | boolean;
          [k: string]: unknown;
        })
      | ("always" | "never")
    ]
  | [
      (
        | (BasicConfig & {
            attributes?: BasicConfig | boolean;
            children?: BasicConfig | boolean;
            [k: string]: unknown;
          })
        | ("always" | "never")
      ),
      {
        allowMultiline?: boolean;
        spacing?: {
          objectLiterals?: "always" | "never";
          [k: string]: unknown;
        };
      }
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxCurlyNewline = [
  | ("consistent" | "never")
  | {
      singleline?: "consistent" | "require" | "forbid";
      multiline?: "consistent" | "require" | "forbid";
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxEqualsSpacing = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxFilenameExtension = [
  {
    allow?: "always" | "as-needed";
    extensions?: string[];
    ignoreFilesWithoutCode?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxFirstPropNewLine = ["always" | "never" | "multiline" | "multiline-multiprop" | "multiprop"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxHandlerNames = [
  | {
      eventHandlerPrefix?: string;
      eventHandlerPropPrefix?: string;
      checkLocalVariables?: boolean;
      checkInlineFunction?: boolean;
      ignoreComponentNames?: string[];
    }
  | {
      eventHandlerPrefix?: string;
      eventHandlerPropPrefix?: false;
      checkLocalVariables?: boolean;
      checkInlineFunction?: boolean;
      ignoreComponentNames?: string[];
    }
  | {
      eventHandlerPrefix?: false;
      eventHandlerPropPrefix?: string;
      checkLocalVariables?: boolean;
      checkInlineFunction?: boolean;
      ignoreComponentNames?: string[];
    }
  | {
      checkLocalVariables?: boolean;
    }
  | {
      checkInlineFunction?: boolean;
    }
  | {
      ignoreComponentNames?: string[];
      [k: string]: unknown;
    }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type JsxIndent = [
  "tab" | number,
  {
    checkAttributes?: boolean;
    indentLogicalExpressions?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxIndentProps = [
  | ("tab" | "first")
  | number
  | {
      indentMode?: ("tab" | "first") | number;
      ignoreTernaryOperator?: boolean;
      [k: string]: unknown;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxKey = [
  {
    checkFragmentShorthand?: boolean;
    checkKeyMustBeforeSpread?: boolean;
    warnOnDuplicates?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxMaxDepth = [
  {
    max?: number;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxMaxPropsPerLine = [
  | {
      maximum?: {
        single?: number;
        multi?: number;
        [k: string]: unknown;
      };
    }
  | {
      maximum?: number;
      when?: "always" | "multiline";
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxNewline = [
  {
    prevent?: boolean;
    allowMultilines?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxNoBind = [
  {
    allowArrowFunctions?: boolean;
    allowBind?: boolean;
    allowFunctions?: boolean;
    ignoreRefs?: boolean;
    ignoreDOMComponents?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type JsxNoCommentTextnodes = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxNoDuplicateProps = [
  {
    ignoreCase?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxNoLeakedRender = [
  {
    validStrategies?: ("ternary" | "coerce")[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxNoLiterals = [
  {
    elementOverrides?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[A-Z][\w.]*$".
       */
      [k: string]: {
        applyToNestedElements?: boolean;
        noStrings?: boolean;
        allowedStrings?: string[];
        ignoreProps?: boolean;
        noAttributeStrings?: boolean;
        [k: string]: unknown;
      };
    };
    noStrings?: boolean;
    allowedStrings?: string[];
    ignoreProps?: boolean;
    noAttributeStrings?: boolean;
  }
];
export type JsxNoScriptUrl =
  | []
  | [
      {
        name: string;
        props: string[];
      }[]
    ]
  | [
      {
        name: string;
        props: string[];
      }[],
      {
        includeFromSettings?: boolean;
        [k: string]: unknown;
      }
    ]
  | []
  | [
      {
        includeFromSettings?: boolean;
        [k: string]: unknown;
      }
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxNoTargetBlank = [
  {
    allowReferrer?: boolean;
    enforceDynamicLinks?: "always" | "never";
    warnOnSpreadAttributes?: boolean;
    links?: boolean;
    forms?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxNoUselessFragment = [
  {
    allowExpressions?: boolean;
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxOneExpressionPerLine = [
  {
    allow?: "none" | "literal" | "single-child" | "non-jsx";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxNoUndef = [
  {
    allowGlobals?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxCurlyBracePresence = [
  | {
      props?: "always" | "never" | "ignore";
      children?: "always" | "never" | "ignore";
      propElementValues?: "always" | "never" | "ignore";
    }
  | ("always" | "never" | "ignore")
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxPascalCase = [
  {
    allowAllCaps?: boolean;
    allowLeadingUnderscore?: boolean;
    allowNamespace?: boolean;
    /**
     * @minItems 0
     */
    ignore?: [] | [string];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxFragments = ["syntax" | "element"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type JsxPropsNoMultiSpaces = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxPropsNoSpreading = [
  {
    html?: "enforce" | "ignore";
    custom?: "enforce" | "ignore";
    explicitSpread?: "enforce" | "ignore";
    exceptions?: string[];
    [k: string]: unknown;
  } & {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxSortDefaultProps = [
  {
    ignoreCase?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxSortProps = [
  {
    callbacksLast?: boolean;
    shorthandFirst?: boolean;
    shorthandLast?: boolean;
    multiline?: "ignore" | "first" | "last";
    ignoreCase?: boolean;
    noSortAlphabetically?: boolean;
    reservedFirst?: unknown[] | boolean;
    locale?: string;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxSpaceBeforeClosing = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxTagSpacing = [
  {
    closingSlash?: "always" | "never" | "allow";
    beforeSelfClosing?: "always" | "proportional-always" | "never" | "allow";
    afterOpening?: "always" | "allow-multiline" | "never" | "allow";
    beforeClosing?: "always" | "proportional-always" | "never" | "allow";
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type JsxUsesReact = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type JsxUsesVars = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxWrapMultilines = [
  {
    declaration?: true | false | "ignore" | "parens" | "parens-new-line" | "never";
    assignment?: true | false | "ignore" | "parens" | "parens-new-line" | "never";
    return?: true | false | "ignore" | "parens" | "parens-new-line" | "never";
    arrow?: true | false | "ignore" | "parens" | "parens-new-line" | "never";
    condition?: true | false | "ignore" | "parens" | "parens-new-line" | "never";
    logical?: true | false | "ignore" | "parens" | "parens-new-line" | "never";
    prop?: true | false | "ignore" | "parens" | "parens-new-line" | "never";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoInvalidHtmlAttribute = ["rel"[]];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoAdjacentInlineElements = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoArrayIndexKey = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoArrowFunctionLifecycle = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoChildrenProp = [
  {
    allowFunctions?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDanger = [
  {
    /**
     * @minItems 0
     */
    customComponentNames?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDangerWithChildren = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecated = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDidMountSetState = ["disallow-in-func"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDidUpdateSetState = ["disallow-in-func"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoFindDomNode = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoIsMounted = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMultiComp = [
  {
    ignoreStateless?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNamespace = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSetState = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoStringRefs = [
  {
    noTemplateLiterals?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoRedundantShouldComponentUpdate = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoRenderReturnValue = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoThisInSfc = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoTypos = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnescapedEntities = [
  {
    forbid?: (
      | string
      | {
          char?: string;
          alternatives?: string[];
          [k: string]: unknown;
        }
    )[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnknownProperty = [
  {
    ignore?: string[];
    requireDataLowercase?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnsafe = [
  {
    checkAliases?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnstableNestedComponents = [
  {
    customValidators?: string[];
    allowAsProps?: boolean;
    propNamePattern?: string;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnusedClassComponentMethods = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnusedPropTypes = [
  {
    ignore?: string[];
    customValidators?: string[];
    skipShapeProps?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnusedState = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoWillUpdateSetState = ["disallow-in-func"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferEs6Class = ["always" | "never"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferExactProps = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferReadOnlyProps = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferStatelessFunction = [
  {
    ignorePureComponents?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PropTypes = [
  {
    ignore?: string[];
    customValidators?: string[];
    skipUndeclared?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ReactInJsxScope = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireDefaultProps = [
  {
    forbidDefaultForRequired?: boolean;
    classes?: "defaultProps" | "ignore";
    functions?: "defaultArguments" | "defaultProps" | "ignore";
    ignoreFunctionalComponents?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireOptimization = [
  {
    allowDecorators?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireRenderReturn = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SelfClosingComp = [
  {
    component?: boolean;
    html?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SortComp = [
  {
    order?: string[];
    groups?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.*$".
       */
      [k: string]: string[];
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SortDefaultProps = [
  {
    ignoreCase?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SortPropTypes = [
  {
    requiredFirst?: boolean;
    callbacksLast?: boolean;
    ignoreCase?: boolean;
    noSortAlphabetically?: boolean;
    sortShapeProp?: boolean;
    checkTypes?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type StateInConstructor = ["always" | "never"];
/**
 * @minItems 2
 * @maxItems 2
 */
export type StaticPropertyPlacement = [
  "static public field" | "static getter" | "property assignment",
  {
    propTypes?: "static public field" | "static getter" | "property assignment";
    defaultProps?: "static public field" | "static getter" | "property assignment";
    childContextTypes?: "static public field" | "static getter" | "property assignment";
    contextTypes?: "static public field" | "static getter" | "property assignment";
    contextType?: "static public field" | "static getter" | "property assignment";
    displayName?: "static public field" | "static getter" | "property assignment";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type StylePropObject = [
  {
    allow?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type VoidDomElementsNoChildren = [];

/**
 * 103 ESLint rules for react
 *
 * @package `eslint-plugin-react`
 * @namespace `react`
 */
export interface ReactRules {
  /**
   * Enforces consistent naming for boolean props
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md boolean-prop-naming}
   */
  "react/boolean-prop-naming"?: BooleanPropNaming;
  /**
   * Disallow usage of `button` elements without an explicit `type` attribute
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md button-has-type}
   */
  "react/button-has-type"?: ButtonHasType;
  /**
   * Enforce using `onChange` or `readonly` attribute when `checked` is used
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/checked-requires-onchange-or-readonly.md checked-requires-onchange-or-readonly}
   */
  "react/checked-requires-onchange-or-readonly"?: CheckedRequiresOnchangeOrReadonly;
  /**
   * Enforce all defaultProps have a corresponding non-required PropType
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md default-props-match-prop-types}
   */
  "react/default-props-match-prop-types"?: DefaultPropsMatchPropTypes;
  /**
   * Enforce consistent usage of destructuring assignment of props, state, and context
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md destructuring-assignment}
   */
  "react/destructuring-assignment"?: DestructuringAssignment;
  /**
   * Disallow missing displayName in a React component definition
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md display-name}
   */
  "react/display-name"?: DisplayName;
  /**
   * Disallow certain props on components
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md forbid-component-props}
   */
  "react/forbid-component-props"?: ForbidComponentProps;
  /**
   * Disallow certain props on DOM Nodes
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md forbid-dom-props}
   */
  "react/forbid-dom-props"?: ForbidDomProps;
  /**
   * Disallow certain elements
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md forbid-elements}
   */
  "react/forbid-elements"?: ForbidElements;
  /**
   * Disallow using another component's propTypes
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md forbid-foreign-prop-types}
   */
  "react/forbid-foreign-prop-types"?: ForbidForeignPropTypes;
  /**
   * Disallow certain propTypes
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md forbid-prop-types}
   */
  "react/forbid-prop-types"?: ForbidPropTypes;
  /**
   * Require all forwardRef components include a ref parameter
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forward-ref-uses-ref.md forward-ref-uses-ref}
   */
  "react/forward-ref-uses-ref"?: ForwardRefUsesRef;
  /**
   * Enforce a specific function type for function components
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md function-component-definition}
   */
  "react/function-component-definition"?: FunctionComponentDefinition;
  /**
   * Ensure destructuring and symmetric naming of useState hook value and setter variables
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md hook-use-state}
   */
  "react/hook-use-state"?: HookUseState;
  /**
   * Enforce sandbox attribute on iframe elements
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/iframe-missing-sandbox.md iframe-missing-sandbox}
   */
  "react/iframe-missing-sandbox"?: IframeMissingSandbox;
  /**
   * Enforce boolean attributes notation in JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md jsx-boolean-value}
   */
  "react/jsx-boolean-value"?: JsxBooleanValue;
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md jsx-child-element-spacing}
   */
  "react/jsx-child-element-spacing"?: JsxChildElementSpacing;
  /**
   * Enforce closing bracket location in JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md jsx-closing-bracket-location}
   */
  "react/jsx-closing-bracket-location"?: JsxClosingBracketLocation;
  /**
   * Enforce closing tag location for multiline JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md jsx-closing-tag-location}
   */
  "react/jsx-closing-tag-location"?: JsxClosingTagLocation;
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md jsx-curly-spacing}
   */
  "react/jsx-curly-spacing"?: JsxCurlySpacing;
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md jsx-curly-newline}
   */
  "react/jsx-curly-newline"?: JsxCurlyNewline;
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md jsx-equals-spacing}
   */
  "react/jsx-equals-spacing"?: JsxEqualsSpacing;
  /**
   * Disallow file extensions that may contain JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md jsx-filename-extension}
   */
  "react/jsx-filename-extension"?: JsxFilenameExtension;
  /**
   * Enforce proper position of the first property in JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md jsx-first-prop-new-line}
   */
  "react/jsx-first-prop-new-line"?: JsxFirstPropNewLine;
  /**
   * Enforce event handler naming conventions in JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md jsx-handler-names}
   */
  "react/jsx-handler-names"?: JsxHandlerNames;
  /**
   * Enforce JSX indentation
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md jsx-indent}
   */
  "react/jsx-indent"?: JsxIndent;
  /**
   * Enforce props indentation in JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md jsx-indent-props}
   */
  "react/jsx-indent-props"?: JsxIndentProps;
  /**
   * Disallow missing `key` props in iterators/collection literals
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md jsx-key}
   */
  "react/jsx-key"?: JsxKey;
  /**
   * Enforce JSX maximum depth
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md jsx-max-depth}
   */
  "react/jsx-max-depth"?: JsxMaxDepth;
  /**
   * Enforce maximum of props on a single line in JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md jsx-max-props-per-line}
   */
  "react/jsx-max-props-per-line"?: JsxMaxPropsPerLine;
  /**
   * Require or prevent a new line after jsx elements and expressions.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md jsx-newline}
   */
  "react/jsx-newline"?: JsxNewline;
  /**
   * Disallow `.bind()` or arrow functions in JSX props
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md jsx-no-bind}
   */
  "react/jsx-no-bind"?: JsxNoBind;
  /**
   * Disallow comments from being inserted as text nodes
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md jsx-no-comment-textnodes}
   */
  "react/jsx-no-comment-textnodes"?: JsxNoCommentTextnodes;
  "react/jsx-no-constructed-context-values"?: unknown;
  /**
   * Disallow duplicate properties in JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md jsx-no-duplicate-props}
   */
  "react/jsx-no-duplicate-props"?: JsxNoDuplicateProps;
  /**
   * Disallow problematic leaked values from being rendered
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md jsx-no-leaked-render}
   */
  "react/jsx-no-leaked-render"?: JsxNoLeakedRender;
  /**
   * Disallow usage of string literals in JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md jsx-no-literals}
   */
  "react/jsx-no-literals"?: JsxNoLiterals;
  /**
   * Disallow usage of `javascript:` URLs
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md jsx-no-script-url}
   */
  "react/jsx-no-script-url"?: JsxNoScriptUrl;
  /**
   * Disallow `target="_blank"` attribute without `rel="noreferrer"`
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md jsx-no-target-blank}
   */
  "react/jsx-no-target-blank"?: JsxNoTargetBlank;
  /**
   * Disallow unnecessary fragments
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md jsx-no-useless-fragment}
   */
  "react/jsx-no-useless-fragment"?: JsxNoUselessFragment;
  /**
   * Require one JSX element per line
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md jsx-one-expression-per-line}
   */
  "react/jsx-one-expression-per-line"?: JsxOneExpressionPerLine;
  /**
   * Disallow undeclared variables in JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md jsx-no-undef}
   */
  "react/jsx-no-undef"?: JsxNoUndef;
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md jsx-curly-brace-presence}
   */
  "react/jsx-curly-brace-presence"?: JsxCurlyBracePresence;
  /**
   * Enforce PascalCase for user-defined JSX components
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md jsx-pascal-case}
   */
  "react/jsx-pascal-case"?: JsxPascalCase;
  /**
   * Enforce shorthand or standard form for React fragments
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md jsx-fragments}
   */
  "react/jsx-fragments"?: JsxFragments;
  /**
   * Disallow multiple spaces between inline JSX props
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md jsx-props-no-multi-spaces}
   */
  "react/jsx-props-no-multi-spaces"?: JsxPropsNoMultiSpaces;
  /**
   * Disallow JSX prop spreading
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md jsx-props-no-spreading}
   */
  "react/jsx-props-no-spreading"?: JsxPropsNoSpreading;
  "react/jsx-props-no-spread-multi"?: unknown;
  /**
   * Enforce defaultProps declarations alphabetical sorting
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md jsx-sort-default-props}
   * @deprecated This rule is deprecated. It was replaced by sort-default-props.
   */
  "react/jsx-sort-default-props"?: JsxSortDefaultProps;
  /**
   * Enforce props alphabetical sorting
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md jsx-sort-props}
   */
  "react/jsx-sort-props"?: JsxSortProps;
  /**
   * Enforce spacing before closing bracket in JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md jsx-space-before-closing}
   * @deprecated This rule is deprecated. It was replaced by jsx-tag-spacing.
   */
  "react/jsx-space-before-closing"?: JsxSpaceBeforeClosing;
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md jsx-tag-spacing}
   */
  "react/jsx-tag-spacing"?: JsxTagSpacing;
  /**
   * Disallow React to be incorrectly marked as unused
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md jsx-uses-react}
   */
  "react/jsx-uses-react"?: JsxUsesReact;
  /**
   * Disallow variables used in JSX to be incorrectly marked as unused
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md jsx-uses-vars}
   */
  "react/jsx-uses-vars"?: JsxUsesVars;
  /**
   * Disallow missing parentheses around multiline JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md jsx-wrap-multilines}
   */
  "react/jsx-wrap-multilines"?: JsxWrapMultilines;
  /**
   * Disallow usage of invalid attributes
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md no-invalid-html-attribute}
   */
  "react/no-invalid-html-attribute"?: NoInvalidHtmlAttribute;
  "react/no-access-state-in-setstate"?: unknown;
  /**
   * Disallow adjacent inline elements not separated by whitespace.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md no-adjacent-inline-elements}
   */
  "react/no-adjacent-inline-elements"?: NoAdjacentInlineElements;
  /**
   * Disallow usage of Array index in keys
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md no-array-index-key}
   */
  "react/no-array-index-key"?: NoArrayIndexKey;
  /**
   * Lifecycle methods should be methods on the prototype, not class fields
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md no-arrow-function-lifecycle}
   */
  "react/no-arrow-function-lifecycle"?: NoArrowFunctionLifecycle;
  /**
   * Disallow passing of children as props
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md no-children-prop}
   */
  "react/no-children-prop"?: NoChildrenProp;
  /**
   * Disallow usage of dangerous JSX properties
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md no-danger}
   */
  "react/no-danger"?: NoDanger;
  /**
   * Disallow when a DOM element is using both children and dangerouslySetInnerHTML
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md no-danger-with-children}
   */
  "react/no-danger-with-children"?: NoDangerWithChildren;
  /**
   * Disallow usage of deprecated methods
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md no-deprecated}
   */
  "react/no-deprecated"?: NoDeprecated;
  /**
   * Disallow usage of setState in componentDidMount
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md no-did-mount-set-state}
   */
  "react/no-did-mount-set-state"?: NoDidMountSetState;
  /**
   * Disallow usage of setState in componentDidUpdate
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md no-did-update-set-state}
   */
  "react/no-did-update-set-state"?: NoDidUpdateSetState;
  "react/no-direct-mutation-state"?: unknown;
  /**
   * Disallow usage of findDOMNode
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md no-find-dom-node}
   */
  "react/no-find-dom-node"?: NoFindDomNode;
  /**
   * Disallow usage of isMounted
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md no-is-mounted}
   */
  "react/no-is-mounted"?: NoIsMounted;
  /**
   * Disallow multiple component definition per file
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md no-multi-comp}
   */
  "react/no-multi-comp"?: NoMultiComp;
  /**
   * Enforce that namespaces are not used in React elements
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-namespace.md no-namespace}
   */
  "react/no-namespace"?: NoNamespace;
  /**
   * Disallow usage of setState
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-set-state.md no-set-state}
   */
  "react/no-set-state"?: NoSetState;
  /**
   * Disallow using string references
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md no-string-refs}
   */
  "react/no-string-refs"?: NoStringRefs;
  /**
   * Disallow usage of shouldComponentUpdate when extending React.PureComponent
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md no-redundant-should-component-update}
   */
  "react/no-redundant-should-component-update"?: NoRedundantShouldComponentUpdate;
  /**
   * Disallow usage of the return value of ReactDOM.render
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md no-render-return-value}
   */
  "react/no-render-return-value"?: NoRenderReturnValue;
  /**
   * Disallow `this` from being used in stateless functional components
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md no-this-in-sfc}
   */
  "react/no-this-in-sfc"?: NoThisInSfc;
  /**
   * Disallow common typos
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md no-typos}
   */
  "react/no-typos"?: NoTypos;
  /**
   * Disallow unescaped HTML entities from appearing in markup
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md no-unescaped-entities}
   */
  "react/no-unescaped-entities"?: NoUnescapedEntities;
  /**
   * Disallow usage of unknown DOM property
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md no-unknown-property}
   */
  "react/no-unknown-property"?: NoUnknownProperty;
  /**
   * Disallow usage of unsafe lifecycle methods
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md no-unsafe}
   */
  "react/no-unsafe"?: NoUnsafe;
  /**
   * Disallow creating unstable components inside components
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md no-unstable-nested-components}
   */
  "react/no-unstable-nested-components"?: NoUnstableNestedComponents;
  /**
   * Disallow declaring unused methods of component class
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-class-component-methods.md no-unused-class-component-methods}
   */
  "react/no-unused-class-component-methods"?: NoUnusedClassComponentMethods;
  /**
   * Disallow definitions of unused propTypes
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md no-unused-prop-types}
   */
  "react/no-unused-prop-types"?: NoUnusedPropTypes;
  /**
   * Disallow definitions of unused state
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md no-unused-state}
   */
  "react/no-unused-state"?: NoUnusedState;
  "react/no-object-type-as-default-prop"?: unknown;
  /**
   * Disallow usage of setState in componentWillUpdate
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md no-will-update-set-state}
   */
  "react/no-will-update-set-state"?: NoWillUpdateSetState;
  /**
   * Enforce ES5 or ES6 class for React Components
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md prefer-es6-class}
   */
  "react/prefer-es6-class"?: PreferEs6Class;
  /**
   * Prefer exact proptype definitions
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md prefer-exact-props}
   */
  "react/prefer-exact-props"?: PreferExactProps;
  /**
   * Enforce that props are read-only
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md prefer-read-only-props}
   */
  "react/prefer-read-only-props"?: PreferReadOnlyProps;
  /**
   * Enforce stateless components to be written as a pure function
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md prefer-stateless-function}
   */
  "react/prefer-stateless-function"?: PreferStatelessFunction;
  /**
   * Disallow missing props validation in a React component definition
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md prop-types}
   */
  "react/prop-types"?: PropTypes;
  /**
   * Disallow missing React when using JSX
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md react-in-jsx-scope}
   */
  "react/react-in-jsx-scope"?: ReactInJsxScope;
  /**
   * Enforce a defaultProps definition for every prop that is not a required prop
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md require-default-props}
   */
  "react/require-default-props"?: RequireDefaultProps;
  /**
   * Enforce React components to have a shouldComponentUpdate method
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md require-optimization}
   */
  "react/require-optimization"?: RequireOptimization;
  /**
   * Enforce ES5 or ES6 class for returning value in render function
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md require-render-return}
   */
  "react/require-render-return"?: RequireRenderReturn;
  /**
   * Disallow extra closing tags for components without children
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md self-closing-comp}
   */
  "react/self-closing-comp"?: SelfClosingComp;
  /**
   * Enforce component methods order
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md sort-comp}
   */
  "react/sort-comp"?: SortComp;
  /**
   * Enforce defaultProps declarations alphabetical sorting
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-default-props.md sort-default-props}
   */
  "react/sort-default-props"?: SortDefaultProps;
  /**
   * Enforce propTypes declarations alphabetical sorting
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md sort-prop-types}
   */
  "react/sort-prop-types"?: SortPropTypes;
  /**
   * Enforce class component state initialization style
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md state-in-constructor}
   */
  "react/state-in-constructor"?: StateInConstructor;
  /**
   * Enforces where React component static properties should be positioned.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md static-property-placement}
   */
  "react/static-property-placement"?: StaticPropertyPlacement;
  /**
   * Enforce style prop value is an object
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md style-prop-object}
   */
  "react/style-prop-object"?: StylePropObject;
  /**
   * Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md void-dom-elements-no-children}
   */
  "react/void-dom-elements-no-children"?: VoidDomElementsNoChildren;
}
export interface BasicConfig {
  when?: "always" | "never";
  allowMultiline?: boolean;
  spacing?: {
    objectLiterals?: "always" | "never";
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
