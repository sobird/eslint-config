/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnresolved = [
  {
    commonjs?: boolean;
    amd?: boolean;
    esmodule?: boolean;
    /**
     * @minItems 1
     */
    ignore?: [string, ...string[]];
    caseSensitive?: boolean;
    caseSensitiveStrict?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Named = [
  {
    commonjs?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type Default = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Namespace = [
  {
    /**
     * If `false`, will report computed (and thus, un-lintable) references to namespace members.
     */
    allowComputed?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoNamespace = [
  {
    ignore?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type Export = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoMutableExports = [];
export type Extensions =
  | []
  | ["always" | "ignorePackages" | "never"]
  | []
  | ["always" | "ignorePackages" | "never"]
  | [
      "always" | "ignorePackages" | "never",
      {
        pattern?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` ".*".
           */
          [k: string]: "always" | "ignorePackages" | "never";
        };
        checkTypeImports?: boolean;
        ignorePackages?: boolean;
        pathGroupOverrides?: {
          pattern: string;
          patternOptions?: {
            [k: string]: unknown;
          };
          action: "enforce" | "ignore";
        }[];
        [k: string]: unknown;
      }
    ]
  | []
  | [
      {
        pattern?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` ".*".
           */
          [k: string]: "always" | "ignorePackages" | "never";
        };
        checkTypeImports?: boolean;
        ignorePackages?: boolean;
        pathGroupOverrides?: {
          pattern: string;
          patternOptions?: {
            [k: string]: unknown;
          };
          action: "enforce" | "ignore";
        }[];
        [k: string]: unknown;
      }
    ]
  | []
  | [
      {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".*".
         */
        [k: string]: "always" | "ignorePackages" | "never";
      }
    ]
  | []
  | ["always" | "ignorePackages" | "never"]
  | [
      "always" | "ignorePackages" | "never",
      {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".*".
         */
        [k: string]: "always" | "ignorePackages" | "never";
      }
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRestrictedPaths = [
  {
    /**
     * @minItems 1
     */
    zones?: [
      {
        target?: string | string[];
        from?: string | string[];
        except?: string[];
        message?: string;
      },
      ...{
        target?: string | string[];
        from?: string | string[];
        except?: string[];
        message?: string;
      }[]
    ];
    basePath?: string;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoInternalModules = [
  | {
      allow?: string[];
    }
  | {
      forbid?: string[];
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRelativePackages = [
  {
    commonjs?: boolean;
    amd?: boolean;
    esmodule?: boolean;
    /**
     * @minItems 1
     */
    ignore?: [string, ...string[]];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRelativeParentImports = [
  {
    commonjs?: boolean;
    amd?: boolean;
    esmodule?: boolean;
    /**
     * @minItems 1
     */
    ignore?: [string, ...string[]];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ConsistentTypeSpecifierStyle = ["prefer-inline" | "prefer-top-level"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSelfImport = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoCycle = [
  {
    commonjs?: boolean;
    amd?: boolean;
    esmodule?: boolean;
    /**
     * @minItems 1
     */
    ignore?: [string, ...string[]];
    maxDepth?: number | "∞";
    /**
     * ignore external modules
     */
    ignoreExternal?: boolean;
    /**
     * Allow cyclic dependency if there is at least one dynamic import in the chain
     */
    allowUnsafeDynamicCyclicDependency?: boolean;
    /**
     * When true, don't calculate a strongly-connected-components graph. SCC is used to reduce the time-complexity of cycle detection, but adds overhead.
     */
    disableScc?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNamedDefault = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNamedAsDefault = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNamedAsDefaultMember = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoAnonymousDefaultExport = [
  {
    /**
     * If `false`, will report default export of an array
     */
    allowArray?: boolean;
    /**
     * If `false`, will report default export of an arrow function
     */
    allowArrowFunction?: boolean;
    /**
     * If `false`, will report default export of a function call
     */
    allowCallExpression?: boolean;
    /**
     * If `false`, will report default export of an anonymous class
     */
    allowAnonymousClass?: boolean;
    /**
     * If `false`, will report default export of an anonymous function
     */
    allowAnonymousFunction?: boolean;
    /**
     * If `false`, will report default export of a literal
     */
    allowLiteral?: boolean;
    /**
     * If `false`, will report default export of an object expression
     */
    allowObject?: boolean;
    /**
     * If `false`, will report default export of a class instantiation
     */
    allowNew?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnusedModules = [
  | {
      unusedExports: true;
      src?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      missingExports: true;
      [k: string]: unknown;
    }
];
export type NoCommonjs =
  | []
  | ["allow-primitive-modules"]
  | []
  | [
      {
        allowPrimitiveModules?: boolean;
        allowRequire?: boolean;
        allowConditionalRequire?: boolean;
      }
    ];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoAmd = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDuplicates = [
  {
    considerQueryString?: boolean;
    "prefer-inline"?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type First = ["absolute-first" | "disable-absolute-first"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MaxDependencies = [
  {
    max?: number;
    ignoreTypeImports?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoExtraneousDependencies = [
  {
    devDependencies?: boolean | unknown[];
    optionalDependencies?: boolean | unknown[];
    peerDependencies?: boolean | unknown[];
    bundledDependencies?: boolean | unknown[];
    packageDir?: string | unknown[];
    includeInternal?: boolean;
    includeTypes?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoAbsolutePath = [
  {
    commonjs?: boolean;
    amd?: boolean;
    esmodule?: boolean;
    /**
     * @minItems 1
     */
    ignore?: [string, ...string[]];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoNodejsModules = [
  {
    allow?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoWebpackLoaderSyntax = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Order = [
  {
    groups?: (
      | ("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")
      | ("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")[]
    )[];
    pathGroupsExcludedImportTypes?: unknown[];
    distinctGroup?: boolean;
    pathGroups?: {
      pattern: string;
      patternOptions?: {
        [k: string]: unknown;
      };
      group: "builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type";
      position?: "after" | "before";
    }[];
    "newlines-between"?: "ignore" | "always" | "always-and-inside-groups" | "never";
    "newlines-between-types"?: "ignore" | "always" | "always-and-inside-groups" | "never";
    consolidateIslands?: "inside-groups" | "never";
    sortTypesGroup?: boolean;
    named?:
      | boolean
      | {
          enabled?: boolean;
          import?: boolean;
          export?: boolean;
          require?: boolean;
          cjsExports?: boolean;
          types?: "mixed" | "types-first" | "types-last";
        };
    alphabetize?: {
      caseInsensitive?: boolean;
      order?: "ignore" | "asc" | "desc";
      orderImportKind?: "ignore" | "asc" | "desc";
    };
    warnOnUnassignedImports?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NewlineAfterImport = [
  {
    count?: number;
    exactCount?: boolean;
    considerComments?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferDefaultExport = [
  {
    target?: "single" | "any";
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDefaultExport = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNamedExport = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDynamicRequire = [
  {
    esmodule?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type Unambiguous = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnassignedImport = [
  {
    devDependencies?: boolean | unknown[];
    optionalDependencies?: boolean | unknown[];
    peerDependencies?: boolean | unknown[];
    allow?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUselessPathSegments = [
  {
    commonjs?: boolean;
    noUselessIndex?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DynamicImportChunkname = [
  {
    importFunctions?: string[];
    allowEmpty?: boolean;
    webpackChunknameFormat?: string;
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoImportModuleExports = [
  {
    exceptions?: unknown[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoEmptyNamedBlocks = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type EnforceNodeProtocolUsage = ["always" | "never"];
/**
 * @minItems 0
 * @maxItems 0
 */
export type ExportsLast = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDeprecated = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ImportsFirst = ["absolute-first" | "disable-absolute-first"];

/**
 * 46 ESLint rules for import
 *
 * @package `eslint-plugin-import`
 * @namespace `import`
 */
export interface ImportRules {
  /**
   * Ensure imports point to a file/module that can be resolved.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-unresolved.md no-unresolved}
   */
  "import/no-unresolved"?: NoUnresolved;
  /**
   * Ensure named imports correspond to a named export in the remote file.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/named.md named}
   */
  "import/named"?: Named;
  /**
   * Ensure a default export is present, given a default import.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/default.md default}
   */
  "import/default"?: Default;
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/namespace.md namespace}
   */
  "import/namespace"?: Namespace;
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-namespace.md no-namespace}
   */
  "import/no-namespace"?: NoNamespace;
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/export.md export}
   */
  "import/export"?: Export;
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-mutable-exports.md no-mutable-exports}
   */
  "import/no-mutable-exports"?: NoMutableExports;
  /**
   * Ensure consistent use of file extension within the import path.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/extensions.md extensions}
   */
  "import/extensions"?: Extensions;
  /**
   * Enforce which files can be imported in a given folder.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-restricted-paths.md no-restricted-paths}
   */
  "import/no-restricted-paths"?: NoRestrictedPaths;
  /**
   * Forbid importing the submodules of other modules.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-internal-modules.md no-internal-modules}
   */
  "import/no-internal-modules"?: NoInternalModules;
  "import/group-exports"?: unknown;
  /**
   * Forbid importing packages through relative paths.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-relative-packages.md no-relative-packages}
   */
  "import/no-relative-packages"?: NoRelativePackages;
  /**
   * Forbid importing modules from parent directories.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-relative-parent-imports.md no-relative-parent-imports}
   */
  "import/no-relative-parent-imports"?: NoRelativeParentImports;
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/consistent-type-specifier-style.md consistent-type-specifier-style}
   */
  "import/consistent-type-specifier-style"?: ConsistentTypeSpecifierStyle;
  /**
   * Forbid a module from importing itself.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-self-import.md no-self-import}
   */
  "import/no-self-import"?: NoSelfImport;
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-cycle.md no-cycle}
   */
  "import/no-cycle"?: NoCycle;
  /**
   * Forbid named default exports.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-default.md no-named-default}
   */
  "import/no-named-default"?: NoNamedDefault;
  /**
   * Forbid use of exported name as identifier of default export.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-as-default.md no-named-as-default}
   */
  "import/no-named-as-default"?: NoNamedAsDefault;
  /**
   * Forbid use of exported name as property of default export.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-as-default-member.md no-named-as-default-member}
   */
  "import/no-named-as-default-member"?: NoNamedAsDefaultMember;
  /**
   * Forbid anonymous values as default exports.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-anonymous-default-export.md no-anonymous-default-export}
   */
  "import/no-anonymous-default-export"?: NoAnonymousDefaultExport;
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-unused-modules.md no-unused-modules}
   */
  "import/no-unused-modules"?: NoUnusedModules;
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-commonjs.md no-commonjs}
   */
  "import/no-commonjs"?: NoCommonjs;
  /**
   * Forbid AMD `require` and `define` calls.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-amd.md no-amd}
   */
  "import/no-amd"?: NoAmd;
  /**
   * Forbid repeated import of the same module in multiple places.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-duplicates.md no-duplicates}
   */
  "import/no-duplicates"?: NoDuplicates;
  /**
   * Ensure all imports appear before other statements.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/first.md first}
   */
  "import/first"?: First;
  /**
   * Enforce the maximum number of dependencies a module can have.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/max-dependencies.md max-dependencies}
   */
  "import/max-dependencies"?: MaxDependencies;
  /**
   * Forbid the use of extraneous packages.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-extraneous-dependencies.md no-extraneous-dependencies}
   */
  "import/no-extraneous-dependencies"?: NoExtraneousDependencies;
  /**
   * Forbid import of modules using absolute paths.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-absolute-path.md no-absolute-path}
   */
  "import/no-absolute-path"?: NoAbsolutePath;
  /**
   * Forbid Node.js builtin modules.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-nodejs-modules.md no-nodejs-modules}
   */
  "import/no-nodejs-modules"?: NoNodejsModules;
  /**
   * Forbid webpack loader syntax in imports.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-webpack-loader-syntax.md no-webpack-loader-syntax}
   */
  "import/no-webpack-loader-syntax"?: NoWebpackLoaderSyntax;
  /**
   * Enforce a convention in module import order.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/order.md order}
   */
  "import/order"?: Order;
  /**
   * Enforce a newline after import statements.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/newline-after-import.md newline-after-import}
   */
  "import/newline-after-import"?: NewlineAfterImport;
  /**
   * Prefer a default export if module exports a single name or multiple names.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/prefer-default-export.md prefer-default-export}
   */
  "import/prefer-default-export"?: PreferDefaultExport;
  /**
   * Forbid default exports.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-default-export.md no-default-export}
   */
  "import/no-default-export"?: NoDefaultExport;
  /**
   * Forbid named exports.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-export.md no-named-export}
   */
  "import/no-named-export"?: NoNamedExport;
  /**
   * Forbid `require()` calls with expressions.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-dynamic-require.md no-dynamic-require}
   */
  "import/no-dynamic-require"?: NoDynamicRequire;
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/unambiguous.md unambiguous}
   */
  "import/unambiguous"?: Unambiguous;
  /**
   * Forbid unassigned imports
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-unassigned-import.md no-unassigned-import}
   */
  "import/no-unassigned-import"?: NoUnassignedImport;
  /**
   * Forbid unnecessary path segments in import and require statements.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-useless-path-segments.md no-useless-path-segments}
   */
  "import/no-useless-path-segments"?: NoUselessPathSegments;
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/dynamic-import-chunkname.md dynamic-import-chunkname}
   */
  "import/dynamic-import-chunkname"?: DynamicImportChunkname;
  /**
   * Forbid import statements with CommonJS module.exports.
   *
   */
  "import/no-import-module-exports"?: NoImportModuleExports;
  /**
   * Forbid empty named import blocks.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-empty-named-blocks.md no-empty-named-blocks}
   */
  "import/no-empty-named-blocks"?: NoEmptyNamedBlocks;
  /**
   * Enforce either using, or omitting, the `node:` protocol when importing Node.js builtin modules.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/enforce-node-protocol-usage.md enforce-node-protocol-usage}
   */
  "import/enforce-node-protocol-usage"?: EnforceNodeProtocolUsage;
  /**
   * Ensure all exports appear after other statements.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/exports-last.md exports-last}
   */
  "import/exports-last"?: ExportsLast;
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-deprecated.md no-deprecated}
   */
  "import/no-deprecated"?: NoDeprecated;
  /**
   * Replaced by `import/first`.
   *
   * @see {@link https://github.com/import-js/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md imports-first}
   * @deprecated This rule is deprecated.
   */
  "import/imports-first"?: ImportsFirst;
}
