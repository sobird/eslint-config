/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

/**
 * @minItems 1
 * @maxItems 1
 */
export type AccessorPairs = [
  {
    getWithoutSet?: boolean;
    setWithoutGet?: boolean;
    enforceForClassMembers?: boolean;
    enforceForTSTypes?: boolean;
  }
];
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
/**
 * @minItems 1
 * @maxItems 1
 */
export type ArrayCallbackReturn = [
  {
    allowImplicit?: boolean;
    checkForEach?: boolean;
    allowVoid?: boolean;
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
export type ArrowBodyStyle =
  | []
  | ["always" | "never"]
  | []
  | ["as-needed"]
  | [
      "as-needed",
      {
        requireReturnForObjectLiteral?: boolean;
      }
    ];
/**
 * @minItems 2
 * @maxItems 2
 */
export type ArrowParens = [
  "always" | "as-needed",
  {
    requireForBlockBody?: boolean;
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
 * @minItems 0
 * @maxItems 0
 */
export type BlockScopedVar = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type BlockSpacing = ["always" | "never"];
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
export type CallbackReturn = [string[]];
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
/**
 * @minItems 2
 * @maxItems 2
 */
export type CapitalizedComments = [
  "always" | "never",
  (
    | {
        ignorePattern?: string;
        ignoreInlineComments?: boolean;
        ignoreConsecutiveComments?: boolean;
      }
    | {
        line?: {
          ignorePattern?: string;
          ignoreInlineComments?: boolean;
          ignoreConsecutiveComments?: boolean;
        };
        block?: {
          ignorePattern?: string;
          ignoreInlineComments?: boolean;
          ignoreConsecutiveComments?: boolean;
        };
      }
  )
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ClassMethodsUseThis = [
  {
    exceptMethods?: string[];
    enforceForClassFields?: boolean;
    ignoreOverrideMethods?: boolean;
    ignoreClassesWithImplements?: "all" | "public-fields";
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
export type Complexity = [
  | number
  | {
      maximum?: number;
      max?: number;
      variant?: "classic" | "modified";
    }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type ComputedPropertySpacing = [
  "always" | "never",
  {
    enforceForClassMembers?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ConsistentReturn = [
  {
    treatUndefinedAsUnspecified?: boolean;
  }
];
export type ConsistentThis = string[];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ConstructorSuper = [];
export type Curly =
  | []
  | ["all"]
  | []
  | ["multi" | "multi-line" | "multi-or-nest"]
  | ["multi" | "multi-line" | "multi-or-nest", "consistent"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DefaultCase = [
  {
    commentPattern?: string;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type DefaultCaseLast = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type DefaultParamLast = [];
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
export type EolLast = ["always" | "never" | "unix" | "windows"];
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
 * @minItems 0
 * @maxItems 0
 */
export type ForDirection = [];
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
export type FuncNameMatching =
  | []
  | ["always" | "never"]
  | [
      "always" | "never",
      {
        considerPropertyDescriptor?: boolean;
        includeCommonJSModuleExports?: boolean;
      }
    ]
  | []
  | [
      {
        considerPropertyDescriptor?: boolean;
        includeCommonJSModuleExports?: boolean;
      }
    ];
export type FuncNames =
  | []
  | ["always" | "as-needed" | "never"]
  | [
      "always" | "as-needed" | "never",
      {
        generators?: "always" | "as-needed" | "never";
      }
    ];
/**
 * @minItems 2
 * @maxItems 2
 */
export type FuncStyle = [
  "declaration" | "expression",
  {
    allowArrowFunctions?: boolean;
    allowTypeAnnotation?: boolean;
    overrides?: {
      namedExports?: "declaration" | "expression" | "ignore";
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type FunctionCallArgumentNewline = ["always" | "never" | "consistent"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type FunctionParenNewline = [
  | ("always" | "never" | "consistent" | "multiline" | "multiline-arguments")
  | {
      minItems?: number;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type GeneratorStarSpacing = [
  | ("before" | "after" | "both" | "neither")
  | {
      before?: boolean;
      after?: boolean;
      named?:
        | ("before" | "after" | "both" | "neither")
        | {
            before?: boolean;
            after?: boolean;
          };
      anonymous?:
        | ("before" | "after" | "both" | "neither")
        | {
            before?: boolean;
            after?: boolean;
          };
      method?:
        | ("before" | "after" | "both" | "neither")
        | {
            before?: boolean;
            after?: boolean;
          };
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type GetterReturn = [
  {
    allowImplicit?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type GlobalRequire = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type GroupedAccessorPairs = [
  "anyOrder" | "getBeforeSet" | "setBeforeGet",
  {
    enforceForTSTypes?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type GuardForIn = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type HandleCallbackErr = [string];
export type IdBlacklist = string[];
export type IdDenylist = string[];
/**
 * @minItems 1
 * @maxItems 1
 */
export type IdLength = [
  {
    min?: number;
    max?: number;
    exceptions?: string[];
    exceptionPatterns?: string[];
    properties?: "always" | "never";
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type IdMatch = [
  string,
  {
    properties?: boolean;
    classFields?: boolean;
    onlyDeclarations?: boolean;
    ignoreDestructuring?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ImplicitArrowLinebreak = ["beside" | "below"];
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
 * @minItems 2
 * @maxItems 2
 */
export type IndentLegacy = [
  "tab" | number,
  {
    SwitchCase?: number;
    VariableDeclarator?:
      | number
      | {
          var?: number;
          let?: number;
          const?: number;
          [k: string]: unknown;
        };
    outerIIFEBody?: number;
    MemberExpression?: number;
    FunctionDeclaration?: {
      parameters?: number | "first";
      body?: number;
      [k: string]: unknown;
    };
    FunctionExpression?: {
      parameters?: number | "first";
      body?: number;
      [k: string]: unknown;
    };
    CallExpression?: {
      parameters?: number | "first";
      [k: string]: unknown;
    };
    ArrayExpression?: number | "first";
    ObjectExpression?: number | "first";
  }
];
export type InitDeclarations =
  | []
  | ["always"]
  | []
  | ["never"]
  | [
      "never",
      {
        ignoreForLoopInit?: boolean;
      }
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxQuotes = ["prefer-single" | "prefer-double"];
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
export type LineCommentPosition = [
  | ("above" | "beside")
  | {
      position?: "above" | "beside";
      ignorePattern?: string;
      applyDefaultPatterns?: boolean;
      applyDefaultIgnorePatterns?: boolean;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type LinebreakStyle = ["unix" | "windows"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type LinesAroundComment = [
  {
    beforeBlockComment?: boolean;
    afterBlockComment?: boolean;
    beforeLineComment?: boolean;
    afterLineComment?: boolean;
    allowBlockStart?: boolean;
    allowBlockEnd?: boolean;
    allowClassStart?: boolean;
    allowClassEnd?: boolean;
    allowObjectStart?: boolean;
    allowObjectEnd?: boolean;
    allowArrayStart?: boolean;
    allowArrayEnd?: boolean;
    ignorePattern?: string;
    applyDefaultIgnorePatterns?: boolean;
    afterHashbangComment?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type LinesAroundDirective = [
  | ("always" | "never")
  | {
      before?: "always" | "never";
      after?: "always" | "never";
    }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type LinesBetweenClassMembers = [
  (
    | {
        /**
         * @minItems 1
         */
        enforce: [
          {
            blankLine: "always" | "never";
            prev: "method" | "field" | "*";
            next: "method" | "field" | "*";
          },
          ...{
            blankLine: "always" | "never";
            prev: "method" | "field" | "*";
            next: "method" | "field" | "*";
          }[]
        ];
      }
    | ("always" | "never")
  ),
  {
    exceptAfterSingleLine?: boolean;
  }
];
export type LogicalAssignmentOperators = (
  | []
  | ["always"]
  | [
      "always",
      {
        enforceForIfStatements?: boolean;
      }
    ]
  | ["never"]
) &
  unknown[];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxClassesPerFile = [
  | number
  | {
      ignoreExpressions?: boolean;
      max?: number;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxDepth = [
  | number
  | {
      maximum?: number;
      max?: number;
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
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreStrings?: boolean;
        ignoreUrls?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreTrailingComments?: boolean;
      }
    | number
  ),
  (
    | {
        code?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreStrings?: boolean;
        ignoreUrls?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreTrailingComments?: boolean;
      }
    | number
  ),
  {
    code?: number;
    comments?: number;
    tabWidth?: number;
    ignorePattern?: string;
    ignoreComments?: boolean;
    ignoreStrings?: boolean;
    ignoreUrls?: boolean;
    ignoreTemplateLiterals?: boolean;
    ignoreRegExpLiterals?: boolean;
    ignoreTrailingComments?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxLines = [
  | number
  | {
      max?: number;
      skipComments?: boolean;
      skipBlankLines?: boolean;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxLinesPerFunction = [
  | {
      max?: number;
      skipComments?: boolean;
      skipBlankLines?: boolean;
      IIFEs?: boolean;
    }
  | number
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxNestedCallbacks = [
  | number
  | {
      maximum?: number;
      max?: number;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxParams = [
  | number
  | {
      maximum?: number;
      max?: number;
      /**
       * Whether to count a `this` declaration when the type is `void`.
       */
      countVoidThis?: boolean;
      /**
       * Whether to count a `this` declaration.
       */
      countThis?: "never" | "except-void" | "always";
    }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type MaxStatements = [
  (
    | number
    | {
        maximum?: number;
        max?: number;
      }
  ),
  {
    ignoreTopLevelFunctions?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxStatementsPerLine = [
  {
    max?: number;
  }
];
export type MultilineCommentStyle =
  | []
  | ["starred-block" | "bare-block"]
  | []
  | ["separate-lines"]
  | [
      "separate-lines",
      {
        checkJSDoc?: boolean;
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
export type NewCap = [
  {
    newIsCap?: boolean;
    capIsNew?: boolean;
    newIsCapExceptions?: string[];
    newIsCapExceptionPattern?: string;
    capIsNewExceptions?: string[];
    capIsNewExceptionPattern?: string;
    properties?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NewParens = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NewlineAfterVar = ["never" | "always"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NewlineBeforeReturn = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NewlinePerChainedCall = [
  {
    ignoreChainWithDepth?: number;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoAlert = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoArrayConstructor = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoAsyncPromiseExecutor = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoAwaitInLoop = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoBitwise = [
  {
    allow?: ("^" | "|" | "&" | "<<" | ">>" | ">>>" | "^=" | "|=" | "&=" | "<<=" | ">>=" | ">>>=" | "~")[];
    int32Hint?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoBufferConstructor = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoCaller = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoCaseDeclarations = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoCatchShadow = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoClassAssign = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoCompareNegZero = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoCondAssign = ["except-parens" | "always"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoConfusingArrow = [
  {
    allowParens?: boolean;
    onlyOneSimpleParam?: boolean;
  }
];
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
 * @minItems 0
 * @maxItems 0
 */
export type NoConstAssign = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoConstantBinaryExpression = [];
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
export type NoConstructorReturn = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoContinue = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoControlRegex = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDebugger = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeleteVar = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDivRegex = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDupeArgs = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDupeClassMembers = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDupeElseIf = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDupeKeys = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDuplicateCase = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDuplicateImports = [
  {
    includeExports?: boolean;
    allowSeparateTypeImports?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoElseReturn = [
  {
    allowElseIf?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoEmpty = [
  {
    allowEmptyCatch?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoEmptyCharacterClass = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoEmptyFunction = [
  {
    allow?: (
      | "functions"
      | "arrowFunctions"
      | "generatorFunctions"
      | "methods"
      | "generatorMethods"
      | "getters"
      | "setters"
      | "constructors"
      | "asyncFunctions"
      | "asyncMethods"
      | "privateConstructors"
      | "protectedConstructors"
      | "decoratedFunctions"
      | "overrideMethods"
    )[];
  }
];
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
export type NoEmptyStaticBlock = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoEqNull = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoEval = [
  {
    allowIndirect?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoExAssign = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoExtendNative = [
  {
    exceptions?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoExtraBind = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoExtraBooleanCast = [
  | {
      enforceForInnerExpressions?: boolean;
    }
  | {
      enforceForLogicalOperands?: boolean;
    }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoExtraLabel = [];
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
 * @minItems 0
 * @maxItems 0
 */
export type NoExtraSemi = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoFallthrough = [
  {
    commentPattern?: string;
    allowEmptyCase?: boolean;
    reportUnusedFallthroughComment?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoFloatingDecimal = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoFuncAssign = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoGlobalAssign = [
  {
    exceptions?: string[];
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
 * @minItems 1
 * @maxItems 1
 */
export type NoImplicitGlobals = [
  {
    lexicalBindings?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoImpliedEval = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoImportAssign = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoInlineComments = [
  {
    ignorePattern?: string;
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type NoInnerDeclarations = [
  "functions" | "both",
  {
    blockScopedFunctions?: "allow" | "disallow";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoInvalidRegexp = [
  {
    allowConstructorFlags?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoInvalidThis = [
  {
    capIsConstructor?: boolean;
  }
];
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
export type NoIterator = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoLabelVar = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoLabels = [
  {
    allowLoop?: boolean;
    allowSwitch?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoLoneBlocks = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoLonelyIf = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoLoopFunc = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoLossOfPrecision = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMagicNumbers = [
  {
    detectObjects?: boolean;
    enforceConst?: boolean;
    ignore?: (number | string)[];
    ignoreArrayIndexes?: boolean;
    ignoreDefaultValues?: boolean;
    ignoreClassFieldInitialValues?: boolean;
    ignoreEnums?: boolean;
    ignoreNumericLiteralTypes?: boolean;
    ignoreReadonlyClassProperties?: boolean;
    ignoreTypeIndexes?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMisleadingCharacterClass = [
  {
    allowEscape?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMixedOperators = [
  {
    groups?: [
      (
        | "+"
        | "-"
        | "*"
        | "/"
        | "%"
        | "**"
        | "&"
        | "|"
        | "^"
        | "~"
        | "<<"
        | ">>"
        | ">>>"
        | "=="
        | "!="
        | "==="
        | "!=="
        | ">"
        | ">="
        | "<"
        | "<="
        | "&&"
        | "||"
        | "in"
        | "instanceof"
        | "?:"
        | "??"
      ),
      (
        | "+"
        | "-"
        | "*"
        | "/"
        | "%"
        | "**"
        | "&"
        | "|"
        | "^"
        | "~"
        | "<<"
        | ">>"
        | ">>>"
        | "=="
        | "!="
        | "==="
        | "!=="
        | ">"
        | ">="
        | "<"
        | "<="
        | "&&"
        | "||"
        | "in"
        | "instanceof"
        | "?:"
        | "??"
      ),
      ...(
        | "+"
        | "-"
        | "*"
        | "/"
        | "%"
        | "**"
        | "&"
        | "|"
        | "^"
        | "~"
        | "<<"
        | ">>"
        | ">>>"
        | "=="
        | "!="
        | "==="
        | "!=="
        | ">"
        | ">="
        | "<"
        | "<="
        | "&&"
        | "||"
        | "in"
        | "instanceof"
        | "?:"
        | "??"
      )[]
    ][];
    allowSamePrecedence?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMixedRequires = [
  | boolean
  | {
      grouping?: boolean;
      allowCall?: boolean;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMixedSpacesAndTabs = ["smart-tabs" | true | false];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMultiAssign = [
  {
    ignoreNonDeclaration?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMultiSpaces = [
  {
    exceptions?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^([A-Z][a-z]*)+$".
       */
      [k: string]: boolean;
    };
    ignoreEOLComments?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoMultiStr = [];
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
 * @minItems 1
 * @maxItems 1
 */
export type NoNativeReassign = [
  {
    exceptions?: string[];
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
export type NoNegatedInLhs = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNestedTernary = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNew = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNewFunc = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNewNativeNonconstructor = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNewObject = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNewRequire = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNewSymbol = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNewWrappers = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNonoctalDecimalEscape = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoObjCalls = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoObjectConstructor = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoOctal = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoOctalEscape = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoParamReassign = [
  | {
      props?: false;
    }
  | {
      props?: true;
      ignorePropertyModificationsFor?: string[];
      ignorePropertyModificationsForRegex?: string[];
    }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoPathConcat = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoPlusplus = [
  {
    allowForLoopAfterthoughts?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoProcessEnv = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoProcessExit = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoPromiseExecutorReturn = [
  {
    allowVoid?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoProto = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoPrototypeBuiltins = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRedeclare = [
  {
    builtinGlobals?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoRegexSpaces = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRestrictedExports = [
  | {
      restrictedNamedExports?: string[];
      restrictedNamedExportsPattern?: string;
    }
  | {
      restrictedNamedExports?: string[];
      restrictedNamedExportsPattern?: string;
      restrictDefaultExports?: {
        direct?: boolean;
        named?: boolean;
        defaultFrom?: boolean;
        namedFrom?: boolean;
        namespaceFrom?: boolean;
      };
    }
];
export type NoRestrictedGlobals =
  | (
      | string
      | {
          name: string;
          message?: string;
        }
    )[]
  | []
  | [
      {
        /**
         * @minItems 0
         */
        globals: (
          | string
          | {
              name: string;
              message?: string;
            }
        )[];
        checkGlobalObject?: boolean;
        globalObjects?: string[];
      }
    ];
export type NoRestrictedImports =
  | (
      | string
      | {
          name: string;
          message?: string;
          importNames?: string[];
          allowImportNames?: string[];
          /**
           * Whether to allow type-only imports for a path.
           */
          allowTypeImports?: boolean;
        }
    )[]
  | []
  | [
      {
        paths?: (
          | string
          | {
              name: string;
              message?: string;
              importNames?: string[];
              allowImportNames?: string[];
              /**
               * Whether to allow type-only imports for a path.
               */
              allowTypeImports?: boolean;
            }
        )[];
        patterns?:
          | string[]
          | (
              | {
                  [k: string]: unknown;
                }
              | {
                  [k: string]: unknown;
                }
            )[];
      }
    ];
export type NoRestrictedModules =
  | (
      | string
      | {
          name: string;
          message?: string;
        }
    )[]
  | {
      paths?: (
        | string
        | {
            name: string;
            message?: string;
          }
      )[];
      patterns?: string[];
    }[];
export type NoRestrictedProperties = {
  [k: string]: unknown;
}[];
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
 * @minItems 1
 * @maxItems 1
 */
export type NoReturnAssign = ["except-parens" | "always"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoReturnAwait = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoScriptUrl = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoSelfAssign = [
  {
    props?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSelfCompare = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoSequences = [
  {
    allowInParentheses?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSetterReturn = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoShadow = [
  {
    builtinGlobals?: boolean;
    hoist?: "all" | "functions" | "never" | "types" | "functions-and-types";
    allow?: string[];
    ignoreOnInitialization?: boolean;
    ignoreTypeValueShadow?: boolean;
    ignoreFunctionTypeParameterNameValueShadow?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoShadowRestrictedNames = [
  {
    reportGlobalThis?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSpacedFunc = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSparseArrays = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoSync = [
  {
    allowAtRootLevel?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoTabs = [
  {
    allowIndentationTabs?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoTemplateCurlyInString = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoTernary = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoThisBeforeSuper = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoThrowLiteral = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoTrailingSpaces = [
  {
    skipBlankLines?: boolean;
    ignoreComments?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnassignedVars = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUndef = [
  {
    typeof?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUndefInit = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUndefined = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnderscoreDangle = [
  {
    allow?: string[];
    allowAfterThis?: boolean;
    allowAfterSuper?: boolean;
    allowAfterThisConstructor?: boolean;
    enforceInMethodNames?: boolean;
    allowFunctionParams?: boolean;
    enforceInClassFields?: boolean;
    allowInArrayDestructuring?: boolean;
    allowInObjectDestructuring?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnexpectedMultiline = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnmodifiedLoopCondition = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnneededTernary = [
  {
    defaultAssignment?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnreachable = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnreachableLoop = [
  {
    ignore?: ("WhileStatement" | "DoWhileStatement" | "ForStatement" | "ForInStatement" | "ForOfStatement")[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnsafeFinally = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnsafeNegation = [
  {
    enforceForOrderingRelations?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnsafeOptionalChaining = [
  {
    disallowArithmeticOperators?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnusedExpressions = [
  {
    allowShortCircuit?: boolean;
    allowTernary?: boolean;
    allowTaggedTemplates?: boolean;
    enforceForJSX?: boolean;
    ignoreDirectives?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnusedLabels = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnusedPrivateClassMembers = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnusedVars = [
  | ("all" | "local")
  | {
      vars?: "all" | "local";
      varsIgnorePattern?: string;
      args?: "all" | "after-used" | "none";
      ignoreRestSiblings?: boolean;
      argsIgnorePattern?: string;
      caughtErrors?: "all" | "none";
      caughtErrorsIgnorePattern?: string;
      destructuredArrayIgnorePattern?: string;
      ignoreClassWithStaticInitBlock?: boolean;
      ignoreUsingDeclarations?: boolean;
      reportUsedIgnorePattern?: boolean;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUseBeforeDefine = [
  | "nofunc"
  | {
      functions?: boolean;
      classes?: boolean;
      variables?: boolean;
      allowNamedExports?: boolean;
      enums?: boolean;
      typedefs?: boolean;
      ignoreTypeReferences?: boolean;
    }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessAssignment = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessBackreference = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessCall = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessCatch = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUselessComputedKey = [
  {
    enforceForClassMembers?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessConcat = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessConstructor = [];
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
export type NoUselessRename = [
  {
    ignoreDestructuring?: boolean;
    ignoreImport?: boolean;
    ignoreExport?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessReturn = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoVar = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoVoid = [
  {
    allowAsStatement?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoWarningComments = [
  {
    terms?: string[];
    location?: "start" | "anywhere";
    /**
     * @minItems 1
     */
    decoration?: [string, ...string[]];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoWhitespaceBeforeProperty = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoWith = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type NonblockStatementBodyPosition = [
  "beside" | "below" | "any",
  {
    overrides?: {
      if?: "beside" | "below" | "any";
      else?: "beside" | "below" | "any";
      while?: "beside" | "below" | "any";
      do?: "beside" | "below" | "any";
      for?: "beside" | "below" | "any";
    };
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
 * @minItems 1
 * @maxItems 1
 */
export type OneVar = [
  | ("always" | "never" | "consecutive")
  | {
      separateRequires?: boolean;
      var?: "always" | "never" | "consecutive";
      let?: "always" | "never" | "consecutive";
      const?: "always" | "never" | "consecutive";
      using?: "always" | "never" | "consecutive";
      awaitUsing?: "always" | "never" | "consecutive";
    }
  | {
      initialized?: "always" | "never" | "consecutive";
      uninitialized?: "always" | "never" | "consecutive";
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type OneVarDeclarationPerLine = ["always" | "initializations"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type OperatorAssignment = ["always" | "never"];
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
 * @minItems 2
 * @maxItems 2
 */
export type PaddedBlocks = [
  (
    | ("always" | "never")
    | {
        blocks?: "always" | "never";
        switches?: "always" | "never";
        classes?: "always" | "never";
      }
  ),
  {
    allowSingleLineBlocks?: boolean;
  }
];
export type PaddingLineBetweenStatements = {
  blankLine: "any" | "never" | "always";
  prev:
    | (
        | "*"
        | "block-like"
        | "cjs-export"
        | "cjs-import"
        | "directive"
        | "expression"
        | "iife"
        | "multiline-block-like"
        | "multiline-expression"
        | "multiline-const"
        | "multiline-let"
        | "multiline-var"
        | "singleline-const"
        | "singleline-let"
        | "singleline-var"
        | "block"
        | "empty"
        | "function"
        | "break"
        | "case"
        | "class"
        | "const"
        | "continue"
        | "debugger"
        | "default"
        | "do"
        | "export"
        | "for"
        | "if"
        | "import"
        | "let"
        | "return"
        | "switch"
        | "throw"
        | "try"
        | "var"
        | "while"
        | "with"
      )
    | [
        (
          | "*"
          | "block-like"
          | "cjs-export"
          | "cjs-import"
          | "directive"
          | "expression"
          | "iife"
          | "multiline-block-like"
          | "multiline-expression"
          | "multiline-const"
          | "multiline-let"
          | "multiline-var"
          | "singleline-const"
          | "singleline-let"
          | "singleline-var"
          | "block"
          | "empty"
          | "function"
          | "break"
          | "case"
          | "class"
          | "const"
          | "continue"
          | "debugger"
          | "default"
          | "do"
          | "export"
          | "for"
          | "if"
          | "import"
          | "let"
          | "return"
          | "switch"
          | "throw"
          | "try"
          | "var"
          | "while"
          | "with"
        ),
        ...(
          | "*"
          | "block-like"
          | "cjs-export"
          | "cjs-import"
          | "directive"
          | "expression"
          | "iife"
          | "multiline-block-like"
          | "multiline-expression"
          | "multiline-const"
          | "multiline-let"
          | "multiline-var"
          | "singleline-const"
          | "singleline-let"
          | "singleline-var"
          | "block"
          | "empty"
          | "function"
          | "break"
          | "case"
          | "class"
          | "const"
          | "continue"
          | "debugger"
          | "default"
          | "do"
          | "export"
          | "for"
          | "if"
          | "import"
          | "let"
          | "return"
          | "switch"
          | "throw"
          | "try"
          | "var"
          | "while"
          | "with"
        )[]
      ];
  next:
    | (
        | "*"
        | "block-like"
        | "cjs-export"
        | "cjs-import"
        | "directive"
        | "expression"
        | "iife"
        | "multiline-block-like"
        | "multiline-expression"
        | "multiline-const"
        | "multiline-let"
        | "multiline-var"
        | "singleline-const"
        | "singleline-let"
        | "singleline-var"
        | "block"
        | "empty"
        | "function"
        | "break"
        | "case"
        | "class"
        | "const"
        | "continue"
        | "debugger"
        | "default"
        | "do"
        | "export"
        | "for"
        | "if"
        | "import"
        | "let"
        | "return"
        | "switch"
        | "throw"
        | "try"
        | "var"
        | "while"
        | "with"
      )
    | [
        (
          | "*"
          | "block-like"
          | "cjs-export"
          | "cjs-import"
          | "directive"
          | "expression"
          | "iife"
          | "multiline-block-like"
          | "multiline-expression"
          | "multiline-const"
          | "multiline-let"
          | "multiline-var"
          | "singleline-const"
          | "singleline-let"
          | "singleline-var"
          | "block"
          | "empty"
          | "function"
          | "break"
          | "case"
          | "class"
          | "const"
          | "continue"
          | "debugger"
          | "default"
          | "do"
          | "export"
          | "for"
          | "if"
          | "import"
          | "let"
          | "return"
          | "switch"
          | "throw"
          | "try"
          | "var"
          | "while"
          | "with"
        ),
        ...(
          | "*"
          | "block-like"
          | "cjs-export"
          | "cjs-import"
          | "directive"
          | "expression"
          | "iife"
          | "multiline-block-like"
          | "multiline-expression"
          | "multiline-const"
          | "multiline-let"
          | "multiline-var"
          | "singleline-const"
          | "singleline-let"
          | "singleline-var"
          | "block"
          | "empty"
          | "function"
          | "break"
          | "case"
          | "class"
          | "const"
          | "continue"
          | "debugger"
          | "default"
          | "do"
          | "export"
          | "for"
          | "if"
          | "import"
          | "let"
          | "return"
          | "switch"
          | "throw"
          | "try"
          | "var"
          | "while"
          | "with"
        )[]
      ];
}[];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferArrowCallback = [
  {
    allowNamedFunctions?: boolean;
    allowUnboundThis?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferConst = [
  {
    destructuring?: "any" | "all";
    ignoreReadBeforeAssign?: boolean;
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type PreferDestructuring = [
  (
    | {
        VariableDeclarator?: {
          array?: boolean;
          object?: boolean;
        };
        AssignmentExpression?: {
          array?: boolean;
          object?: boolean;
        };
      }
    | {
        array?: boolean;
        object?: boolean;
      }
  ),
  {
    enforceForRenamedProperties?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferExponentiationOperator = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferNamedCaptureGroup = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferNumericLiterals = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferObjectHasOwn = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferObjectSpread = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferPromiseRejectErrors = [
  {
    allowEmptyReject?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferReflect = [
  {
    exceptions?: (
      | "apply"
      | "call"
      | "delete"
      | "defineProperty"
      | "getOwnPropertyDescriptor"
      | "getPrototypeOf"
      | "setPrototypeOf"
      | "isExtensible"
      | "getOwnPropertyNames"
      | "preventExtensions"
    )[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferRegexLiterals = [
  {
    disallowRedundantWrapping?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferRestParams = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferSpread = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferTemplate = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreserveCaughtError = [
  {
    /**
     * Requires the catch blocks to always have the caught error parameter so it is not discarded.
     */
    requireCatchParameter?: boolean;
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
 * @maxItems 1
 */
export type Radix = ["always" | "as-needed"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireAtomicUpdates = [
  {
    allowProperties?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireAwait = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireUnicodeRegexp = [
  {
    requireFlag?: "u" | "v";
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RequireYield = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RestSpreadSpacing = ["always" | "never"];
export type Semi =
  | []
  | ["never"]
  | [
      "never",
      {
        beforeStatementContinuationChars?: "always" | "any" | "never";
      }
    ]
  | []
  | ["always"]
  | [
      "always",
      {
        omitLastInOneLineBlock?: boolean;
        omitLastInOneLineClassBody?: boolean;
      }
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SemiSpacing = [
  {
    before?: boolean;
    after?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SemiStyle = ["last" | "first"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SortImports = [
  {
    ignoreCase?: boolean;
    /**
     * @minItems 4
     * @maxItems 4
     */
    memberSyntaxSortOrder?: [
      "none" | "all" | "multiple" | "single",
      "none" | "all" | "multiple" | "single",
      "none" | "all" | "multiple" | "single",
      "none" | "all" | "multiple" | "single"
    ];
    ignoreDeclarationSort?: boolean;
    ignoreMemberSort?: boolean;
    allowSeparatedGroups?: boolean;
  }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type SortKeys = [
  "asc" | "desc",
  {
    caseSensitive?: boolean;
    natural?: boolean;
    minKeys?: number;
    allowLineSeparatedGroups?: boolean;
    ignoreComputedKeys?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SortVars = [
  {
    ignoreCase?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SpaceBeforeBlocks = [
  | ("always" | "never")
  | {
      keywords?: "always" | "never" | "off";
      functions?: "always" | "never" | "off";
      classes?: "always" | "never" | "off";
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SpaceBeforeFunctionParen = [
  | ("always" | "never")
  | {
      anonymous?: "always" | "never" | "ignore";
      named?: "always" | "never" | "ignore";
      asyncArrow?: "always" | "never" | "ignore";
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
 * @minItems 2
 * @maxItems 2
 */
export type SpacedComment = [
  "always" | "never",
  {
    exceptions?: string[];
    markers?: string[];
    line?: {
      exceptions?: string[];
      markers?: string[];
    };
    block?: {
      exceptions?: string[];
      markers?: string[];
      balanced?: boolean;
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Strict = ["never" | "global" | "function" | "safe"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SwitchColonSpacing = [
  {
    before?: boolean;
    after?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type SymbolDescription = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type TemplateCurlySpacing = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type TemplateTagSpacing = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type UnicodeBom = ["always" | "never"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type UseIsnan = [
  {
    enforceForSwitchCase?: boolean;
    enforceForIndexOf?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ValidTypeof = [
  {
    requireStringLiterals?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type VarsOnTop = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type WrapIife = [
  "outside" | "inside" | "any",
  {
    functionPrototypeMethods?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type WrapRegex = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type YieldStarSpacing = [
  | ("before" | "after" | "both" | "neither")
  | {
      before?: boolean;
      after?: boolean;
    }
];
/**
 * @minItems 2
 * @maxItems 2
 */
export type Yoda = [
  "always" | "never",
  {
    exceptRange?: boolean;
    onlyEquality?: boolean;
  }
];

/**
 * 292 ESLint rules for ESLint
 *
 * @package `eslint`
 */
export interface ESLintRules {
  /**
   * Enforce getter and setter pairs in objects and classes
   *
   * @since v0.22.0
   * @see {@link https://eslint.org/docs/latest/rules/accessor-pairs accessor-pairs}
   */
  "accessor-pairs"?: AccessorPairs;
  /**
   * Enforce linebreaks after opening and before closing array brackets
   *
   * @since v4.0.0-alpha.1
   * @see {@link https://eslint.org/docs/latest/rules/array-bracket-newline array-bracket-newline}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/array-bracket-newline `array-bracket-newline`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "array-bracket-newline"?: ArrayBracketNewline;
  /**
   * Enforce consistent spacing inside array brackets
   *
   * @since v0.24.0
   * @see {@link https://eslint.org/docs/latest/rules/array-bracket-spacing array-bracket-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/array-bracket-spacing `array-bracket-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "array-bracket-spacing"?: ArrayBracketSpacing;
  /**
   * Enforce `return` statements in callbacks of array methods
   *
   * @since v2.0.0-alpha-1
   * @see {@link https://eslint.org/docs/latest/rules/array-callback-return array-callback-return}
   */
  "array-callback-return"?: ArrayCallbackReturn;
  /**
   * Enforce line breaks after each array element
   *
   * @since v4.0.0-rc.0
   * @see {@link https://eslint.org/docs/latest/rules/array-element-newline array-element-newline}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/array-element-newline `array-element-newline`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "array-element-newline"?: ArrayElementNewline;
  /**
   * Require braces around arrow function bodies
   *
   * @since v1.8.0
   * @see {@link https://eslint.org/docs/latest/rules/arrow-body-style arrow-body-style}
   */
  "arrow-body-style"?: ArrowBodyStyle;
  /**
   * Require parentheses around arrow function arguments
   *
   * @since v1.0.0-rc-1
   * @see {@link https://eslint.org/docs/latest/rules/arrow-parens arrow-parens}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/arrow-parens `arrow-parens`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "arrow-parens"?: ArrowParens;
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   *
   * @since v1.0.0-rc-1
   * @see {@link https://eslint.org/docs/latest/rules/arrow-spacing arrow-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/arrow-spacing `arrow-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "arrow-spacing"?: ArrowSpacing;
  /**
   * Enforce the use of variables within the scope they are defined
   *
   * @since v0.1.0
   * @see {@link https://eslint.org/docs/latest/rules/block-scoped-var block-scoped-var}
   */
  "block-scoped-var"?: BlockScopedVar;
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   *
   * @since v1.2.0
   * @see {@link https://eslint.org/docs/latest/rules/block-spacing block-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/block-spacing `block-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "block-spacing"?: BlockSpacing;
  /**
   * Enforce consistent brace style for blocks
   *
   * @since v0.0.7
   * @see {@link https://eslint.org/docs/latest/rules/brace-style brace-style}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/brace-style `brace-style`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "brace-style"?: BraceStyle;
  /**
   * Require `return` statements after callbacks
   *
   * @since v1.0.0-rc-1
   * @see {@link https://eslint.org/docs/latest/rules/callback-return callback-return}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/callback-return.md `callback-return`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "callback-return"?: CallbackReturn;
  /**
   * Enforce camelcase naming convention
   *
   * @since v0.0.2
   * @see {@link https://eslint.org/docs/latest/rules/camelcase camelcase}
   */
  camelcase?: Camelcase;
  /**
   * Enforce or disallow capitalization of the first letter of a comment
   *
   * @since v3.11.0
   * @see {@link https://eslint.org/docs/latest/rules/capitalized-comments capitalized-comments}
   */
  "capitalized-comments"?: CapitalizedComments;
  /**
   * Enforce that class methods utilize `this`
   *
   * @since v3.4.0
   * @see {@link https://eslint.org/docs/latest/rules/class-methods-use-this class-methods-use-this}
   */
  "class-methods-use-this"?: ClassMethodsUseThis;
  /**
   * Require or disallow trailing commas
   *
   * @since v0.16.0
   * @see {@link https://eslint.org/docs/latest/rules/comma-dangle comma-dangle}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/comma-dangle `comma-dangle`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "comma-dangle"?: CommaDangle;
  /**
   * Enforce consistent spacing before and after commas
   *
   * @since v0.9.0
   * @see {@link https://eslint.org/docs/latest/rules/comma-spacing comma-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/comma-spacing `comma-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "comma-spacing"?: CommaSpacing;
  /**
   * Enforce consistent comma style
   *
   * @since v0.9.0
   * @see {@link https://eslint.org/docs/latest/rules/comma-style comma-style}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/comma-style `comma-style`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "comma-style"?: CommaStyle;
  /**
   * Enforce a maximum cyclomatic complexity allowed in a program
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/complexity complexity}
   */
  complexity?: Complexity;
  /**
   * Enforce consistent spacing inside computed property brackets
   *
   * @since v0.23.0
   * @see {@link https://eslint.org/docs/latest/rules/computed-property-spacing computed-property-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/computed-property-spacing `computed-property-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "computed-property-spacing"?: ComputedPropertySpacing;
  /**
   * Require `return` statements to either always or never specify values
   *
   * @since v0.4.0
   * @see {@link https://eslint.org/docs/latest/rules/consistent-return consistent-return}
   */
  "consistent-return"?: ConsistentReturn;
  /**
   * Enforce consistent naming when capturing the current execution context
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/consistent-this consistent-this}
   */
  "consistent-this"?: ConsistentThis;
  /**
   * Require `super()` calls in constructors
   *
   * @since v0.24.0
   * @see {@link https://eslint.org/docs/latest/rules/constructor-super constructor-super}
   */
  "constructor-super"?: ConstructorSuper;
  /**
   * Enforce consistent brace style for all control statements
   *
   * @since v0.0.2
   * @see {@link https://eslint.org/docs/latest/rules/curly curly}
   */
  curly?: Curly;
  /**
   * Require `default` cases in `switch` statements
   *
   * @since v0.6.0
   * @see {@link https://eslint.org/docs/latest/rules/default-case default-case}
   */
  "default-case"?: DefaultCase;
  /**
   * Enforce `default` clauses in `switch` statements to be last
   *
   * @since v7.0.0-alpha.0
   * @see {@link https://eslint.org/docs/latest/rules/default-case-last default-case-last}
   */
  "default-case-last"?: DefaultCaseLast;
  /**
   * Enforce default parameters to be last
   *
   * @since v6.4.0
   * @see {@link https://eslint.org/docs/latest/rules/default-param-last default-param-last}
   */
  "default-param-last"?: DefaultParamLast;
  /**
   * Enforce consistent newlines before and after dots
   *
   * @since v0.21.0
   * @see {@link https://eslint.org/docs/latest/rules/dot-location dot-location}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/dot-location `dot-location`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "dot-location"?: DotLocation;
  /**
   * Enforce dot notation whenever possible
   *
   * @since v0.0.7
   * @see {@link https://eslint.org/docs/latest/rules/dot-notation dot-notation}
   */
  "dot-notation"?: DotNotation;
  /**
   * Require or disallow newline at the end of files
   *
   * @since v0.7.1
   * @see {@link https://eslint.org/docs/latest/rules/eol-last eol-last}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/eol-last `eol-last`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "eol-last"?: EolLast;
  /**
   * Require the use of `===` and `!==`
   *
   * @since v0.0.2
   * @see {@link https://eslint.org/docs/latest/rules/eqeqeq eqeqeq}
   */
  eqeqeq?: Eqeqeq;
  /**
   * Enforce `for` loop update clause moving the counter in the right direction
   *
   * @since v4.0.0-beta.0
   * @see {@link https://eslint.org/docs/latest/rules/for-direction for-direction}
   */
  "for-direction"?: ForDirection;
  /**
   * Require or disallow spacing between function identifiers and their invocations
   *
   * @since v3.3.0
   * @see {@link https://eslint.org/docs/latest/rules/func-call-spacing func-call-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/function-call-spacing `function-call-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "func-call-spacing"?: FuncCallSpacing;
  /**
   * Require function names to match the name of the variable or property to which they are assigned
   *
   * @since v3.8.0
   * @see {@link https://eslint.org/docs/latest/rules/func-name-matching func-name-matching}
   */
  "func-name-matching"?: FuncNameMatching;
  /**
   * Require or disallow named `function` expressions
   *
   * @since v0.4.0
   * @see {@link https://eslint.org/docs/latest/rules/func-names func-names}
   */
  "func-names"?: FuncNames;
  /**
   * Enforce the consistent use of either `function` declarations or expressions assigned to variables
   *
   * @since v0.2.0
   * @see {@link https://eslint.org/docs/latest/rules/func-style func-style}
   */
  "func-style"?: FuncStyle;
  /**
   * Enforce line breaks between arguments of a function call
   *
   * @since v6.2.0
   * @see {@link https://eslint.org/docs/latest/rules/function-call-argument-newline function-call-argument-newline}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/function-call-argument-newline `function-call-argument-newline`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "function-call-argument-newline"?: FunctionCallArgumentNewline;
  /**
   * Enforce consistent line breaks inside function parentheses
   *
   * @since v4.6.0
   * @see {@link https://eslint.org/docs/latest/rules/function-paren-newline function-paren-newline}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/function-paren-newline `function-paren-newline`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "function-paren-newline"?: FunctionParenNewline;
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   *
   * @since v0.17.0
   * @see {@link https://eslint.org/docs/latest/rules/generator-star-spacing generator-star-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/generator-star-spacing `generator-star-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "generator-star-spacing"?: GeneratorStarSpacing;
  /**
   * Enforce `return` statements in getters
   *
   * @since v4.2.0
   * @see {@link https://eslint.org/docs/latest/rules/getter-return getter-return}
   */
  "getter-return"?: GetterReturn;
  /**
   * Require `require()` calls to be placed at top-level module scope
   *
   * @since v1.4.0
   * @see {@link https://eslint.org/docs/latest/rules/global-require global-require}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/global-require.md `global-require`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "global-require"?: GlobalRequire;
  /**
   * Require grouped accessor pairs in object literals and classes
   *
   * @since v6.7.0
   * @see {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs grouped-accessor-pairs}
   */
  "grouped-accessor-pairs"?: GroupedAccessorPairs;
  /**
   * Require `for-in` loops to include an `if` statement
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/guard-for-in guard-for-in}
   */
  "guard-for-in"?: GuardForIn;
  /**
   * Require error handling in callbacks
   *
   * @since v0.4.5
   * @see {@link https://eslint.org/docs/latest/rules/handle-callback-err handle-callback-err}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/handle-callback-err.md `handle-callback-err`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "handle-callback-err"?: HandleCallbackErr;
  /**
   * Disallow specified identifiers
   *
   * @since v2.0.0-beta.2
   * @see {@link https://eslint.org/docs/latest/rules/id-blacklist id-blacklist}
   * @deprecated This rule was `deprecated` in ESLint v7.5.0. It will be removed in v11.0.0. Please use the {@link https://eslint.org/docs/rules/id-denylist `id-denylist`} rule instead. {@link https://eslint.org/blog/2020/07/eslint-v7.5.0-released/#deprecating-id-blacklist Learn more}
   */
  "id-blacklist"?: IdBlacklist;
  /**
   * Disallow specified identifiers
   *
   * @since v7.4.0
   * @see {@link https://eslint.org/docs/latest/rules/id-denylist id-denylist}
   */
  "id-denylist"?: IdDenylist;
  /**
   * Enforce minimum and maximum identifier lengths
   *
   * @since v1.0.0
   * @see {@link https://eslint.org/docs/latest/rules/id-length id-length}
   */
  "id-length"?: IdLength;
  /**
   * Require identifiers to match a specified regular expression
   *
   * @since v1.0.0
   * @see {@link https://eslint.org/docs/latest/rules/id-match id-match}
   */
  "id-match"?: IdMatch;
  /**
   * Enforce the location of arrow function bodies
   *
   * @since v4.12.0
   * @see {@link https://eslint.org/docs/latest/rules/implicit-arrow-linebreak implicit-arrow-linebreak}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/implicit-arrow-linebreak `implicit-arrow-linebreak`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "implicit-arrow-linebreak"?: ImplicitArrowLinebreak;
  /**
   * Enforce consistent indentation
   *
   * @since v0.14.0
   * @see {@link https://eslint.org/docs/latest/rules/indent indent}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/indent `indent`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  indent?: Indent;
  /**
   * Enforce consistent indentation
   *
   * @since v4.0.0-alpha.0
   * @see {@link https://eslint.org/docs/latest/rules/indent-legacy indent-legacy}
   * @deprecated This rule was `deprecated` in ESLint v4.0.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/indent `indent`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "indent-legacy"?: IndentLegacy;
  /**
   * Require or disallow initialization in variable declarations
   *
   * @since v1.0.0-rc-1
   * @see {@link https://eslint.org/docs/latest/rules/init-declarations init-declarations}
   */
  "init-declarations"?: InitDeclarations;
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   *
   * @since v1.4.0
   * @see {@link https://eslint.org/docs/latest/rules/jsx-quotes jsx-quotes}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/jsx-quotes `jsx-quotes`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "jsx-quotes"?: JsxQuotes;
  /**
   * Enforce consistent spacing between keys and values in object literal properties
   *
   * @since v0.9.0
   * @see {@link https://eslint.org/docs/latest/rules/key-spacing key-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/key-spacing `key-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "key-spacing"?: KeySpacing;
  /**
   * Enforce consistent spacing before and after keywords
   *
   * @since v2.0.0-beta.1
   * @see {@link https://eslint.org/docs/latest/rules/keyword-spacing keyword-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/keyword-spacing `keyword-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "keyword-spacing"?: KeywordSpacing;
  /**
   * Enforce position of line comments
   *
   * @since v3.5.0
   * @see {@link https://eslint.org/docs/latest/rules/line-comment-position line-comment-position}
   * @deprecated This rule was `deprecated` in ESLint v9.3.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/line-comment-position `line-comment-position`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "line-comment-position"?: LineCommentPosition;
  /**
   * Enforce consistent linebreak style
   *
   * @since v0.21.0
   * @see {@link https://eslint.org/docs/latest/rules/linebreak-style linebreak-style}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/linebreak-style `linebreak-style`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "linebreak-style"?: LinebreakStyle;
  /**
   * Require empty lines around comments
   *
   * @since v0.22.0
   * @see {@link https://eslint.org/docs/latest/rules/lines-around-comment lines-around-comment}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/lines-around-comment `lines-around-comment`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "lines-around-comment"?: LinesAroundComment;
  /**
   * Require or disallow newlines around directives
   *
   * @since v3.5.0
   * @see {@link https://eslint.org/docs/latest/rules/lines-around-directive lines-around-directive}
   * @deprecated This rule was `deprecated` in ESLint v4.0.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/padding-line-between-statements `padding-line-between-statements`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2017/06/eslint-v4.0.0-released/ Learn more}
   */
  "lines-around-directive"?: LinesAroundDirective;
  /**
   * Require or disallow an empty line between class members
   *
   * @since v4.9.0
   * @see {@link https://eslint.org/docs/latest/rules/lines-between-class-members lines-between-class-members}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/lines-between-class-members `lines-between-class-members`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "lines-between-class-members"?: LinesBetweenClassMembers;
  /**
   * Require or disallow logical assignment operator shorthand
   *
   * @since v8.24.0
   * @see {@link https://eslint.org/docs/latest/rules/logical-assignment-operators logical-assignment-operators}
   */
  "logical-assignment-operators"?: LogicalAssignmentOperators;
  /**
   * Enforce a maximum number of classes per file
   *
   * @since v5.0.0-alpha.3
   * @see {@link https://eslint.org/docs/latest/rules/max-classes-per-file max-classes-per-file}
   */
  "max-classes-per-file"?: MaxClassesPerFile;
  /**
   * Enforce a maximum depth that blocks can be nested
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/max-depth max-depth}
   */
  "max-depth"?: MaxDepth;
  /**
   * Enforce a maximum line length
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/max-len max-len}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/max-len `max-len`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "max-len"?: MaxLen;
  /**
   * Enforce a maximum number of lines per file
   *
   * @since v2.12.0
   * @see {@link https://eslint.org/docs/latest/rules/max-lines max-lines}
   */
  "max-lines"?: MaxLines;
  /**
   * Enforce a maximum number of lines of code in a function
   *
   * @since v5.0.0
   * @see {@link https://eslint.org/docs/latest/rules/max-lines-per-function max-lines-per-function}
   */
  "max-lines-per-function"?: MaxLinesPerFunction;
  /**
   * Enforce a maximum depth that callbacks can be nested
   *
   * @since v0.2.0
   * @see {@link https://eslint.org/docs/latest/rules/max-nested-callbacks max-nested-callbacks}
   */
  "max-nested-callbacks"?: MaxNestedCallbacks;
  /**
   * Enforce a maximum number of parameters in function definitions
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/max-params max-params}
   */
  "max-params"?: MaxParams;
  /**
   * Enforce a maximum number of statements allowed in function blocks
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/max-statements max-statements}
   */
  "max-statements"?: MaxStatements;
  /**
   * Enforce a maximum number of statements allowed per line
   *
   * @since v2.5.0
   * @see {@link https://eslint.org/docs/latest/rules/max-statements-per-line max-statements-per-line}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/max-statements-per-line `max-statements-per-line`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "max-statements-per-line"?: MaxStatementsPerLine;
  /**
   * Enforce a particular style for multiline comments
   *
   * @since v4.10.0
   * @see {@link https://eslint.org/docs/latest/rules/multiline-comment-style multiline-comment-style}
   * @deprecated This rule was `deprecated` in ESLint v9.3.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/multiline-comment-style `multiline-comment-style`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "multiline-comment-style"?: MultilineCommentStyle;
  /**
   * Enforce newlines between operands of ternary expressions
   *
   * @since v3.1.0
   * @see {@link https://eslint.org/docs/latest/rules/multiline-ternary multiline-ternary}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/multiline-ternary `multiline-ternary`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "multiline-ternary"?: MultilineTernary;
  /**
   * Require constructor names to begin with a capital letter
   *
   * @since v0.0.3-0
   * @see {@link https://eslint.org/docs/latest/rules/new-cap new-cap}
   */
  "new-cap"?: NewCap;
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/new-parens new-parens}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/new-parens `new-parens`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "new-parens"?: NewParens;
  /**
   * Require or disallow an empty line after variable declarations
   *
   * @since v0.18.0
   * @see {@link https://eslint.org/docs/latest/rules/newline-after-var newline-after-var}
   * @deprecated This rule was `deprecated` in ESLint v4.0.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/padding-line-between-statements `padding-line-between-statements`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2017/06/eslint-v4.0.0-released/ Learn more}
   */
  "newline-after-var"?: NewlineAfterVar;
  /**
   * Require an empty line before `return` statements
   *
   * @since v2.3.0
   * @see {@link https://eslint.org/docs/latest/rules/newline-before-return newline-before-return}
   * @deprecated This rule was `deprecated` in ESLint v4.0.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/padding-line-between-statements `padding-line-between-statements`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2017/06/eslint-v4.0.0-released/ Learn more}
   */
  "newline-before-return"?: NewlineBeforeReturn;
  /**
   * Require a newline after each call in a method chain
   *
   * @since v2.0.0-rc.0
   * @see {@link https://eslint.org/docs/latest/rules/newline-per-chained-call newline-per-chained-call}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/newline-per-chained-call `newline-per-chained-call`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "newline-per-chained-call"?: NewlinePerChainedCall;
  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`
   *
   * @since v0.0.5
   * @see {@link https://eslint.org/docs/latest/rules/no-alert no-alert}
   */
  "no-alert"?: NoAlert;
  /**
   * Disallow `Array` constructors
   *
   * @since v0.4.0
   * @see {@link https://eslint.org/docs/latest/rules/no-array-constructor no-array-constructor}
   */
  "no-array-constructor"?: NoArrayConstructor;
  /**
   * Disallow using an async function as a Promise executor
   *
   * @since v5.3.0
   * @see {@link https://eslint.org/docs/latest/rules/no-async-promise-executor no-async-promise-executor}
   */
  "no-async-promise-executor"?: NoAsyncPromiseExecutor;
  /**
   * Disallow `await` inside of loops
   *
   * @since v3.12.0
   * @see {@link https://eslint.org/docs/latest/rules/no-await-in-loop no-await-in-loop}
   */
  "no-await-in-loop"?: NoAwaitInLoop;
  /**
   * Disallow bitwise operators
   *
   * @since v0.0.2
   * @see {@link https://eslint.org/docs/latest/rules/no-bitwise no-bitwise}
   */
  "no-bitwise"?: NoBitwise;
  /**
   * Disallow use of the `Buffer()` constructor
   *
   * @since v4.0.0-alpha.0
   * @see {@link https://eslint.org/docs/latest/rules/no-buffer-constructor no-buffer-constructor}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-deprecated-api.md `no-deprecated-api`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "no-buffer-constructor"?: NoBufferConstructor;
  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/no-caller no-caller}
   */
  "no-caller"?: NoCaller;
  /**
   * Disallow lexical declarations in case clauses
   *
   * @since v1.9.0
   * @see {@link https://eslint.org/docs/latest/rules/no-case-declarations no-case-declarations}
   */
  "no-case-declarations"?: NoCaseDeclarations;
  /**
   * Disallow `catch` clause parameters from shadowing variables in the outer scope
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-catch-shadow no-catch-shadow}
   * @deprecated This rule was `deprecated` in ESLint v5.1.0. It will be removed in v11.0.0. Please use the {@link https://eslint.org/docs/rules/no-shadow `no-shadow`} rule instead. {@link https://eslint.org/blog/2018/07/eslint-v5.1.0-released/ Learn more}
   */
  "no-catch-shadow"?: NoCatchShadow;
  /**
   * Disallow reassigning class members
   *
   * @since v1.0.0-rc-1
   * @see {@link https://eslint.org/docs/latest/rules/no-class-assign no-class-assign}
   */
  "no-class-assign"?: NoClassAssign;
  /**
   * Disallow comparing against `-0`
   *
   * @since v3.17.0
   * @see {@link https://eslint.org/docs/latest/rules/no-compare-neg-zero no-compare-neg-zero}
   */
  "no-compare-neg-zero"?: NoCompareNegZero;
  /**
   * Disallow assignment operators in conditional expressions
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-cond-assign no-cond-assign}
   */
  "no-cond-assign"?: NoCondAssign;
  /**
   * Disallow arrow functions where they could be confused with comparisons
   *
   * @since v2.0.0-alpha-2
   * @see {@link https://eslint.org/docs/latest/rules/no-confusing-arrow no-confusing-arrow}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-confusing-arrow `no-confusing-arrow`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-confusing-arrow"?: NoConfusingArrow;
  /**
   * Disallow the use of `console`
   *
   * @since v0.0.2
   * @see {@link https://eslint.org/docs/latest/rules/no-console no-console}
   */
  "no-console"?: NoConsole;
  /**
   * Disallow reassigning `const`, `using`, and `await using` variables
   *
   * @since v1.0.0-rc-1
   * @see {@link https://eslint.org/docs/latest/rules/no-const-assign no-const-assign}
   */
  "no-const-assign"?: NoConstAssign;
  /**
   * Disallow expressions where the operation doesn't affect the value
   *
   * @since v8.14.0
   * @see {@link https://eslint.org/docs/latest/rules/no-constant-binary-expression no-constant-binary-expression}
   */
  "no-constant-binary-expression"?: NoConstantBinaryExpression;
  /**
   * Disallow constant expressions in conditions
   *
   * @since v0.4.1
   * @see {@link https://eslint.org/docs/latest/rules/no-constant-condition no-constant-condition}
   */
  "no-constant-condition"?: NoConstantCondition;
  /**
   * Disallow returning value from constructor
   *
   * @since v6.7.0
   * @see {@link https://eslint.org/docs/latest/rules/no-constructor-return no-constructor-return}
   */
  "no-constructor-return"?: NoConstructorReturn;
  /**
   * Disallow `continue` statements
   *
   * @since v0.19.0
   * @see {@link https://eslint.org/docs/latest/rules/no-continue no-continue}
   */
  "no-continue"?: NoContinue;
  /**
   * Disallow control characters in regular expressions
   *
   * @since v0.1.0
   * @see {@link https://eslint.org/docs/latest/rules/no-control-regex no-control-regex}
   */
  "no-control-regex"?: NoControlRegex;
  /**
   * Disallow the use of `debugger`
   *
   * @since v0.0.2
   * @see {@link https://eslint.org/docs/latest/rules/no-debugger no-debugger}
   */
  "no-debugger"?: NoDebugger;
  /**
   * Disallow deleting variables
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-delete-var no-delete-var}
   */
  "no-delete-var"?: NoDeleteVar;
  /**
   * Disallow equal signs explicitly at the beginning of regular expressions
   *
   * @since v0.1.0
   * @see {@link https://eslint.org/docs/latest/rules/no-div-regex no-div-regex}
   */
  "no-div-regex"?: NoDivRegex;
  /**
   * Disallow duplicate arguments in `function` definitions
   *
   * @since v0.16.0
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-args no-dupe-args}
   */
  "no-dupe-args"?: NoDupeArgs;
  /**
   * Disallow duplicate class members
   *
   * @since v1.2.0
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-class-members no-dupe-class-members}
   */
  "no-dupe-class-members"?: NoDupeClassMembers;
  /**
   * Disallow duplicate conditions in if-else-if chains
   *
   * @since v6.7.0
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-else-if no-dupe-else-if}
   */
  "no-dupe-else-if"?: NoDupeElseIf;
  /**
   * Disallow duplicate keys in object literals
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-dupe-keys no-dupe-keys}
   */
  "no-dupe-keys"?: NoDupeKeys;
  /**
   * Disallow duplicate case labels
   *
   * @since v0.17.0
   * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-case no-duplicate-case}
   */
  "no-duplicate-case"?: NoDuplicateCase;
  /**
   * Disallow duplicate module imports
   *
   * @since v2.5.0
   * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-imports no-duplicate-imports}
   */
  "no-duplicate-imports"?: NoDuplicateImports;
  /**
   * Disallow `else` blocks after `return` statements in `if` statements
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-else-return no-else-return}
   */
  "no-else-return"?: NoElseReturn;
  /**
   * Disallow empty block statements
   *
   * @since v0.0.2
   * @see {@link https://eslint.org/docs/latest/rules/no-empty no-empty}
   */
  "no-empty"?: NoEmpty;
  /**
   * Disallow empty character classes in regular expressions
   *
   * @since v0.22.0
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-character-class no-empty-character-class}
   */
  "no-empty-character-class"?: NoEmptyCharacterClass;
  /**
   * Disallow empty functions
   *
   * @since v2.0.0
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-function no-empty-function}
   */
  "no-empty-function"?: NoEmptyFunction;
  /**
   * Disallow empty destructuring patterns
   *
   * @since v1.7.0
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-pattern no-empty-pattern}
   */
  "no-empty-pattern"?: NoEmptyPattern;
  /**
   * Disallow empty static blocks
   *
   * @since v8.27.0
   * @see {@link https://eslint.org/docs/latest/rules/no-empty-static-block no-empty-static-block}
   */
  "no-empty-static-block"?: NoEmptyStaticBlock;
  /**
   * Disallow `null` comparisons without type-checking operators
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-eq-null no-eq-null}
   */
  "no-eq-null"?: NoEqNull;
  /**
   * Disallow the use of `eval()`
   *
   * @since v0.0.2
   * @see {@link https://eslint.org/docs/latest/rules/no-eval no-eval}
   */
  "no-eval"?: NoEval;
  /**
   * Disallow reassigning exceptions in `catch` clauses
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-ex-assign no-ex-assign}
   */
  "no-ex-assign"?: NoExAssign;
  /**
   * Disallow extending native types
   *
   * @since v0.1.4
   * @see {@link https://eslint.org/docs/latest/rules/no-extend-native no-extend-native}
   */
  "no-extend-native"?: NoExtendNative;
  /**
   * Disallow unnecessary calls to `.bind()`
   *
   * @since v0.8.0
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-bind no-extra-bind}
   */
  "no-extra-bind"?: NoExtraBind;
  /**
   * Disallow unnecessary boolean casts
   *
   * @since v0.4.0
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-boolean-cast no-extra-boolean-cast}
   */
  "no-extra-boolean-cast"?: NoExtraBooleanCast;
  /**
   * Disallow unnecessary labels
   *
   * @since v2.0.0-rc.0
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-label no-extra-label}
   */
  "no-extra-label"?: NoExtraLabel;
  /**
   * Disallow unnecessary parentheses
   *
   * @since v0.1.4
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-parens no-extra-parens}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-extra-parens `no-extra-parens`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-extra-parens"?: NoExtraParens;
  /**
   * Disallow unnecessary semicolons
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-extra-semi no-extra-semi}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-extra-semi `no-extra-semi`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-extra-semi"?: NoExtraSemi;
  /**
   * Disallow fallthrough of `case` statements
   *
   * @since v0.0.7
   * @see {@link https://eslint.org/docs/latest/rules/no-fallthrough no-fallthrough}
   */
  "no-fallthrough"?: NoFallthrough;
  /**
   * Disallow leading or trailing decimal points in numeric literals
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/no-floating-decimal no-floating-decimal}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-floating-decimal `no-floating-decimal`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-floating-decimal"?: NoFloatingDecimal;
  /**
   * Disallow reassigning `function` declarations
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-func-assign no-func-assign}
   */
  "no-func-assign"?: NoFuncAssign;
  /**
   * Disallow assignments to native objects or read-only global variables
   *
   * @since v3.3.0
   * @see {@link https://eslint.org/docs/latest/rules/no-global-assign no-global-assign}
   */
  "no-global-assign"?: NoGlobalAssign;
  /**
   * Disallow shorthand type conversions
   *
   * @since v1.0.0-rc-2
   * @see {@link https://eslint.org/docs/latest/rules/no-implicit-coercion no-implicit-coercion}
   */
  "no-implicit-coercion"?: NoImplicitCoercion;
  /**
   * Disallow declarations in the global scope
   *
   * @since v2.0.0-alpha-1
   * @see {@link https://eslint.org/docs/latest/rules/no-implicit-globals no-implicit-globals}
   */
  "no-implicit-globals"?: NoImplicitGlobals;
  /**
   * Disallow the use of `eval()`-like methods
   *
   * @since v0.0.7
   * @see {@link https://eslint.org/docs/latest/rules/no-implied-eval no-implied-eval}
   */
  "no-implied-eval"?: NoImpliedEval;
  /**
   * Disallow assigning to imported bindings
   *
   * @since v6.4.0
   * @see {@link https://eslint.org/docs/latest/rules/no-import-assign no-import-assign}
   */
  "no-import-assign"?: NoImportAssign;
  /**
   * Disallow inline comments after code
   *
   * @since v0.10.0
   * @see {@link https://eslint.org/docs/latest/rules/no-inline-comments no-inline-comments}
   */
  "no-inline-comments"?: NoInlineComments;
  /**
   * Disallow variable or `function` declarations in nested blocks
   *
   * @since v0.6.0
   * @see {@link https://eslint.org/docs/latest/rules/no-inner-declarations no-inner-declarations}
   */
  "no-inner-declarations"?: NoInnerDeclarations;
  /**
   * Disallow invalid regular expression strings in `RegExp` constructors
   *
   * @since v0.1.4
   * @see {@link https://eslint.org/docs/latest/rules/no-invalid-regexp no-invalid-regexp}
   */
  "no-invalid-regexp"?: NoInvalidRegexp;
  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`
   *
   * @since v1.0.0-rc-2
   * @see {@link https://eslint.org/docs/latest/rules/no-invalid-this no-invalid-this}
   */
  "no-invalid-this"?: NoInvalidThis;
  /**
   * Disallow irregular whitespace
   *
   * @since v0.9.0
   * @see {@link https://eslint.org/docs/latest/rules/no-irregular-whitespace no-irregular-whitespace}
   */
  "no-irregular-whitespace"?: NoIrregularWhitespace;
  /**
   * Disallow the use of the `__iterator__` property
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-iterator no-iterator}
   */
  "no-iterator"?: NoIterator;
  /**
   * Disallow labels that share a name with a variable
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-label-var no-label-var}
   */
  "no-label-var"?: NoLabelVar;
  /**
   * Disallow labeled statements
   *
   * @since v0.4.0
   * @see {@link https://eslint.org/docs/latest/rules/no-labels no-labels}
   */
  "no-labels"?: NoLabels;
  /**
   * Disallow unnecessary nested blocks
   *
   * @since v0.4.0
   * @see {@link https://eslint.org/docs/latest/rules/no-lone-blocks no-lone-blocks}
   */
  "no-lone-blocks"?: NoLoneBlocks;
  /**
   * Disallow `if` statements as the only statement in `else` blocks
   *
   * @since v0.6.0
   * @see {@link https://eslint.org/docs/latest/rules/no-lonely-if no-lonely-if}
   */
  "no-lonely-if"?: NoLonelyIf;
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-loop-func no-loop-func}
   */
  "no-loop-func"?: NoLoopFunc;
  /**
   * Disallow literal numbers that lose precision
   *
   * @since v7.1.0
   * @see {@link https://eslint.org/docs/latest/rules/no-loss-of-precision no-loss-of-precision}
   */
  "no-loss-of-precision"?: NoLossOfPrecision;
  /**
   * Disallow magic numbers
   *
   * @since v1.7.0
   * @see {@link https://eslint.org/docs/latest/rules/no-magic-numbers no-magic-numbers}
   */
  "no-magic-numbers"?: NoMagicNumbers;
  /**
   * Disallow characters which are made with multiple code points in character class syntax
   *
   * @since v5.3.0
   * @see {@link https://eslint.org/docs/latest/rules/no-misleading-character-class no-misleading-character-class}
   */
  "no-misleading-character-class"?: NoMisleadingCharacterClass;
  /**
   * Disallow mixed binary operators
   *
   * @since v2.12.0
   * @see {@link https://eslint.org/docs/latest/rules/no-mixed-operators no-mixed-operators}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-mixed-operators `no-mixed-operators`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-mixed-operators"?: NoMixedOperators;
  /**
   * Disallow `require` calls to be mixed with regular variable declarations
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-mixed-requires no-mixed-requires}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-mixed-requires.md `no-mixed-requires`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "no-mixed-requires"?: NoMixedRequires;
  /**
   * Disallow mixed spaces and tabs for indentation
   *
   * @since v0.7.1
   * @see {@link https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs no-mixed-spaces-and-tabs}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-mixed-spaces-and-tabs `no-mixed-spaces-and-tabs`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-mixed-spaces-and-tabs"?: NoMixedSpacesAndTabs;
  /**
   * Disallow use of chained assignment expressions
   *
   * @since v3.14.0
   * @see {@link https://eslint.org/docs/latest/rules/no-multi-assign no-multi-assign}
   */
  "no-multi-assign"?: NoMultiAssign;
  /**
   * Disallow multiple spaces
   *
   * @since v0.9.0
   * @see {@link https://eslint.org/docs/latest/rules/no-multi-spaces no-multi-spaces}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-multi-spaces `no-multi-spaces`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-multi-spaces"?: NoMultiSpaces;
  /**
   * Disallow multiline strings
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-multi-str no-multi-str}
   */
  "no-multi-str"?: NoMultiStr;
  /**
   * Disallow multiple empty lines
   *
   * @since v0.9.0
   * @see {@link https://eslint.org/docs/latest/rules/no-multiple-empty-lines no-multiple-empty-lines}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-multiple-empty-lines `no-multiple-empty-lines`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-multiple-empty-lines"?: NoMultipleEmptyLines;
  /**
   * Disallow assignments to native objects or read-only global variables
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-native-reassign no-native-reassign}
   * @deprecated This rule was `deprecated` in ESLint v3.3.0. It will be removed in v11.0.0. Please use the {@link https://eslint.org/docs/rules/no-global-assign `no-global-assign`} rule instead. {@link https://eslint.org/blog/2016/08/eslint-v3.3.0-released/#deprecated-rules Learn more}
   */
  "no-native-reassign"?: NoNativeReassign;
  /**
   * Disallow negated conditions
   *
   * @since v1.6.0
   * @see {@link https://eslint.org/docs/latest/rules/no-negated-condition no-negated-condition}
   */
  "no-negated-condition"?: NoNegatedCondition;
  /**
   * Disallow negating the left operand in `in` expressions
   *
   * @since v0.1.2
   * @see {@link https://eslint.org/docs/latest/rules/no-negated-in-lhs no-negated-in-lhs}
   * @deprecated This rule was `deprecated` in ESLint v3.3.0. It will be removed in v11.0.0. Please use the {@link https://eslint.org/docs/rules/no-unsafe-negation `no-unsafe-negation`} rule instead. {@link https://eslint.org/blog/2016/08/eslint-v3.3.0-released/#deprecated-rules Learn more}
   */
  "no-negated-in-lhs"?: NoNegatedInLhs;
  /**
   * Disallow nested ternary expressions
   *
   * @since v0.2.0
   * @see {@link https://eslint.org/docs/latest/rules/no-nested-ternary no-nested-ternary}
   */
  "no-nested-ternary"?: NoNestedTernary;
  /**
   * Disallow `new` operators outside of assignments or comparisons
   *
   * @since v0.0.7
   * @see {@link https://eslint.org/docs/latest/rules/no-new no-new}
   */
  "no-new"?: NoNew;
  /**
   * Disallow `new` operators with the `Function` object
   *
   * @since v0.0.7
   * @see {@link https://eslint.org/docs/latest/rules/no-new-func no-new-func}
   */
  "no-new-func"?: NoNewFunc;
  /**
   * Disallow `new` operators with global non-constructor functions
   *
   * @since v8.27.0
   * @see {@link https://eslint.org/docs/latest/rules/no-new-native-nonconstructor no-new-native-nonconstructor}
   */
  "no-new-native-nonconstructor"?: NoNewNativeNonconstructor;
  /**
   * Disallow `Object` constructors
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-new-object no-new-object}
   * @deprecated This rule was `deprecated` in ESLint v8.50.0. It will be removed in v11.0.0. Please use the {@link https://eslint.org/docs/rules/no-object-constructor `no-object-constructor`} rule instead. {@link https://eslint.org/blog/2023/09/eslint-v8.50.0-released/ Learn more}
   */
  "no-new-object"?: NoNewObject;
  /**
   * Disallow `new` operators with calls to `require`
   *
   * @since v0.6.0
   * @see {@link https://eslint.org/docs/latest/rules/no-new-require no-new-require}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-new-require.md `no-new-require`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "no-new-require"?: NoNewRequire;
  /**
   * Disallow `new` operators with the `Symbol` object
   *
   * @since v2.0.0-beta.1
   * @see {@link https://eslint.org/docs/latest/rules/no-new-symbol no-new-symbol}
   * @deprecated This rule was `deprecated` in ESLint v9.0.0. It will be removed in v11.0.0. Please use the {@link https://eslint.org/docs/latest/rules/no-new-native-nonconstructor `no-new-native-nonconstructor`} rule instead. {@link https://eslint.org/docs/latest/use/migrate-to-9.0.0#eslint-recommended Learn more}
   */
  "no-new-symbol"?: NoNewSymbol;
  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/no-new-wrappers no-new-wrappers}
   */
  "no-new-wrappers"?: NoNewWrappers;
  /**
   * Disallow `\8` and `\9` escape sequences in string literals
   *
   * @since v7.14.0
   * @see {@link https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape no-nonoctal-decimal-escape}
   */
  "no-nonoctal-decimal-escape"?: NoNonoctalDecimalEscape;
  /**
   * Disallow calling global object properties as functions
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-obj-calls no-obj-calls}
   */
  "no-obj-calls"?: NoObjCalls;
  /**
   * Disallow calls to the `Object` constructor without an argument
   *
   * @since v8.50.0
   * @see {@link https://eslint.org/docs/latest/rules/no-object-constructor no-object-constructor}
   */
  "no-object-constructor"?: NoObjectConstructor;
  /**
   * Disallow octal literals
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/no-octal no-octal}
   */
  "no-octal"?: NoOctal;
  /**
   * Disallow octal escape sequences in string literals
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-octal-escape no-octal-escape}
   */
  "no-octal-escape"?: NoOctalEscape;
  /**
   * Disallow reassigning function parameters
   *
   * @since v0.18.0
   * @see {@link https://eslint.org/docs/latest/rules/no-param-reassign no-param-reassign}
   */
  "no-param-reassign"?: NoParamReassign;
  /**
   * Disallow string concatenation with `__dirname` and `__filename`
   *
   * @since v0.4.0
   * @see {@link https://eslint.org/docs/latest/rules/no-path-concat no-path-concat}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-path-concat.md `no-path-concat`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "no-path-concat"?: NoPathConcat;
  /**
   * Disallow the unary operators `++` and `--`
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-plusplus no-plusplus}
   */
  "no-plusplus"?: NoPlusplus;
  /**
   * Disallow the use of `process.env`
   *
   * @since v0.9.0
   * @see {@link https://eslint.org/docs/latest/rules/no-process-env no-process-env}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-process-env.md `no-process-env`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "no-process-env"?: NoProcessEnv;
  /**
   * Disallow the use of `process.exit()`
   *
   * @since v0.4.0
   * @see {@link https://eslint.org/docs/latest/rules/no-process-exit no-process-exit}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-process-exit.md `no-process-exit`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "no-process-exit"?: NoProcessExit;
  /**
   * Disallow returning values from Promise executor functions
   *
   * @since v7.3.0
   * @see {@link https://eslint.org/docs/latest/rules/no-promise-executor-return no-promise-executor-return}
   */
  "no-promise-executor-return"?: NoPromiseExecutorReturn;
  /**
   * Disallow the use of the `__proto__` property
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-proto no-proto}
   */
  "no-proto"?: NoProto;
  /**
   * Disallow calling some `Object.prototype` methods directly on objects
   *
   * @since v2.11.0
   * @see {@link https://eslint.org/docs/latest/rules/no-prototype-builtins no-prototype-builtins}
   */
  "no-prototype-builtins"?: NoPrototypeBuiltins;
  /**
   * Disallow variable redeclaration
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-redeclare no-redeclare}
   */
  "no-redeclare"?: NoRedeclare;
  /**
   * Disallow multiple spaces in regular expressions
   *
   * @since v0.4.0
   * @see {@link https://eslint.org/docs/latest/rules/no-regex-spaces no-regex-spaces}
   */
  "no-regex-spaces"?: NoRegexSpaces;
  /**
   * Disallow specified names in exports
   *
   * @since v7.0.0-alpha.0
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-exports no-restricted-exports}
   */
  "no-restricted-exports"?: NoRestrictedExports;
  /**
   * Disallow specified global variables
   *
   * @since v2.3.0
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-globals no-restricted-globals}
   */
  "no-restricted-globals"?: NoRestrictedGlobals;
  /**
   * Disallow specified modules when loaded by `import`
   *
   * @since v2.0.0-alpha-1
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-imports no-restricted-imports}
   */
  "no-restricted-imports"?: NoRestrictedImports;
  /**
   * Disallow specified modules when loaded by `require`
   *
   * @since v0.6.0
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-modules no-restricted-modules}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-restricted-require.md `no-restricted-require`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "no-restricted-modules"?: NoRestrictedModules;
  /**
   * Disallow certain properties on certain objects
   *
   * @since v3.5.0
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-properties no-restricted-properties}
   */
  "no-restricted-properties"?: NoRestrictedProperties;
  /**
   * Disallow specified syntax
   *
   * @since v1.4.0
   * @see {@link https://eslint.org/docs/latest/rules/no-restricted-syntax no-restricted-syntax}
   */
  "no-restricted-syntax"?: NoRestrictedSyntax;
  /**
   * Disallow assignment operators in `return` statements
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-return-assign no-return-assign}
   */
  "no-return-assign"?: NoReturnAssign;
  /**
   * Disallow unnecessary `return await`
   *
   * @since v3.10.0
   * @see {@link https://eslint.org/docs/latest/rules/no-return-await no-return-await}
   * @deprecated This rule was `deprecated` in ESLint v8.46.0. There is no replacement rule.
   */
  "no-return-await"?: NoReturnAwait;
  /**
   * Disallow `javascript:` URLs
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-script-url no-script-url}
   */
  "no-script-url"?: NoScriptUrl;
  /**
   * Disallow assignments where both sides are exactly the same
   *
   * @since v2.0.0-rc.0
   * @see {@link https://eslint.org/docs/latest/rules/no-self-assign no-self-assign}
   */
  "no-self-assign"?: NoSelfAssign;
  /**
   * Disallow comparisons where both sides are exactly the same
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-self-compare no-self-compare}
   */
  "no-self-compare"?: NoSelfCompare;
  /**
   * Disallow comma operators
   *
   * @since v0.5.1
   * @see {@link https://eslint.org/docs/latest/rules/no-sequences no-sequences}
   */
  "no-sequences"?: NoSequences;
  /**
   * Disallow returning values from setters
   *
   * @since v6.7.0
   * @see {@link https://eslint.org/docs/latest/rules/no-setter-return no-setter-return}
   */
  "no-setter-return"?: NoSetterReturn;
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-shadow no-shadow}
   */
  "no-shadow"?: NoShadow;
  /**
   * Disallow identifiers from shadowing restricted names
   *
   * @since v0.1.4
   * @see {@link https://eslint.org/docs/latest/rules/no-shadow-restricted-names no-shadow-restricted-names}
   */
  "no-shadow-restricted-names"?: NoShadowRestrictedNames;
  /**
   * Disallow spacing between function identifiers and their applications (deprecated)
   *
   * @since v0.1.2
   * @see {@link https://eslint.org/docs/latest/rules/no-spaced-func no-spaced-func}
   * @deprecated This rule was `deprecated` in ESLint v3.3.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/function-call-spacing `function-call-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2016/08/eslint-v3.3.0-released/#deprecated-rules Learn more}
   */
  "no-spaced-func"?: NoSpacedFunc;
  /**
   * Disallow sparse arrays
   *
   * @since v0.4.0
   * @see {@link https://eslint.org/docs/latest/rules/no-sparse-arrays no-sparse-arrays}
   */
  "no-sparse-arrays"?: NoSparseArrays;
  /**
   * Disallow synchronous methods
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-sync no-sync}
   * @deprecated This rule was `deprecated` in ESLint v7.0.0. It will be removed in v11.0.0. Please use the {@link https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-sync.md `no-sync`} in {@link https://github.com/eslint-community/eslint-plugin-n `eslint-plugin-n`} rule instead. {@link https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules Learn more}
   */
  "no-sync"?: NoSync;
  /**
   * Disallow all tabs
   *
   * @since v3.2.0
   * @see {@link https://eslint.org/docs/latest/rules/no-tabs no-tabs}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-tabs `no-tabs`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-tabs"?: NoTabs;
  /**
   * Disallow template literal placeholder syntax in regular strings
   *
   * @since v3.3.0
   * @see {@link https://eslint.org/docs/latest/rules/no-template-curly-in-string no-template-curly-in-string}
   */
  "no-template-curly-in-string"?: NoTemplateCurlyInString;
  /**
   * Disallow ternary operators
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-ternary no-ternary}
   */
  "no-ternary"?: NoTernary;
  /**
   * Disallow `this`/`super` before calling `super()` in constructors
   *
   * @since v0.24.0
   * @see {@link https://eslint.org/docs/latest/rules/no-this-before-super no-this-before-super}
   */
  "no-this-before-super"?: NoThisBeforeSuper;
  /**
   * Disallow throwing literals as exceptions
   *
   * @since v0.15.0
   * @see {@link https://eslint.org/docs/latest/rules/no-throw-literal no-throw-literal}
   */
  "no-throw-literal"?: NoThrowLiteral;
  /**
   * Disallow trailing whitespace at the end of lines
   *
   * @since v0.7.1
   * @see {@link https://eslint.org/docs/latest/rules/no-trailing-spaces no-trailing-spaces}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-trailing-spaces `no-trailing-spaces`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-trailing-spaces"?: NoTrailingSpaces;
  /**
   * Disallow `let` or `var` variables that are read but never assigned
   *
   * @since v9.27.0
   * @see {@link https://eslint.org/docs/latest/rules/no-unassigned-vars no-unassigned-vars}
   */
  "no-unassigned-vars"?: NoUnassignedVars;
  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global *\/` comments
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-undef no-undef}
   */
  "no-undef"?: NoUndef;
  /**
   * Disallow initializing variables to `undefined`
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/no-undef-init no-undef-init}
   */
  "no-undef-init"?: NoUndefInit;
  /**
   * Disallow the use of `undefined` as an identifier
   *
   * @since v0.7.1
   * @see {@link https://eslint.org/docs/latest/rules/no-undefined no-undefined}
   */
  "no-undefined"?: NoUndefined;
  /**
   * Disallow dangling underscores in identifiers
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-underscore-dangle no-underscore-dangle}
   */
  "no-underscore-dangle"?: NoUnderscoreDangle;
  /**
   * Disallow confusing multiline expressions
   *
   * @since v0.24.0
   * @see {@link https://eslint.org/docs/latest/rules/no-unexpected-multiline no-unexpected-multiline}
   */
  "no-unexpected-multiline"?: NoUnexpectedMultiline;
  /**
   * Disallow unmodified loop conditions
   *
   * @since v2.0.0-alpha-2
   * @see {@link https://eslint.org/docs/latest/rules/no-unmodified-loop-condition no-unmodified-loop-condition}
   */
  "no-unmodified-loop-condition"?: NoUnmodifiedLoopCondition;
  /**
   * Disallow ternary operators when simpler alternatives exist
   *
   * @since v0.21.0
   * @see {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary no-unneeded-ternary}
   */
  "no-unneeded-ternary"?: NoUnneededTernary;
  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/no-unreachable no-unreachable}
   */
  "no-unreachable"?: NoUnreachable;
  /**
   * Disallow loops with a body that allows only one iteration
   *
   * @since v7.3.0
   * @see {@link https://eslint.org/docs/latest/rules/no-unreachable-loop no-unreachable-loop}
   */
  "no-unreachable-loop"?: NoUnreachableLoop;
  /**
   * Disallow control flow statements in `finally` blocks
   *
   * @since v2.9.0
   * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-finally no-unsafe-finally}
   */
  "no-unsafe-finally"?: NoUnsafeFinally;
  /**
   * Disallow negating the left operand of relational operators
   *
   * @since v3.3.0
   * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-negation no-unsafe-negation}
   */
  "no-unsafe-negation"?: NoUnsafeNegation;
  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
   *
   * @since v7.15.0
   * @see {@link https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining no-unsafe-optional-chaining}
   */
  "no-unsafe-optional-chaining"?: NoUnsafeOptionalChaining;
  /**
   * Disallow unused expressions
   *
   * @since v0.1.0
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-expressions no-unused-expressions}
   */
  "no-unused-expressions"?: NoUnusedExpressions;
  /**
   * Disallow unused labels
   *
   * @since v2.0.0-rc.0
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-labels no-unused-labels}
   */
  "no-unused-labels"?: NoUnusedLabels;
  /**
   * Disallow unused private class members
   *
   * @since v8.1.0
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-private-class-members no-unused-private-class-members}
   */
  "no-unused-private-class-members"?: NoUnusedPrivateClassMembers;
  /**
   * Disallow unused variables
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-unused-vars no-unused-vars}
   */
  "no-unused-vars"?: NoUnusedVars;
  /**
   * Disallow the use of variables before they are defined
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/no-use-before-define no-use-before-define}
   */
  "no-use-before-define"?: NoUseBeforeDefine;
  /**
   * Disallow variable assignments when the value is not used
   *
   * @since v9.0.0-alpha.1
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-assignment no-useless-assignment}
   */
  "no-useless-assignment"?: NoUselessAssignment;
  /**
   * Disallow useless backreferences in regular expressions
   *
   * @since v7.0.0-alpha.0
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-backreference no-useless-backreference}
   */
  "no-useless-backreference"?: NoUselessBackreference;
  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`
   *
   * @since v1.0.0-rc-1
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-call no-useless-call}
   */
  "no-useless-call"?: NoUselessCall;
  /**
   * Disallow unnecessary `catch` clauses
   *
   * @since v5.11.0
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-catch no-useless-catch}
   */
  "no-useless-catch"?: NoUselessCatch;
  /**
   * Disallow unnecessary computed property keys in objects and classes
   *
   * @since v2.9.0
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-computed-key no-useless-computed-key}
   */
  "no-useless-computed-key"?: NoUselessComputedKey;
  /**
   * Disallow unnecessary concatenation of literals or template literals
   *
   * @since v1.3.0
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-concat no-useless-concat}
   */
  "no-useless-concat"?: NoUselessConcat;
  /**
   * Disallow unnecessary constructors
   *
   * @since v2.0.0-beta.1
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-constructor no-useless-constructor}
   */
  "no-useless-constructor"?: NoUselessConstructor;
  /**
   * Disallow unnecessary escape characters
   *
   * @since v2.5.0
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-escape no-useless-escape}
   */
  "no-useless-escape"?: NoUselessEscape;
  /**
   * Disallow renaming import, export, and destructured assignments to the same name
   *
   * @since v2.11.0
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-rename no-useless-rename}
   */
  "no-useless-rename"?: NoUselessRename;
  /**
   * Disallow redundant return statements
   *
   * @since v3.9.0
   * @see {@link https://eslint.org/docs/latest/rules/no-useless-return no-useless-return}
   */
  "no-useless-return"?: NoUselessReturn;
  /**
   * Require `let` or `const` instead of `var`
   *
   * @since v0.12.0
   * @see {@link https://eslint.org/docs/latest/rules/no-var no-var}
   */
  "no-var"?: NoVar;
  /**
   * Disallow `void` operators
   *
   * @since v0.8.0
   * @see {@link https://eslint.org/docs/latest/rules/no-void no-void}
   */
  "no-void"?: NoVoid;
  /**
   * Disallow specified warning terms in comments
   *
   * @since v0.4.4
   * @see {@link https://eslint.org/docs/latest/rules/no-warning-comments no-warning-comments}
   */
  "no-warning-comments"?: NoWarningComments;
  /**
   * Disallow whitespace before properties
   *
   * @since v2.0.0-beta.1
   * @see {@link https://eslint.org/docs/latest/rules/no-whitespace-before-property no-whitespace-before-property}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/no-whitespace-before-property `no-whitespace-before-property`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "no-whitespace-before-property"?: NoWhitespaceBeforeProperty;
  /**
   * Disallow `with` statements
   *
   * @since v0.0.2
   * @see {@link https://eslint.org/docs/latest/rules/no-with no-with}
   */
  "no-with"?: NoWith;
  /**
   * Enforce the location of single-line statements
   *
   * @since v3.17.0
   * @see {@link https://eslint.org/docs/latest/rules/nonblock-statement-body-position nonblock-statement-body-position}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/nonblock-statement-body-position `nonblock-statement-body-position`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "nonblock-statement-body-position"?: NonblockStatementBodyPosition;
  /**
   * Enforce consistent line breaks after opening and before closing braces
   *
   * @since v2.12.0
   * @see {@link https://eslint.org/docs/latest/rules/object-curly-newline object-curly-newline}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/object-curly-newline `object-curly-newline`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "object-curly-newline"?: ObjectCurlyNewline;
  /**
   * Enforce consistent spacing inside braces
   *
   * @since v0.22.0
   * @see {@link https://eslint.org/docs/latest/rules/object-curly-spacing object-curly-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/object-curly-spacing `object-curly-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "object-curly-spacing"?: ObjectCurlySpacing;
  /**
   * Enforce placing object properties on separate lines
   *
   * @since v2.10.0
   * @see {@link https://eslint.org/docs/latest/rules/object-property-newline object-property-newline}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/object-property-newline `object-property-newline`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "object-property-newline"?: ObjectPropertyNewline;
  /**
   * Require or disallow method and property shorthand syntax for object literals
   *
   * @since v0.20.0
   * @see {@link https://eslint.org/docs/latest/rules/object-shorthand object-shorthand}
   */
  "object-shorthand"?: ObjectShorthand;
  /**
   * Enforce variables to be declared either together or separately in functions
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/one-var one-var}
   */
  "one-var"?: OneVar;
  /**
   * Require or disallow newlines around variable declarations
   *
   * @since v2.0.0-beta.3
   * @see {@link https://eslint.org/docs/latest/rules/one-var-declaration-per-line one-var-declaration-per-line}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/one-var-declaration-per-line `one-var-declaration-per-line`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "one-var-declaration-per-line"?: OneVarDeclarationPerLine;
  /**
   * Require or disallow assignment operator shorthand where possible
   *
   * @since v0.10.0
   * @see {@link https://eslint.org/docs/latest/rules/operator-assignment operator-assignment}
   */
  "operator-assignment"?: OperatorAssignment;
  /**
   * Enforce consistent linebreak style for operators
   *
   * @since v0.19.0
   * @see {@link https://eslint.org/docs/latest/rules/operator-linebreak operator-linebreak}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/operator-linebreak `operator-linebreak`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "operator-linebreak"?: OperatorLinebreak;
  /**
   * Require or disallow padding within blocks
   *
   * @since v0.9.0
   * @see {@link https://eslint.org/docs/latest/rules/padded-blocks padded-blocks}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/padded-blocks `padded-blocks`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "padded-blocks"?: PaddedBlocks;
  /**
   * Require or disallow padding lines between statements
   *
   * @since v4.0.0-beta.0
   * @see {@link https://eslint.org/docs/latest/rules/padding-line-between-statements padding-line-between-statements}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/padding-line-between-statements `padding-line-between-statements`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "padding-line-between-statements"?: PaddingLineBetweenStatements;
  /**
   * Require using arrow functions for callbacks
   *
   * @since v1.2.0
   * @see {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback prefer-arrow-callback}
   */
  "prefer-arrow-callback"?: PreferArrowCallback;
  /**
   * Require `const` declarations for variables that are never reassigned after declared
   *
   * @since v0.23.0
   * @see {@link https://eslint.org/docs/latest/rules/prefer-const prefer-const}
   */
  "prefer-const"?: PreferConst;
  /**
   * Require destructuring from arrays and/or objects
   *
   * @since v3.13.0
   * @see {@link https://eslint.org/docs/latest/rules/prefer-destructuring prefer-destructuring}
   */
  "prefer-destructuring"?: PreferDestructuring;
  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator
   *
   * @since v6.7.0
   * @see {@link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator prefer-exponentiation-operator}
   */
  "prefer-exponentiation-operator"?: PreferExponentiationOperator;
  /**
   * Enforce using named capture group in regular expression
   *
   * @since v5.15.0
   * @see {@link https://eslint.org/docs/latest/rules/prefer-named-capture-group prefer-named-capture-group}
   */
  "prefer-named-capture-group"?: PreferNamedCaptureGroup;
  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
   *
   * @since v3.5.0
   * @see {@link https://eslint.org/docs/latest/rules/prefer-numeric-literals prefer-numeric-literals}
   */
  "prefer-numeric-literals"?: PreferNumericLiterals;
  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
   *
   * @since v8.5.0
   * @see {@link https://eslint.org/docs/latest/rules/prefer-object-has-own prefer-object-has-own}
   */
  "prefer-object-has-own"?: PreferObjectHasOwn;
  /**
   * Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead
   *
   * @since v5.0.0-alpha.3
   * @see {@link https://eslint.org/docs/latest/rules/prefer-object-spread prefer-object-spread}
   */
  "prefer-object-spread"?: PreferObjectSpread;
  /**
   * Require using Error objects as Promise rejection reasons
   *
   * @since v3.14.0
   * @see {@link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors prefer-promise-reject-errors}
   */
  "prefer-promise-reject-errors"?: PreferPromiseRejectErrors;
  /**
   * Require `Reflect` methods where applicable
   *
   * @since v1.0.0-rc-2
   * @see {@link https://eslint.org/docs/latest/rules/prefer-reflect prefer-reflect}
   * @deprecated This rule was `deprecated` in ESLint v3.9.0. There is no replacement rule.
   */
  "prefer-reflect"?: PreferReflect;
  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals
   *
   * @since v6.4.0
   * @see {@link https://eslint.org/docs/latest/rules/prefer-regex-literals prefer-regex-literals}
   */
  "prefer-regex-literals"?: PreferRegexLiterals;
  /**
   * Require rest parameters instead of `arguments`
   *
   * @since v2.0.0-alpha-1
   * @see {@link https://eslint.org/docs/latest/rules/prefer-rest-params prefer-rest-params}
   */
  "prefer-rest-params"?: PreferRestParams;
  /**
   * Require spread operators instead of `.apply()`
   *
   * @since v1.0.0-rc-1
   * @see {@link https://eslint.org/docs/latest/rules/prefer-spread prefer-spread}
   */
  "prefer-spread"?: PreferSpread;
  /**
   * Require template literals instead of string concatenation
   *
   * @since v1.2.0
   * @see {@link https://eslint.org/docs/latest/rules/prefer-template prefer-template}
   */
  "prefer-template"?: PreferTemplate;
  /**
   * Disallow losing originally caught error when re-throwing custom errors
   *
   * @since v9.35.0
   * @see {@link https://eslint.org/docs/latest/rules/preserve-caught-error preserve-caught-error}
   */
  "preserve-caught-error"?: PreserveCaughtError;
  /**
   * Require quotes around object literal property names
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/quote-props quote-props}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/quote-props `quote-props`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "quote-props"?: QuoteProps;
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   *
   * @since v0.0.7
   * @see {@link https://eslint.org/docs/latest/rules/quotes quotes}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/quotes `quotes`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  quotes?: Quotes;
  /**
   * Enforce the use of the radix argument when using `parseInt()`
   *
   * @since v0.0.7
   * @see {@link https://eslint.org/docs/latest/rules/radix radix}
   */
  radix?: Radix;
  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
   *
   * @since v5.3.0
   * @see {@link https://eslint.org/docs/latest/rules/require-atomic-updates require-atomic-updates}
   */
  "require-atomic-updates"?: RequireAtomicUpdates;
  /**
   * Disallow async functions which have no `await` expression
   *
   * @since v3.11.0
   * @see {@link https://eslint.org/docs/latest/rules/require-await require-await}
   */
  "require-await"?: RequireAwait;
  /**
   * Enforce the use of `u` or `v` flag on regular expressions
   *
   * @since v5.3.0
   * @see {@link https://eslint.org/docs/latest/rules/require-unicode-regexp require-unicode-regexp}
   */
  "require-unicode-regexp"?: RequireUnicodeRegexp;
  /**
   * Require generator functions to contain `yield`
   *
   * @since v1.0.0-rc-1
   * @see {@link https://eslint.org/docs/latest/rules/require-yield require-yield}
   */
  "require-yield"?: RequireYield;
  /**
   * Enforce spacing between rest and spread operators and their expressions
   *
   * @since v2.12.0
   * @see {@link https://eslint.org/docs/latest/rules/rest-spread-spacing rest-spread-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/rest-spread-spacing `rest-spread-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "rest-spread-spacing"?: RestSpreadSpacing;
  /**
   * Require or disallow semicolons instead of ASI
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/semi semi}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/semi `semi`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  semi?: Semi;
  /**
   * Enforce consistent spacing before and after semicolons
   *
   * @since v0.16.0
   * @see {@link https://eslint.org/docs/latest/rules/semi-spacing semi-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/semi-spacing `semi-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "semi-spacing"?: SemiSpacing;
  /**
   * Enforce location of semicolons
   *
   * @since v4.0.0-beta.0
   * @see {@link https://eslint.org/docs/latest/rules/semi-style semi-style}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/semi-style `semi-style`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "semi-style"?: SemiStyle;
  /**
   * Enforce sorted `import` declarations within modules
   *
   * @since v2.0.0-beta.1
   * @see {@link https://eslint.org/docs/latest/rules/sort-imports sort-imports}
   */
  "sort-imports"?: SortImports;
  /**
   * Require object keys to be sorted
   *
   * @since v3.3.0
   * @see {@link https://eslint.org/docs/latest/rules/sort-keys sort-keys}
   */
  "sort-keys"?: SortKeys;
  /**
   * Require variables within the same declaration block to be sorted
   *
   * @since v0.2.0
   * @see {@link https://eslint.org/docs/latest/rules/sort-vars sort-vars}
   */
  "sort-vars"?: SortVars;
  /**
   * Enforce consistent spacing before blocks
   *
   * @since v0.9.0
   * @see {@link https://eslint.org/docs/latest/rules/space-before-blocks space-before-blocks}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/space-before-blocks `space-before-blocks`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "space-before-blocks"?: SpaceBeforeBlocks;
  /**
   * Enforce consistent spacing before `function` definition opening parenthesis
   *
   * @since v0.18.0
   * @see {@link https://eslint.org/docs/latest/rules/space-before-function-paren space-before-function-paren}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/space-before-function-paren `space-before-function-paren`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "space-before-function-paren"?: SpaceBeforeFunctionParen;
  /**
   * Enforce consistent spacing inside parentheses
   *
   * @since v0.8.0
   * @see {@link https://eslint.org/docs/latest/rules/space-in-parens space-in-parens}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/space-in-parens `space-in-parens`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "space-in-parens"?: SpaceInParens;
  /**
   * Require spacing around infix operators
   *
   * @since v0.2.0
   * @see {@link https://eslint.org/docs/latest/rules/space-infix-ops space-infix-ops}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/space-infix-ops `space-infix-ops`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "space-infix-ops"?: SpaceInfixOps;
  /**
   * Enforce consistent spacing before or after unary operators
   *
   * @since v0.10.0
   * @see {@link https://eslint.org/docs/latest/rules/space-unary-ops space-unary-ops}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/space-unary-ops `space-unary-ops`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "space-unary-ops"?: SpaceUnaryOps;
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   *
   * @since v0.23.0
   * @see {@link https://eslint.org/docs/latest/rules/spaced-comment spaced-comment}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/spaced-comment `spaced-comment`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "spaced-comment"?: SpacedComment;
  /**
   * Require or disallow strict mode directives
   *
   * @since v0.1.0
   * @see {@link https://eslint.org/docs/latest/rules/strict strict}
   */
  strict?: Strict;
  /**
   * Enforce spacing around colons of switch statements
   *
   * @since v4.0.0-beta.0
   * @see {@link https://eslint.org/docs/latest/rules/switch-colon-spacing switch-colon-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/switch-colon-spacing `switch-colon-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "switch-colon-spacing"?: SwitchColonSpacing;
  /**
   * Require symbol descriptions
   *
   * @since v3.4.0
   * @see {@link https://eslint.org/docs/latest/rules/symbol-description symbol-description}
   */
  "symbol-description"?: SymbolDescription;
  /**
   * Require or disallow spacing around embedded expressions of template strings
   *
   * @since v2.0.0-rc.0
   * @see {@link https://eslint.org/docs/latest/rules/template-curly-spacing template-curly-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/template-curly-spacing `template-curly-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "template-curly-spacing"?: TemplateCurlySpacing;
  /**
   * Require or disallow spacing between template tags and their literals
   *
   * @since v3.15.0
   * @see {@link https://eslint.org/docs/latest/rules/template-tag-spacing template-tag-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/template-tag-spacing `template-tag-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "template-tag-spacing"?: TemplateTagSpacing;
  /**
   * Require or disallow Unicode byte order mark (BOM)
   *
   * @since v2.11.0
   * @see {@link https://eslint.org/docs/latest/rules/unicode-bom unicode-bom}
   */
  "unicode-bom"?: UnicodeBom;
  /**
   * Require calls to `isNaN()` when checking for `NaN`
   *
   * @since v0.0.6
   * @see {@link https://eslint.org/docs/latest/rules/use-isnan use-isnan}
   */
  "use-isnan"?: UseIsnan;
  /**
   * Enforce comparing `typeof` expressions against valid strings
   *
   * @since v0.5.0
   * @see {@link https://eslint.org/docs/latest/rules/valid-typeof valid-typeof}
   */
  "valid-typeof"?: ValidTypeof;
  /**
   * Require `var` declarations be placed at the top of their containing scope
   *
   * @since v0.8.0
   * @see {@link https://eslint.org/docs/latest/rules/vars-on-top vars-on-top}
   */
  "vars-on-top"?: VarsOnTop;
  /**
   * Require parentheses around immediate `function` invocations
   *
   * @since v0.0.9
   * @see {@link https://eslint.org/docs/latest/rules/wrap-iife wrap-iife}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/wrap-iife `wrap-iife`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "wrap-iife"?: WrapIife;
  /**
   * Require parenthesis around regex literals
   *
   * @since v0.1.0
   * @see {@link https://eslint.org/docs/latest/rules/wrap-regex wrap-regex}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/wrap-regex `wrap-regex`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "wrap-regex"?: WrapRegex;
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   *
   * @since v2.0.0-alpha-1
   * @see {@link https://eslint.org/docs/latest/rules/yield-star-spacing yield-star-spacing}
   * @deprecated This rule was `deprecated` in ESLint v8.53.0. It will be removed in v11.0.0. Please use the {@link https://eslint.style/rules/yield-star-spacing `yield-star-spacing`} in {@link https://eslint.style `@stylistic/eslint-plugin`} rule instead. {@link https://eslint.org/blog/2023/10/deprecating-formatting-rules/ Learn more}
   */
  "yield-star-spacing"?: YieldStarSpacing;
  /**
   * Require or disallow "Yoda" conditions
   *
   * @since v0.7.1
   * @see {@link https://eslint.org/docs/latest/rules/yoda yoda}
   */
  yoda?: Yoda;
}
