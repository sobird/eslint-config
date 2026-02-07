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
              consistent?: boolean;
              multiline?: boolean;
              minItems?: number | null;
            }
        )
      | {
          ArrayExpression?:
            | ("always" | "never" | "consistent")
            | {
                consistent?: boolean;
                multiline?: boolean;
                minItems?: number | null;
              };
          ArrayPattern?:
            | ("always" | "never" | "consistent")
            | {
                consistent?: boolean;
                multiline?: boolean;
                minItems?: number | null;
              };
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
export type CommaDangle =
  | []
  | [
      | ("always-multiline" | "always" | "never" | "only-multiline")
      | {
          arrays?: "always-multiline" | "always" | "never" | "only-multiline" | "ignore";
          objects?: "always-multiline" | "always" | "never" | "only-multiline" | "ignore";
          imports?: "always-multiline" | "always" | "never" | "only-multiline" | "ignore";
          exports?: "always-multiline" | "always" | "never" | "only-multiline" | "ignore";
          functions?: "always-multiline" | "always" | "never" | "only-multiline" | "ignore";
          importAttributes?: "always-multiline" | "always" | "never" | "only-multiline" | "ignore";
          dynamicImports?: "always-multiline" | "always" | "never" | "only-multiline" | "ignore";
          enums?: "always-multiline" | "always" | "never" | "only-multiline" | "ignore";
          generics?: "always-multiline" | "always" | "never" | "only-multiline" | "ignore";
          tuples?: "always-multiline" | "always" | "never" | "only-multiline" | "ignore";
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
export type CurlyNewline = [
  | ("always" | "never")
  | {
      IfStatementConsequent?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      IfStatementAlternative?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      DoWhileStatement?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      ForInStatement?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      ForOfStatement?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      ForStatement?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      WhileStatement?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      SwitchStatement?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      SwitchCase?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      TryStatementBlock?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      TryStatementHandler?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      TryStatementFinalizer?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      BlockStatement?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      ArrowFunctionExpression?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      FunctionDeclaration?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      FunctionExpression?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      Property?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      ClassBody?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      StaticBlock?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      WithStatement?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      TSModuleBlock?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      multiline?: boolean;
      minElements?: number;
      consistent?: boolean;
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
export type EolLast = ["always" | "never" | "unix" | "windows"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type FunctionCallArgumentNewline = ["always" | "never" | "consistent"];
export type FunctionCallSpacing =
  | []
  | ["never"]
  | []
  | ["always"]
  | [
      "always",
      {
        allowNewlines?: boolean;
        optionalChain?: {
          before?: boolean;
          after?: boolean;
        };
      }
    ];
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
      shorthand?:
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
          using?: number | ("first" | "off");
        };
    assignmentOperator?: number | "off";
    outerIIFEBody?: number | "off";
    MemberExpression?: number | "off";
    FunctionDeclaration?: {
      parameters?: number | ("first" | "off");
      body?: number;
      returnType?: number;
    };
    FunctionExpression?: {
      parameters?: number | ("first" | "off");
      body?: number;
      returnType?: number;
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
    offsetTernaryExpressions?:
      | boolean
      | {
          CallExpression?: boolean;
          AwaitExpression?: boolean;
          NewExpression?: boolean;
        };
    offsetTernaryExpressionsOffsetCallExpressions?: boolean;
    ignoredNodes?: string[];
    ignoreComments?: boolean;
    tabLength?: number;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type IndentBinaryOps = [number | "tab"];
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
      nonEmpty?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false;
      selfClosing?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxClosingTagLocation = ["tag-aligned" | "line-aligned"];
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
export type JsxCurlyNewline = [
  | ("consistent" | "never")
  | {
      singleline?: "consistent" | "require" | "forbid";
      multiline?: "consistent" | "require" | "forbid";
    }
];
export type JsxCurlySpacing =
  | []
  | [
      | {
          when?: "always" | "never";
          allowMultiline?: boolean;
          spacing?: {
            objectLiterals?: "always" | "never";
          };
          attributes?:
            | {
                when?: "always" | "never";
                allowMultiline?: boolean;
                spacing?: {
                  objectLiterals?: "always" | "never";
                };
              }
            | boolean;
          children?:
            | {
                when?: "always" | "never";
                allowMultiline?: boolean;
                spacing?: {
                  objectLiterals?: "always" | "never";
                };
              }
            | boolean;
        }
      | ("always" | "never")
    ]
  | [
      (
        | {
            when?: "always" | "never";
            allowMultiline?: boolean;
            spacing?: {
              objectLiterals?: "always" | "never";
            };
            attributes?:
              | {
                  when?: "always" | "never";
                  allowMultiline?: boolean;
                  spacing?: {
                    objectLiterals?: "always" | "never";
                  };
                }
              | boolean;
            children?:
              | {
                  when?: "always" | "never";
                  allowMultiline?: boolean;
                  spacing?: {
                    objectLiterals?: "always" | "never";
                  };
                }
              | boolean;
          }
        | ("always" | "never")
      ),
      {
        allowMultiline?: boolean;
        spacing?: {
          objectLiterals?: "always" | "never";
        };
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
export type JsxFirstPropNewLine = ["always" | "never" | "multiline" | "multiline-multiprop" | "multiprop"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxFunctionCallNewline = ["always" | "multiline"];
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
export type JsxOneExpressionPerLine = [
  {
    allow?: "none" | "literal" | "single-child" | "single-line" | "non-jsx";
  }
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
    ignore?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type JsxPropsNoMultiSpaces = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxQuotes = ["prefer-single" | "prefer-double"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type JsxSelfClosingComp = [
  {
    component?: boolean;
    html?: boolean;
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
    reservedFirst?: string[] | boolean;
    reservedLast?: string[];
    locale?: string;
  }
];
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
 * @minItems 1
 * @maxItems 1
 */
export type JsxWrapMultilines = [
  {
    declaration?:
      | (true | false | "ignore" | "parens" | "parens-new-line")
      | (true | false | "ignore" | "parens" | "parens-new-line");
    assignment?:
      | (true | false | "ignore" | "parens" | "parens-new-line")
      | (true | false | "ignore" | "parens" | "parens-new-line");
    return?:
      | (true | false | "ignore" | "parens" | "parens-new-line")
      | (true | false | "ignore" | "parens" | "parens-new-line");
    arrow?:
      | (true | false | "ignore" | "parens" | "parens-new-line")
      | (true | false | "ignore" | "parens" | "parens-new-line");
    condition?:
      | (true | false | "ignore" | "parens" | "parens-new-line")
      | (true | false | "ignore" | "parens" | "parens-new-line");
    logical?:
      | (true | false | "ignore" | "parens" | "parens-new-line")
      | (true | false | "ignore" | "parens" | "parens-new-line");
    prop?:
      | (true | false | "ignore" | "parens" | "parens-new-line")
      | (true | false | "ignore" | "parens" | "parens-new-line");
    propertyValue?:
      | (true | false | "ignore" | "parens" | "parens-new-line")
      | (true | false | "ignore" | "parens" | "parens-new-line");
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
      ignoredNodes?: (
        | "ObjectExpression"
        | "ObjectPattern"
        | "ImportDeclaration"
        | "ExportNamedDeclaration"
        | "ExportAllDeclaration"
        | "TSTypeLiteral"
        | "TSInterfaceBody"
        | "ClassBody"
      )[];
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
      function?: {
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
      arguments?: {
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
      eval?: {
        before?: boolean;
        after?: boolean;
      };
      from?: {
        before?: boolean;
        after?: boolean;
      };
      get?: {
        before?: boolean;
        after?: boolean;
      };
      let?: {
        before?: boolean;
        after?: boolean;
      };
      of?: {
        before?: boolean;
        after?: boolean;
      };
      set?: {
        before?: boolean;
        after?: boolean;
      };
      type?: {
        before?: boolean;
        after?: boolean;
      };
      using?: {
        before?: boolean;
        after?: boolean;
      };
      yield?: {
        before?: boolean;
        after?: boolean;
      };
      accessor?: {
        before?: boolean;
        after?: boolean;
      };
      satisfies?: {
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
    allowInterfaceStart?: boolean;
    allowInterfaceEnd?: boolean;
    allowTypeStart?: boolean;
    allowTypeEnd?: boolean;
    allowEnumStart?: boolean;
    allowEnumEnd?: boolean;
    allowModuleStart?: boolean;
    allowModuleEnd?: boolean;
    ignorePattern?: string;
    applyDefaultIgnorePatterns?: boolean;
    afterHashbangComment?: boolean;
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
    exceptAfterOverload?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ExpListStyle = [
  {
    singleLine?: SingleLineConfig;
    multiLine?: MultiLineConfig;
    overrides?: {
      "[]"?: BaseConfig;
      "{}"?: BaseConfig;
      "<>"?: BaseConfig;
      "()"?: BaseConfig;
      ArrayExpression?: BaseConfig;
      ArrayPattern?: BaseConfig;
      ArrowFunctionExpression?: BaseConfig;
      CallExpression?: BaseConfig;
      ExportNamedDeclaration?: BaseConfig;
      FunctionDeclaration?: BaseConfig;
      FunctionExpression?: BaseConfig;
      ImportDeclaration?: BaseConfig;
      ImportAttributes?: BaseConfig;
      NewExpression?: BaseConfig;
      ObjectExpression?: BaseConfig;
      ObjectPattern?: BaseConfig;
      TSDeclareFunction?: BaseConfig;
      TSFunctionType?: BaseConfig;
      TSInterfaceBody?: BaseConfig;
      TSEnumBody?: BaseConfig;
      TSTupleType?: BaseConfig;
      TSTypeLiteral?: BaseConfig;
      TSTypeParameterDeclaration?: BaseConfig;
      TSTypeParameterInstantiation?: BaseConfig;
      JSONArrayExpression?: BaseConfig;
      JSONObjectExpression?: BaseConfig;
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
export type MaxStatementsPerLine = [
  {
    max?: number;
    ignoredNodes?: (
      | "BreakStatement"
      | "ClassDeclaration"
      | "ContinueStatement"
      | "DebuggerStatement"
      | "DoWhileStatement"
      | "ExpressionStatement"
      | "ForInStatement"
      | "ForOfStatement"
      | "ForStatement"
      | "FunctionDeclaration"
      | "IfStatement"
      | "ImportDeclaration"
      | "LabeledStatement"
      | "ReturnStatement"
      | "SwitchStatement"
      | "ThrowStatement"
      | "TryStatement"
      | "VariableDeclaration"
      | "WhileStatement"
      | "WithStatement"
      | "ExportNamedDeclaration"
      | "ExportDefaultDeclaration"
      | "ExportAllDeclaration"
    )[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MemberDelimiterStyle = [
  {
    multiline?: {
      delimiter?: "none" | "semi" | "comma";
      requireLast?: boolean;
    };
    singleline?: {
      delimiter?: "semi" | "comma";
      requireLast?: boolean;
    };
    overrides?: {
      interface?: DelimiterConfig;
      typeLiteral?: DelimiterConfig;
    };
    multilineDetection?: "brackets" | "last-member";
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
        checkExclamation?: boolean;
      }
    ];
/**
 * @minItems 2
 * @maxItems 2
 */
export type MultilineTernary = [
  "always" | "always-multiline" | "never",
  {
    ignoreJSX?: boolean;
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
export type NewlinePerChainedCall = [
  {
    ignoreChainWithDepth?: number;
  }
];
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
        nestedConditionalExpressions?: boolean;
        allowNodesInSpreadElement?: {
          ConditionalExpression?: boolean;
          LogicalExpression?: boolean;
          AwaitExpression?: boolean;
        };
        ignoredNodes?: string[];
      }
    ];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoExtraSemi = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoFloatingDecimal = [];
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
export type NoMixedSpacesAndTabs = ["smart-tabs" | boolean];
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
    includeTabs?: boolean;
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
 * @minItems 1
 * @maxItems 1
 */
export type NoTabs = [
  {
    allowIndentationTabs?: boolean;
  }
];
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
export type NoWhitespaceBeforeProperty = [];
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
      TSTypeLiteral?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      TSInterfaceBody?:
        | ("always" | "never")
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      TSEnumBody?:
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
    overrides?: {
      ObjectPattern?: "always" | "never";
      ObjectExpression?: "always" | "never";
      ImportDeclaration?: "always" | "never";
      ImportAttributes?: "always" | "never";
      ExportNamedDeclaration?: "always" | "never";
      ExportAllDeclaration?: "always" | "never";
      TSMappedType?: "always" | "never";
      TSTypeLiteral?: "always" | "never";
      TSInterfaceBody?: "always" | "never";
      TSEnumBody?: "always" | "never";
    };
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
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type OneVarDeclarationPerLine = ["always" | "initializations"];
/**
 * @minItems 2
 * @maxItems 2
 */
export type OperatorLinebreak = [
  ("after" | "before" | "none") | null,
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
    | ("always" | "never" | "start" | "end")
    | {
        blocks?: "always" | "never" | "start" | "end";
        switches?: "always" | "never" | "start" | "end";
        classes?: "always" | "never" | "start" | "end";
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
        | "exports"
        | "require"
        | "directive"
        | "iife"
        | "block"
        | "empty"
        | "function"
        | "ts-method"
        | "break"
        | "case"
        | "class"
        | "continue"
        | "debugger"
        | "default"
        | "do"
        | "for"
        | "if"
        | "import"
        | "switch"
        | "throw"
        | "try"
        | "while"
        | "with"
        | "cjs-export"
        | "cjs-import"
        | "enum"
        | "interface"
        | "function-overload"
        | "block-like"
        | "singleline-block-like"
        | "multiline-block-like"
        | "expression"
        | "singleline-expression"
        | "multiline-expression"
        | "return"
        | "singleline-return"
        | "multiline-return"
        | "export"
        | "singleline-export"
        | "multiline-export"
        | "var"
        | "singleline-var"
        | "multiline-var"
        | "let"
        | "singleline-let"
        | "multiline-let"
        | "const"
        | "singleline-const"
        | "multiline-const"
        | "using"
        | "singleline-using"
        | "multiline-using"
        | "type"
        | "singleline-type"
        | "multiline-type"
      )
    | [
        (
          | "*"
          | "exports"
          | "require"
          | "directive"
          | "iife"
          | "block"
          | "empty"
          | "function"
          | "ts-method"
          | "break"
          | "case"
          | "class"
          | "continue"
          | "debugger"
          | "default"
          | "do"
          | "for"
          | "if"
          | "import"
          | "switch"
          | "throw"
          | "try"
          | "while"
          | "with"
          | "cjs-export"
          | "cjs-import"
          | "enum"
          | "interface"
          | "function-overload"
          | "block-like"
          | "singleline-block-like"
          | "multiline-block-like"
          | "expression"
          | "singleline-expression"
          | "multiline-expression"
          | "return"
          | "singleline-return"
          | "multiline-return"
          | "export"
          | "singleline-export"
          | "multiline-export"
          | "var"
          | "singleline-var"
          | "multiline-var"
          | "let"
          | "singleline-let"
          | "multiline-let"
          | "const"
          | "singleline-const"
          | "multiline-const"
          | "using"
          | "singleline-using"
          | "multiline-using"
          | "type"
          | "singleline-type"
          | "multiline-type"
        ),
        ...(
          | "*"
          | "exports"
          | "require"
          | "directive"
          | "iife"
          | "block"
          | "empty"
          | "function"
          | "ts-method"
          | "break"
          | "case"
          | "class"
          | "continue"
          | "debugger"
          | "default"
          | "do"
          | "for"
          | "if"
          | "import"
          | "switch"
          | "throw"
          | "try"
          | "while"
          | "with"
          | "cjs-export"
          | "cjs-import"
          | "enum"
          | "interface"
          | "function-overload"
          | "block-like"
          | "singleline-block-like"
          | "multiline-block-like"
          | "expression"
          | "singleline-expression"
          | "multiline-expression"
          | "return"
          | "singleline-return"
          | "multiline-return"
          | "export"
          | "singleline-export"
          | "multiline-export"
          | "var"
          | "singleline-var"
          | "multiline-var"
          | "let"
          | "singleline-let"
          | "multiline-let"
          | "const"
          | "singleline-const"
          | "multiline-const"
          | "using"
          | "singleline-using"
          | "multiline-using"
          | "type"
          | "singleline-type"
          | "multiline-type"
        )[]
      ];
  next:
    | (
        | "*"
        | "exports"
        | "require"
        | "directive"
        | "iife"
        | "block"
        | "empty"
        | "function"
        | "ts-method"
        | "break"
        | "case"
        | "class"
        | "continue"
        | "debugger"
        | "default"
        | "do"
        | "for"
        | "if"
        | "import"
        | "switch"
        | "throw"
        | "try"
        | "while"
        | "with"
        | "cjs-export"
        | "cjs-import"
        | "enum"
        | "interface"
        | "function-overload"
        | "block-like"
        | "singleline-block-like"
        | "multiline-block-like"
        | "expression"
        | "singleline-expression"
        | "multiline-expression"
        | "return"
        | "singleline-return"
        | "multiline-return"
        | "export"
        | "singleline-export"
        | "multiline-export"
        | "var"
        | "singleline-var"
        | "multiline-var"
        | "let"
        | "singleline-let"
        | "multiline-let"
        | "const"
        | "singleline-const"
        | "multiline-const"
        | "using"
        | "singleline-using"
        | "multiline-using"
        | "type"
        | "singleline-type"
        | "multiline-type"
      )
    | [
        (
          | "*"
          | "exports"
          | "require"
          | "directive"
          | "iife"
          | "block"
          | "empty"
          | "function"
          | "ts-method"
          | "break"
          | "case"
          | "class"
          | "continue"
          | "debugger"
          | "default"
          | "do"
          | "for"
          | "if"
          | "import"
          | "switch"
          | "throw"
          | "try"
          | "while"
          | "with"
          | "cjs-export"
          | "cjs-import"
          | "enum"
          | "interface"
          | "function-overload"
          | "block-like"
          | "singleline-block-like"
          | "multiline-block-like"
          | "expression"
          | "singleline-expression"
          | "multiline-expression"
          | "return"
          | "singleline-return"
          | "multiline-return"
          | "export"
          | "singleline-export"
          | "multiline-export"
          | "var"
          | "singleline-var"
          | "multiline-var"
          | "let"
          | "singleline-let"
          | "multiline-let"
          | "const"
          | "singleline-const"
          | "multiline-const"
          | "using"
          | "singleline-using"
          | "multiline-using"
          | "type"
          | "singleline-type"
          | "multiline-type"
        ),
        ...(
          | "*"
          | "exports"
          | "require"
          | "directive"
          | "iife"
          | "block"
          | "empty"
          | "function"
          | "ts-method"
          | "break"
          | "case"
          | "class"
          | "continue"
          | "debugger"
          | "default"
          | "do"
          | "for"
          | "if"
          | "import"
          | "switch"
          | "throw"
          | "try"
          | "while"
          | "with"
          | "cjs-export"
          | "cjs-import"
          | "enum"
          | "interface"
          | "function-overload"
          | "block-like"
          | "singleline-block-like"
          | "multiline-block-like"
          | "expression"
          | "singleline-expression"
          | "multiline-expression"
          | "return"
          | "singleline-return"
          | "multiline-return"
          | "export"
          | "singleline-export"
          | "multiline-export"
          | "var"
          | "singleline-var"
          | "multiline-var"
          | "let"
          | "singleline-let"
          | "multiline-let"
          | "const"
          | "singleline-const"
          | "multiline-const"
          | "using"
          | "singleline-using"
          | "multiline-using"
          | "type"
          | "singleline-type"
          | "multiline-type"
        )[]
      ];
}[];
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
        allowTemplateLiterals?: boolean | ("never" | "avoidEscape" | "always");
        ignoreStringLiterals?: boolean;
      }
  )
];
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
export type SpaceBeforeBlocks = [
  | ("always" | "never")
  | {
      keywords?: "always" | "never" | "off";
      functions?: "always" | "never" | "off";
      classes?: "always" | "never" | "off";
      modules?: "always" | "never" | "off";
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
      catch?: "always" | "never" | "ignore";
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
    ignoreTypes?: boolean;
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
export type SwitchColonSpacing = [
  {
    before?: boolean;
    after?: boolean;
  }
];
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
export type TypeAnnotationSpacing = [
  {
    before?: boolean;
    after?: boolean;
    overrides?: {
      colon?: SpacingConfig;
      arrow?: "ignore" | SpacingConfig;
      variable?: SpacingConfig;
      parameter?: SpacingConfig;
      property?: SpacingConfig;
      returnType?: SpacingConfig;
    };
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type TypeGenericSpacing = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type TypeNamedTupleSpacing = [];
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
 * ESLint rules for @stylistic
 *
 * @package `@stylistic/eslint-plugin`
 * @namespace `@stylistic`
 * @version 5.7.1
 */
export interface StylisticRules {
  /**
   * Enforce linebreaks after opening and before closing array brackets
   *
   * @see {@link https://eslint.style/rules/array-bracket-newline array-bracket-newline}
   */
  "@stylistic/array-bracket-newline"?: ArrayBracketNewline;
  /**
   * Enforce consistent spacing inside array brackets
   *
   * @see {@link https://eslint.style/rules/array-bracket-spacing array-bracket-spacing}
   */
  "@stylistic/array-bracket-spacing"?: ArrayBracketSpacing;
  /**
   * Enforce line breaks after each array element
   *
   * @see {@link https://eslint.style/rules/array-element-newline array-element-newline}
   */
  "@stylistic/array-element-newline"?: ArrayElementNewline;
  /**
   * Require parentheses around arrow function arguments
   *
   * @see {@link https://eslint.style/rules/arrow-parens arrow-parens}
   */
  "@stylistic/arrow-parens"?: ArrowParens;
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   *
   * @see {@link https://eslint.style/rules/arrow-spacing arrow-spacing}
   */
  "@stylistic/arrow-spacing"?: ArrowSpacing;
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   *
   * @see {@link https://eslint.style/rules/block-spacing block-spacing}
   */
  "@stylistic/block-spacing"?: BlockSpacing;
  /**
   * Enforce consistent brace style for blocks
   *
   * @see {@link https://eslint.style/rules/brace-style brace-style}
   */
  "@stylistic/brace-style"?: BraceStyle;
  /**
   * Require or disallow trailing commas
   *
   * @see {@link https://eslint.style/rules/comma-dangle comma-dangle}
   */
  "@stylistic/comma-dangle"?: CommaDangle;
  /**
   * Enforce consistent spacing before and after commas
   *
   * @see {@link https://eslint.style/rules/comma-spacing comma-spacing}
   */
  "@stylistic/comma-spacing"?: CommaSpacing;
  /**
   * Enforce consistent comma style
   *
   * @see {@link https://eslint.style/rules/comma-style comma-style}
   */
  "@stylistic/comma-style"?: CommaStyle;
  /**
   * Enforce consistent spacing inside computed property brackets
   *
   * @see {@link https://eslint.style/rules/computed-property-spacing computed-property-spacing}
   */
  "@stylistic/computed-property-spacing"?: ComputedPropertySpacing;
  /**
   * Enforce consistent line breaks after opening and before closing braces
   *
   * @see {@link https://eslint.style/rules/curly-newline curly-newline}
   */
  "@stylistic/curly-newline"?: CurlyNewline;
  /**
   * Enforce consistent newlines before and after dots
   *
   * @see {@link https://eslint.style/rules/dot-location dot-location}
   */
  "@stylistic/dot-location"?: DotLocation;
  /**
   * Require or disallow newline at the end of files
   *
   * @see {@link https://eslint.style/rules/eol-last eol-last}
   */
  "@stylistic/eol-last"?: EolLast;
  /**
   * Enforce line breaks between arguments of a function call
   *
   * @see {@link https://eslint.style/rules/function-call-argument-newline function-call-argument-newline}
   */
  "@stylistic/function-call-argument-newline"?: FunctionCallArgumentNewline;
  /**
   * Require or disallow spacing between function identifiers and their invocations
   *
   * @see {@link https://eslint.style/rules/function-call-spacing function-call-spacing}
   */
  "@stylistic/function-call-spacing"?: FunctionCallSpacing;
  /**
   * Enforce consistent line breaks inside function parentheses
   *
   * @see {@link https://eslint.style/rules/function-paren-newline function-paren-newline}
   */
  "@stylistic/function-paren-newline"?: FunctionParenNewline;
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   *
   * @see {@link https://eslint.style/rules/generator-star-spacing generator-star-spacing}
   */
  "@stylistic/generator-star-spacing"?: GeneratorStarSpacing;
  /**
   * Enforce the location of arrow function bodies
   *
   * @see {@link https://eslint.style/rules/implicit-arrow-linebreak implicit-arrow-linebreak}
   */
  "@stylistic/implicit-arrow-linebreak"?: ImplicitArrowLinebreak;
  /**
   * Enforce consistent indentation
   *
   * @see {@link https://eslint.style/rules/indent indent}
   */
  "@stylistic/indent"?: Indent;
  /**
   * Indentation for binary operators
   *
   * @see {@link https://eslint.style/rules/indent-binary-ops indent-binary-ops}
   */
  "@stylistic/indent-binary-ops"?: IndentBinaryOps;
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   *
   * @see {@link https://eslint.style/rules/jsx-child-element-spacing jsx-child-element-spacing}
   */
  "@stylistic/jsx-child-element-spacing"?: JsxChildElementSpacing;
  /**
   * Enforce closing bracket location in JSX
   *
   * @see {@link https://eslint.style/rules/jsx-closing-bracket-location jsx-closing-bracket-location}
   */
  "@stylistic/jsx-closing-bracket-location"?: JsxClosingBracketLocation;
  /**
   * Enforce closing tag location for multiline JSX
   *
   * @see {@link https://eslint.style/rules/jsx-closing-tag-location jsx-closing-tag-location}
   */
  "@stylistic/jsx-closing-tag-location"?: JsxClosingTagLocation;
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   *
   * @see {@link https://eslint.style/rules/jsx-curly-brace-presence jsx-curly-brace-presence}
   */
  "@stylistic/jsx-curly-brace-presence"?: JsxCurlyBracePresence;
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   *
   * @see {@link https://eslint.style/rules/jsx-curly-newline jsx-curly-newline}
   */
  "@stylistic/jsx-curly-newline"?: JsxCurlyNewline;
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   *
   * @see {@link https://eslint.style/rules/jsx-curly-spacing jsx-curly-spacing}
   */
  "@stylistic/jsx-curly-spacing"?: JsxCurlySpacing;
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   *
   * @see {@link https://eslint.style/rules/jsx-equals-spacing jsx-equals-spacing}
   */
  "@stylistic/jsx-equals-spacing"?: JsxEqualsSpacing;
  /**
   * Enforce proper position of the first property in JSX
   *
   * @see {@link https://eslint.style/rules/jsx-first-prop-new-line jsx-first-prop-new-line}
   */
  "@stylistic/jsx-first-prop-new-line"?: JsxFirstPropNewLine;
  /**
   * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
   *
   * @see {@link https://eslint.style/rules/jsx-function-call-newline jsx-function-call-newline}
   */
  "@stylistic/jsx-function-call-newline"?: JsxFunctionCallNewline;
  /**
   * Enforce JSX indentation. Deprecated, use `indent` rule instead.
   *
   * @see {@link https://eslint.style/rules/jsx-indent jsx-indent}
   * @deprecated This rule was `deprecated` in @stylistic v5.0.0. Please use the {@link https://eslint.style/rules/indent `indent`} rule instead.
   */
  "@stylistic/jsx-indent"?: JsxIndent;
  /**
   * Enforce props indentation in JSX
   *
   * @see {@link https://eslint.style/rules/jsx-indent-props jsx-indent-props}
   */
  "@stylistic/jsx-indent-props"?: JsxIndentProps;
  /**
   * Enforce maximum of props on a single line in JSX
   *
   * @see {@link https://eslint.style/rules/jsx-max-props-per-line jsx-max-props-per-line}
   */
  "@stylistic/jsx-max-props-per-line"?: JsxMaxPropsPerLine;
  /**
   * Require or prevent a new line after jsx elements and expressions.
   *
   * @see {@link https://eslint.style/rules/jsx-newline jsx-newline}
   */
  "@stylistic/jsx-newline"?: JsxNewline;
  /**
   * Require one JSX element per line
   *
   * @see {@link https://eslint.style/rules/jsx-one-expression-per-line jsx-one-expression-per-line}
   */
  "@stylistic/jsx-one-expression-per-line"?: JsxOneExpressionPerLine;
  /**
   * Enforce PascalCase for user-defined JSX components
   *
   * @see {@link https://eslint.style/rules/jsx-pascal-case jsx-pascal-case}
   */
  "@stylistic/jsx-pascal-case"?: JsxPascalCase;
  /**
   * Disallow multiple spaces between inline JSX props. Deprecated, use `no-multi-spaces` rule instead.
   *
   * @see {@link https://eslint.style/rules/jsx-props-no-multi-spaces jsx-props-no-multi-spaces}
   * @deprecated This rule was `deprecated` in @stylistic v5.0.0. Please use the {@link https://eslint.style/rules/no-multi-spaces `no-multi-spaces`} rule instead.
   */
  "@stylistic/jsx-props-no-multi-spaces"?: JsxPropsNoMultiSpaces;
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   *
   * @see {@link https://eslint.style/rules/jsx-quotes jsx-quotes}
   */
  "@stylistic/jsx-quotes"?: JsxQuotes;
  /**
   * Disallow extra closing tags for components without children
   *
   * @see {@link https://eslint.style/rules/jsx-self-closing-comp jsx-self-closing-comp}
   */
  "@stylistic/jsx-self-closing-comp"?: JsxSelfClosingComp;
  /**
   * Enforce props alphabetical sorting
   *
   * @see {@link https://eslint.style/rules/jsx-sort-props jsx-sort-props}
   * @deprecated This rule was `deprecated` in @stylistic v5.7.0. Please use the {@link https://perfectionist.dev/rules/sort-jsx-props `sort-jsx-props`} in {@link https://perfectionist.dev `eslint-plugin-perfectionist`} rule instead.
   */
  "@stylistic/jsx-sort-props"?: JsxSortProps;
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   *
   * @see {@link https://eslint.style/rules/jsx-tag-spacing jsx-tag-spacing}
   */
  "@stylistic/jsx-tag-spacing"?: JsxTagSpacing;
  /**
   * Disallow missing parentheses around multiline JSX
   *
   * @see {@link https://eslint.style/rules/jsx-wrap-multilines jsx-wrap-multilines}
   */
  "@stylistic/jsx-wrap-multilines"?: JsxWrapMultilines;
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces
   *
   * @see {@link https://eslint.style/rules/key-spacing key-spacing}
   */
  "@stylistic/key-spacing"?: KeySpacing;
  /**
   * Enforce consistent spacing before and after keywords
   *
   * @see {@link https://eslint.style/rules/keyword-spacing keyword-spacing}
   */
  "@stylistic/keyword-spacing"?: KeywordSpacing;
  /**
   * Enforce position of line comments
   *
   * @see {@link https://eslint.style/rules/line-comment-position line-comment-position}
   */
  "@stylistic/line-comment-position"?: LineCommentPosition;
  /**
   * Enforce consistent linebreak style
   *
   * @see {@link https://eslint.style/rules/linebreak-style linebreak-style}
   */
  "@stylistic/linebreak-style"?: LinebreakStyle;
  /**
   * Require empty lines around comments
   *
   * @see {@link https://eslint.style/rules/lines-around-comment lines-around-comment}
   */
  "@stylistic/lines-around-comment"?: LinesAroundComment;
  /**
   * Require or disallow an empty line between class members
   *
   * @see {@link https://eslint.style/rules/lines-between-class-members lines-between-class-members}
   */
  "@stylistic/lines-between-class-members"?: LinesBetweenClassMembers;
  /**
   * Enforce consistent spacing and line break styles inside brackets.
   *
   * @see {@link https://eslint.style/rules/list-style exp-list-style}
   */
  "@stylistic/exp-list-style"?: ExpListStyle;
  /**
   * Enforce a maximum line length
   *
   * @see {@link https://eslint.style/rules/max-len max-len}
   */
  "@stylistic/max-len"?: MaxLen;
  /**
   * Enforce a maximum number of statements allowed per line
   *
   * @see {@link https://eslint.style/rules/max-statements-per-line max-statements-per-line}
   */
  "@stylistic/max-statements-per-line"?: MaxStatementsPerLine;
  /**
   * Require a specific member delimiter style for interfaces and type literals
   *
   * @see {@link https://eslint.style/rules/member-delimiter-style member-delimiter-style}
   */
  "@stylistic/member-delimiter-style"?: MemberDelimiterStyle;
  /**
   * Enforce a particular style for multiline comments
   *
   * @see {@link https://eslint.style/rules/multiline-comment-style multiline-comment-style}
   */
  "@stylistic/multiline-comment-style"?: MultilineCommentStyle;
  /**
   * Enforce newlines between operands of ternary expressions
   *
   * @see {@link https://eslint.style/rules/multiline-ternary multiline-ternary}
   */
  "@stylistic/multiline-ternary"?: MultilineTernary;
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   *
   * @see {@link https://eslint.style/rules/new-parens new-parens}
   */
  "@stylistic/new-parens"?: NewParens;
  /**
   * Require a newline after each call in a method chain
   *
   * @see {@link https://eslint.style/rules/newline-per-chained-call newline-per-chained-call}
   */
  "@stylistic/newline-per-chained-call"?: NewlinePerChainedCall;
  /**
   * Disallow arrow functions where they could be confused with comparisons
   *
   * @see {@link https://eslint.style/rules/no-confusing-arrow no-confusing-arrow}
   */
  "@stylistic/no-confusing-arrow"?: NoConfusingArrow;
  /**
   * Disallow unnecessary parentheses
   *
   * @see {@link https://eslint.style/rules/no-extra-parens no-extra-parens}
   */
  "@stylistic/no-extra-parens"?: NoExtraParens;
  /**
   * Disallow unnecessary semicolons
   *
   * @see {@link https://eslint.style/rules/no-extra-semi no-extra-semi}
   */
  "@stylistic/no-extra-semi"?: NoExtraSemi;
  /**
   * Disallow leading or trailing decimal points in numeric literals
   *
   * @see {@link https://eslint.style/rules/no-floating-decimal no-floating-decimal}
   */
  "@stylistic/no-floating-decimal"?: NoFloatingDecimal;
  /**
   * Disallow mixed binary operators
   *
   * @see {@link https://eslint.style/rules/no-mixed-operators no-mixed-operators}
   */
  "@stylistic/no-mixed-operators"?: NoMixedOperators;
  /**
   * Disallow mixed spaces and tabs for indentation
   *
   * @see {@link https://eslint.style/rules/no-mixed-spaces-and-tabs no-mixed-spaces-and-tabs}
   */
  "@stylistic/no-mixed-spaces-and-tabs"?: NoMixedSpacesAndTabs;
  /**
   * Disallow multiple spaces
   *
   * @see {@link https://eslint.style/rules/no-multi-spaces no-multi-spaces}
   */
  "@stylistic/no-multi-spaces"?: NoMultiSpaces;
  /**
   * Disallow multiple empty lines
   *
   * @see {@link https://eslint.style/rules/no-multiple-empty-lines no-multiple-empty-lines}
   */
  "@stylistic/no-multiple-empty-lines"?: NoMultipleEmptyLines;
  /**
   * Disallow all tabs
   *
   * @see {@link https://eslint.style/rules/no-tabs no-tabs}
   */
  "@stylistic/no-tabs"?: NoTabs;
  /**
   * Disallow trailing whitespace at the end of lines
   *
   * @see {@link https://eslint.style/rules/no-trailing-spaces no-trailing-spaces}
   */
  "@stylistic/no-trailing-spaces"?: NoTrailingSpaces;
  /**
   * Disallow whitespace before properties
   *
   * @see {@link https://eslint.style/rules/no-whitespace-before-property no-whitespace-before-property}
   */
  "@stylistic/no-whitespace-before-property"?: NoWhitespaceBeforeProperty;
  /**
   * Enforce the location of single-line statements
   *
   * @see {@link https://eslint.style/rules/nonblock-statement-body-position nonblock-statement-body-position}
   */
  "@stylistic/nonblock-statement-body-position"?: NonblockStatementBodyPosition;
  /**
   * Enforce consistent line breaks after opening and before closing braces
   *
   * @see {@link https://eslint.style/rules/object-curly-newline object-curly-newline}
   */
  "@stylistic/object-curly-newline"?: ObjectCurlyNewline;
  /**
   * Enforce consistent spacing inside braces
   *
   * @see {@link https://eslint.style/rules/object-curly-spacing object-curly-spacing}
   */
  "@stylistic/object-curly-spacing"?: ObjectCurlySpacing;
  /**
   * Enforce placing object properties on separate lines
   *
   * @see {@link https://eslint.style/rules/object-property-newline object-property-newline}
   */
  "@stylistic/object-property-newline"?: ObjectPropertyNewline;
  /**
   * Require or disallow newlines around variable declarations
   *
   * @see {@link https://eslint.style/rules/one-var-declaration-per-line one-var-declaration-per-line}
   */
  "@stylistic/one-var-declaration-per-line"?: OneVarDeclarationPerLine;
  /**
   * Enforce consistent linebreak style for operators
   *
   * @see {@link https://eslint.style/rules/operator-linebreak operator-linebreak}
   */
  "@stylistic/operator-linebreak"?: OperatorLinebreak;
  /**
   * Require or disallow padding within blocks
   *
   * @see {@link https://eslint.style/rules/padded-blocks padded-blocks}
   */
  "@stylistic/padded-blocks"?: PaddedBlocks;
  /**
   * Require or disallow padding lines between statements
   *
   * @see {@link https://eslint.style/rules/padding-line-between-statements padding-line-between-statements}
   */
  "@stylistic/padding-line-between-statements"?: PaddingLineBetweenStatements;
  /**
   * Require quotes around object literal, type literal, interfaces and enums property names
   *
   * @see {@link https://eslint.style/rules/quote-props quote-props}
   */
  "@stylistic/quote-props"?: QuoteProps;
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   *
   * @see {@link https://eslint.style/rules/quotes quotes}
   */
  "@stylistic/quotes"?: Quotes;
  /**
   * Enforce spacing between rest and spread operators and their expressions
   *
   * @see {@link https://eslint.style/rules/rest-spread-spacing rest-spread-spacing}
   */
  "@stylistic/rest-spread-spacing"?: RestSpreadSpacing;
  /**
   * Require or disallow semicolons instead of ASI
   *
   * @see {@link https://eslint.style/rules/semi semi}
   */
  "@stylistic/semi"?: Semi;
  /**
   * Enforce consistent spacing before and after semicolons
   *
   * @see {@link https://eslint.style/rules/semi-spacing semi-spacing}
   */
  "@stylistic/semi-spacing"?: SemiSpacing;
  /**
   * Enforce location of semicolons
   *
   * @see {@link https://eslint.style/rules/semi-style semi-style}
   */
  "@stylistic/semi-style"?: SemiStyle;
  /**
   * Enforce consistent spacing before blocks
   *
   * @see {@link https://eslint.style/rules/space-before-blocks space-before-blocks}
   */
  "@stylistic/space-before-blocks"?: SpaceBeforeBlocks;
  /**
   * Enforce consistent spacing before function parenthesis
   *
   * @see {@link https://eslint.style/rules/space-before-function-paren space-before-function-paren}
   */
  "@stylistic/space-before-function-paren"?: SpaceBeforeFunctionParen;
  /**
   * Enforce consistent spacing inside parentheses
   *
   * @see {@link https://eslint.style/rules/space-in-parens space-in-parens}
   */
  "@stylistic/space-in-parens"?: SpaceInParens;
  /**
   * Require spacing around infix operators
   *
   * @see {@link https://eslint.style/rules/space-infix-ops space-infix-ops}
   */
  "@stylistic/space-infix-ops"?: SpaceInfixOps;
  /**
   * Enforce consistent spacing before or after unary operators
   *
   * @see {@link https://eslint.style/rules/space-unary-ops space-unary-ops}
   */
  "@stylistic/space-unary-ops"?: SpaceUnaryOps;
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   *
   * @see {@link https://eslint.style/rules/spaced-comment spaced-comment}
   */
  "@stylistic/spaced-comment"?: SpacedComment;
  /**
   * Enforce spacing around colons of switch statements
   *
   * @see {@link https://eslint.style/rules/switch-colon-spacing switch-colon-spacing}
   */
  "@stylistic/switch-colon-spacing"?: SwitchColonSpacing;
  /**
   * Require or disallow spacing around embedded expressions of template strings
   *
   * @see {@link https://eslint.style/rules/template-curly-spacing template-curly-spacing}
   */
  "@stylistic/template-curly-spacing"?: TemplateCurlySpacing;
  /**
   * Require or disallow spacing between template tags and their literals
   *
   * @see {@link https://eslint.style/rules/template-tag-spacing template-tag-spacing}
   */
  "@stylistic/template-tag-spacing"?: TemplateTagSpacing;
  /**
   * Require consistent spacing around type annotations
   *
   * @see {@link https://eslint.style/rules/type-annotation-spacing type-annotation-spacing}
   */
  "@stylistic/type-annotation-spacing"?: TypeAnnotationSpacing;
  /**
   * Enforces consistent spacing inside TypeScript type generics
   *
   * @see {@link https://eslint.style/rules/type-generic-spacing type-generic-spacing}
   */
  "@stylistic/type-generic-spacing"?: TypeGenericSpacing;
  /**
   * Expect space before the type declaration in the named tuple
   *
   * @see {@link https://eslint.style/rules/type-named-tuple-spacing type-named-tuple-spacing}
   */
  "@stylistic/type-named-tuple-spacing"?: TypeNamedTupleSpacing;
  /**
   * Require parentheses around immediate `function` invocations
   *
   * @see {@link https://eslint.style/rules/wrap-iife wrap-iife}
   */
  "@stylistic/wrap-iife"?: WrapIife;
  /**
   * Require parenthesis around regex literals
   *
   * @see {@link https://eslint.style/rules/wrap-regex wrap-regex}
   */
  "@stylistic/wrap-regex"?: WrapRegex;
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   *
   * @see {@link https://eslint.style/rules/yield-star-spacing yield-star-spacing}
   */
  "@stylistic/yield-star-spacing"?: YieldStarSpacing;
}
export interface SingleLineConfig {
  spacing?: "always" | "never";
  maxItems?: number;
}
export interface MultiLineConfig {
  minItems?: number;
}
export interface BaseConfig {
  singleLine?: SingleLineConfig;
  multiline?: MultiLineConfig;
}
export interface DelimiterConfig {
  multiline?: {
    delimiter?: "none" | "semi" | "comma";
    requireLast?: boolean;
  };
  singleline?: {
    delimiter?: "semi" | "comma";
    requireLast?: boolean;
  };
}
export interface SpacingConfig {
  before?: boolean;
  after?: boolean;
}
