/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

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
        }
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ArrowSpacing = [
  {
    before?: boolean;
    after?: boolean;
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type AttributeHyphenation = [
  "always" | "never",
  {
    ignore?: (string & {
      [k: string]: unknown;
    } & {
      [k: string]: unknown;
    })[];
    ignoreTags?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AttributesOrder = [
  {
    order?: (
      | (
          | "DEFINITION"
          | "LIST_RENDERING"
          | "CONDITIONALS"
          | "RENDER_MODIFIERS"
          | "GLOBAL"
          | "UNIQUE"
          | "SLOT"
          | "TWO_WAY_BINDING"
          | "OTHER_DIRECTIVES"
          | "OTHER_ATTR"
          | "ATTR_STATIC"
          | "ATTR_DYNAMIC"
          | "ATTR_SHORTHAND_BOOL"
          | "EVENTS"
          | "CONTENT"
        )
      | (
          | "DEFINITION"
          | "LIST_RENDERING"
          | "CONDITIONALS"
          | "RENDER_MODIFIERS"
          | "GLOBAL"
          | "UNIQUE"
          | "SLOT"
          | "TWO_WAY_BINDING"
          | "OTHER_DIRECTIVES"
          | "OTHER_ATTR"
          | "ATTR_STATIC"
          | "ATTR_DYNAMIC"
          | "ATTR_SHORTHAND_BOOL"
          | "EVENTS"
          | "CONTENT"
        )[]
    )[];
    alphabetical?: boolean;
    sortLineLength?: boolean;
    ignoreVBindObject?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type BlockLang = [
  {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(?:\S+)$".
     */
    [k: string]: {
      lang?: string | string[];
      allowNoLang?: boolean;
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type BlockOrder = [
  {
    order?: (string | string[])[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type BlockSpacing = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type BlockTagNewline = [
  {
    singleline?: "always" | "never" | "consistent" | "ignore";
    multiline?: "always" | "never" | "consistent" | "ignore";
    maxEmptyLines?: number;
    blocks?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^(?:\S+)$".
       */
      [k: string]: {
        singleline?: "always" | "never" | "consistent" | "ignore";
        multiline?: "always" | "never" | "consistent" | "ignore";
        maxEmptyLines?: number;
      };
    };
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type BraceStyle = [
  "1tbs" | "stroustrup" | "allman",
  {
    allowSingleLine?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Camelcase = [
  {
    ignoreDestructuring?: boolean;
    ignoreImports?: boolean;
    ignoreGlobals?: boolean;
    properties?: "always" | "never";
    /**
     * @minItems 0
     */
    allow?: string[];
  }
];
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
 * @minItems 1
 * @maxItems 1
 */
export type CommaSpacing = [
  {
    before?: boolean;
    after?: boolean;
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
 * @minItems 1
 * @maxItems 1
 */
export type CommentDirective = [
  {
    reportUnusedDisableDirectives?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ComponentApiStyle = [
  [
    "script-setup" | "composition" | "composition-vue2" | "options",
    ...("script-setup" | "composition" | "composition-vue2" | "options")[]
  ]
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ComponentDefinitionNameCasing = ["PascalCase" | "kebab-case"];
/**
 * @minItems 2
 * @maxItems 2
 */
export type ComponentNameInTemplateCasing = [
  "PascalCase" | "kebab-case",
  {
    globals?: string[];
    ignores?: string[];
    registeredComponentsOnly?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ComponentOptionsNameCasing = ["camelCase" | "kebab-case" | "PascalCase"];
/**
 * @minItems 2
 * @maxItems 2
 */
export type CustomEventNameCasing = [
  "kebab-case" | "camelCase",
  {
    ignores?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DefineEmitsDeclaration = ["type-based" | "type-literal" | "runtime"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DefineMacrosOrder = [
  {
    order?: string[];
    defineExposeLast?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DefinePropsDeclaration = ["type-based" | "runtime"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DefinePropsDestructuring = [
  {
    destructure?: "only-when-assigned" | "always" | "never";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DotLocation = ["object" | "property"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DotNotation = [
  {
    allowKeywords?: boolean;
    allowPattern?: string;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type EnforceStyleAttribute = [
  {
    /**
     * @minItems 1
     */
    allow?: ["plain" | "scoped" | "module", ...("plain" | "scoped" | "module")[]];
  }
];
export type Eqeqeq =
  | []
  | ["always"]
  | [
      "always",
      {
        null?: "always" | "never" | "ignore";
      }
    ]
  | []
  | ["smart" | "allow-null"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type FirstAttributeLinebreak = [
  {
    multiline?: "below" | "beside" | "ignore";
    singleline?: "below" | "beside" | "ignore";
  }
];
export type FuncCallSpacing =
  | []
  | ["never"]
  | []
  | ["always"]
  | [
      "always",
      {
        allowNewlines?: boolean;
      }
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type HtmlButtonHasType = [
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
export type HtmlClosingBracketNewline = [
  {
    singleline?: "always" | "never";
    multiline?: "always" | "never";
    selfClosingTag?: {
      singleline?: "always" | "never";
      multiline?: "always" | "never";
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type HtmlClosingBracketSpacing = [
  {
    startTag?: "always" | "never";
    endTag?: "always" | "never";
    selfClosingTag?: "always" | "never";
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type HtmlCommentContentNewline = [
  (
    | ("always" | "never")
    | {
        singleline?: "always" | "never" | "ignore";
        multiline?: "always" | "never" | "ignore";
      }
  ),
  {
    exceptions?: string[];
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type HtmlCommentContentSpacing = [
  "always" | "never",
  {
    exceptions?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type HtmlCommentIndent = [number | "tab"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type HtmlEndTags = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type HtmlIndent = [
  number | "tab",
  {
    attribute?: number;
    baseIndent?: number;
    closeBracket?:
      | number
      | {
          startTag?: number;
          endTag?: number;
          selfClosingTag?: number;
        };
    switchCase?: number;
    alignAttributesVertically?: boolean;
    ignores?: (string & {
      [k: string]: unknown;
    } & {
      [k: string]: unknown;
    })[];
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type HtmlQuotes = [
  "double" | "single",
  {
    avoidEscape?: boolean;
  }
];
/**
 * @maxItems 1
 */
export type HtmlSelfClosing =
  | []
  | [
      {
        html?: {
          normal?: "always" | "never" | "any";
          void?: "always" | "never" | "any";
          component?: "always" | "never" | "any";
        };
        svg?: "always" | "never" | "any";
        math?: "always" | "never" | "any";
      }
    ];
/**
 * @minItems 0
 * @maxItems 0
 */
export type JsxUsesVars = [];
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
 * @minItems 1
 * @maxItems 1
 */
export type KeywordSpacing = [
  {
    before?: boolean;
    after?: boolean;
    overrides?: {
      abstract?: {
        before?: boolean;
        after?: boolean;
      };
      as?: {
        before?: boolean;
        after?: boolean;
      };
      async?: {
        before?: boolean;
        after?: boolean;
      };
      await?: {
        before?: boolean;
        after?: boolean;
      };
      boolean?: {
        before?: boolean;
        after?: boolean;
      };
      break?: {
        before?: boolean;
        after?: boolean;
      };
      byte?: {
        before?: boolean;
        after?: boolean;
      };
      case?: {
        before?: boolean;
        after?: boolean;
      };
      catch?: {
        before?: boolean;
        after?: boolean;
      };
      char?: {
        before?: boolean;
        after?: boolean;
      };
      class?: {
        before?: boolean;
        after?: boolean;
      };
      const?: {
        before?: boolean;
        after?: boolean;
      };
      continue?: {
        before?: boolean;
        after?: boolean;
      };
      debugger?: {
        before?: boolean;
        after?: boolean;
      };
      default?: {
        before?: boolean;
        after?: boolean;
      };
      delete?: {
        before?: boolean;
        after?: boolean;
      };
      do?: {
        before?: boolean;
        after?: boolean;
      };
      double?: {
        before?: boolean;
        after?: boolean;
      };
      else?: {
        before?: boolean;
        after?: boolean;
      };
      enum?: {
        before?: boolean;
        after?: boolean;
      };
      export?: {
        before?: boolean;
        after?: boolean;
      };
      extends?: {
        before?: boolean;
        after?: boolean;
      };
      false?: {
        before?: boolean;
        after?: boolean;
      };
      final?: {
        before?: boolean;
        after?: boolean;
      };
      finally?: {
        before?: boolean;
        after?: boolean;
      };
      float?: {
        before?: boolean;
        after?: boolean;
      };
      for?: {
        before?: boolean;
        after?: boolean;
      };
      from?: {
        before?: boolean;
        after?: boolean;
      };
      function?: {
        before?: boolean;
        after?: boolean;
      };
      get?: {
        before?: boolean;
        after?: boolean;
      };
      goto?: {
        before?: boolean;
        after?: boolean;
      };
      if?: {
        before?: boolean;
        after?: boolean;
      };
      implements?: {
        before?: boolean;
        after?: boolean;
      };
      import?: {
        before?: boolean;
        after?: boolean;
      };
      in?: {
        before?: boolean;
        after?: boolean;
      };
      instanceof?: {
        before?: boolean;
        after?: boolean;
      };
      int?: {
        before?: boolean;
        after?: boolean;
      };
      interface?: {
        before?: boolean;
        after?: boolean;
      };
      let?: {
        before?: boolean;
        after?: boolean;
      };
      long?: {
        before?: boolean;
        after?: boolean;
      };
      native?: {
        before?: boolean;
        after?: boolean;
      };
      new?: {
        before?: boolean;
        after?: boolean;
      };
      null?: {
        before?: boolean;
        after?: boolean;
      };
      of?: {
        before?: boolean;
        after?: boolean;
      };
      package?: {
        before?: boolean;
        after?: boolean;
      };
      private?: {
        before?: boolean;
        after?: boolean;
      };
      protected?: {
        before?: boolean;
        after?: boolean;
      };
      public?: {
        before?: boolean;
        after?: boolean;
      };
      return?: {
        before?: boolean;
        after?: boolean;
      };
      set?: {
        before?: boolean;
        after?: boolean;
      };
      short?: {
        before?: boolean;
        after?: boolean;
      };
      static?: {
        before?: boolean;
        after?: boolean;
      };
      super?: {
        before?: boolean;
        after?: boolean;
      };
      switch?: {
        before?: boolean;
        after?: boolean;
      };
      synchronized?: {
        before?: boolean;
        after?: boolean;
      };
      this?: {
        before?: boolean;
        after?: boolean;
      };
      throw?: {
        before?: boolean;
        after?: boolean;
      };
      throws?: {
        before?: boolean;
        after?: boolean;
      };
      transient?: {
        before?: boolean;
        after?: boolean;
      };
      true?: {
        before?: boolean;
        after?: boolean;
      };
      try?: {
        before?: boolean;
        after?: boolean;
      };
      typeof?: {
        before?: boolean;
        after?: boolean;
      };
      var?: {
        before?: boolean;
        after?: boolean;
      };
      void?: {
        before?: boolean;
        after?: boolean;
      };
      volatile?: {
        before?: boolean;
        after?: boolean;
      };
      while?: {
        before?: boolean;
        after?: boolean;
      };
      with?: {
        before?: boolean;
        after?: boolean;
      };
      yield?: {
        before?: boolean;
        after?: boolean;
      };
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MatchComponentFileName = [
  {
    extensions?: string[];
    shouldMatchCase?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type MatchComponentImportName = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxAttributesPerLine = [
  {
    singleline?:
      | number
      | {
          max?: number;
        };
    multiline?:
      | number
      | {
          max?: number;
        };
  }
];
/**
 * @minItems 3
 * @maxItems 3
 */
export type MaxLen = [
  (
    | {
        code?: number;
        template?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreTrailingComments?: boolean;
        ignoreUrls?: boolean;
        ignoreStrings?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreHTMLAttributeValues?: boolean;
        ignoreHTMLTextContents?: boolean;
      }
    | number
  ),
  (
    | {
        code?: number;
        template?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreTrailingComments?: boolean;
        ignoreUrls?: boolean;
        ignoreStrings?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreHTMLAttributeValues?: boolean;
        ignoreHTMLTextContents?: boolean;
      }
    | number
  ),
  {
    code?: number;
    template?: number;
    comments?: number;
    tabWidth?: number;
    ignorePattern?: string;
    ignoreComments?: boolean;
    ignoreTrailingComments?: boolean;
    ignoreUrls?: boolean;
    ignoreStrings?: boolean;
    ignoreTemplateLiterals?: boolean;
    ignoreRegExpLiterals?: boolean;
    ignoreHTMLAttributeValues?: boolean;
    ignoreHTMLTextContents?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxLinesPerBlock = [
  {
    style?: number;
    template?: number;
    script?: number;
    skipBlankLines?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxProps = [
  {
    maxProps?: number;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxTemplateDepth = [
  {
    maxDepth?: number;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MultiWordComponentNames = [
  {
    ignores?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MultilineHtmlElementContentNewline = [
  {
    ignoreWhenEmpty?: boolean;
    ignores?: string[];
    allowEmptyLines?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MultilineTernary = ["always" | "always-multiline" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MustacheInterpolationSpacing = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NewLineBetweenMultiLineProperty = [
  {
    minLineOfMultilineProperty?: number;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NextTickStyle = ["promise" | "callback"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoArrowFunctionsInWatch = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoAsyncInComputedProperties = [
  {
    ignoredObjectNames?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoBareStringsInTemplate = [
  {
    allowlist?: string[];
    attributes?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^(?:\S+|/.*\/[a-z]*)$".
       */
      [k: string]: string[];
    };
    directives?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoBooleanDefault = ["default-false" | "no-default"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoChildContent = [
  {
    /**
     * @minItems 1
     */
    additionalDirectives: [string, ...string[]];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoComputedPropertiesInData = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoConsole = [
  {
    /**
     * @minItems 1
     */
    allow?: [string, ...string[]];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoConstantCondition = [
  {
    checkLoops?: "all" | "allExceptWhileTrue" | "none" | true | false;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoCustomModifiersOnVModel = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedDataObjectDeclaration = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedDeleteSet = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedDestroyedLifecycle = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedDollarListenersApi = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedDollarScopedslotsApi = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedEventsApi = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedFilter = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedFunctionalTemplate = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedHtmlElementIs = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedInlineTemplate = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDeprecatedModelDefinition = [
  {
    allowVue3Compat?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedPropsDefaultThis = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDeprecatedRouterLinkTagProp = [
  {
    /**
     * @minItems 1
     */
    components?: [string, ...string[]];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedScopeAttribute = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDeprecatedSlotAttribute = [
  {
    ignore?: string[];
    ignoreParents?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedSlotScopeAttribute = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedVBindSync = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedVIs = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedVOnNativeModifier = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedVOnNumberModifiers = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecatedVueConfigKeycodes = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDupeKeys = [
  {
    groups?: unknown[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDupeVElseIf = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDuplicateAttrInheritance = [
  {
    checkMultiRootNodes?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDuplicateAttributes = [
  {
    allowCoexistClass?: boolean;
    allowCoexistStyle?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDuplicateClassNames = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoEmptyComponentBlock = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoEmptyPattern = [
  {
    allowObjectPatternsAsParameters?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoExportInScriptSetup = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoExposeAfterAwait = [];
export type NoExtraParens =
  | []
  | ["functions"]
  | []
  | ["all"]
  | [
      "all",
      {
        conditionalAssign?: boolean;
        ternaryOperandBinaryExpressions?: boolean;
        nestedBinaryExpressions?: boolean;
        returnAssign?: boolean;
        ignoreJSX?: "none" | "all" | "single-line" | "multi-line";
        enforceForArrowConditionals?: boolean;
        enforceForSequenceExpressions?: boolean;
        enforceForNewInMemberExpressions?: boolean;
        enforceForFunctionPrototypeMethods?: boolean;
        allowParensAfterCommentPattern?: string;
      }
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoImplicitCoercion = [
  {
    boolean?: boolean;
    number?: boolean;
    string?: boolean;
    disallowTemplateShorthand?: boolean;
    allow?: ("~" | "!!" | "+" | "- -" | "-" | "*")[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoImportCompilerMacros = [];
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
    skipHTMLAttributeValues?: boolean;
    skipHTMLTextContents?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoLifecycleAfterAwait = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoLiteralsInTemplate = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoLoneTemplate = [
  {
    ignoreAccessible?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoLossOfPrecision = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMultiSpaces = [
  {
    ignoreProperties?: boolean;
    ignoreEOLComments?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoMultipleObjectsInClass = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoMultipleSlotArgs = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMultipleTemplateRoot = [
  {
    disallowComments?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMutatingProps = [
  {
    shallowOnly?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNegatedCondition = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNegatedVIfCondition = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoParsingError = [
  {
    "abrupt-closing-of-empty-comment"?: boolean;
    "absence-of-digits-in-numeric-character-reference"?: boolean;
    "cdata-in-html-content"?: boolean;
    "character-reference-outside-unicode-range"?: boolean;
    "control-character-in-input-stream"?: boolean;
    "control-character-reference"?: boolean;
    "eof-before-tag-name"?: boolean;
    "eof-in-cdata"?: boolean;
    "eof-in-comment"?: boolean;
    "eof-in-tag"?: boolean;
    "incorrectly-closed-comment"?: boolean;
    "incorrectly-opened-comment"?: boolean;
    "invalid-first-character-of-tag-name"?: boolean;
    "missing-attribute-value"?: boolean;
    "missing-end-tag-name"?: boolean;
    "missing-semicolon-after-character-reference"?: boolean;
    "missing-whitespace-between-attributes"?: boolean;
    "nested-comment"?: boolean;
    "noncharacter-character-reference"?: boolean;
    "noncharacter-in-input-stream"?: boolean;
    "null-character-reference"?: boolean;
    "surrogate-character-reference"?: boolean;
    "surrogate-in-input-stream"?: boolean;
    "unexpected-character-in-attribute-name"?: boolean;
    "unexpected-character-in-unquoted-attribute-value"?: boolean;
    "unexpected-equals-sign-before-attribute-name"?: boolean;
    "unexpected-null-character"?: boolean;
    "unexpected-question-mark-instead-of-tag-name"?: boolean;
    "unexpected-solidus-in-tag"?: boolean;
    "unknown-named-character-reference"?: boolean;
    "end-tag-with-attributes"?: boolean;
    "duplicate-attribute"?: boolean;
    "end-tag-with-trailing-solidus"?: boolean;
    "non-void-html-element-start-tag-with-trailing-solidus"?: boolean;
    "x-invalid-end-tag"?: boolean;
    "x-invalid-namespace"?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoPotentialComponentOptionTypo = [
  {
    /**
     * @minItems 0
     */
    presets?: ("all" | "vue" | "vue-router" | "nuxt")[];
    /**
     * @minItems 0
     */
    custom?: string[];
    threshold?: number;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoRefAsOperand = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoRefObjectReactivityLoss = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRequiredPropWithDefault = [
  {
    autofix?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoReservedComponentNames = [
  {
    disallowVueBuiltInComponents?: boolean;
    disallowVue3BuiltInComponents?: boolean;
    htmlElementCaseSensitive?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoReservedKeys = [
  {
    reserved?: unknown[];
    groups?: unknown[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoReservedProps = [
  {
    vueVersion?: 2 | 3;
  }
];
/**
 * @minItems 0
 */
export type NoRestrictedBlock = (
  | string
  | {
      element: string;
      message?: string;
    }
)[];
/**
 * @minItems 0
 */
export type NoRestrictedCallAfterAwait = {
  module: string;
  path?: string | string[];
  message?: string;
}[];
export type NoRestrictedClass = string[];
/**
 * @minItems 0
 */
export type NoRestrictedComponentNames = (
  | string
  | {
      name: string;
      message?: string;
      suggest?: string;
    }
)[];
/**
 * @minItems 0
 */
export type NoRestrictedComponentOptions = (
  | string
  | string[]
  | {
      name: string | string[];
      message?: string;
    }
)[];
/**
 * @minItems 0
 */
export type NoRestrictedCustomEvent = (
  | string
  | {
      event: string;
      message?: string;
      suggest?: string;
    }
)[];
/**
 * @minItems 0
 */
export type NoRestrictedHtmlElements = (
  | string
  | {
      element: string | string[];
      message?: string;
    }
)[];
/**
 * @minItems 0
 */
export type NoRestrictedProps = (
  | string
  | {
      name: string;
      message?: string;
      suggest?: string;
    }
)[];
/**
 * @minItems 0
 */
export type NoRestrictedStaticAttribute = (
  | string
  | {
      key: string;
      value?: string | true;
      element?: string;
      message?: string;
    }
)[];
/**
 * @minItems 0
 */
export type NoRestrictedSyntax = (
  | string
  | {
      selector: string;
      message?: string;
    }
)[];
/**
 * @minItems 0
 */
export type NoRestrictedVBind = (
  | (string | null)
  | {
      argument: string | null;
      modifiers?: ("prop" | "camel" | "sync" | "attr")[];
      element?: string;
      message?: string;
    }
)[];
export type NoRestrictedVOn = (
  | (string | null)
  | {
      argument: string | null;
      element?: string;
      message?: string;
      /**
       * @minItems 1
       */
      modifiers?: [
        "prevent" | "stop" | "capture" | "self" | "once" | "passive",
        ...("prevent" | "stop" | "capture" | "self" | "once" | "passive")[]
      ];
    }
)[];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoRootVIf = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSetupPropsReactivityLoss = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSharedComponentData = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSideEffectsInComputedProperties = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSpacesAroundEqualSignsInAttribute = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSparseArrays = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoStaticInlineStyles = [
  {
    allowBinding?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoTemplateKey = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoTemplateShadow = [
  {
    allow?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoTemplateTargetBlank = [
  {
    allowReferrer?: boolean;
    enforceDynamicLinks?: "always" | "never";
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoTextareaMustache = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoThisInBeforeRouteEnter = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUndefComponents = [
  {
    ignorePatterns?: unknown[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUndefDirectives = [
  {
    ignore?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUndefProperties = [
  {
    ignores?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnsupportedFeatures = [
  {
    version?: string;
    ignores?: (
      | "slot-scope-attribute"
      | "dynamic-directive-arguments"
      | "v-slot"
      | "script-setup"
      | "style-css-vars-injection"
      | "v-model-argument"
      | "v-model-custom-modifiers"
      | "v-is"
      | "is-attribute-with-vue-prefix"
      | "v-memo"
      | "v-bind-prop-modifier-shorthand"
      | "v-bind-attr-modifier"
      | "define-options"
      | "define-slots"
      | "define-model"
      | "v-bind-same-name-shorthand"
    )[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnusedComponents = [
  {
    ignoreWhenBindingPresent?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnusedEmitDeclarations = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnusedProperties = [
  {
    groups?: ("props" | "data" | "asyncData" | "computed" | "methods" | "setup")[];
    deepData?: boolean;
    ignorePublicMembers?: boolean;
    unreferencedOptions?: ("unknownMemberAsUnreferenced" | "returnAsUnreferenced")[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnusedRefs = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnusedVars = [
  {
    ignorePattern?: string;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUseComputedPropertyLikeMethod = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUseVElseWithVFor = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUseVIfWithVFor = [
  {
    allowUsingIterationVar?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessConcat = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUselessMustaches = [
  {
    ignoreIncludesComment?: boolean;
    ignoreStringEscape?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessTemplateAttributes = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUselessVBind = [
  {
    ignoreIncludesComment?: boolean;
    ignoreStringEscape?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoVForTemplateKeyOnChild = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoVForTemplateKey = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoVHtml = [
  {
    ignorePattern?: string;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoVModelArgument = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoVTextVHtmlOnComponent = [
  {
    allow?: string[];
    ignoreElementNamespaces?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoVText = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoWatchAfterAwait = [];
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
export type ObjectShorthand =
  | []
  | ["always" | "methods" | "properties" | "never" | "consistent" | "consistent-as-needed"]
  | []
  | ["always" | "methods" | "properties"]
  | [
      "always" | "methods" | "properties",
      {
        avoidQuotes?: boolean;
      }
    ]
  | []
  | ["always" | "methods"]
  | [
      "always" | "methods",
      {
        ignoreConstructors?: boolean;
        methodsIgnorePattern?: string;
        avoidQuotes?: boolean;
        avoidExplicitReturnArrows?: boolean;
      }
    ];
/**
 * @minItems 0
 * @maxItems 0
 */
export type OneComponentPerFile = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type OperatorLinebreak = [
  "after" | "before" | "none" | null,
  {
    overrides?: {
      [k: string]: "after" | "before" | "none" | "ignore";
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type OrderInComponents = [
  {
    order?: unknown[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PaddingLineBetweenBlocks = ["never" | "always"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PaddingLineBetweenTags = [
  {
    blankLine: "always" | "never" | "consistent";
    prev: string;
    next: string;
  }[]
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PaddingLinesInComponentDefinition = [
  | ("always" | "never")
  | {
      betweenOptions?: "never" | "always" | "ignore";
      withinOption?:
        | ("never" | "always" | "ignore")
        | {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^[a-zA-Z]*$".
             */
            [k: string]:
              | ("never" | "always" | "ignore")
              | {
                  betweenItems?: "never" | "always" | "ignore";
                  withinEach?: "never" | "always" | "ignore";
                };
          };
      groupSingleLineProperties?: boolean;
    }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferDefineOptions = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferImportFromVue = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferPropTypeBooleanFirst = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferSeparateStaticClass = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferTemplate = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type PreferTrueAttributeShorthand = [
  "always" | "never",
  {
    except?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferUseTemplateRef = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type PropNameCasing = [
  "camelCase" | "snake_case",
  {
    ignoreProps?: string[];
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
 * @minItems 0
 * @maxItems 0
 */
export type RequireComponentIs = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireDefaultExport = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireDefaultProp = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireDirectExport = [
  {
    disallowFunctionalComponentFunction?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireEmitValidator = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireExplicitEmits = [
  {
    allowProps?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireExplicitSlots = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireExpose = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireMacroVariableName = [
  {
    defineProps?: string;
    defineEmits?: string;
    defineSlots?: string;
    useSlots?: string;
    useAttrs?: string;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireNameProperty = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequirePropComment = [
  {
    type?: "JSDoc" | "line" | "block" | "any";
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequirePropTypeConstructor = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequirePropTypes = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireRenderReturn = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireSlotsAsFunctions = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireToggleInsideTransition = [
  {
    additionalDirectives?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireTypedObjectProp = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireTypedRef = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireVForKey = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireValidDefaultProp = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RestrictedComponentNames = [
  {
    allow?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ReturnInComputedProperty = [
  {
    treatUndefinedAsUnspecified?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ReturnInEmitsValidator = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type ScriptIndent = [
  number | "tab",
  {
    baseIndent?: number;
    switchCase?: number;
    ignores?: (string & {
      [k: string]: unknown;
    } & {
      [k: string]: unknown;
    })[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SinglelineHtmlElementContentNewline = [
  {
    ignoreWhenNoAttributes?: boolean;
    ignoreWhenEmpty?: boolean;
    ignores?: string[];
    externalIgnores?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SlotNameCasing = ["camelCase" | "kebab-case" | "singleword"];
/**
 * @minItems 2
 * @maxItems 2
 */
export type SortKeys = [
  "asc" | "desc",
  {
    caseSensitive?: boolean;
    ignoreChildrenOf?: unknown[];
    ignoreGrandchildrenOf?: unknown[];
    minKeys?: number;
    natural?: boolean;
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type SpaceInParens = [
  "always" | "never",
  {
    exceptions?: ("{}" | "[]" | "()" | "empty")[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SpaceInfixOps = [
  {
    int32Hint?: boolean;
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
export type StaticClassNamesOrder = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type TemplateCurlySpacing = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ThisInTemplate = ["always" | "never"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type UseVOnExact = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type VBindStyle = [
  "shorthand" | "longform",
  {
    sameNameShorthand?: "always" | "never" | "ignore";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type VForDelimiterStyle = ["in" | "of"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type VIfElseKey = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type VOnEventHyphenation = [
  "always" | "never",
  {
    autofix?: boolean;
    ignore?: (string & {
      [k: string]: unknown;
    } & {
      [k: string]: unknown;
    })[];
    ignoreTags?: string[];
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type VOnHandlerStyle = [
  ("inline" | "inline-function") | ["method", "inline" | "inline-function"],
  {
    ignoreIncludesComment?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type VOnStyle = ["shorthand" | "longform"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type VSlotStyle = [
  | ("shorthand" | "longform")
  | {
      atComponent?: "shorthand" | "longform" | "v-slot";
      default?: "shorthand" | "longform" | "v-slot";
      named?: "shorthand" | "longform";
    }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidAttributeName = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidDefineEmits = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidDefineOptions = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidDefineProps = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidModelDefinition = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidNextTick = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidTemplateRoot = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVBindSync = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVBind = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVCloak = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVElseIf = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVElse = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ValidVFor = [
  {
    allowEmptyAlias?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVHtml = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVIf = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVIs = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVMemo = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVModel = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ValidVOn = [
  {
    modifiers?: unknown[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVOnce = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVPre = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVShow = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ValidVSlot = [
  {
    allowModifiers?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ValidVText = [];

/**
 * 250 ESLint rules for vue
 *
 * @package `eslint-plugin-vue`
 * @namespace `vue`
 * @version 10.8.0
 */
export interface VueRules {
  /**
   * Enforce linebreaks after opening and before closing array brackets in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/array-bracket-newline.html array-bracket-newline}
   */
  "vue/array-bracket-newline"?: ArrayBracketNewline;
  /**
   * Enforce consistent spacing inside array brackets in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/array-bracket-spacing.html array-bracket-spacing}
   */
  "vue/array-bracket-spacing"?: ArrayBracketSpacing;
  /**
   * Enforce line breaks after each array element in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/array-element-newline.html array-element-newline}
   */
  "vue/array-element-newline"?: ArrayElementNewline;
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/arrow-spacing.html arrow-spacing}
   */
  "vue/arrow-spacing"?: ArrowSpacing;
  /**
   * enforce attribute naming style on custom components in template
   *
   * @see {@link https://eslint.vuejs.org/rules/attribute-hyphenation.html attribute-hyphenation}
   */
  "vue/attribute-hyphenation"?: AttributeHyphenation;
  /**
   * enforce order of attributes
   *
   * @see {@link https://eslint.vuejs.org/rules/attributes-order.html attributes-order}
   */
  "vue/attributes-order"?: AttributesOrder;
  /**
   * disallow use other than available `lang`
   *
   * @see {@link https://eslint.vuejs.org/rules/block-lang.html block-lang}
   */
  "vue/block-lang"?: BlockLang;
  /**
   * enforce order of component top-level elements
   *
   * @see {@link https://eslint.vuejs.org/rules/block-order.html block-order}
   */
  "vue/block-order"?: BlockOrder;
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/block-spacing.html block-spacing}
   */
  "vue/block-spacing"?: BlockSpacing;
  /**
   * enforce line breaks after opening and before closing block-level tags
   *
   * @see {@link https://eslint.vuejs.org/rules/block-tag-newline.html block-tag-newline}
   */
  "vue/block-tag-newline"?: BlockTagNewline;
  /**
   * Enforce consistent brace style for blocks in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/brace-style.html brace-style}
   */
  "vue/brace-style"?: BraceStyle;
  /**
   * Enforce camelcase naming convention in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/camelcase.html camelcase}
   */
  "vue/camelcase"?: Camelcase;
  /**
   * Require or disallow trailing commas in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/comma-dangle.html comma-dangle}
   */
  "vue/comma-dangle"?: CommaDangle;
  /**
   * Enforce consistent spacing before and after commas in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/comma-spacing.html comma-spacing}
   */
  "vue/comma-spacing"?: CommaSpacing;
  /**
   * Enforce consistent comma style in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/comma-style.html comma-style}
   */
  "vue/comma-style"?: CommaStyle;
  /**
   * support comment-directives in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/comment-directive.html comment-directive}
   */
  "vue/comment-directive"?: CommentDirective;
  /**
   * enforce component API style
   *
   * @see {@link https://eslint.vuejs.org/rules/component-api-style.html component-api-style}
   */
  "vue/component-api-style"?: ComponentApiStyle;
  /**
   * enforce specific casing for component definition name
   *
   * @see {@link https://eslint.vuejs.org/rules/component-definition-name-casing.html component-definition-name-casing}
   */
  "vue/component-definition-name-casing"?: ComponentDefinitionNameCasing;
  /**
   * enforce specific casing for the component naming style in template
   *
   * @see {@link https://eslint.vuejs.org/rules/component-name-in-template-casing.html component-name-in-template-casing}
   */
  "vue/component-name-in-template-casing"?: ComponentNameInTemplateCasing;
  /**
   * enforce the casing of component name in `components` options
   *
   * @see {@link https://eslint.vuejs.org/rules/component-options-name-casing.html component-options-name-casing}
   */
  "vue/component-options-name-casing"?: ComponentOptionsNameCasing;
  /**
   * enforce specific casing for custom event name
   *
   * @see {@link https://eslint.vuejs.org/rules/custom-event-name-casing.html custom-event-name-casing}
   */
  "vue/custom-event-name-casing"?: CustomEventNameCasing;
  /**
   * enforce declaration style of `defineEmits`
   *
   * @see {@link https://eslint.vuejs.org/rules/define-emits-declaration.html define-emits-declaration}
   */
  "vue/define-emits-declaration"?: DefineEmitsDeclaration;
  /**
   * enforce order of compiler macros (`defineProps`, `defineEmits`, etc.)
   *
   * @see {@link https://eslint.vuejs.org/rules/define-macros-order.html define-macros-order}
   */
  "vue/define-macros-order"?: DefineMacrosOrder;
  /**
   * enforce declaration style of `defineProps`
   *
   * @see {@link https://eslint.vuejs.org/rules/define-props-declaration.html define-props-declaration}
   */
  "vue/define-props-declaration"?: DefinePropsDeclaration;
  /**
   * enforce consistent style for props destructuring
   *
   * @see {@link https://eslint.vuejs.org/rules/define-props-destructuring.html define-props-destructuring}
   */
  "vue/define-props-destructuring"?: DefinePropsDestructuring;
  /**
   * Enforce consistent newlines before and after dots in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/dot-location.html dot-location}
   */
  "vue/dot-location"?: DotLocation;
  /**
   * Enforce dot notation whenever possible in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/dot-notation.html dot-notation}
   */
  "vue/dot-notation"?: DotNotation;
  /**
   * enforce or forbid the use of the `scoped` and `module` attributes in SFC top level style tags
   *
   * @see {@link https://eslint.vuejs.org/rules/enforce-style-attribute.html enforce-style-attribute}
   */
  "vue/enforce-style-attribute"?: EnforceStyleAttribute;
  /**
   * Require the use of `===` and `!==` in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/eqeqeq.html eqeqeq}
   */
  "vue/eqeqeq"?: Eqeqeq;
  /**
   * enforce the location of first attribute
   *
   * @see {@link https://eslint.vuejs.org/rules/first-attribute-linebreak.html first-attribute-linebreak}
   */
  "vue/first-attribute-linebreak"?: FirstAttributeLinebreak;
  /**
   * Require or disallow spacing between function identifiers and their invocations in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/func-call-spacing.html func-call-spacing}
   */
  "vue/func-call-spacing"?: FuncCallSpacing;
  /**
   * disallow usage of button without an explicit type attribute
   *
   * @see {@link https://eslint.vuejs.org/rules/html-button-has-type.html html-button-has-type}
   */
  "vue/html-button-has-type"?: HtmlButtonHasType;
  /**
   * require or disallow a line break before tag's closing brackets
   *
   * @see {@link https://eslint.vuejs.org/rules/html-closing-bracket-newline.html html-closing-bracket-newline}
   */
  "vue/html-closing-bracket-newline"?: HtmlClosingBracketNewline;
  /**
   * require or disallow a space before tag's closing brackets
   *
   * @see {@link https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html html-closing-bracket-spacing}
   */
  "vue/html-closing-bracket-spacing"?: HtmlClosingBracketSpacing;
  /**
   * enforce unified line break in HTML comments
   *
   * @see {@link https://eslint.vuejs.org/rules/html-comment-content-newline.html html-comment-content-newline}
   */
  "vue/html-comment-content-newline"?: HtmlCommentContentNewline;
  /**
   * enforce unified spacing in HTML comments
   *
   * @see {@link https://eslint.vuejs.org/rules/html-comment-content-spacing.html html-comment-content-spacing}
   */
  "vue/html-comment-content-spacing"?: HtmlCommentContentSpacing;
  /**
   * enforce consistent indentation in HTML comments
   *
   * @see {@link https://eslint.vuejs.org/rules/html-comment-indent.html html-comment-indent}
   */
  "vue/html-comment-indent"?: HtmlCommentIndent;
  /**
   * enforce end tag style
   *
   * @see {@link https://eslint.vuejs.org/rules/html-end-tags.html html-end-tags}
   */
  "vue/html-end-tags"?: HtmlEndTags;
  /**
   * enforce consistent indentation in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/html-indent.html html-indent}
   */
  "vue/html-indent"?: HtmlIndent;
  /**
   * enforce quotes style of HTML attributes
   *
   * @see {@link https://eslint.vuejs.org/rules/html-quotes.html html-quotes}
   */
  "vue/html-quotes"?: HtmlQuotes;
  /**
   * enforce self-closing style
   *
   * @see {@link https://eslint.vuejs.org/rules/html-self-closing.html html-self-closing}
   */
  "vue/html-self-closing"?: HtmlSelfClosing;
  /**
   * prevent variables used in JSX to be marked as unused
   *
   * @see {@link https://eslint.vuejs.org/rules/jsx-uses-vars.html jsx-uses-vars}
   */
  "vue/jsx-uses-vars"?: JsxUsesVars;
  /**
   * Enforce consistent spacing between keys and values in object literal properties in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/key-spacing.html key-spacing}
   */
  "vue/key-spacing"?: KeySpacing;
  /**
   * Enforce consistent spacing before and after keywords in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/keyword-spacing.html keyword-spacing}
   */
  "vue/keyword-spacing"?: KeywordSpacing;
  /**
   * require component name property to match its file name
   *
   * @see {@link https://eslint.vuejs.org/rules/match-component-file-name.html match-component-file-name}
   */
  "vue/match-component-file-name"?: MatchComponentFileName;
  /**
   * require the registered component name to match the imported component name
   *
   * @see {@link https://eslint.vuejs.org/rules/match-component-import-name.html match-component-import-name}
   */
  "vue/match-component-import-name"?: MatchComponentImportName;
  /**
   * enforce the maximum number of attributes per line
   *
   * @see {@link https://eslint.vuejs.org/rules/max-attributes-per-line.html max-attributes-per-line}
   */
  "vue/max-attributes-per-line"?: MaxAttributesPerLine;
  /**
   * enforce a maximum line length in `.vue` files
   *
   * @see {@link https://eslint.vuejs.org/rules/max-len.html max-len}
   */
  "vue/max-len"?: MaxLen;
  /**
   * enforce maximum number of lines in Vue SFC blocks
   *
   * @see {@link https://eslint.vuejs.org/rules/max-lines-per-block.html max-lines-per-block}
   */
  "vue/max-lines-per-block"?: MaxLinesPerBlock;
  /**
   * enforce maximum number of props in Vue component
   *
   * @see {@link https://eslint.vuejs.org/rules/max-props.html max-props}
   */
  "vue/max-props"?: MaxProps;
  /**
   * enforce maximum depth of template
   *
   * @see {@link https://eslint.vuejs.org/rules/max-template-depth.html max-template-depth}
   */
  "vue/max-template-depth"?: MaxTemplateDepth;
  /**
   * require component names to be always multi-word
   *
   * @see {@link https://eslint.vuejs.org/rules/multi-word-component-names.html multi-word-component-names}
   */
  "vue/multi-word-component-names"?: MultiWordComponentNames;
  /**
   * require a line break before and after the contents of a multiline element
   *
   * @see {@link https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html multiline-html-element-content-newline}
   */
  "vue/multiline-html-element-content-newline"?: MultilineHtmlElementContentNewline;
  /**
   * Enforce newlines between operands of ternary expressions in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/multiline-ternary.html multiline-ternary}
   */
  "vue/multiline-ternary"?: MultilineTernary;
  /**
   * enforce unified spacing in mustache interpolations
   *
   * @see {@link https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html mustache-interpolation-spacing}
   */
  "vue/mustache-interpolation-spacing"?: MustacheInterpolationSpacing;
  /**
   * enforce new lines between multi-line properties in Vue components
   *
   * @see {@link https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html new-line-between-multi-line-property}
   */
  "vue/new-line-between-multi-line-property"?: NewLineBetweenMultiLineProperty;
  /**
   * enforce Promise or callback style in `nextTick`
   *
   * @see {@link https://eslint.vuejs.org/rules/next-tick-style.html next-tick-style}
   */
  "vue/next-tick-style"?: NextTickStyle;
  /**
   * disallow using arrow functions to define watcher
   *
   * @see {@link https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html no-arrow-functions-in-watch}
   */
  "vue/no-arrow-functions-in-watch"?: NoArrowFunctionsInWatch;
  /**
   * disallow asynchronous actions in computed properties
   *
   * @see {@link https://eslint.vuejs.org/rules/no-async-in-computed-properties.html no-async-in-computed-properties}
   */
  "vue/no-async-in-computed-properties"?: NoAsyncInComputedProperties;
  /**
   * disallow the use of bare strings in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-bare-strings-in-template.html no-bare-strings-in-template}
   */
  "vue/no-bare-strings-in-template"?: NoBareStringsInTemplate;
  /**
   * disallow boolean defaults
   *
   * @see {@link https://eslint.vuejs.org/rules/no-boolean-default.html no-boolean-default}
   */
  "vue/no-boolean-default"?: NoBooleanDefault;
  /**
   * disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-child-content.html no-child-content}
   */
  "vue/no-child-content"?: NoChildContent;
  /**
   * disallow accessing computed properties in `data`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-computed-properties-in-data.html no-computed-properties-in-data}
   */
  "vue/no-computed-properties-in-data"?: NoComputedPropertiesInData;
  /**
   * Disallow the use of `console` in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-console.html no-console}
   */
  "vue/no-console"?: NoConsole;
  /**
   * Disallow constant expressions in conditions in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-constant-condition.html no-constant-condition}
   */
  "vue/no-constant-condition"?: NoConstantCondition;
  /**
   * disallow custom modifiers on v-model used on the component
   *
   * @see {@link https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html no-custom-modifiers-on-v-model}
   */
  "vue/no-custom-modifiers-on-v-model"?: NoCustomModifiersOnVModel;
  /**
   * disallow using deprecated object declaration on data (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html no-deprecated-data-object-declaration}
   */
  "vue/no-deprecated-data-object-declaration"?: NoDeprecatedDataObjectDeclaration;
  /**
   * disallow using deprecated `$delete` and `$set` (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-delete-set.html no-deprecated-delete-set}
   */
  "vue/no-deprecated-delete-set"?: NoDeprecatedDeleteSet;
  /**
   * disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html no-deprecated-destroyed-lifecycle}
   */
  "vue/no-deprecated-destroyed-lifecycle"?: NoDeprecatedDestroyedLifecycle;
  /**
   * disallow using deprecated `$listeners` (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html no-deprecated-dollar-listeners-api}
   */
  "vue/no-deprecated-dollar-listeners-api"?: NoDeprecatedDollarListenersApi;
  /**
   * disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html no-deprecated-dollar-scopedslots-api}
   */
  "vue/no-deprecated-dollar-scopedslots-api"?: NoDeprecatedDollarScopedslotsApi;
  /**
   * disallow using deprecated events api (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-events-api.html no-deprecated-events-api}
   */
  "vue/no-deprecated-events-api"?: NoDeprecatedEventsApi;
  /**
   * disallow using deprecated filters syntax (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-filter.html no-deprecated-filter}
   */
  "vue/no-deprecated-filter"?: NoDeprecatedFilter;
  /**
   * disallow using deprecated the `functional` template (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-functional-template.html no-deprecated-functional-template}
   */
  "vue/no-deprecated-functional-template"?: NoDeprecatedFunctionalTemplate;
  /**
   * disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html no-deprecated-html-element-is}
   */
  "vue/no-deprecated-html-element-is"?: NoDeprecatedHtmlElementIs;
  /**
   * disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-inline-template.html no-deprecated-inline-template}
   */
  "vue/no-deprecated-inline-template"?: NoDeprecatedInlineTemplate;
  /**
   * disallow deprecated `model` definition (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-model-definition.html no-deprecated-model-definition}
   */
  "vue/no-deprecated-model-definition"?: NoDeprecatedModelDefinition;
  /**
   * disallow deprecated `this` access in props default function (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html no-deprecated-props-default-this}
   */
  "vue/no-deprecated-props-default-this"?: NoDeprecatedPropsDefaultThis;
  /**
   * disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html no-deprecated-router-link-tag-prop}
   */
  "vue/no-deprecated-router-link-tag-prop"?: NoDeprecatedRouterLinkTagProp;
  /**
   * disallow deprecated `scope` attribute (in Vue.js 2.5.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html no-deprecated-scope-attribute}
   */
  "vue/no-deprecated-scope-attribute"?: NoDeprecatedScopeAttribute;
  /**
   * disallow deprecated `slot` attribute (in Vue.js 2.6.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html no-deprecated-slot-attribute}
   */
  "vue/no-deprecated-slot-attribute"?: NoDeprecatedSlotAttribute;
  /**
   * disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html no-deprecated-slot-scope-attribute}
   */
  "vue/no-deprecated-slot-scope-attribute"?: NoDeprecatedSlotScopeAttribute;
  /**
   * disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html no-deprecated-v-bind-sync}
   */
  "vue/no-deprecated-v-bind-sync"?: NoDeprecatedVBindSync;
  /**
   * disallow deprecated `v-is` directive (in Vue.js 3.1.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-v-is.html no-deprecated-v-is}
   */
  "vue/no-deprecated-v-is"?: NoDeprecatedVIs;
  /**
   * disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html no-deprecated-v-on-native-modifier}
   */
  "vue/no-deprecated-v-on-native-modifier"?: NoDeprecatedVOnNativeModifier;
  /**
   * disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html no-deprecated-v-on-number-modifiers}
   */
  "vue/no-deprecated-v-on-number-modifiers"?: NoDeprecatedVOnNumberModifiers;
  /**
   * disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+)
   *
   * @see {@link https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html no-deprecated-vue-config-keycodes}
   */
  "vue/no-deprecated-vue-config-keycodes"?: NoDeprecatedVueConfigKeycodes;
  /**
   * disallow duplication of field names
   *
   * @see {@link https://eslint.vuejs.org/rules/no-dupe-keys.html no-dupe-keys}
   */
  "vue/no-dupe-keys"?: NoDupeKeys;
  /**
   * disallow duplicate conditions in `v-if` / `v-else-if` chains
   *
   * @see {@link https://eslint.vuejs.org/rules/no-dupe-v-else-if.html no-dupe-v-else-if}
   */
  "vue/no-dupe-v-else-if"?: NoDupeVElseIf;
  /**
   * enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html no-duplicate-attr-inheritance}
   */
  "vue/no-duplicate-attr-inheritance"?: NoDuplicateAttrInheritance;
  /**
   * disallow duplication of attributes
   *
   * @see {@link https://eslint.vuejs.org/rules/no-duplicate-attributes.html no-duplicate-attributes}
   */
  "vue/no-duplicate-attributes"?: NoDuplicateAttributes;
  /**
   * disallow duplication of class names in class attributes
   *
   * @see {@link https://eslint.vuejs.org/rules/no-duplicate-class-names.html no-duplicate-class-names}
   */
  "vue/no-duplicate-class-names"?: NoDuplicateClassNames;
  /**
   * disallow the `<template>` `<script>` `<style>` block to be empty
   *
   * @see {@link https://eslint.vuejs.org/rules/no-empty-component-block.html no-empty-component-block}
   */
  "vue/no-empty-component-block"?: NoEmptyComponentBlock;
  /**
   * Disallow empty destructuring patterns in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-empty-pattern.html no-empty-pattern}
   */
  "vue/no-empty-pattern"?: NoEmptyPattern;
  /**
   * disallow `export` in `<script setup>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-export-in-script-setup.html no-export-in-script-setup}
   */
  "vue/no-export-in-script-setup"?: NoExportInScriptSetup;
  /**
   * disallow asynchronously registered `expose`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-expose-after-await.html no-expose-after-await}
   */
  "vue/no-expose-after-await"?: NoExposeAfterAwait;
  /**
   * Disallow unnecessary parentheses in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-extra-parens.html no-extra-parens}
   */
  "vue/no-extra-parens"?: NoExtraParens;
  /**
   * Disallow shorthand type conversions in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-implicit-coercion.html no-implicit-coercion}
   */
  "vue/no-implicit-coercion"?: NoImplicitCoercion;
  /**
   * disallow importing Vue compiler macros
   *
   * @see {@link https://eslint.vuejs.org/rules/no-import-compiler-macros.html no-import-compiler-macros}
   */
  "vue/no-import-compiler-macros"?: NoImportCompilerMacros;
  /**
   * disallow irregular whitespace in `.vue` files
   *
   * @see {@link https://eslint.vuejs.org/rules/no-irregular-whitespace.html no-irregular-whitespace}
   */
  "vue/no-irregular-whitespace"?: NoIrregularWhitespace;
  /**
   * disallow asynchronously registered lifecycle hooks
   *
   * @see {@link https://eslint.vuejs.org/rules/no-lifecycle-after-await.html no-lifecycle-after-await}
   */
  "vue/no-lifecycle-after-await"?: NoLifecycleAfterAwait;
  /**
   * disallow object, array, and function literals in template
   *
   * @see {@link https://eslint.vuejs.org/rules/no-literals-in-template.html no-literals-in-template}
   */
  "vue/no-literals-in-template"?: NoLiteralsInTemplate;
  /**
   * disallow unnecessary `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-lone-template.html no-lone-template}
   */
  "vue/no-lone-template"?: NoLoneTemplate;
  /**
   * Disallow literal numbers that lose precision in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-loss-of-precision.html no-loss-of-precision}
   */
  "vue/no-loss-of-precision"?: NoLossOfPrecision;
  /**
   * disallow multiple spaces
   *
   * @see {@link https://eslint.vuejs.org/rules/no-multi-spaces.html no-multi-spaces}
   */
  "vue/no-multi-spaces"?: NoMultiSpaces;
  /**
   * disallow passing multiple objects in an array to class
   *
   * @see {@link https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html no-multiple-objects-in-class}
   */
  "vue/no-multiple-objects-in-class"?: NoMultipleObjectsInClass;
  /**
   * disallow passing multiple arguments to scoped slots
   *
   * @see {@link https://eslint.vuejs.org/rules/no-multiple-slot-args.html no-multiple-slot-args}
   */
  "vue/no-multiple-slot-args"?: NoMultipleSlotArgs;
  /**
   * disallow adding multiple root nodes to the template
   *
   * @see {@link https://eslint.vuejs.org/rules/no-multiple-template-root.html no-multiple-template-root}
   */
  "vue/no-multiple-template-root"?: NoMultipleTemplateRoot;
  /**
   * disallow mutation of component props
   *
   * @see {@link https://eslint.vuejs.org/rules/no-mutating-props.html no-mutating-props}
   */
  "vue/no-mutating-props"?: NoMutatingProps;
  /**
   * Disallow negated conditions in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-negated-condition.html no-negated-condition}
   */
  "vue/no-negated-condition"?: NoNegatedCondition;
  /**
   * disallow negated conditions in v-if/v-else
   *
   * @see {@link https://eslint.vuejs.org/rules/no-negated-v-if-condition.html no-negated-v-if-condition}
   */
  "vue/no-negated-v-if-condition"?: NoNegatedVIfCondition;
  /**
   * disallow parsing errors in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-parsing-error.html no-parsing-error}
   */
  "vue/no-parsing-error"?: NoParsingError;
  /**
   * disallow a potential typo in your component property
   *
   * @see {@link https://eslint.vuejs.org/rules/no-potential-component-option-typo.html no-potential-component-option-typo}
   */
  "vue/no-potential-component-option-typo"?: NoPotentialComponentOptionTypo;
  /**
   * disallow use of value wrapped by `ref()` (Composition API) as an operand
   *
   * @see {@link https://eslint.vuejs.org/rules/no-ref-as-operand.html no-ref-as-operand}
   */
  "vue/no-ref-as-operand"?: NoRefAsOperand;
  /**
   * disallow usages of ref objects that can lead to loss of reactivity
   *
   * @see {@link https://eslint.vuejs.org/rules/no-ref-object-reactivity-loss.html no-ref-object-reactivity-loss}
   */
  "vue/no-ref-object-reactivity-loss"?: NoRefObjectReactivityLoss;
  /**
   * enforce props with default values to be optional
   *
   * @see {@link https://eslint.vuejs.org/rules/no-required-prop-with-default.html no-required-prop-with-default}
   */
  "vue/no-required-prop-with-default"?: NoRequiredPropWithDefault;
  /**
   * disallow the use of reserved names in component definitions
   *
   * @see {@link https://eslint.vuejs.org/rules/no-reserved-component-names.html no-reserved-component-names}
   */
  "vue/no-reserved-component-names"?: NoReservedComponentNames;
  /**
   * disallow overwriting reserved keys
   *
   * @see {@link https://eslint.vuejs.org/rules/no-reserved-keys.html no-reserved-keys}
   */
  "vue/no-reserved-keys"?: NoReservedKeys;
  /**
   * disallow reserved names in props
   *
   * @see {@link https://eslint.vuejs.org/rules/no-reserved-props.html no-reserved-props}
   */
  "vue/no-reserved-props"?: NoReservedProps;
  /**
   * disallow specific block
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-block.html no-restricted-block}
   */
  "vue/no-restricted-block"?: NoRestrictedBlock;
  /**
   * disallow asynchronously called restricted methods
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-call-after-await.html no-restricted-call-after-await}
   */
  "vue/no-restricted-call-after-await"?: NoRestrictedCallAfterAwait;
  /**
   * disallow specific classes in Vue components
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-class.html no-restricted-class}
   */
  "vue/no-restricted-class"?: NoRestrictedClass;
  /**
   * disallow specific component names
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-component-names.html no-restricted-component-names}
   */
  "vue/no-restricted-component-names"?: NoRestrictedComponentNames;
  /**
   * disallow specific component option
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-component-options.html no-restricted-component-options}
   */
  "vue/no-restricted-component-options"?: NoRestrictedComponentOptions;
  /**
   * disallow specific custom event
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-custom-event.html no-restricted-custom-event}
   */
  "vue/no-restricted-custom-event"?: NoRestrictedCustomEvent;
  /**
   * disallow specific elements
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-html-elements.html no-restricted-html-elements}
   */
  "vue/no-restricted-html-elements"?: NoRestrictedHtmlElements;
  /**
   * disallow specific props
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-props.html no-restricted-props}
   */
  "vue/no-restricted-props"?: NoRestrictedProps;
  /**
   * disallow specific attribute
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-static-attribute.html no-restricted-static-attribute}
   */
  "vue/no-restricted-static-attribute"?: NoRestrictedStaticAttribute;
  /**
   * Disallow specified syntax in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-syntax.html no-restricted-syntax}
   */
  "vue/no-restricted-syntax"?: NoRestrictedSyntax;
  /**
   * disallow specific argument in `v-bind`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-v-bind.html no-restricted-v-bind}
   */
  "vue/no-restricted-v-bind"?: NoRestrictedVBind;
  /**
   * disallow specific argument in `v-on`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-restricted-v-on.html no-restricted-v-on}
   */
  "vue/no-restricted-v-on"?: NoRestrictedVOn;
  /**
   * disallow `v-if` directives on root element
   *
   * @see {@link https://eslint.vuejs.org/rules/no-root-v-if.html no-root-v-if}
   */
  "vue/no-root-v-if"?: NoRootVIf;
  /**
   * disallow usages that lose the reactivity of `props` passed to `setup`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html no-setup-props-reactivity-loss}
   */
  "vue/no-setup-props-reactivity-loss"?: NoSetupPropsReactivityLoss;
  /**
   * enforce component's data property to be a function
   *
   * @see {@link https://eslint.vuejs.org/rules/no-shared-component-data.html no-shared-component-data}
   */
  "vue/no-shared-component-data"?: NoSharedComponentData;
  /**
   * disallow side effects in computed properties
   *
   * @see {@link https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html no-side-effects-in-computed-properties}
   */
  "vue/no-side-effects-in-computed-properties"?: NoSideEffectsInComputedProperties;
  /**
   * disallow spaces around equal signs in attribute
   *
   * @see {@link https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html no-spaces-around-equal-signs-in-attribute}
   */
  "vue/no-spaces-around-equal-signs-in-attribute"?: NoSpacesAroundEqualSignsInAttribute;
  /**
   * Disallow sparse arrays in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-sparse-arrays.html no-sparse-arrays}
   */
  "vue/no-sparse-arrays"?: NoSparseArrays;
  /**
   * disallow static inline `style` attributes
   *
   * @see {@link https://eslint.vuejs.org/rules/no-static-inline-styles.html no-static-inline-styles}
   */
  "vue/no-static-inline-styles"?: NoStaticInlineStyles;
  /**
   * disallow `key` attribute on `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-template-key.html no-template-key}
   */
  "vue/no-template-key"?: NoTemplateKey;
  /**
   * disallow variable declarations from shadowing variables declared in the outer scope
   *
   * @see {@link https://eslint.vuejs.org/rules/no-template-shadow.html no-template-shadow}
   */
  "vue/no-template-shadow"?: NoTemplateShadow;
  /**
   * disallow target="_blank" attribute without rel="noopener noreferrer"
   *
   * @see {@link https://eslint.vuejs.org/rules/no-template-target-blank.html no-template-target-blank}
   */
  "vue/no-template-target-blank"?: NoTemplateTargetBlank;
  /**
   * disallow mustaches in `<textarea>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-textarea-mustache.html no-textarea-mustache}
   */
  "vue/no-textarea-mustache"?: NoTextareaMustache;
  /**
   * disallow `this` usage in a `beforeRouteEnter` method
   *
   * @see {@link https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html no-this-in-before-route-enter}
   */
  "vue/no-this-in-before-route-enter"?: NoThisInBeforeRouteEnter;
  /**
   * disallow use of undefined components in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-undef-components.html no-undef-components}
   */
  "vue/no-undef-components"?: NoUndefComponents;
  /**
   * disallow use of undefined custom directives
   *
   * @see {@link https://eslint.vuejs.org/rules/no-undef-directives.html no-undef-directives}
   */
  "vue/no-undef-directives"?: NoUndefDirectives;
  /**
   * disallow undefined properties
   *
   * @see {@link https://eslint.vuejs.org/rules/no-undef-properties.html no-undef-properties}
   */
  "vue/no-undef-properties"?: NoUndefProperties;
  /**
   * disallow unsupported Vue.js syntax on the specified version
   *
   * @see {@link https://eslint.vuejs.org/rules/no-unsupported-features.html no-unsupported-features}
   */
  "vue/no-unsupported-features"?: NoUnsupportedFeatures;
  /**
   * disallow registering components that are not used inside templates
   *
   * @see {@link https://eslint.vuejs.org/rules/no-unused-components.html no-unused-components}
   */
  "vue/no-unused-components"?: NoUnusedComponents;
  /**
   * disallow unused emit declarations
   *
   * @see {@link https://eslint.vuejs.org/rules/no-unused-emit-declarations.html no-unused-emit-declarations}
   */
  "vue/no-unused-emit-declarations"?: NoUnusedEmitDeclarations;
  /**
   * disallow unused properties
   *
   * @see {@link https://eslint.vuejs.org/rules/no-unused-properties.html no-unused-properties}
   */
  "vue/no-unused-properties"?: NoUnusedProperties;
  /**
   * disallow unused refs
   *
   * @see {@link https://eslint.vuejs.org/rules/no-unused-refs.html no-unused-refs}
   */
  "vue/no-unused-refs"?: NoUnusedRefs;
  /**
   * disallow unused variable definitions of v-for directives or scope attributes
   *
   * @see {@link https://eslint.vuejs.org/rules/no-unused-vars.html no-unused-vars}
   */
  "vue/no-unused-vars"?: NoUnusedVars;
  /**
   * disallow use computed property like method
   *
   * @see {@link https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html no-use-computed-property-like-method}
   */
  "vue/no-use-computed-property-like-method"?: NoUseComputedPropertyLikeMethod;
  /**
   * disallow using `v-else-if`/`v-else` on the same element as `v-for`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html no-use-v-else-with-v-for}
   */
  "vue/no-use-v-else-with-v-for"?: NoUseVElseWithVFor;
  /**
   * disallow using `v-if` on the same element as `v-for`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html no-use-v-if-with-v-for}
   */
  "vue/no-use-v-if-with-v-for"?: NoUseVIfWithVFor;
  /**
   * Disallow unnecessary concatenation of literals or template literals in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-useless-concat.html no-useless-concat}
   */
  "vue/no-useless-concat"?: NoUselessConcat;
  /**
   * disallow unnecessary mustache interpolations
   *
   * @see {@link https://eslint.vuejs.org/rules/no-useless-mustaches.html no-useless-mustaches}
   */
  "vue/no-useless-mustaches"?: NoUselessMustaches;
  /**
   * disallow useless attribute on `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-useless-template-attributes.html no-useless-template-attributes}
   */
  "vue/no-useless-template-attributes"?: NoUselessTemplateAttributes;
  /**
   * disallow unnecessary `v-bind` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/no-useless-v-bind.html no-useless-v-bind}
   */
  "vue/no-useless-v-bind"?: NoUselessVBind;
  /**
   * disallow key of `<template v-for>` placed on child elements
   *
   * @see {@link https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html no-v-for-template-key-on-child}
   */
  "vue/no-v-for-template-key-on-child"?: NoVForTemplateKeyOnChild;
  /**
   * disallow `key` attribute on `<template v-for>`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-v-for-template-key.html no-v-for-template-key}
   * @deprecated This rule is deprecated.
   */
  "vue/no-v-for-template-key"?: NoVForTemplateKey;
  /**
   * disallow use of v-html to prevent XSS attack
   *
   * @see {@link https://eslint.vuejs.org/rules/no-v-html.html no-v-html}
   */
  "vue/no-v-html"?: NoVHtml;
  /**
   * disallow adding an argument to `v-model` used in custom component
   *
   * @see {@link https://eslint.vuejs.org/rules/no-v-model-argument.html no-v-model-argument}
   * @deprecated This rule is deprecated.
   */
  "vue/no-v-model-argument"?: NoVModelArgument;
  /**
   * disallow v-text / v-html on component
   *
   * @see {@link https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html no-v-text-v-html-on-component}
   */
  "vue/no-v-text-v-html-on-component"?: NoVTextVHtmlOnComponent;
  /**
   * disallow use of v-text
   *
   * @see {@link https://eslint.vuejs.org/rules/no-v-text.html no-v-text}
   */
  "vue/no-v-text"?: NoVText;
  /**
   * disallow asynchronously registered `watch`
   *
   * @see {@link https://eslint.vuejs.org/rules/no-watch-after-await.html no-watch-after-await}
   */
  "vue/no-watch-after-await"?: NoWatchAfterAwait;
  /**
   * Enforce consistent line breaks after opening and before closing braces in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/object-curly-newline.html object-curly-newline}
   */
  "vue/object-curly-newline"?: ObjectCurlyNewline;
  /**
   * Enforce consistent spacing inside braces in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/object-curly-spacing.html object-curly-spacing}
   */
  "vue/object-curly-spacing"?: ObjectCurlySpacing;
  /**
   * Enforce placing object properties on separate lines in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/object-property-newline.html object-property-newline}
   */
  "vue/object-property-newline"?: ObjectPropertyNewline;
  /**
   * Require or disallow method and property shorthand syntax for object literals in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/object-shorthand.html object-shorthand}
   */
  "vue/object-shorthand"?: ObjectShorthand;
  /**
   * enforce that each component should be in its own file
   *
   * @see {@link https://eslint.vuejs.org/rules/one-component-per-file.html one-component-per-file}
   */
  "vue/one-component-per-file"?: OneComponentPerFile;
  /**
   * Enforce consistent linebreak style for operators in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/operator-linebreak.html operator-linebreak}
   */
  "vue/operator-linebreak"?: OperatorLinebreak;
  /**
   * enforce order of properties in components
   *
   * @see {@link https://eslint.vuejs.org/rules/order-in-components.html order-in-components}
   */
  "vue/order-in-components"?: OrderInComponents;
  /**
   * require or disallow padding lines between blocks
   *
   * @see {@link https://eslint.vuejs.org/rules/padding-line-between-blocks.html padding-line-between-blocks}
   */
  "vue/padding-line-between-blocks"?: PaddingLineBetweenBlocks;
  /**
   * require or disallow newlines between sibling tags in template
   *
   * @see {@link https://eslint.vuejs.org/rules/padding-line-between-tags.html padding-line-between-tags}
   */
  "vue/padding-line-between-tags"?: PaddingLineBetweenTags;
  /**
   * require or disallow padding lines in component definition
   *
   * @see {@link https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html padding-lines-in-component-definition}
   */
  "vue/padding-lines-in-component-definition"?: PaddingLinesInComponentDefinition;
  /**
   * enforce use of `defineOptions` instead of default export
   *
   * @see {@link https://eslint.vuejs.org/rules/prefer-define-options.html prefer-define-options}
   */
  "vue/prefer-define-options"?: PreferDefineOptions;
  /**
   * enforce import from 'vue' instead of import from '@vue/*'
   *
   * @see {@link https://eslint.vuejs.org/rules/prefer-import-from-vue.html prefer-import-from-vue}
   */
  "vue/prefer-import-from-vue"?: PreferImportFromVue;
  /**
   * enforce `Boolean` comes first in component prop types
   *
   * @see {@link https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html prefer-prop-type-boolean-first}
   */
  "vue/prefer-prop-type-boolean-first"?: PreferPropTypeBooleanFirst;
  /**
   * require static class names in template to be in a separate `class` attribute
   *
   * @see {@link https://eslint.vuejs.org/rules/prefer-separate-static-class.html prefer-separate-static-class}
   */
  "vue/prefer-separate-static-class"?: PreferSeparateStaticClass;
  /**
   * Require template literals instead of string concatenation in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/prefer-template.html prefer-template}
   */
  "vue/prefer-template"?: PreferTemplate;
  /**
   * require shorthand form attribute when `v-bind` value is `true`
   *
   * @see {@link https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html prefer-true-attribute-shorthand}
   */
  "vue/prefer-true-attribute-shorthand"?: PreferTrueAttributeShorthand;
  /**
   * require using `useTemplateRef` instead of `ref`/`shallowRef` for template refs
   *
   * @see {@link https://eslint.vuejs.org/rules/prefer-use-template-ref.html prefer-use-template-ref}
   */
  "vue/prefer-use-template-ref"?: PreferUseTemplateRef;
  /**
   * enforce specific casing for the Prop name in Vue components
   *
   * @see {@link https://eslint.vuejs.org/rules/prop-name-casing.html prop-name-casing}
   */
  "vue/prop-name-casing"?: PropNameCasing;
  /**
   * Require quotes around object literal property names in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/quote-props.html quote-props}
   */
  "vue/quote-props"?: QuoteProps;
  /**
   * require `v-bind:is` of `<component>` elements
   *
   * @see {@link https://eslint.vuejs.org/rules/require-component-is.html require-component-is}
   */
  "vue/require-component-is"?: RequireComponentIs;
  /**
   * require components to be the default export
   *
   * @see {@link https://eslint.vuejs.org/rules/require-default-export.html require-default-export}
   */
  "vue/require-default-export"?: RequireDefaultExport;
  /**
   * require default value for props
   *
   * @see {@link https://eslint.vuejs.org/rules/require-default-prop.html require-default-prop}
   */
  "vue/require-default-prop"?: RequireDefaultProp;
  /**
   * require the component to be directly exported
   *
   * @see {@link https://eslint.vuejs.org/rules/require-direct-export.html require-direct-export}
   */
  "vue/require-direct-export"?: RequireDirectExport;
  /**
   * require type definitions in emits
   *
   * @see {@link https://eslint.vuejs.org/rules/require-emit-validator.html require-emit-validator}
   */
  "vue/require-emit-validator"?: RequireEmitValidator;
  /**
   * require `emits` option with name triggered by `$emit()`
   *
   * @see {@link https://eslint.vuejs.org/rules/require-explicit-emits.html require-explicit-emits}
   */
  "vue/require-explicit-emits"?: RequireExplicitEmits;
  /**
   * require slots to be explicitly defined
   *
   * @see {@link https://eslint.vuejs.org/rules/require-explicit-slots.html require-explicit-slots}
   */
  "vue/require-explicit-slots"?: RequireExplicitSlots;
  /**
   * require declare public properties using `expose`
   *
   * @see {@link https://eslint.vuejs.org/rules/require-expose.html require-expose}
   */
  "vue/require-expose"?: RequireExpose;
  /**
   * require a certain macro variable name
   *
   * @see {@link https://eslint.vuejs.org/rules/require-macro-variable-name.html require-macro-variable-name}
   */
  "vue/require-macro-variable-name"?: RequireMacroVariableName;
  /**
   * require a name property in Vue components
   *
   * @see {@link https://eslint.vuejs.org/rules/require-name-property.html require-name-property}
   */
  "vue/require-name-property"?: RequireNameProperty;
  /**
   * require props to have a comment
   *
   * @see {@link https://eslint.vuejs.org/rules/require-prop-comment.html require-prop-comment}
   */
  "vue/require-prop-comment"?: RequirePropComment;
  /**
   * require prop type to be a constructor
   *
   * @see {@link https://eslint.vuejs.org/rules/require-prop-type-constructor.html require-prop-type-constructor}
   */
  "vue/require-prop-type-constructor"?: RequirePropTypeConstructor;
  /**
   * require type definitions in props
   *
   * @see {@link https://eslint.vuejs.org/rules/require-prop-types.html require-prop-types}
   */
  "vue/require-prop-types"?: RequirePropTypes;
  /**
   * enforce render function to always return value
   *
   * @see {@link https://eslint.vuejs.org/rules/require-render-return.html require-render-return}
   */
  "vue/require-render-return"?: RequireRenderReturn;
  /**
   * enforce properties of `$slots` to be used as a function
   *
   * @see {@link https://eslint.vuejs.org/rules/require-slots-as-functions.html require-slots-as-functions}
   */
  "vue/require-slots-as-functions"?: RequireSlotsAsFunctions;
  /**
   * require control the display of the content inside `<transition>`
   *
   * @see {@link https://eslint.vuejs.org/rules/require-toggle-inside-transition.html require-toggle-inside-transition}
   */
  "vue/require-toggle-inside-transition"?: RequireToggleInsideTransition;
  /**
   * enforce adding type declarations to object props
   *
   * @see {@link https://eslint.vuejs.org/rules/require-typed-object-prop.html require-typed-object-prop}
   */
  "vue/require-typed-object-prop"?: RequireTypedObjectProp;
  /**
   * require `ref` and `shallowRef` functions to be strongly typed
   *
   * @see {@link https://eslint.vuejs.org/rules/require-typed-ref.html require-typed-ref}
   */
  "vue/require-typed-ref"?: RequireTypedRef;
  /**
   * require `v-bind:key` with `v-for` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/require-v-for-key.html require-v-for-key}
   */
  "vue/require-v-for-key"?: RequireVForKey;
  /**
   * enforce props default values to be valid
   *
   * @see {@link https://eslint.vuejs.org/rules/require-valid-default-prop.html require-valid-default-prop}
   */
  "vue/require-valid-default-prop"?: RequireValidDefaultProp;
  /**
   * enforce using only specific component names
   *
   * @see {@link https://eslint.vuejs.org/rules/restricted-component-names.html restricted-component-names}
   */
  "vue/restricted-component-names"?: RestrictedComponentNames;
  /**
   * enforce that a return statement is present in computed property
   *
   * @see {@link https://eslint.vuejs.org/rules/return-in-computed-property.html return-in-computed-property}
   */
  "vue/return-in-computed-property"?: ReturnInComputedProperty;
  /**
   * enforce that a return statement is present in emits validator
   *
   * @see {@link https://eslint.vuejs.org/rules/return-in-emits-validator.html return-in-emits-validator}
   */
  "vue/return-in-emits-validator"?: ReturnInEmitsValidator;
  /**
   * enforce consistent indentation in `<script>`
   *
   * @see {@link https://eslint.vuejs.org/rules/script-indent.html script-indent}
   */
  "vue/script-indent"?: ScriptIndent;
  /**
   * require a line break before and after the contents of a singleline element
   *
   * @see {@link https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html singleline-html-element-content-newline}
   */
  "vue/singleline-html-element-content-newline"?: SinglelineHtmlElementContentNewline;
  /**
   * enforce specific casing for slot names
   *
   * @see {@link https://eslint.vuejs.org/rules/slot-name-casing.html slot-name-casing}
   */
  "vue/slot-name-casing"?: SlotNameCasing;
  /**
   * enforce sort-keys in a manner that is compatible with order-in-components
   *
   * @see {@link https://eslint.vuejs.org/rules/sort-keys.html sort-keys}
   */
  "vue/sort-keys"?: SortKeys;
  /**
   * Enforce consistent spacing inside parentheses in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/space-in-parens.html space-in-parens}
   */
  "vue/space-in-parens"?: SpaceInParens;
  /**
   * Require spacing around infix operators in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/space-infix-ops.html space-infix-ops}
   */
  "vue/space-infix-ops"?: SpaceInfixOps;
  /**
   * Enforce consistent spacing before or after unary operators in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/space-unary-ops.html space-unary-ops}
   */
  "vue/space-unary-ops"?: SpaceUnaryOps;
  /**
   * enforce static class names order
   *
   * @see {@link https://eslint.vuejs.org/rules/static-class-names-order.html static-class-names-order}
   */
  "vue/static-class-names-order"?: StaticClassNamesOrder;
  /**
   * Require or disallow spacing around embedded expressions of template strings in `<template>`
   *
   * @see {@link https://eslint.vuejs.org/rules/template-curly-spacing.html template-curly-spacing}
   */
  "vue/template-curly-spacing"?: TemplateCurlySpacing;
  /**
   * disallow usage of `this` in template
   *
   * @see {@link https://eslint.vuejs.org/rules/this-in-template.html this-in-template}
   */
  "vue/this-in-template"?: ThisInTemplate;
  /**
   * enforce usage of `exact` modifier on `v-on`
   *
   * @see {@link https://eslint.vuejs.org/rules/use-v-on-exact.html use-v-on-exact}
   */
  "vue/use-v-on-exact"?: UseVOnExact;
  /**
   * enforce `v-bind` directive style
   *
   * @see {@link https://eslint.vuejs.org/rules/v-bind-style.html v-bind-style}
   */
  "vue/v-bind-style"?: VBindStyle;
  /**
   * enforce `v-for` directive's delimiter style
   *
   * @see {@link https://eslint.vuejs.org/rules/v-for-delimiter-style.html v-for-delimiter-style}
   */
  "vue/v-for-delimiter-style"?: VForDelimiterStyle;
  /**
   * require key attribute for conditionally rendered repeated components
   *
   * @see {@link https://eslint.vuejs.org/rules/v-if-else-key.html v-if-else-key}
   */
  "vue/v-if-else-key"?: VIfElseKey;
  /**
   * enforce v-on event naming style on custom components in template
   *
   * @see {@link https://eslint.vuejs.org/rules/v-on-event-hyphenation.html v-on-event-hyphenation}
   */
  "vue/v-on-event-hyphenation"?: VOnEventHyphenation;
  /**
   * enforce writing style for handlers in `v-on` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/v-on-handler-style.html v-on-handler-style}
   */
  "vue/v-on-handler-style"?: VOnHandlerStyle;
  /**
   * enforce `v-on` directive style
   *
   * @see {@link https://eslint.vuejs.org/rules/v-on-style.html v-on-style}
   */
  "vue/v-on-style"?: VOnStyle;
  /**
   * enforce `v-slot` directive style
   *
   * @see {@link https://eslint.vuejs.org/rules/v-slot-style.html v-slot-style}
   */
  "vue/v-slot-style"?: VSlotStyle;
  /**
   * require valid attribute names
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-attribute-name.html valid-attribute-name}
   */
  "vue/valid-attribute-name"?: ValidAttributeName;
  /**
   * enforce valid `defineEmits` compiler macro
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-define-emits.html valid-define-emits}
   */
  "vue/valid-define-emits"?: ValidDefineEmits;
  /**
   * enforce valid `defineOptions` compiler macro
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-define-options.html valid-define-options}
   */
  "vue/valid-define-options"?: ValidDefineOptions;
  /**
   * enforce valid `defineProps` compiler macro
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-define-props.html valid-define-props}
   */
  "vue/valid-define-props"?: ValidDefineProps;
  /**
   * require valid keys in model option
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-model-definition.html valid-model-definition}
   * @deprecated This rule is deprecated.
   */
  "vue/valid-model-definition"?: ValidModelDefinition;
  /**
   * enforce valid `nextTick` function calls
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-next-tick.html valid-next-tick}
   */
  "vue/valid-next-tick"?: ValidNextTick;
  /**
   * enforce valid template root
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-template-root.html valid-template-root}
   */
  "vue/valid-template-root"?: ValidTemplateRoot;
  /**
   * enforce valid `.sync` modifier on `v-bind` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-bind-sync.html valid-v-bind-sync}
   * @deprecated This rule is deprecated.
   */
  "vue/valid-v-bind-sync"?: ValidVBindSync;
  /**
   * enforce valid `v-bind` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-bind.html valid-v-bind}
   */
  "vue/valid-v-bind"?: ValidVBind;
  /**
   * enforce valid `v-cloak` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-cloak.html valid-v-cloak}
   */
  "vue/valid-v-cloak"?: ValidVCloak;
  /**
   * enforce valid `v-else-if` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-else-if.html valid-v-else-if}
   */
  "vue/valid-v-else-if"?: ValidVElseIf;
  /**
   * enforce valid `v-else` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-else.html valid-v-else}
   */
  "vue/valid-v-else"?: ValidVElse;
  /**
   * enforce valid `v-for` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-for.html valid-v-for}
   */
  "vue/valid-v-for"?: ValidVFor;
  /**
   * enforce valid `v-html` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-html.html valid-v-html}
   */
  "vue/valid-v-html"?: ValidVHtml;
  /**
   * enforce valid `v-if` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-if.html valid-v-if}
   */
  "vue/valid-v-if"?: ValidVIf;
  /**
   * enforce valid `v-is` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-is.html valid-v-is}
   */
  "vue/valid-v-is"?: ValidVIs;
  /**
   * enforce valid `v-memo` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-memo.html valid-v-memo}
   */
  "vue/valid-v-memo"?: ValidVMemo;
  /**
   * enforce valid `v-model` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-model.html valid-v-model}
   */
  "vue/valid-v-model"?: ValidVModel;
  /**
   * enforce valid `v-on` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-on.html valid-v-on}
   */
  "vue/valid-v-on"?: ValidVOn;
  /**
   * enforce valid `v-once` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-once.html valid-v-once}
   */
  "vue/valid-v-once"?: ValidVOnce;
  /**
   * enforce valid `v-pre` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-pre.html valid-v-pre}
   */
  "vue/valid-v-pre"?: ValidVPre;
  /**
   * enforce valid `v-show` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-show.html valid-v-show}
   */
  "vue/valid-v-show"?: ValidVShow;
  /**
   * enforce valid `v-slot` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-slot.html valid-v-slot}
   */
  "vue/valid-v-slot"?: ValidVSlot;
  /**
   * enforce valid `v-text` directives
   *
   * @see {@link https://eslint.vuejs.org/rules/valid-v-text.html valid-v-text}
   */
  "vue/valid-v-text"?: ValidVText;
}
