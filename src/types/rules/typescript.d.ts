/* eslint-disable */

/**
 * @minItems 0
 * @maxItems 0
 */
export type AdjacentOverloadSignatures = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ArrayType = [
  {
    /**
     * The array type expected for mutable cases.
     */
    default?: "array" | "generic" | "array-simple";
    /**
     * The array type expected for readonly cases. If omitted, the value for `default` will be used.
     */
    readonly?: "array" | "generic" | "array-simple";
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type AwaitThenable = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type BanTsComment = [
  {
    /**
     * A minimum character length for descriptions when `allow-with-description` is enabled.
     */
    minimumDescriptionLength?: number;
    /**
     * Whether allow ts-check directives, and with which restrictions.
     */
    "ts-check"?:
      | boolean
      | "allow-with-description"
      | {
          descriptionFormat?: string;
        };
    /**
     * Whether and when expect-error directives, and with which restrictions.
     */
    "ts-expect-error"?:
      | boolean
      | "allow-with-description"
      | {
          descriptionFormat?: string;
        };
    /**
     * Whether allow ts-ignore directives, and with which restrictions.
     */
    "ts-ignore"?:
      | boolean
      | "allow-with-description"
      | {
          descriptionFormat?: string;
        };
    /**
     * Whether allow ts-nocheck directives, and with which restrictions.
     */
    "ts-nocheck"?:
      | boolean
      | "allow-with-description"
      | {
          descriptionFormat?: string;
        };
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type BanTslintComment = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ClassLiteralPropertyStyle = ["fields" | "getters"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ClassMethodsUseThis = [
  {
    /**
     * Enforces that functions used as instance field initializers utilize `this`.
     */
    enforceForClassFields?: boolean;
    /**
     * Allows specified method names to be ignored with this rule.
     */
    exceptMethods?: string[];
    /**
     * Whether to ignore class members that are defined within a class that `implements` a type.
     */
    ignoreClassesThatImplementAnInterface?: boolean | "public-fields";
    /**
     * Whether to ignore members marked with the `override` modifier.
     */
    ignoreOverrideMethods?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ConsistentGenericConstructors = ["type-annotation" | "constructor"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ConsistentIndexedObjectStyle = ["record" | "index-signature"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ConsistentReturn = [
  {
    treatUndefinedAsUnspecified?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ConsistentTypeAssertions = [
  | {
      /**
       * The expected assertion style to enforce.
       */
      assertionStyle: "never";
    }
  | {
      /**
       * Whether to always prefer type declarations for array literals used as variable initializers, rather than type assertions.
       */
      arrayLiteralTypeAssertions?: "allow" | "allow-as-parameter" | "never";
      /**
       * The expected assertion style to enforce.
       */
      assertionStyle?: "as" | "angle-bracket";
      /**
       * Whether to always prefer type declarations for object literals used as variable initializers, rather than type assertions.
       */
      objectLiteralTypeAssertions?: "allow" | "allow-as-parameter" | "never";
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ConsistentTypeDefinitions = ["interface" | "type"];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ConsistentTypeExports = [
  {
    /**
     * Whether the rule will autofix "mixed" export cases using TS inline type specifiers.
     */
    fixMixedExportsWithInlineTypeSpecifier?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ConsistentTypeImports = [
  {
    /**
     * Whether to disallow type imports in type annotations (`import()`).
     */
    disallowTypeAnnotations?: boolean;
    /**
     * The expected type modifier to be added when an import is detected as used only in the type position.
     */
    fixStyle?: "separate-type-imports" | "inline-type-imports";
    /**
     * The expected import kind for type-only imports.
     */
    prefer?: "type-imports" | "no-type-imports";
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type DefaultParamLast = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type DotNotation = [
  {
    /**
     * Whether to allow accessing properties matching an index signature with array notation.
     */
    allowIndexSignaturePropertyAccess?: boolean;
    /**
     * Whether to allow keywords such as ["class"]`.
     */
    allowKeywords?: boolean;
    /**
     * Regular expression of names to allow.
     */
    allowPattern?: string;
    /**
     * Whether to allow accessing class members marked as `private` with array notation.
     */
    allowPrivateClassPropertyAccess?: boolean;
    /**
     * Whether to allow accessing class members marked as `protected` with array notation.
     */
    allowProtectedClassPropertyAccess?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ExplicitFunctionReturnType = [
  {
    /**
     * Whether to allow arrow functions that start with the `void` keyword.
     */
    allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
    /**
     * Whether to ignore arrow functions immediately returning a `as const` value.
     */
    allowDirectConstAssertionInArrowFunctions?: boolean;
    /**
     * An array of function/method names that will not have their arguments or return values checked.
     */
    allowedNames?: string[];
    /**
     * Whether to ignore function expressions (functions which are not part of a declaration).
     */
    allowExpressions?: boolean;
    /**
     * Whether to ignore functions that don't have generic type parameters.
     */
    allowFunctionsWithoutTypeParameters?: boolean;
    /**
     * Whether to ignore functions immediately returning another function expression.
     */
    allowHigherOrderFunctions?: boolean;
    /**
     * Whether to ignore immediately invoked function expressions (IIFEs).
     */
    allowIIFEs?: boolean;
    /**
     * Whether to ignore type annotations on the variable of function expressions.
     */
    allowTypedFunctionExpressions?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ExplicitMemberAccessibility = [
  {
    /**
     * Which accessibility modifier is required to exist or not exist.
     */
    accessibility?: "explicit" | "no-public" | "off";
    /**
     * Specific method names that may be ignored.
     */
    ignoredMethodNames?: string[];
    /**
     * Changes to required accessibility modifiers for specific kinds of class members.
     */
    overrides?: {
      /**
       * Which member accessibility modifier requirements to apply for accessors.
       */
      accessors?: "explicit" | "no-public" | "off";
      /**
       * Which member accessibility modifier requirements to apply for constructors.
       */
      constructors?: "explicit" | "no-public" | "off";
      /**
       * Which member accessibility modifier requirements to apply for methods.
       */
      methods?: "explicit" | "no-public" | "off";
      /**
       * Which member accessibility modifier requirements to apply for parameterProperties.
       */
      parameterProperties?: "explicit" | "no-public" | "off";
      /**
       * Which member accessibility modifier requirements to apply for properties.
       */
      properties?: "explicit" | "no-public" | "off";
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ExplicitModuleBoundaryTypes = [
  {
    /**
     * Whether to ignore arguments that are explicitly typed as `any`.
     */
    allowArgumentsExplicitlyTypedAsAny?: boolean;
    /**
     * Whether to ignore return type annotations on body-less arrow functions that return an `as const` type assertion.
     * You must still type the parameters of the function.
     */
    allowDirectConstAssertionInArrowFunctions?: boolean;
    /**
     * An array of function/method names that will not have their arguments or return values checked.
     */
    allowedNames?: string[];
    /**
     * Whether to ignore return type annotations on functions immediately returning another function expression.
     * You must still type the parameters of the function.
     */
    allowHigherOrderFunctions?: boolean;
    /**
     * Whether to ignore return type annotations on functions with overload signatures.
     */
    allowOverloadFunctions?: boolean;
    /**
     * Whether to ignore type annotations on the variable of a function expression.
     */
    allowTypedFunctionExpressions?: boolean;
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
export type MaxParams = [
  {
    /**
     * Whether to count a `this` declaration when the type is `void`.
     */
    countVoidThis?: boolean;
    /**
     * A maximum number of parameters in function definitions.
     */
    max?: number;
    /**
     * (deprecated) A maximum number of parameters in function definitions.
     */
    maximum?: number;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MemberOrdering = [
  {
    /**
     * Which ordering to enforce for classes.
     */
    classes?:
      | "never"
      | (
          | (
              | "readonly-signature"
              | "signature"
              | "readonly-field"
              | "public-readonly-field"
              | "public-decorated-readonly-field"
              | "decorated-readonly-field"
              | "static-readonly-field"
              | "public-static-readonly-field"
              | "instance-readonly-field"
              | "public-instance-readonly-field"
              | "abstract-readonly-field"
              | "public-abstract-readonly-field"
              | "protected-readonly-field"
              | "protected-decorated-readonly-field"
              | "protected-static-readonly-field"
              | "protected-instance-readonly-field"
              | "protected-abstract-readonly-field"
              | "private-readonly-field"
              | "private-decorated-readonly-field"
              | "private-static-readonly-field"
              | "private-instance-readonly-field"
              | "#private-readonly-field"
              | "#private-static-readonly-field"
              | "#private-instance-readonly-field"
              | "field"
              | "public-field"
              | "public-decorated-field"
              | "decorated-field"
              | "static-field"
              | "public-static-field"
              | "instance-field"
              | "public-instance-field"
              | "abstract-field"
              | "public-abstract-field"
              | "protected-field"
              | "protected-decorated-field"
              | "protected-static-field"
              | "protected-instance-field"
              | "protected-abstract-field"
              | "private-field"
              | "private-decorated-field"
              | "private-static-field"
              | "private-instance-field"
              | "#private-field"
              | "#private-static-field"
              | "#private-instance-field"
              | "method"
              | "public-method"
              | "public-decorated-method"
              | "decorated-method"
              | "static-method"
              | "public-static-method"
              | "instance-method"
              | "public-instance-method"
              | "abstract-method"
              | "public-abstract-method"
              | "protected-method"
              | "protected-decorated-method"
              | "protected-static-method"
              | "protected-instance-method"
              | "protected-abstract-method"
              | "private-method"
              | "private-decorated-method"
              | "private-static-method"
              | "private-instance-method"
              | "#private-method"
              | "#private-static-method"
              | "#private-instance-method"
              | "call-signature"
              | "constructor"
              | "public-constructor"
              | "protected-constructor"
              | "private-constructor"
              | "accessor"
              | "public-accessor"
              | "public-decorated-accessor"
              | "decorated-accessor"
              | "static-accessor"
              | "public-static-accessor"
              | "instance-accessor"
              | "public-instance-accessor"
              | "abstract-accessor"
              | "public-abstract-accessor"
              | "protected-accessor"
              | "protected-decorated-accessor"
              | "protected-static-accessor"
              | "protected-instance-accessor"
              | "protected-abstract-accessor"
              | "private-accessor"
              | "private-decorated-accessor"
              | "private-static-accessor"
              | "private-instance-accessor"
              | "#private-accessor"
              | "#private-static-accessor"
              | "#private-instance-accessor"
              | "get"
              | "public-get"
              | "public-decorated-get"
              | "decorated-get"
              | "static-get"
              | "public-static-get"
              | "instance-get"
              | "public-instance-get"
              | "abstract-get"
              | "public-abstract-get"
              | "protected-get"
              | "protected-decorated-get"
              | "protected-static-get"
              | "protected-instance-get"
              | "protected-abstract-get"
              | "private-get"
              | "private-decorated-get"
              | "private-static-get"
              | "private-instance-get"
              | "#private-get"
              | "#private-static-get"
              | "#private-instance-get"
              | "set"
              | "public-set"
              | "public-decorated-set"
              | "decorated-set"
              | "static-set"
              | "public-static-set"
              | "instance-set"
              | "public-instance-set"
              | "abstract-set"
              | "public-abstract-set"
              | "protected-set"
              | "protected-decorated-set"
              | "protected-static-set"
              | "protected-instance-set"
              | "protected-abstract-set"
              | "private-set"
              | "private-decorated-set"
              | "private-static-set"
              | "private-instance-set"
              | "#private-set"
              | "#private-static-set"
              | "#private-instance-set"
              | "static-initialization"
              | "static-static-initialization"
              | "public-static-static-initialization"
              | "instance-static-initialization"
              | "public-instance-static-initialization"
              | "abstract-static-initialization"
              | "public-abstract-static-initialization"
              | "protected-static-static-initialization"
              | "protected-instance-static-initialization"
              | "protected-abstract-static-initialization"
              | "private-static-static-initialization"
              | "private-instance-static-initialization"
              | "#private-static-static-initialization"
              | "#private-instance-static-initialization"
            )
          | (
              | "readonly-signature"
              | "signature"
              | "readonly-field"
              | "public-readonly-field"
              | "public-decorated-readonly-field"
              | "decorated-readonly-field"
              | "static-readonly-field"
              | "public-static-readonly-field"
              | "instance-readonly-field"
              | "public-instance-readonly-field"
              | "abstract-readonly-field"
              | "public-abstract-readonly-field"
              | "protected-readonly-field"
              | "protected-decorated-readonly-field"
              | "protected-static-readonly-field"
              | "protected-instance-readonly-field"
              | "protected-abstract-readonly-field"
              | "private-readonly-field"
              | "private-decorated-readonly-field"
              | "private-static-readonly-field"
              | "private-instance-readonly-field"
              | "#private-readonly-field"
              | "#private-static-readonly-field"
              | "#private-instance-readonly-field"
              | "field"
              | "public-field"
              | "public-decorated-field"
              | "decorated-field"
              | "static-field"
              | "public-static-field"
              | "instance-field"
              | "public-instance-field"
              | "abstract-field"
              | "public-abstract-field"
              | "protected-field"
              | "protected-decorated-field"
              | "protected-static-field"
              | "protected-instance-field"
              | "protected-abstract-field"
              | "private-field"
              | "private-decorated-field"
              | "private-static-field"
              | "private-instance-field"
              | "#private-field"
              | "#private-static-field"
              | "#private-instance-field"
              | "method"
              | "public-method"
              | "public-decorated-method"
              | "decorated-method"
              | "static-method"
              | "public-static-method"
              | "instance-method"
              | "public-instance-method"
              | "abstract-method"
              | "public-abstract-method"
              | "protected-method"
              | "protected-decorated-method"
              | "protected-static-method"
              | "protected-instance-method"
              | "protected-abstract-method"
              | "private-method"
              | "private-decorated-method"
              | "private-static-method"
              | "private-instance-method"
              | "#private-method"
              | "#private-static-method"
              | "#private-instance-method"
              | "call-signature"
              | "constructor"
              | "public-constructor"
              | "protected-constructor"
              | "private-constructor"
              | "accessor"
              | "public-accessor"
              | "public-decorated-accessor"
              | "decorated-accessor"
              | "static-accessor"
              | "public-static-accessor"
              | "instance-accessor"
              | "public-instance-accessor"
              | "abstract-accessor"
              | "public-abstract-accessor"
              | "protected-accessor"
              | "protected-decorated-accessor"
              | "protected-static-accessor"
              | "protected-instance-accessor"
              | "protected-abstract-accessor"
              | "private-accessor"
              | "private-decorated-accessor"
              | "private-static-accessor"
              | "private-instance-accessor"
              | "#private-accessor"
              | "#private-static-accessor"
              | "#private-instance-accessor"
              | "get"
              | "public-get"
              | "public-decorated-get"
              | "decorated-get"
              | "static-get"
              | "public-static-get"
              | "instance-get"
              | "public-instance-get"
              | "abstract-get"
              | "public-abstract-get"
              | "protected-get"
              | "protected-decorated-get"
              | "protected-static-get"
              | "protected-instance-get"
              | "protected-abstract-get"
              | "private-get"
              | "private-decorated-get"
              | "private-static-get"
              | "private-instance-get"
              | "#private-get"
              | "#private-static-get"
              | "#private-instance-get"
              | "set"
              | "public-set"
              | "public-decorated-set"
              | "decorated-set"
              | "static-set"
              | "public-static-set"
              | "instance-set"
              | "public-instance-set"
              | "abstract-set"
              | "public-abstract-set"
              | "protected-set"
              | "protected-decorated-set"
              | "protected-static-set"
              | "protected-instance-set"
              | "protected-abstract-set"
              | "private-set"
              | "private-decorated-set"
              | "private-static-set"
              | "private-instance-set"
              | "#private-set"
              | "#private-static-set"
              | "#private-instance-set"
              | "static-initialization"
              | "static-static-initialization"
              | "public-static-static-initialization"
              | "instance-static-initialization"
              | "public-instance-static-initialization"
              | "abstract-static-initialization"
              | "public-abstract-static-initialization"
              | "protected-static-static-initialization"
              | "protected-instance-static-initialization"
              | "protected-abstract-static-initialization"
              | "private-static-static-initialization"
              | "private-instance-static-initialization"
              | "#private-static-static-initialization"
              | "#private-instance-static-initialization"
            )[]
        )[]
      | {
          memberTypes?:
            | (
                | (
                    | "readonly-signature"
                    | "signature"
                    | "readonly-field"
                    | "public-readonly-field"
                    | "public-decorated-readonly-field"
                    | "decorated-readonly-field"
                    | "static-readonly-field"
                    | "public-static-readonly-field"
                    | "instance-readonly-field"
                    | "public-instance-readonly-field"
                    | "abstract-readonly-field"
                    | "public-abstract-readonly-field"
                    | "protected-readonly-field"
                    | "protected-decorated-readonly-field"
                    | "protected-static-readonly-field"
                    | "protected-instance-readonly-field"
                    | "protected-abstract-readonly-field"
                    | "private-readonly-field"
                    | "private-decorated-readonly-field"
                    | "private-static-readonly-field"
                    | "private-instance-readonly-field"
                    | "#private-readonly-field"
                    | "#private-static-readonly-field"
                    | "#private-instance-readonly-field"
                    | "field"
                    | "public-field"
                    | "public-decorated-field"
                    | "decorated-field"
                    | "static-field"
                    | "public-static-field"
                    | "instance-field"
                    | "public-instance-field"
                    | "abstract-field"
                    | "public-abstract-field"
                    | "protected-field"
                    | "protected-decorated-field"
                    | "protected-static-field"
                    | "protected-instance-field"
                    | "protected-abstract-field"
                    | "private-field"
                    | "private-decorated-field"
                    | "private-static-field"
                    | "private-instance-field"
                    | "#private-field"
                    | "#private-static-field"
                    | "#private-instance-field"
                    | "method"
                    | "public-method"
                    | "public-decorated-method"
                    | "decorated-method"
                    | "static-method"
                    | "public-static-method"
                    | "instance-method"
                    | "public-instance-method"
                    | "abstract-method"
                    | "public-abstract-method"
                    | "protected-method"
                    | "protected-decorated-method"
                    | "protected-static-method"
                    | "protected-instance-method"
                    | "protected-abstract-method"
                    | "private-method"
                    | "private-decorated-method"
                    | "private-static-method"
                    | "private-instance-method"
                    | "#private-method"
                    | "#private-static-method"
                    | "#private-instance-method"
                    | "call-signature"
                    | "constructor"
                    | "public-constructor"
                    | "protected-constructor"
                    | "private-constructor"
                    | "accessor"
                    | "public-accessor"
                    | "public-decorated-accessor"
                    | "decorated-accessor"
                    | "static-accessor"
                    | "public-static-accessor"
                    | "instance-accessor"
                    | "public-instance-accessor"
                    | "abstract-accessor"
                    | "public-abstract-accessor"
                    | "protected-accessor"
                    | "protected-decorated-accessor"
                    | "protected-static-accessor"
                    | "protected-instance-accessor"
                    | "protected-abstract-accessor"
                    | "private-accessor"
                    | "private-decorated-accessor"
                    | "private-static-accessor"
                    | "private-instance-accessor"
                    | "#private-accessor"
                    | "#private-static-accessor"
                    | "#private-instance-accessor"
                    | "get"
                    | "public-get"
                    | "public-decorated-get"
                    | "decorated-get"
                    | "static-get"
                    | "public-static-get"
                    | "instance-get"
                    | "public-instance-get"
                    | "abstract-get"
                    | "public-abstract-get"
                    | "protected-get"
                    | "protected-decorated-get"
                    | "protected-static-get"
                    | "protected-instance-get"
                    | "protected-abstract-get"
                    | "private-get"
                    | "private-decorated-get"
                    | "private-static-get"
                    | "private-instance-get"
                    | "#private-get"
                    | "#private-static-get"
                    | "#private-instance-get"
                    | "set"
                    | "public-set"
                    | "public-decorated-set"
                    | "decorated-set"
                    | "static-set"
                    | "public-static-set"
                    | "instance-set"
                    | "public-instance-set"
                    | "abstract-set"
                    | "public-abstract-set"
                    | "protected-set"
                    | "protected-decorated-set"
                    | "protected-static-set"
                    | "protected-instance-set"
                    | "protected-abstract-set"
                    | "private-set"
                    | "private-decorated-set"
                    | "private-static-set"
                    | "private-instance-set"
                    | "#private-set"
                    | "#private-static-set"
                    | "#private-instance-set"
                    | "static-initialization"
                    | "static-static-initialization"
                    | "public-static-static-initialization"
                    | "instance-static-initialization"
                    | "public-instance-static-initialization"
                    | "abstract-static-initialization"
                    | "public-abstract-static-initialization"
                    | "protected-static-static-initialization"
                    | "protected-instance-static-initialization"
                    | "protected-abstract-static-initialization"
                    | "private-static-static-initialization"
                    | "private-instance-static-initialization"
                    | "#private-static-static-initialization"
                    | "#private-instance-static-initialization"
                  )
                | (
                    | "readonly-signature"
                    | "signature"
                    | "readonly-field"
                    | "public-readonly-field"
                    | "public-decorated-readonly-field"
                    | "decorated-readonly-field"
                    | "static-readonly-field"
                    | "public-static-readonly-field"
                    | "instance-readonly-field"
                    | "public-instance-readonly-field"
                    | "abstract-readonly-field"
                    | "public-abstract-readonly-field"
                    | "protected-readonly-field"
                    | "protected-decorated-readonly-field"
                    | "protected-static-readonly-field"
                    | "protected-instance-readonly-field"
                    | "protected-abstract-readonly-field"
                    | "private-readonly-field"
                    | "private-decorated-readonly-field"
                    | "private-static-readonly-field"
                    | "private-instance-readonly-field"
                    | "#private-readonly-field"
                    | "#private-static-readonly-field"
                    | "#private-instance-readonly-field"
                    | "field"
                    | "public-field"
                    | "public-decorated-field"
                    | "decorated-field"
                    | "static-field"
                    | "public-static-field"
                    | "instance-field"
                    | "public-instance-field"
                    | "abstract-field"
                    | "public-abstract-field"
                    | "protected-field"
                    | "protected-decorated-field"
                    | "protected-static-field"
                    | "protected-instance-field"
                    | "protected-abstract-field"
                    | "private-field"
                    | "private-decorated-field"
                    | "private-static-field"
                    | "private-instance-field"
                    | "#private-field"
                    | "#private-static-field"
                    | "#private-instance-field"
                    | "method"
                    | "public-method"
                    | "public-decorated-method"
                    | "decorated-method"
                    | "static-method"
                    | "public-static-method"
                    | "instance-method"
                    | "public-instance-method"
                    | "abstract-method"
                    | "public-abstract-method"
                    | "protected-method"
                    | "protected-decorated-method"
                    | "protected-static-method"
                    | "protected-instance-method"
                    | "protected-abstract-method"
                    | "private-method"
                    | "private-decorated-method"
                    | "private-static-method"
                    | "private-instance-method"
                    | "#private-method"
                    | "#private-static-method"
                    | "#private-instance-method"
                    | "call-signature"
                    | "constructor"
                    | "public-constructor"
                    | "protected-constructor"
                    | "private-constructor"
                    | "accessor"
                    | "public-accessor"
                    | "public-decorated-accessor"
                    | "decorated-accessor"
                    | "static-accessor"
                    | "public-static-accessor"
                    | "instance-accessor"
                    | "public-instance-accessor"
                    | "abstract-accessor"
                    | "public-abstract-accessor"
                    | "protected-accessor"
                    | "protected-decorated-accessor"
                    | "protected-static-accessor"
                    | "protected-instance-accessor"
                    | "protected-abstract-accessor"
                    | "private-accessor"
                    | "private-decorated-accessor"
                    | "private-static-accessor"
                    | "private-instance-accessor"
                    | "#private-accessor"
                    | "#private-static-accessor"
                    | "#private-instance-accessor"
                    | "get"
                    | "public-get"
                    | "public-decorated-get"
                    | "decorated-get"
                    | "static-get"
                    | "public-static-get"
                    | "instance-get"
                    | "public-instance-get"
                    | "abstract-get"
                    | "public-abstract-get"
                    | "protected-get"
                    | "protected-decorated-get"
                    | "protected-static-get"
                    | "protected-instance-get"
                    | "protected-abstract-get"
                    | "private-get"
                    | "private-decorated-get"
                    | "private-static-get"
                    | "private-instance-get"
                    | "#private-get"
                    | "#private-static-get"
                    | "#private-instance-get"
                    | "set"
                    | "public-set"
                    | "public-decorated-set"
                    | "decorated-set"
                    | "static-set"
                    | "public-static-set"
                    | "instance-set"
                    | "public-instance-set"
                    | "abstract-set"
                    | "public-abstract-set"
                    | "protected-set"
                    | "protected-decorated-set"
                    | "protected-static-set"
                    | "protected-instance-set"
                    | "protected-abstract-set"
                    | "private-set"
                    | "private-decorated-set"
                    | "private-static-set"
                    | "private-instance-set"
                    | "#private-set"
                    | "#private-static-set"
                    | "#private-instance-set"
                    | "static-initialization"
                    | "static-static-initialization"
                    | "public-static-static-initialization"
                    | "instance-static-initialization"
                    | "public-instance-static-initialization"
                    | "abstract-static-initialization"
                    | "public-abstract-static-initialization"
                    | "protected-static-static-initialization"
                    | "protected-instance-static-initialization"
                    | "protected-abstract-static-initialization"
                    | "private-static-static-initialization"
                    | "private-instance-static-initialization"
                    | "#private-static-static-initialization"
                    | "#private-instance-static-initialization"
                  )[]
              )[]
            | "never";
          optionalityOrder?: "optional-first" | "required-first";
          order?:
            | "alphabetically"
            | "alphabetically-case-insensitive"
            | "as-written"
            | "natural"
            | "natural-case-insensitive";
        };
    /**
     * Which ordering to enforce for classExpressions.
     */
    classExpressions?:
      | "never"
      | (
          | (
              | "readonly-signature"
              | "signature"
              | "readonly-field"
              | "public-readonly-field"
              | "public-decorated-readonly-field"
              | "decorated-readonly-field"
              | "static-readonly-field"
              | "public-static-readonly-field"
              | "instance-readonly-field"
              | "public-instance-readonly-field"
              | "abstract-readonly-field"
              | "public-abstract-readonly-field"
              | "protected-readonly-field"
              | "protected-decorated-readonly-field"
              | "protected-static-readonly-field"
              | "protected-instance-readonly-field"
              | "protected-abstract-readonly-field"
              | "private-readonly-field"
              | "private-decorated-readonly-field"
              | "private-static-readonly-field"
              | "private-instance-readonly-field"
              | "#private-readonly-field"
              | "#private-static-readonly-field"
              | "#private-instance-readonly-field"
              | "field"
              | "public-field"
              | "public-decorated-field"
              | "decorated-field"
              | "static-field"
              | "public-static-field"
              | "instance-field"
              | "public-instance-field"
              | "abstract-field"
              | "public-abstract-field"
              | "protected-field"
              | "protected-decorated-field"
              | "protected-static-field"
              | "protected-instance-field"
              | "protected-abstract-field"
              | "private-field"
              | "private-decorated-field"
              | "private-static-field"
              | "private-instance-field"
              | "#private-field"
              | "#private-static-field"
              | "#private-instance-field"
              | "method"
              | "public-method"
              | "public-decorated-method"
              | "decorated-method"
              | "static-method"
              | "public-static-method"
              | "instance-method"
              | "public-instance-method"
              | "abstract-method"
              | "public-abstract-method"
              | "protected-method"
              | "protected-decorated-method"
              | "protected-static-method"
              | "protected-instance-method"
              | "protected-abstract-method"
              | "private-method"
              | "private-decorated-method"
              | "private-static-method"
              | "private-instance-method"
              | "#private-method"
              | "#private-static-method"
              | "#private-instance-method"
              | "call-signature"
              | "constructor"
              | "public-constructor"
              | "protected-constructor"
              | "private-constructor"
              | "accessor"
              | "public-accessor"
              | "public-decorated-accessor"
              | "decorated-accessor"
              | "static-accessor"
              | "public-static-accessor"
              | "instance-accessor"
              | "public-instance-accessor"
              | "abstract-accessor"
              | "public-abstract-accessor"
              | "protected-accessor"
              | "protected-decorated-accessor"
              | "protected-static-accessor"
              | "protected-instance-accessor"
              | "protected-abstract-accessor"
              | "private-accessor"
              | "private-decorated-accessor"
              | "private-static-accessor"
              | "private-instance-accessor"
              | "#private-accessor"
              | "#private-static-accessor"
              | "#private-instance-accessor"
              | "get"
              | "public-get"
              | "public-decorated-get"
              | "decorated-get"
              | "static-get"
              | "public-static-get"
              | "instance-get"
              | "public-instance-get"
              | "abstract-get"
              | "public-abstract-get"
              | "protected-get"
              | "protected-decorated-get"
              | "protected-static-get"
              | "protected-instance-get"
              | "protected-abstract-get"
              | "private-get"
              | "private-decorated-get"
              | "private-static-get"
              | "private-instance-get"
              | "#private-get"
              | "#private-static-get"
              | "#private-instance-get"
              | "set"
              | "public-set"
              | "public-decorated-set"
              | "decorated-set"
              | "static-set"
              | "public-static-set"
              | "instance-set"
              | "public-instance-set"
              | "abstract-set"
              | "public-abstract-set"
              | "protected-set"
              | "protected-decorated-set"
              | "protected-static-set"
              | "protected-instance-set"
              | "protected-abstract-set"
              | "private-set"
              | "private-decorated-set"
              | "private-static-set"
              | "private-instance-set"
              | "#private-set"
              | "#private-static-set"
              | "#private-instance-set"
              | "static-initialization"
              | "static-static-initialization"
              | "public-static-static-initialization"
              | "instance-static-initialization"
              | "public-instance-static-initialization"
              | "abstract-static-initialization"
              | "public-abstract-static-initialization"
              | "protected-static-static-initialization"
              | "protected-instance-static-initialization"
              | "protected-abstract-static-initialization"
              | "private-static-static-initialization"
              | "private-instance-static-initialization"
              | "#private-static-static-initialization"
              | "#private-instance-static-initialization"
            )
          | (
              | "readonly-signature"
              | "signature"
              | "readonly-field"
              | "public-readonly-field"
              | "public-decorated-readonly-field"
              | "decorated-readonly-field"
              | "static-readonly-field"
              | "public-static-readonly-field"
              | "instance-readonly-field"
              | "public-instance-readonly-field"
              | "abstract-readonly-field"
              | "public-abstract-readonly-field"
              | "protected-readonly-field"
              | "protected-decorated-readonly-field"
              | "protected-static-readonly-field"
              | "protected-instance-readonly-field"
              | "protected-abstract-readonly-field"
              | "private-readonly-field"
              | "private-decorated-readonly-field"
              | "private-static-readonly-field"
              | "private-instance-readonly-field"
              | "#private-readonly-field"
              | "#private-static-readonly-field"
              | "#private-instance-readonly-field"
              | "field"
              | "public-field"
              | "public-decorated-field"
              | "decorated-field"
              | "static-field"
              | "public-static-field"
              | "instance-field"
              | "public-instance-field"
              | "abstract-field"
              | "public-abstract-field"
              | "protected-field"
              | "protected-decorated-field"
              | "protected-static-field"
              | "protected-instance-field"
              | "protected-abstract-field"
              | "private-field"
              | "private-decorated-field"
              | "private-static-field"
              | "private-instance-field"
              | "#private-field"
              | "#private-static-field"
              | "#private-instance-field"
              | "method"
              | "public-method"
              | "public-decorated-method"
              | "decorated-method"
              | "static-method"
              | "public-static-method"
              | "instance-method"
              | "public-instance-method"
              | "abstract-method"
              | "public-abstract-method"
              | "protected-method"
              | "protected-decorated-method"
              | "protected-static-method"
              | "protected-instance-method"
              | "protected-abstract-method"
              | "private-method"
              | "private-decorated-method"
              | "private-static-method"
              | "private-instance-method"
              | "#private-method"
              | "#private-static-method"
              | "#private-instance-method"
              | "call-signature"
              | "constructor"
              | "public-constructor"
              | "protected-constructor"
              | "private-constructor"
              | "accessor"
              | "public-accessor"
              | "public-decorated-accessor"
              | "decorated-accessor"
              | "static-accessor"
              | "public-static-accessor"
              | "instance-accessor"
              | "public-instance-accessor"
              | "abstract-accessor"
              | "public-abstract-accessor"
              | "protected-accessor"
              | "protected-decorated-accessor"
              | "protected-static-accessor"
              | "protected-instance-accessor"
              | "protected-abstract-accessor"
              | "private-accessor"
              | "private-decorated-accessor"
              | "private-static-accessor"
              | "private-instance-accessor"
              | "#private-accessor"
              | "#private-static-accessor"
              | "#private-instance-accessor"
              | "get"
              | "public-get"
              | "public-decorated-get"
              | "decorated-get"
              | "static-get"
              | "public-static-get"
              | "instance-get"
              | "public-instance-get"
              | "abstract-get"
              | "public-abstract-get"
              | "protected-get"
              | "protected-decorated-get"
              | "protected-static-get"
              | "protected-instance-get"
              | "protected-abstract-get"
              | "private-get"
              | "private-decorated-get"
              | "private-static-get"
              | "private-instance-get"
              | "#private-get"
              | "#private-static-get"
              | "#private-instance-get"
              | "set"
              | "public-set"
              | "public-decorated-set"
              | "decorated-set"
              | "static-set"
              | "public-static-set"
              | "instance-set"
              | "public-instance-set"
              | "abstract-set"
              | "public-abstract-set"
              | "protected-set"
              | "protected-decorated-set"
              | "protected-static-set"
              | "protected-instance-set"
              | "protected-abstract-set"
              | "private-set"
              | "private-decorated-set"
              | "private-static-set"
              | "private-instance-set"
              | "#private-set"
              | "#private-static-set"
              | "#private-instance-set"
              | "static-initialization"
              | "static-static-initialization"
              | "public-static-static-initialization"
              | "instance-static-initialization"
              | "public-instance-static-initialization"
              | "abstract-static-initialization"
              | "public-abstract-static-initialization"
              | "protected-static-static-initialization"
              | "protected-instance-static-initialization"
              | "protected-abstract-static-initialization"
              | "private-static-static-initialization"
              | "private-instance-static-initialization"
              | "#private-static-static-initialization"
              | "#private-instance-static-initialization"
            )[]
        )[]
      | {
          memberTypes?:
            | (
                | (
                    | "readonly-signature"
                    | "signature"
                    | "readonly-field"
                    | "public-readonly-field"
                    | "public-decorated-readonly-field"
                    | "decorated-readonly-field"
                    | "static-readonly-field"
                    | "public-static-readonly-field"
                    | "instance-readonly-field"
                    | "public-instance-readonly-field"
                    | "abstract-readonly-field"
                    | "public-abstract-readonly-field"
                    | "protected-readonly-field"
                    | "protected-decorated-readonly-field"
                    | "protected-static-readonly-field"
                    | "protected-instance-readonly-field"
                    | "protected-abstract-readonly-field"
                    | "private-readonly-field"
                    | "private-decorated-readonly-field"
                    | "private-static-readonly-field"
                    | "private-instance-readonly-field"
                    | "#private-readonly-field"
                    | "#private-static-readonly-field"
                    | "#private-instance-readonly-field"
                    | "field"
                    | "public-field"
                    | "public-decorated-field"
                    | "decorated-field"
                    | "static-field"
                    | "public-static-field"
                    | "instance-field"
                    | "public-instance-field"
                    | "abstract-field"
                    | "public-abstract-field"
                    | "protected-field"
                    | "protected-decorated-field"
                    | "protected-static-field"
                    | "protected-instance-field"
                    | "protected-abstract-field"
                    | "private-field"
                    | "private-decorated-field"
                    | "private-static-field"
                    | "private-instance-field"
                    | "#private-field"
                    | "#private-static-field"
                    | "#private-instance-field"
                    | "method"
                    | "public-method"
                    | "public-decorated-method"
                    | "decorated-method"
                    | "static-method"
                    | "public-static-method"
                    | "instance-method"
                    | "public-instance-method"
                    | "abstract-method"
                    | "public-abstract-method"
                    | "protected-method"
                    | "protected-decorated-method"
                    | "protected-static-method"
                    | "protected-instance-method"
                    | "protected-abstract-method"
                    | "private-method"
                    | "private-decorated-method"
                    | "private-static-method"
                    | "private-instance-method"
                    | "#private-method"
                    | "#private-static-method"
                    | "#private-instance-method"
                    | "call-signature"
                    | "constructor"
                    | "public-constructor"
                    | "protected-constructor"
                    | "private-constructor"
                    | "accessor"
                    | "public-accessor"
                    | "public-decorated-accessor"
                    | "decorated-accessor"
                    | "static-accessor"
                    | "public-static-accessor"
                    | "instance-accessor"
                    | "public-instance-accessor"
                    | "abstract-accessor"
                    | "public-abstract-accessor"
                    | "protected-accessor"
                    | "protected-decorated-accessor"
                    | "protected-static-accessor"
                    | "protected-instance-accessor"
                    | "protected-abstract-accessor"
                    | "private-accessor"
                    | "private-decorated-accessor"
                    | "private-static-accessor"
                    | "private-instance-accessor"
                    | "#private-accessor"
                    | "#private-static-accessor"
                    | "#private-instance-accessor"
                    | "get"
                    | "public-get"
                    | "public-decorated-get"
                    | "decorated-get"
                    | "static-get"
                    | "public-static-get"
                    | "instance-get"
                    | "public-instance-get"
                    | "abstract-get"
                    | "public-abstract-get"
                    | "protected-get"
                    | "protected-decorated-get"
                    | "protected-static-get"
                    | "protected-instance-get"
                    | "protected-abstract-get"
                    | "private-get"
                    | "private-decorated-get"
                    | "private-static-get"
                    | "private-instance-get"
                    | "#private-get"
                    | "#private-static-get"
                    | "#private-instance-get"
                    | "set"
                    | "public-set"
                    | "public-decorated-set"
                    | "decorated-set"
                    | "static-set"
                    | "public-static-set"
                    | "instance-set"
                    | "public-instance-set"
                    | "abstract-set"
                    | "public-abstract-set"
                    | "protected-set"
                    | "protected-decorated-set"
                    | "protected-static-set"
                    | "protected-instance-set"
                    | "protected-abstract-set"
                    | "private-set"
                    | "private-decorated-set"
                    | "private-static-set"
                    | "private-instance-set"
                    | "#private-set"
                    | "#private-static-set"
                    | "#private-instance-set"
                    | "static-initialization"
                    | "static-static-initialization"
                    | "public-static-static-initialization"
                    | "instance-static-initialization"
                    | "public-instance-static-initialization"
                    | "abstract-static-initialization"
                    | "public-abstract-static-initialization"
                    | "protected-static-static-initialization"
                    | "protected-instance-static-initialization"
                    | "protected-abstract-static-initialization"
                    | "private-static-static-initialization"
                    | "private-instance-static-initialization"
                    | "#private-static-static-initialization"
                    | "#private-instance-static-initialization"
                  )
                | (
                    | "readonly-signature"
                    | "signature"
                    | "readonly-field"
                    | "public-readonly-field"
                    | "public-decorated-readonly-field"
                    | "decorated-readonly-field"
                    | "static-readonly-field"
                    | "public-static-readonly-field"
                    | "instance-readonly-field"
                    | "public-instance-readonly-field"
                    | "abstract-readonly-field"
                    | "public-abstract-readonly-field"
                    | "protected-readonly-field"
                    | "protected-decorated-readonly-field"
                    | "protected-static-readonly-field"
                    | "protected-instance-readonly-field"
                    | "protected-abstract-readonly-field"
                    | "private-readonly-field"
                    | "private-decorated-readonly-field"
                    | "private-static-readonly-field"
                    | "private-instance-readonly-field"
                    | "#private-readonly-field"
                    | "#private-static-readonly-field"
                    | "#private-instance-readonly-field"
                    | "field"
                    | "public-field"
                    | "public-decorated-field"
                    | "decorated-field"
                    | "static-field"
                    | "public-static-field"
                    | "instance-field"
                    | "public-instance-field"
                    | "abstract-field"
                    | "public-abstract-field"
                    | "protected-field"
                    | "protected-decorated-field"
                    | "protected-static-field"
                    | "protected-instance-field"
                    | "protected-abstract-field"
                    | "private-field"
                    | "private-decorated-field"
                    | "private-static-field"
                    | "private-instance-field"
                    | "#private-field"
                    | "#private-static-field"
                    | "#private-instance-field"
                    | "method"
                    | "public-method"
                    | "public-decorated-method"
                    | "decorated-method"
                    | "static-method"
                    | "public-static-method"
                    | "instance-method"
                    | "public-instance-method"
                    | "abstract-method"
                    | "public-abstract-method"
                    | "protected-method"
                    | "protected-decorated-method"
                    | "protected-static-method"
                    | "protected-instance-method"
                    | "protected-abstract-method"
                    | "private-method"
                    | "private-decorated-method"
                    | "private-static-method"
                    | "private-instance-method"
                    | "#private-method"
                    | "#private-static-method"
                    | "#private-instance-method"
                    | "call-signature"
                    | "constructor"
                    | "public-constructor"
                    | "protected-constructor"
                    | "private-constructor"
                    | "accessor"
                    | "public-accessor"
                    | "public-decorated-accessor"
                    | "decorated-accessor"
                    | "static-accessor"
                    | "public-static-accessor"
                    | "instance-accessor"
                    | "public-instance-accessor"
                    | "abstract-accessor"
                    | "public-abstract-accessor"
                    | "protected-accessor"
                    | "protected-decorated-accessor"
                    | "protected-static-accessor"
                    | "protected-instance-accessor"
                    | "protected-abstract-accessor"
                    | "private-accessor"
                    | "private-decorated-accessor"
                    | "private-static-accessor"
                    | "private-instance-accessor"
                    | "#private-accessor"
                    | "#private-static-accessor"
                    | "#private-instance-accessor"
                    | "get"
                    | "public-get"
                    | "public-decorated-get"
                    | "decorated-get"
                    | "static-get"
                    | "public-static-get"
                    | "instance-get"
                    | "public-instance-get"
                    | "abstract-get"
                    | "public-abstract-get"
                    | "protected-get"
                    | "protected-decorated-get"
                    | "protected-static-get"
                    | "protected-instance-get"
                    | "protected-abstract-get"
                    | "private-get"
                    | "private-decorated-get"
                    | "private-static-get"
                    | "private-instance-get"
                    | "#private-get"
                    | "#private-static-get"
                    | "#private-instance-get"
                    | "set"
                    | "public-set"
                    | "public-decorated-set"
                    | "decorated-set"
                    | "static-set"
                    | "public-static-set"
                    | "instance-set"
                    | "public-instance-set"
                    | "abstract-set"
                    | "public-abstract-set"
                    | "protected-set"
                    | "protected-decorated-set"
                    | "protected-static-set"
                    | "protected-instance-set"
                    | "protected-abstract-set"
                    | "private-set"
                    | "private-decorated-set"
                    | "private-static-set"
                    | "private-instance-set"
                    | "#private-set"
                    | "#private-static-set"
                    | "#private-instance-set"
                    | "static-initialization"
                    | "static-static-initialization"
                    | "public-static-static-initialization"
                    | "instance-static-initialization"
                    | "public-instance-static-initialization"
                    | "abstract-static-initialization"
                    | "public-abstract-static-initialization"
                    | "protected-static-static-initialization"
                    | "protected-instance-static-initialization"
                    | "protected-abstract-static-initialization"
                    | "private-static-static-initialization"
                    | "private-instance-static-initialization"
                    | "#private-static-static-initialization"
                    | "#private-instance-static-initialization"
                  )[]
              )[]
            | "never";
          optionalityOrder?: "optional-first" | "required-first";
          order?:
            | "alphabetically"
            | "alphabetically-case-insensitive"
            | "as-written"
            | "natural"
            | "natural-case-insensitive";
        };
    /**
     * Which ordering to enforce for default.
     */
    default?:
      | "never"
      | (
          | (
              | "readonly-signature"
              | "signature"
              | "readonly-field"
              | "public-readonly-field"
              | "public-decorated-readonly-field"
              | "decorated-readonly-field"
              | "static-readonly-field"
              | "public-static-readonly-field"
              | "instance-readonly-field"
              | "public-instance-readonly-field"
              | "abstract-readonly-field"
              | "public-abstract-readonly-field"
              | "protected-readonly-field"
              | "protected-decorated-readonly-field"
              | "protected-static-readonly-field"
              | "protected-instance-readonly-field"
              | "protected-abstract-readonly-field"
              | "private-readonly-field"
              | "private-decorated-readonly-field"
              | "private-static-readonly-field"
              | "private-instance-readonly-field"
              | "#private-readonly-field"
              | "#private-static-readonly-field"
              | "#private-instance-readonly-field"
              | "field"
              | "public-field"
              | "public-decorated-field"
              | "decorated-field"
              | "static-field"
              | "public-static-field"
              | "instance-field"
              | "public-instance-field"
              | "abstract-field"
              | "public-abstract-field"
              | "protected-field"
              | "protected-decorated-field"
              | "protected-static-field"
              | "protected-instance-field"
              | "protected-abstract-field"
              | "private-field"
              | "private-decorated-field"
              | "private-static-field"
              | "private-instance-field"
              | "#private-field"
              | "#private-static-field"
              | "#private-instance-field"
              | "method"
              | "public-method"
              | "public-decorated-method"
              | "decorated-method"
              | "static-method"
              | "public-static-method"
              | "instance-method"
              | "public-instance-method"
              | "abstract-method"
              | "public-abstract-method"
              | "protected-method"
              | "protected-decorated-method"
              | "protected-static-method"
              | "protected-instance-method"
              | "protected-abstract-method"
              | "private-method"
              | "private-decorated-method"
              | "private-static-method"
              | "private-instance-method"
              | "#private-method"
              | "#private-static-method"
              | "#private-instance-method"
              | "call-signature"
              | "constructor"
              | "public-constructor"
              | "protected-constructor"
              | "private-constructor"
              | "accessor"
              | "public-accessor"
              | "public-decorated-accessor"
              | "decorated-accessor"
              | "static-accessor"
              | "public-static-accessor"
              | "instance-accessor"
              | "public-instance-accessor"
              | "abstract-accessor"
              | "public-abstract-accessor"
              | "protected-accessor"
              | "protected-decorated-accessor"
              | "protected-static-accessor"
              | "protected-instance-accessor"
              | "protected-abstract-accessor"
              | "private-accessor"
              | "private-decorated-accessor"
              | "private-static-accessor"
              | "private-instance-accessor"
              | "#private-accessor"
              | "#private-static-accessor"
              | "#private-instance-accessor"
              | "get"
              | "public-get"
              | "public-decorated-get"
              | "decorated-get"
              | "static-get"
              | "public-static-get"
              | "instance-get"
              | "public-instance-get"
              | "abstract-get"
              | "public-abstract-get"
              | "protected-get"
              | "protected-decorated-get"
              | "protected-static-get"
              | "protected-instance-get"
              | "protected-abstract-get"
              | "private-get"
              | "private-decorated-get"
              | "private-static-get"
              | "private-instance-get"
              | "#private-get"
              | "#private-static-get"
              | "#private-instance-get"
              | "set"
              | "public-set"
              | "public-decorated-set"
              | "decorated-set"
              | "static-set"
              | "public-static-set"
              | "instance-set"
              | "public-instance-set"
              | "abstract-set"
              | "public-abstract-set"
              | "protected-set"
              | "protected-decorated-set"
              | "protected-static-set"
              | "protected-instance-set"
              | "protected-abstract-set"
              | "private-set"
              | "private-decorated-set"
              | "private-static-set"
              | "private-instance-set"
              | "#private-set"
              | "#private-static-set"
              | "#private-instance-set"
              | "static-initialization"
              | "static-static-initialization"
              | "public-static-static-initialization"
              | "instance-static-initialization"
              | "public-instance-static-initialization"
              | "abstract-static-initialization"
              | "public-abstract-static-initialization"
              | "protected-static-static-initialization"
              | "protected-instance-static-initialization"
              | "protected-abstract-static-initialization"
              | "private-static-static-initialization"
              | "private-instance-static-initialization"
              | "#private-static-static-initialization"
              | "#private-instance-static-initialization"
            )
          | (
              | "readonly-signature"
              | "signature"
              | "readonly-field"
              | "public-readonly-field"
              | "public-decorated-readonly-field"
              | "decorated-readonly-field"
              | "static-readonly-field"
              | "public-static-readonly-field"
              | "instance-readonly-field"
              | "public-instance-readonly-field"
              | "abstract-readonly-field"
              | "public-abstract-readonly-field"
              | "protected-readonly-field"
              | "protected-decorated-readonly-field"
              | "protected-static-readonly-field"
              | "protected-instance-readonly-field"
              | "protected-abstract-readonly-field"
              | "private-readonly-field"
              | "private-decorated-readonly-field"
              | "private-static-readonly-field"
              | "private-instance-readonly-field"
              | "#private-readonly-field"
              | "#private-static-readonly-field"
              | "#private-instance-readonly-field"
              | "field"
              | "public-field"
              | "public-decorated-field"
              | "decorated-field"
              | "static-field"
              | "public-static-field"
              | "instance-field"
              | "public-instance-field"
              | "abstract-field"
              | "public-abstract-field"
              | "protected-field"
              | "protected-decorated-field"
              | "protected-static-field"
              | "protected-instance-field"
              | "protected-abstract-field"
              | "private-field"
              | "private-decorated-field"
              | "private-static-field"
              | "private-instance-field"
              | "#private-field"
              | "#private-static-field"
              | "#private-instance-field"
              | "method"
              | "public-method"
              | "public-decorated-method"
              | "decorated-method"
              | "static-method"
              | "public-static-method"
              | "instance-method"
              | "public-instance-method"
              | "abstract-method"
              | "public-abstract-method"
              | "protected-method"
              | "protected-decorated-method"
              | "protected-static-method"
              | "protected-instance-method"
              | "protected-abstract-method"
              | "private-method"
              | "private-decorated-method"
              | "private-static-method"
              | "private-instance-method"
              | "#private-method"
              | "#private-static-method"
              | "#private-instance-method"
              | "call-signature"
              | "constructor"
              | "public-constructor"
              | "protected-constructor"
              | "private-constructor"
              | "accessor"
              | "public-accessor"
              | "public-decorated-accessor"
              | "decorated-accessor"
              | "static-accessor"
              | "public-static-accessor"
              | "instance-accessor"
              | "public-instance-accessor"
              | "abstract-accessor"
              | "public-abstract-accessor"
              | "protected-accessor"
              | "protected-decorated-accessor"
              | "protected-static-accessor"
              | "protected-instance-accessor"
              | "protected-abstract-accessor"
              | "private-accessor"
              | "private-decorated-accessor"
              | "private-static-accessor"
              | "private-instance-accessor"
              | "#private-accessor"
              | "#private-static-accessor"
              | "#private-instance-accessor"
              | "get"
              | "public-get"
              | "public-decorated-get"
              | "decorated-get"
              | "static-get"
              | "public-static-get"
              | "instance-get"
              | "public-instance-get"
              | "abstract-get"
              | "public-abstract-get"
              | "protected-get"
              | "protected-decorated-get"
              | "protected-static-get"
              | "protected-instance-get"
              | "protected-abstract-get"
              | "private-get"
              | "private-decorated-get"
              | "private-static-get"
              | "private-instance-get"
              | "#private-get"
              | "#private-static-get"
              | "#private-instance-get"
              | "set"
              | "public-set"
              | "public-decorated-set"
              | "decorated-set"
              | "static-set"
              | "public-static-set"
              | "instance-set"
              | "public-instance-set"
              | "abstract-set"
              | "public-abstract-set"
              | "protected-set"
              | "protected-decorated-set"
              | "protected-static-set"
              | "protected-instance-set"
              | "protected-abstract-set"
              | "private-set"
              | "private-decorated-set"
              | "private-static-set"
              | "private-instance-set"
              | "#private-set"
              | "#private-static-set"
              | "#private-instance-set"
              | "static-initialization"
              | "static-static-initialization"
              | "public-static-static-initialization"
              | "instance-static-initialization"
              | "public-instance-static-initialization"
              | "abstract-static-initialization"
              | "public-abstract-static-initialization"
              | "protected-static-static-initialization"
              | "protected-instance-static-initialization"
              | "protected-abstract-static-initialization"
              | "private-static-static-initialization"
              | "private-instance-static-initialization"
              | "#private-static-static-initialization"
              | "#private-instance-static-initialization"
            )[]
        )[]
      | {
          memberTypes?:
            | (
                | (
                    | "readonly-signature"
                    | "signature"
                    | "readonly-field"
                    | "public-readonly-field"
                    | "public-decorated-readonly-field"
                    | "decorated-readonly-field"
                    | "static-readonly-field"
                    | "public-static-readonly-field"
                    | "instance-readonly-field"
                    | "public-instance-readonly-field"
                    | "abstract-readonly-field"
                    | "public-abstract-readonly-field"
                    | "protected-readonly-field"
                    | "protected-decorated-readonly-field"
                    | "protected-static-readonly-field"
                    | "protected-instance-readonly-field"
                    | "protected-abstract-readonly-field"
                    | "private-readonly-field"
                    | "private-decorated-readonly-field"
                    | "private-static-readonly-field"
                    | "private-instance-readonly-field"
                    | "#private-readonly-field"
                    | "#private-static-readonly-field"
                    | "#private-instance-readonly-field"
                    | "field"
                    | "public-field"
                    | "public-decorated-field"
                    | "decorated-field"
                    | "static-field"
                    | "public-static-field"
                    | "instance-field"
                    | "public-instance-field"
                    | "abstract-field"
                    | "public-abstract-field"
                    | "protected-field"
                    | "protected-decorated-field"
                    | "protected-static-field"
                    | "protected-instance-field"
                    | "protected-abstract-field"
                    | "private-field"
                    | "private-decorated-field"
                    | "private-static-field"
                    | "private-instance-field"
                    | "#private-field"
                    | "#private-static-field"
                    | "#private-instance-field"
                    | "method"
                    | "public-method"
                    | "public-decorated-method"
                    | "decorated-method"
                    | "static-method"
                    | "public-static-method"
                    | "instance-method"
                    | "public-instance-method"
                    | "abstract-method"
                    | "public-abstract-method"
                    | "protected-method"
                    | "protected-decorated-method"
                    | "protected-static-method"
                    | "protected-instance-method"
                    | "protected-abstract-method"
                    | "private-method"
                    | "private-decorated-method"
                    | "private-static-method"
                    | "private-instance-method"
                    | "#private-method"
                    | "#private-static-method"
                    | "#private-instance-method"
                    | "call-signature"
                    | "constructor"
                    | "public-constructor"
                    | "protected-constructor"
                    | "private-constructor"
                    | "accessor"
                    | "public-accessor"
                    | "public-decorated-accessor"
                    | "decorated-accessor"
                    | "static-accessor"
                    | "public-static-accessor"
                    | "instance-accessor"
                    | "public-instance-accessor"
                    | "abstract-accessor"
                    | "public-abstract-accessor"
                    | "protected-accessor"
                    | "protected-decorated-accessor"
                    | "protected-static-accessor"
                    | "protected-instance-accessor"
                    | "protected-abstract-accessor"
                    | "private-accessor"
                    | "private-decorated-accessor"
                    | "private-static-accessor"
                    | "private-instance-accessor"
                    | "#private-accessor"
                    | "#private-static-accessor"
                    | "#private-instance-accessor"
                    | "get"
                    | "public-get"
                    | "public-decorated-get"
                    | "decorated-get"
                    | "static-get"
                    | "public-static-get"
                    | "instance-get"
                    | "public-instance-get"
                    | "abstract-get"
                    | "public-abstract-get"
                    | "protected-get"
                    | "protected-decorated-get"
                    | "protected-static-get"
                    | "protected-instance-get"
                    | "protected-abstract-get"
                    | "private-get"
                    | "private-decorated-get"
                    | "private-static-get"
                    | "private-instance-get"
                    | "#private-get"
                    | "#private-static-get"
                    | "#private-instance-get"
                    | "set"
                    | "public-set"
                    | "public-decorated-set"
                    | "decorated-set"
                    | "static-set"
                    | "public-static-set"
                    | "instance-set"
                    | "public-instance-set"
                    | "abstract-set"
                    | "public-abstract-set"
                    | "protected-set"
                    | "protected-decorated-set"
                    | "protected-static-set"
                    | "protected-instance-set"
                    | "protected-abstract-set"
                    | "private-set"
                    | "private-decorated-set"
                    | "private-static-set"
                    | "private-instance-set"
                    | "#private-set"
                    | "#private-static-set"
                    | "#private-instance-set"
                    | "static-initialization"
                    | "static-static-initialization"
                    | "public-static-static-initialization"
                    | "instance-static-initialization"
                    | "public-instance-static-initialization"
                    | "abstract-static-initialization"
                    | "public-abstract-static-initialization"
                    | "protected-static-static-initialization"
                    | "protected-instance-static-initialization"
                    | "protected-abstract-static-initialization"
                    | "private-static-static-initialization"
                    | "private-instance-static-initialization"
                    | "#private-static-static-initialization"
                    | "#private-instance-static-initialization"
                  )
                | (
                    | "readonly-signature"
                    | "signature"
                    | "readonly-field"
                    | "public-readonly-field"
                    | "public-decorated-readonly-field"
                    | "decorated-readonly-field"
                    | "static-readonly-field"
                    | "public-static-readonly-field"
                    | "instance-readonly-field"
                    | "public-instance-readonly-field"
                    | "abstract-readonly-field"
                    | "public-abstract-readonly-field"
                    | "protected-readonly-field"
                    | "protected-decorated-readonly-field"
                    | "protected-static-readonly-field"
                    | "protected-instance-readonly-field"
                    | "protected-abstract-readonly-field"
                    | "private-readonly-field"
                    | "private-decorated-readonly-field"
                    | "private-static-readonly-field"
                    | "private-instance-readonly-field"
                    | "#private-readonly-field"
                    | "#private-static-readonly-field"
                    | "#private-instance-readonly-field"
                    | "field"
                    | "public-field"
                    | "public-decorated-field"
                    | "decorated-field"
                    | "static-field"
                    | "public-static-field"
                    | "instance-field"
                    | "public-instance-field"
                    | "abstract-field"
                    | "public-abstract-field"
                    | "protected-field"
                    | "protected-decorated-field"
                    | "protected-static-field"
                    | "protected-instance-field"
                    | "protected-abstract-field"
                    | "private-field"
                    | "private-decorated-field"
                    | "private-static-field"
                    | "private-instance-field"
                    | "#private-field"
                    | "#private-static-field"
                    | "#private-instance-field"
                    | "method"
                    | "public-method"
                    | "public-decorated-method"
                    | "decorated-method"
                    | "static-method"
                    | "public-static-method"
                    | "instance-method"
                    | "public-instance-method"
                    | "abstract-method"
                    | "public-abstract-method"
                    | "protected-method"
                    | "protected-decorated-method"
                    | "protected-static-method"
                    | "protected-instance-method"
                    | "protected-abstract-method"
                    | "private-method"
                    | "private-decorated-method"
                    | "private-static-method"
                    | "private-instance-method"
                    | "#private-method"
                    | "#private-static-method"
                    | "#private-instance-method"
                    | "call-signature"
                    | "constructor"
                    | "public-constructor"
                    | "protected-constructor"
                    | "private-constructor"
                    | "accessor"
                    | "public-accessor"
                    | "public-decorated-accessor"
                    | "decorated-accessor"
                    | "static-accessor"
                    | "public-static-accessor"
                    | "instance-accessor"
                    | "public-instance-accessor"
                    | "abstract-accessor"
                    | "public-abstract-accessor"
                    | "protected-accessor"
                    | "protected-decorated-accessor"
                    | "protected-static-accessor"
                    | "protected-instance-accessor"
                    | "protected-abstract-accessor"
                    | "private-accessor"
                    | "private-decorated-accessor"
                    | "private-static-accessor"
                    | "private-instance-accessor"
                    | "#private-accessor"
                    | "#private-static-accessor"
                    | "#private-instance-accessor"
                    | "get"
                    | "public-get"
                    | "public-decorated-get"
                    | "decorated-get"
                    | "static-get"
                    | "public-static-get"
                    | "instance-get"
                    | "public-instance-get"
                    | "abstract-get"
                    | "public-abstract-get"
                    | "protected-get"
                    | "protected-decorated-get"
                    | "protected-static-get"
                    | "protected-instance-get"
                    | "protected-abstract-get"
                    | "private-get"
                    | "private-decorated-get"
                    | "private-static-get"
                    | "private-instance-get"
                    | "#private-get"
                    | "#private-static-get"
                    | "#private-instance-get"
                    | "set"
                    | "public-set"
                    | "public-decorated-set"
                    | "decorated-set"
                    | "static-set"
                    | "public-static-set"
                    | "instance-set"
                    | "public-instance-set"
                    | "abstract-set"
                    | "public-abstract-set"
                    | "protected-set"
                    | "protected-decorated-set"
                    | "protected-static-set"
                    | "protected-instance-set"
                    | "protected-abstract-set"
                    | "private-set"
                    | "private-decorated-set"
                    | "private-static-set"
                    | "private-instance-set"
                    | "#private-set"
                    | "#private-static-set"
                    | "#private-instance-set"
                    | "static-initialization"
                    | "static-static-initialization"
                    | "public-static-static-initialization"
                    | "instance-static-initialization"
                    | "public-instance-static-initialization"
                    | "abstract-static-initialization"
                    | "public-abstract-static-initialization"
                    | "protected-static-static-initialization"
                    | "protected-instance-static-initialization"
                    | "protected-abstract-static-initialization"
                    | "private-static-static-initialization"
                    | "private-instance-static-initialization"
                    | "#private-static-static-initialization"
                    | "#private-instance-static-initialization"
                  )[]
              )[]
            | "never";
          optionalityOrder?: "optional-first" | "required-first";
          order?:
            | "alphabetically"
            | "alphabetically-case-insensitive"
            | "as-written"
            | "natural"
            | "natural-case-insensitive";
        };
    /**
     * Which ordering to enforce for interfaces.
     */
    interfaces?:
      | "never"
      | (
          | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")
          | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[]
        )[]
      | {
          memberTypes?:
            | (
                | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")
                | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[]
              )[]
            | "never";
          optionalityOrder?: "optional-first" | "required-first";
          order?:
            | "alphabetically"
            | "alphabetically-case-insensitive"
            | "as-written"
            | "natural"
            | "natural-case-insensitive";
        };
    /**
     * Which ordering to enforce for typeLiterals.
     */
    typeLiterals?:
      | "never"
      | (
          | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")
          | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[]
        )[]
      | {
          memberTypes?:
            | (
                | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")
                | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[]
              )[]
            | "never";
          optionalityOrder?: "optional-first" | "required-first";
          order?:
            | "alphabetically"
            | "alphabetically-case-insensitive"
            | "as-written"
            | "natural"
            | "natural-case-insensitive";
        };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MethodSignatureStyle = ["property" | "method"];
export type PrefixSuffixConfig = string[];
export type NamingConvention = (
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      modifiers?: (
        | "const"
        | "readonly"
        | "static"
        | "public"
        | "protected"
        | "private"
        | "#private"
        | "abstract"
        | "destructured"
        | "global"
        | "exported"
        | "unused"
        | "requiresQuotes"
        | "override"
        | "async"
        | "default"
        | "namespace"
      )[];
      selector: (
        | "default"
        | "variableLike"
        | "memberLike"
        | "typeLike"
        | "method"
        | "property"
        | "accessor"
        | "variable"
        | "function"
        | "parameter"
        | "parameterProperty"
        | "classicAccessor"
        | "enumMember"
        | "classMethod"
        | "objectLiteralMethod"
        | "typeMethod"
        | "classProperty"
        | "objectLiteralProperty"
        | "typeProperty"
        | "autoAccessor"
        | "class"
        | "interface"
        | "typeAlias"
        | "enum"
        | "typeParameter"
        | "import"
      )[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "default";
      modifiers?: (
        | "const"
        | "readonly"
        | "static"
        | "public"
        | "protected"
        | "private"
        | "#private"
        | "abstract"
        | "destructured"
        | "global"
        | "exported"
        | "unused"
        | "requiresQuotes"
        | "override"
        | "async"
        | "default"
        | "namespace"
      )[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "variableLike";
      modifiers?: ("unused" | "async")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "variable";
      modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "function";
      modifiers?: ("exported" | "global" | "unused" | "async")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "parameter";
      modifiers?: ("destructured" | "unused")[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "memberLike";
      modifiers?: (
        | "abstract"
        | "private"
        | "#private"
        | "protected"
        | "public"
        | "readonly"
        | "requiresQuotes"
        | "static"
        | "override"
        | "async"
      )[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "classProperty";
      modifiers?: (
        | "abstract"
        | "private"
        | "#private"
        | "protected"
        | "public"
        | "readonly"
        | "requiresQuotes"
        | "static"
        | "override"
      )[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "objectLiteralProperty";
      modifiers?: ("public" | "requiresQuotes")[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "typeProperty";
      modifiers?: ("public" | "readonly" | "requiresQuotes")[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "parameterProperty";
      modifiers?: ("private" | "protected" | "public" | "readonly")[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "property";
      modifiers?: (
        | "abstract"
        | "private"
        | "#private"
        | "protected"
        | "public"
        | "readonly"
        | "requiresQuotes"
        | "static"
        | "override"
        | "async"
      )[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "classMethod";
      modifiers?: (
        | "abstract"
        | "private"
        | "#private"
        | "protected"
        | "public"
        | "requiresQuotes"
        | "static"
        | "override"
        | "async"
      )[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "objectLiteralMethod";
      modifiers?: ("public" | "requiresQuotes" | "async")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "typeMethod";
      modifiers?: ("public" | "requiresQuotes")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "method";
      modifiers?: (
        | "abstract"
        | "private"
        | "#private"
        | "protected"
        | "public"
        | "requiresQuotes"
        | "static"
        | "override"
        | "async"
      )[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "classicAccessor";
      modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "autoAccessor";
      modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "accessor";
      modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[];
      types?: ("boolean" | "string" | "number" | "function" | "array")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "enumMember";
      modifiers?: "requiresQuotes"[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "typeLike";
      modifiers?: ("abstract" | "exported" | "unused")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "class";
      modifiers?: ("abstract" | "exported" | "unused")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "interface";
      modifiers?: ("exported" | "unused")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "typeAlias";
      modifiers?: ("exported" | "unused")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "enum";
      modifiers?: ("exported" | "unused")[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "typeParameter";
      modifiers?: "unused"[];
    }
  | {
      custom?: MatchRegexConfig;
      failureMessage?: string;
      format:
        | ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")[]
        | null;
      leadingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      prefix?: PrefixSuffixConfig;
      suffix?: PrefixSuffixConfig;
      trailingUnderscore?: "forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble";
      filter?: string | MatchRegexConfig;
      selector: "import";
      modifiers?: ("default" | "namespace")[];
    }
)[];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoArrayConstructor = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoArrayDelete = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoBaseToString = [
  {
    /**
     * Whether to also check values of type `unknown`
     */
    checkUnknown?: boolean;
    /**
     * Stringified type names to ignore.
     */
    ignoredTypeNames?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoConfusingNonNullAssertion = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoConfusingVoidExpression = [
  {
    /**
     * Whether to ignore "shorthand" `() =>` arrow functions: those without `{ ... }` braces.
     */
    ignoreArrowShorthand?: boolean;
    /**
     * Whether to ignore returns that start with the `void` operator.
     */
    ignoreVoidOperator?: boolean;
    /**
     * Whether to ignore returns from functions with explicit `void` return types and functions with contextual `void` return types.
     */
    ignoreVoidReturningFunctions?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDeprecated = [
  {
    /**
     * Type specifiers that can be allowed.
     */
    allow?: (
      | string
      | {
          from: "file";
          name: string | [string, ...string[]];
          path?: string;
        }
      | {
          from: "lib";
          name: string | [string, ...string[]];
        }
      | {
          from: "package";
          name: string | [string, ...string[]];
          package: string;
        }
    )[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDupeClassMembers = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDuplicateEnumValues = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDuplicateTypeConstituents = [
  {
    /**
     * Whether to ignore `&` intersections.
     */
    ignoreIntersections?: boolean;
    /**
     * Whether to ignore `|` unions.
     */
    ignoreUnions?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDynamicDelete = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoEmptyFunction = [
  {
    /**
     * Locations and kinds of functions that are allowed to be empty.
     */
    allow?: (
      | "functions"
      | "arrowFunctions"
      | "generatorFunctions"
      | "methods"
      | "generatorMethods"
      | "getters"
      | "setters"
      | "constructors"
      | "private-constructors"
      | "protected-constructors"
      | "asyncFunctions"
      | "asyncMethods"
      | "decoratedFunctions"
      | "overrideMethods"
    )[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoEmptyInterface = [
  {
    /**
     * Whether to allow empty interfaces that extend a single other interface.
     */
    allowSingleExtends?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoEmptyObjectType = [
  {
    /**
     * Whether to allow empty interfaces.
     */
    allowInterfaces?: "always" | "never" | "with-single-extends";
    /**
     * Whether to allow empty object type literals.
     */
    allowObjectTypes?: "always" | "never";
    /**
     * A stringified regular expression to allow interfaces and object type aliases with the configured name.
     */
    allowWithName?: string;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoExplicitAny = [
  {
    /**
     * Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.
     */
    fixToUnknown?: boolean;
    /**
     * Whether to ignore rest parameter arrays.
     */
    ignoreRestArgs?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoExtraNonNullAssertion = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoExtraneousClass = [
  {
    /**
     * Whether to allow extraneous classes that contain only a constructor.
     */
    allowConstructorOnly?: boolean;
    /**
     * Whether to allow extraneous classes that have no body (i.e. are empty).
     */
    allowEmpty?: boolean;
    /**
     * Whether to allow extraneous classes that only contain static members.
     */
    allowStaticOnly?: boolean;
    /**
     * Whether to allow extraneous classes that include a decorator.
     */
    allowWithDecorator?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoFloatingPromises = [
  {
    /**
     * Type specifiers of functions whose calls are safe to float.
     */
    allowForKnownSafeCalls?: (
      | string
      | {
          from: "file";
          name: string | [string, ...string[]];
          path?: string;
        }
      | {
          from: "lib";
          name: string | [string, ...string[]];
        }
      | {
          from: "package";
          name: string | [string, ...string[]];
          package: string;
        }
    )[];
    /**
     * Type specifiers that are known to be safe to float.
     */
    allowForKnownSafePromises?: (
      | string
      | {
          from: "file";
          name: string | [string, ...string[]];
          path?: string;
        }
      | {
          from: "lib";
          name: string | [string, ...string[]];
        }
      | {
          from: "package";
          name: string | [string, ...string[]];
          package: string;
        }
    )[];
    /**
     * Whether to check all "Thenable"s, not just the built-in Promise type.
     */
    checkThenables?: boolean;
    /**
     * Whether to ignore async IIFEs (Immediately Invoked Function Expressions).
     */
    ignoreIIFE?: boolean;
    /**
     * Whether to ignore `void` expressions.
     */
    ignoreVoid?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoForInArray = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoImpliedEval = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoImportTypeSideEffects = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoInferrableTypes = [
  {
    /**
     * Whether to ignore function parameters.
     */
    ignoreParameters?: boolean;
    /**
     * Whether to ignore class properties.
     */
    ignoreProperties?: boolean;
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
export type NoInvalidVoidType = [
  {
    /**
     * Whether a `this` parameter of a function may be `void`.
     */
    allowAsThisParameter?: boolean;
    /**
     * Whether `void` can be used as a valid value for generic type parameters.
     */
    allowInGenericTypeArguments?: boolean | [string, ...string[]];
  }
];
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
    /**
     * Whether enums used in TypeScript are considered okay.
     */
    ignoreEnums?: boolean;
    /**
     * Whether numbers used in TypeScript numeric literal types are considered okay.
     */
    ignoreNumericLiteralTypes?: boolean;
    /**
     * Whether `readonly` class properties are considered okay.
     */
    ignoreReadonlyClassProperties?: boolean;
    /**
     * Whether numbers used to index types are okay.
     */
    ignoreTypeIndexes?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMeaninglessVoidOperator = [
  {
    /**
     * Whether to suggest removing `void` when the argument has type `never`.
     */
    checkNever?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoMisusedNew = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMisusedPromises = [
  {
    /**
     * Whether to warn when a Promise is provided to conditional statements.
     */
    checksConditionals?: boolean;
    /**
     * Whether to warn when `...` spreading a `Promise`.
     */
    checksSpreads?: boolean;
    /**
     * Whether to warn when a Promise is returned from a function typed as returning `void`.
     */
    checksVoidReturn?:
      | boolean
      | {
          /**
           * Disables checking an asynchronous function passed as argument where the parameter type expects a function that returns `void`.
           */
          arguments?: boolean;
          /**
           * Disables checking an asynchronous function passed as a JSX attribute expected to be a function that returns `void`.
           */
          attributes?: boolean;
          /**
           * Disables checking an asynchronous method in a type that extends or implements another type expecting that method to return `void`.
           */
          inheritedMethods?: boolean;
          /**
           * Disables checking an asynchronous function passed as an object property expected to be a function that returns `void`.
           */
          properties?: boolean;
          /**
           * Disables checking an asynchronous function returned in a function whose return type is a function that returns `void`.
           */
          returns?: boolean;
          /**
           * Disables checking an asynchronous function used as a variable whose return type is a function that returns `void`.
           */
          variables?: boolean;
        };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoMisusedSpread = [
  {
    /**
     * An array of type specifiers that are known to be safe to spread.
     */
    allow?: (
      | string
      | {
          from: "file";
          name: string | [string, ...string[]];
          path?: string;
        }
      | {
          from: "lib";
          name: string | [string, ...string[]];
        }
      | {
          from: "package";
          name: string | [string, ...string[]];
          package: string;
        }
    )[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoMixedEnums = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoNamespace = [
  {
    /**
     * Whether to allow `declare` with custom TypeScript namespaces.
     */
    allowDeclarations?: boolean;
    /**
     * Whether to allow `declare` with custom TypeScript namespaces inside definition files.
     */
    allowDefinitionFiles?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNonNullAssertedNullishCoalescing = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNonNullAssertedOptionalChain = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoNonNullAssertion = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRedeclare = [
  {
    /**
     * Whether to report shadowing of built-in global variables.
     */
    builtinGlobals?: boolean;
    /**
     * Whether to ignore declaration merges between certain TypeScript declaration types.
     */
    ignoreDeclarationMerge?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoRedundantTypeConstituents = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRequireImports = [
  {
    /**
     * Patterns of import paths to allow requiring from.
     */
    allow?: string[];
    /**
     * Allows `require` statements in import declarations.
     */
    allowAsImport?: boolean;
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
          | {
              /**
               * @minItems 1
               */
              importNames?: [string, ...string[]];
              /**
               * @minItems 1
               */
              allowImportNames?: [string, ...string[]];
              /**
               * @minItems 1
               */
              group?: [string, ...string[]];
              regex?: string;
              importNamePattern?: string;
              allowImportNamePattern?: string;
              message?: string;
              caseSensitive?: boolean;
              /**
               * Whether to allow type-only imports for a path.
               */
              allowTypeImports?: boolean;
            }[];
      }
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRestrictedTypes = [
  {
    /**
     * An object whose keys are the types you want to ban, and the values are error messages.
     */
    types?: {
      [k: string]:
        | true
        | string
        | {
            /**
             * Type to autofix replace with. Note that autofixers can be applied automatically - so you need to be careful with this option.
             */
            fixWith?: string;
            /**
             * Custom error message.
             */
            message?: string;
            /**
             * Types to suggest replacing with.
             */
            suggest?: string[];
          };
    };
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoShadow = [
  {
    /**
     * Identifier names for which shadowing is allowed.
     */
    allow?: string[];
    /**
     * Whether to report shadowing of built-in global variables.
     */
    builtinGlobals?: boolean;
    /**
     * Whether to report shadowing before outer functions or variables are defined.
     */
    hoist?: "all" | "functions" | "functions-and-types" | "never" | "types";
    /**
     * Whether to ignore function parameters named the same as a variable.
     */
    ignoreFunctionTypeParameterNameValueShadow?: boolean;
    /**
     * Whether to ignore the variable initializers when the shadowed variable is presumably still unitialized.
     */
    ignoreOnInitialization?: boolean;
    /**
     * Whether to ignore types named the same as a variable.
     */
    ignoreTypeValueShadow?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoThisAlias = [
  {
    /**
     * Whether to ignore destructurings, such as `const { props, state } = this`.
     */
    allowDestructuring?: boolean;
    /**
     * Names to ignore, such as ["self"] for `const self = this;`.
     */
    allowedNames?: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoTypeAlias = [
  {
    /**
     * Whether to allow direct one-to-one type aliases.
     */
    allowAliases?: "always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections";
    /**
     * Whether to allow type aliases for callbacks.
     */
    allowCallbacks?: "always" | "never";
    /**
     * Whether to allow type aliases for conditional types.
     */
    allowConditionalTypes?: "always" | "never";
    /**
     * Whether to allow type aliases with constructors.
     */
    allowConstructors?: "always" | "never";
    /**
     * Whether to allow type aliases with generic types.
     */
    allowGenerics?: "always" | "never";
    /**
     * Whether to allow type aliases with object literal types.
     */
    allowLiterals?: "always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections";
    /**
     * Whether to allow type aliases with mapped types.
     */
    allowMappedTypes?: "always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections";
    /**
     * Whether to allow type aliases with tuple types.
     */
    allowTupleTypes?: "always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnnecessaryBooleanLiteralCompare = [
  {
    /**
     * Whether to allow comparisons between nullable boolean variables and `false`.
     */
    allowComparingNullableBooleansToFalse?: boolean;
    /**
     * Whether to allow comparisons between nullable boolean variables and `true`.
     */
    allowComparingNullableBooleansToTrue?: boolean;
    /**
     * Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.
     */
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnnecessaryCondition = [
  {
    /**
     * Whether to ignore constant loop conditions, such as `while (true)`.
     */
    allowConstantLoopConditions?: boolean | ("always" | "never" | "only-allowed-literals");
    /**
     * Whether to not error when running with a tsconfig that has strictNullChecks turned.
     */
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
    /**
     * Whether to check the asserted argument of a type predicate function for unnecessary conditions
     */
    checkTypePredicates?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnnecessaryParameterPropertyAssignment = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnnecessaryQualifier = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnnecessaryTemplateExpression = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnnecessaryTypeArguments = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnnecessaryTypeAssertion = [
  {
    /**
     * Whether to check literal const assertions.
     */
    checkLiteralConstAssertions?: boolean;
    /**
     * A list of type names to ignore.
     */
    typesToIgnore?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnnecessaryTypeConstraint = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnnecessaryTypeConversion = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnnecessaryTypeParameters = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnsafeArgument = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnsafeAssignment = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnsafeCall = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnsafeDeclarationMerging = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnsafeEnumComparison = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnsafeFunctionType = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnsafeMemberAccess = [
  {
    /**
     * Whether to allow `?.` optional chains on `any` values.
     */
    allowOptionalChaining?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnsafeReturn = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnsafeTypeAssertion = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnsafeUnaryMinus = [];
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
export type NoUnusedPrivateClassMembers = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUnusedVars = [
  | ("all" | "local")
  | {
      /**
       * Whether to check all, some, or no arguments.
       */
      args?: "all" | "after-used" | "none";
      /**
       * Regular expressions of argument names to not check for usage.
       */
      argsIgnorePattern?: string;
      /**
       * Whether to check catch block arguments.
       */
      caughtErrors?: "all" | "none";
      /**
       * Regular expressions of catch block argument names to not check for usage.
       */
      caughtErrorsIgnorePattern?: string;
      /**
       * Regular expressions of destructured array variable names to not check for usage.
       */
      destructuredArrayIgnorePattern?: string;
      /**
       * Configurable automatic fixes for different types of unused variables.
       */
      enableAutofixRemoval?: {
        /**
         * Whether to enable automatic removal of unused imports.
         */
        imports?: boolean;
      };
      /**
       * Whether to ignore classes with at least one static initialization block.
       */
      ignoreClassWithStaticInitBlock?: boolean;
      /**
       * Whether to ignore sibling properties in `...` destructurings.
       */
      ignoreRestSiblings?: boolean;
      /**
       * Whether to ignore using or await using declarations.
       */
      ignoreUsingDeclarations?: boolean;
      /**
       * Whether to report variables that match any of the valid ignore pattern options if they have been used.
       */
      reportUsedIgnorePattern?: boolean;
      /**
       * Whether to check all variables or only locally-declared variables.
       */
      vars?: "all" | "local";
      /**
       * Regular expressions of variable names to not check for usage.
       */
      varsIgnorePattern?: string;
    }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoUseBeforeDefine = [
  | "nofunc"
  | {
      /**
       * Whether to ignore named exports.
       */
      allowNamedExports?: boolean;
      /**
       * Whether to ignore references to class declarations.
       */
      classes?: boolean;
      /**
       * Whether to check references to enums.
       */
      enums?: boolean;
      /**
       * Whether to ignore references to function declarations.
       */
      functions?: boolean;
      /**
       * Whether to ignore type references, such as in type annotations and assertions.
       */
      ignoreTypeReferences?: boolean;
      /**
       * Whether to check references to types.
       */
      typedefs?: boolean;
      /**
       * Whether to ignore references to variables.
       */
      variables?: boolean;
    }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessConstructor = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessDefaultAssignment = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUselessEmptyExport = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoVarRequires = [
  {
    /**
     * Patterns of import paths to allow requiring from.
     */
    allow?: string[];
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoWrapperObjectTypes = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NonNullableTypeAssertionStyle = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type OnlyThrowError = [
  {
    /**
     * Type specifiers that can be thrown.
     */
    allow?: (
      | string
      | {
          from: "file";
          name: string | [string, ...string[]];
          path?: string;
        }
      | {
          from: "lib";
          name: string | [string, ...string[]];
        }
      | {
          from: "package";
          name: string | [string, ...string[]];
          package: string;
        }
    )[];
    /**
     * Whether to allow rethrowing caught values that are not `Error` objects.
     */
    allowRethrowing?: boolean;
    /**
     * Whether to always allow throwing values typed as `any`.
     */
    allowThrowingAny?: boolean;
    /**
     * Whether to always allow throwing values typed as `unknown`.
     */
    allowThrowingUnknown?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ParameterProperties = [
  {
    /**
     * Whether to allow certain kinds of properties to be ignored.
     */
    allow?: (
      | "readonly"
      | "private"
      | "protected"
      | "public"
      | "private readonly"
      | "protected readonly"
      | "public readonly"
    )[];
    /**
     * Whether to prefer class properties or parameter properties.
     */
    prefer?: "class-property" | "parameter-property";
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferAsConst = [];
/**
 * @minItems 2
 * @maxItems 2
 */
export type PreferDestructuring = [
  (
    | {
        AssignmentExpression?: {
          array?: boolean;
          object?: boolean;
        };
        VariableDeclarator?: {
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
    /**
     * Whether to enforce destructuring on variable declarations with type annotations.
     */
    enforceForDeclarationWithTypeAnnotation?: boolean;
    /**
     * Whether to enforce destructuring that use a different variable name than the property name.
     */
    enforceForRenamedProperties?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferEnumInitializers = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferFind = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferForOf = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferFunctionType = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferIncludes = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferLiteralEnumMember = [
  {
    /**
     * Whether to allow using bitwise expressions in enum initializers.
     */
    allowBitwiseExpressions?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferNamespaceKeyword = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferNullishCoalescing = [
  {
    /**
     * Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.
     */
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
    /**
     * Whether to ignore arguments to the `Boolean` constructor
     */
    ignoreBooleanCoercion?: boolean;
    /**
     * Whether to ignore cases that are located within a conditional test.
     */
    ignoreConditionalTests?: boolean;
    /**
     * Whether to ignore any if statements that could be simplified by using the nullish coalescing operator.
     */
    ignoreIfStatements?: boolean;
    /**
     * Whether to ignore any logical or expressions that are part of a mixed logical expression (with `&&`).
     */
    ignoreMixedLogicalExpressions?: boolean;
    /**
     * Whether to ignore all (`true`) or some (an object with properties) primitive types.
     */
    ignorePrimitives?:
      | {
          /**
           * Ignore bigint primitive types.
           */
          bigint?: boolean;
          /**
           * Ignore boolean primitive types.
           */
          boolean?: boolean;
          /**
           * Ignore number primitive types.
           */
          number?: boolean;
          /**
           * Ignore string primitive types.
           */
          string?: boolean;
        }
      | true;
    /**
     * Whether to ignore any ternary expressions that could be simplified by using the nullish coalescing operator.
     */
    ignoreTernaryTests?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferOptionalChain = [
  {
    /**
     * Allow autofixers that will change the return type of the expression. This option is considered unsafe as it may break the build.
     */
    allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean;
    /**
     * Check operands that are typed as `any` when inspecting "loose boolean" operands.
     */
    checkAny?: boolean;
    /**
     * Check operands that are typed as `bigint` when inspecting "loose boolean" operands.
     */
    checkBigInt?: boolean;
    /**
     * Check operands that are typed as `boolean` when inspecting "loose boolean" operands.
     */
    checkBoolean?: boolean;
    /**
     * Check operands that are typed as `number` when inspecting "loose boolean" operands.
     */
    checkNumber?: boolean;
    /**
     * Check operands that are typed as `string` when inspecting "loose boolean" operands.
     */
    checkString?: boolean;
    /**
     * Check operands that are typed as `unknown` when inspecting "loose boolean" operands.
     */
    checkUnknown?: boolean;
    /**
     * Skip operands that are not typed with `null` and/or `undefined` when inspecting "loose boolean" operands.
     */
    requireNullish?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferPromiseRejectErrors = [
  {
    /**
     * Whether to allow calls to `Promise.reject()` with no arguments.
     */
    allowEmptyReject?: boolean;
    /**
     * Whether to always allow throwing values typed as `any`.
     */
    allowThrowingAny?: boolean;
    /**
     * Whether to always allow throwing values typed as `unknown`.
     */
    allowThrowingUnknown?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferReadonly = [
  {
    /**
     * Whether to restrict checking only to members immediately assigned a lambda value.
     */
    onlyInlineLambdas?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferReadonlyParameterTypes = [
  {
    /**
     * An array of type specifiers to ignore.
     */
    allow?: (
      | string
      | {
          from: "file";
          name: string | [string, ...string[]];
          path?: string;
        }
      | {
          from: "lib";
          name: string | [string, ...string[]];
        }
      | {
          from: "package";
          name: string | [string, ...string[]];
          package: string;
        }
    )[];
    /**
     * Whether to check class parameter properties.
     */
    checkParameterProperties?: boolean;
    /**
     * Whether to ignore parameters which don't explicitly specify a type.
     */
    ignoreInferredTypes?: boolean;
    /**
     * Whether to treat all mutable methods as though they are readonly.
     */
    treatMethodsAsReadonly?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferReduceTypeParameter = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferRegexpExec = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferReturnThisType = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferStringStartsEndsWith = [
  {
    /**
     * Whether to allow equality checks against the first or last element of a string.
     */
    allowSingleElementEquality?: "always" | "never";
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type PreferTsExpectError = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PromiseFunctionAsync = [
  {
    /**
     * Whether to consider `any` and `unknown` to be Promises.
     */
    allowAny?: boolean;
    /**
     * Any extra names of classes or interfaces to be considered Promises.
     */
    allowedPromiseNames?: string[];
    /**
     * Whether to check arrow functions.
     */
    checkArrowFunctions?: boolean;
    /**
     * Whether to check standalone function declarations.
     */
    checkFunctionDeclarations?: boolean;
    /**
     * Whether to check inline function expressions
     */
    checkFunctionExpressions?: boolean;
    /**
     * Whether to check methods on classes and object literals.
     */
    checkMethodDeclarations?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type RelatedGetterSetterPairs = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RequireArraySortCompare = [
  {
    /**
     * Whether to ignore arrays in which all elements are strings.
     */
    ignoreStringArrays?: boolean;
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
export type RestrictPlusOperands = [
  {
    /**
     * Whether to allow `any` typed values.
     */
    allowAny?: boolean;
    /**
     * Whether to allow `boolean` typed values.
     */
    allowBoolean?: boolean;
    /**
     * Whether to allow potentially `null` or `undefined` typed values.
     */
    allowNullish?: boolean;
    /**
     * Whether to allow `bigint`/`number` typed values and `string` typed values to be added together.
     */
    allowNumberAndString?: boolean;
    /**
     * Whether to allow `regexp` typed values.
     */
    allowRegExp?: boolean;
    /**
     * Whether to skip compound assignments such as `+=`.
     */
    skipCompoundAssignments?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RestrictTemplateExpressions = [
  {
    /**
     * Whether to allow `any` typed values in template expressions.
     */
    allowAny?: boolean;
    /**
     * Whether to allow `array` typed values in template expressions.
     */
    allowArray?: boolean;
    /**
     * Whether to allow `boolean` typed values in template expressions.
     */
    allowBoolean?: boolean;
    /**
     * Whether to allow `nullish` typed values in template expressions.
     */
    allowNullish?: boolean;
    /**
     * Whether to allow `number` typed values in template expressions.
     */
    allowNumber?: boolean;
    /**
     * Whether to allow `regexp` typed values in template expressions.
     */
    allowRegExp?: boolean;
    /**
     * Whether to allow `never` typed values in template expressions.
     */
    allowNever?: boolean;
    /**
     * Types to allow in template expressions.
     */
    allow?: (
      | string
      | {
          from: "file";
          name: string | [string, ...string[]];
          path?: string;
        }
      | {
          from: "lib";
          name: string | [string, ...string[]];
        }
      | {
          from: "package";
          name: string | [string, ...string[]];
          package: string;
        }
    )[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ReturnAwait = [("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SortTypeConstituents = [
  {
    /**
     * Whether to sort using case sensitive string comparisons.
     */
    caseSensitive?: boolean;
    /**
     * Whether to check intersection types (`&`).
     */
    checkIntersections?: boolean;
    /**
     * Whether to check union types (`|`).
     */
    checkUnions?: boolean;
    /**
     * Ordering of the groups.
     */
    groupOrder?: (
      | "conditional"
      | "function"
      | "import"
      | "intersection"
      | "keyword"
      | "nullish"
      | "literal"
      | "named"
      | "object"
      | "operator"
      | "tuple"
      | "union"
    )[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type StrictBooleanExpressions = [
  {
    /**
     * Whether to allow `any`s in a boolean context.
     */
    allowAny?: boolean;
    /**
     * Whether to allow nullable `boolean`s in a boolean context.
     */
    allowNullableBoolean?: boolean;
    /**
     * Whether to allow nullable `enum`s in a boolean context.
     */
    allowNullableEnum?: boolean;
    /**
     * Whether to allow nullable `number`s in a boolean context.
     */
    allowNullableNumber?: boolean;
    /**
     * Whether to allow nullable `object`s, `symbol`s, and functions in a boolean context.
     */
    allowNullableObject?: boolean;
    /**
     * Whether to allow nullable `string`s in a boolean context.
     */
    allowNullableString?: boolean;
    /**
     * Whether to allow `number`s in a boolean context.
     */
    allowNumber?: boolean;
    /**
     * Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.
     */
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
    /**
     * Whether to allow `string`s in a boolean context.
     */
    allowString?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type StrictVoidReturn = [
  {
    /**
     * Whether to allow functions returning `any` to be used in place expecting a `void` function.
     */
    allowReturnAny?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SwitchExhaustivenessCheck = [
  {
    /**
     * If 'true', allow 'default' cases on switch statements with exhaustive cases.
     */
    allowDefaultCaseForExhaustiveSwitch?: boolean;
    /**
     * If 'true', the 'default' clause is used to determine whether the switch statement is exhaustive for union type
     */
    considerDefaultExhaustiveForUnions?: boolean;
    /**
     * Regular expression for a comment that can indicate an intentionally omitted default case.
     */
    defaultCaseCommentPattern?: string;
    /**
     * If 'true', require a 'default' clause for switches on non-union types.
     */
    requireDefaultForNonUnion?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type TripleSlashReference = [
  {
    /**
     * What to enforce for `/// <reference lib="..." />` references.
     */
    lib?: "always" | "never";
    /**
     * What to enforce for `/// <reference path="..." />` references.
     */
    path?: "always" | "never";
    /**
     * What to enforce for `/// <reference types="..." />` references.
     */
    types?: "always" | "never" | "prefer-import";
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Typedef = [
  {
    /**
     * Whether to enforce type annotations on variables declared using array destructuring.
     */
    arrayDestructuring?: boolean;
    /**
     * Whether to enforce type annotations for parameters of arrow functions.
     */
    arrowParameter?: boolean;
    /**
     * Whether to enforce type annotations on member variables of classes.
     */
    memberVariableDeclaration?: boolean;
    /**
     * Whether to enforce type annotations on variables declared using object destructuring.
     */
    objectDestructuring?: boolean;
    /**
     * Whether to enforce type annotations for parameters of functions and methods.
     */
    parameter?: boolean;
    /**
     * Whether to enforce type annotations for properties of interfaces and types.
     */
    propertyDeclaration?: boolean;
    /**
     * Whether to enforce type annotations for variable declarations, excluding array and object destructuring.
     */
    variableDeclaration?: boolean;
    /**
     * Whether to ignore variable declarations for non-arrow and arrow functions.
     */
    variableDeclarationIgnoreFunction?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type UnboundMethod = [
  {
    /**
     * Whether to skip checking whether `static` methods are correctly bound.
     */
    ignoreStatic?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type UnifiedSignatures = [
  {
    /**
     * Whether two parameters with different names at the same index should be considered different even if their types are the same.
     */
    ignoreDifferentlyNamedParameters?: boolean;
    /**
     * Whether two overloads with different JSDoc comments should be considered different even if their parameter and return types are the same.
     */
    ignoreOverloadsWithDifferentJSDoc?: boolean;
  }
];
/**
 * @minItems 0
 * @maxItems 0
 */
export type UseUnknownInCatchCallbackVariable = [];

/**
 * ESLint rules for typescript
 *
 * @package `@typescript-eslint/eslint-plugin`
 * @namespace `@typescript-eslint`
 * @version 8.54.0
 */
export interface TypescriptRules {
  /**
   * Require that function overload signatures be consecutive
   *
   * @see {@link https://typescript-eslint.io/rules/adjacent-overload-signatures adjacent-overload-signatures}
   */
  "@typescript-eslint/adjacent-overload-signatures"?: AdjacentOverloadSignatures;
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   *
   * @see {@link https://typescript-eslint.io/rules/array-type array-type}
   */
  "@typescript-eslint/array-type"?: ArrayType;
  /**
   * Disallow awaiting a value that is not a Thenable
   *
   * @see {@link https://typescript-eslint.io/rules/await-thenable await-thenable}
   */
  "@typescript-eslint/await-thenable"?: AwaitThenable;
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   *
   * @see {@link https://typescript-eslint.io/rules/ban-ts-comment ban-ts-comment}
   */
  "@typescript-eslint/ban-ts-comment"?: BanTsComment;
  /**
   * Disallow `// tslint:<rule-flag>` comments
   *
   * @see {@link https://typescript-eslint.io/rules/ban-tslint-comment ban-tslint-comment}
   */
  "@typescript-eslint/ban-tslint-comment"?: BanTslintComment;
  /**
   * Enforce that literals on classes are exposed in a consistent style
   *
   * @see {@link https://typescript-eslint.io/rules/class-literal-property-style class-literal-property-style}
   */
  "@typescript-eslint/class-literal-property-style"?: ClassLiteralPropertyStyle;
  /**
   * Enforce that class methods utilize `this`
   *
   * @see {@link https://typescript-eslint.io/rules/class-methods-use-this class-methods-use-this}
   */
  "@typescript-eslint/class-methods-use-this"?: ClassMethodsUseThis;
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   *
   * @see {@link https://typescript-eslint.io/rules/consistent-generic-constructors consistent-generic-constructors}
   */
  "@typescript-eslint/consistent-generic-constructors"?: ConsistentGenericConstructors;
  /**
   * Require or disallow the `Record` type
   *
   * @see {@link https://typescript-eslint.io/rules/consistent-indexed-object-style consistent-indexed-object-style}
   */
  "@typescript-eslint/consistent-indexed-object-style"?: ConsistentIndexedObjectStyle;
  /**
   * Require `return` statements to either always or never specify values
   *
   * @see {@link https://typescript-eslint.io/rules/consistent-return consistent-return}
   */
  "@typescript-eslint/consistent-return"?: ConsistentReturn;
  /**
   * Enforce consistent usage of type assertions
   *
   * @see {@link https://typescript-eslint.io/rules/consistent-type-assertions consistent-type-assertions}
   */
  "@typescript-eslint/consistent-type-assertions"?: ConsistentTypeAssertions;
  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   *
   * @see {@link https://typescript-eslint.io/rules/consistent-type-definitions consistent-type-definitions}
   */
  "@typescript-eslint/consistent-type-definitions"?: ConsistentTypeDefinitions;
  /**
   * Enforce consistent usage of type exports
   *
   * @see {@link https://typescript-eslint.io/rules/consistent-type-exports consistent-type-exports}
   */
  "@typescript-eslint/consistent-type-exports"?: ConsistentTypeExports;
  /**
   * Enforce consistent usage of type imports
   *
   * @see {@link https://typescript-eslint.io/rules/consistent-type-imports consistent-type-imports}
   */
  "@typescript-eslint/consistent-type-imports"?: ConsistentTypeImports;
  /**
   * Enforce default parameters to be last
   *
   * @see {@link https://typescript-eslint.io/rules/default-param-last default-param-last}
   */
  "@typescript-eslint/default-param-last"?: DefaultParamLast;
  /**
   * Enforce dot notation whenever possible
   *
   * @see {@link https://typescript-eslint.io/rules/dot-notation dot-notation}
   */
  "@typescript-eslint/dot-notation"?: DotNotation;
  /**
   * Require explicit return types on functions and class methods
   *
   * @see {@link https://typescript-eslint.io/rules/explicit-function-return-type explicit-function-return-type}
   */
  "@typescript-eslint/explicit-function-return-type"?: ExplicitFunctionReturnType;
  /**
   * Require explicit accessibility modifiers on class properties and methods
   *
   * @see {@link https://typescript-eslint.io/rules/explicit-member-accessibility explicit-member-accessibility}
   */
  "@typescript-eslint/explicit-member-accessibility"?: ExplicitMemberAccessibility;
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   *
   * @see {@link https://typescript-eslint.io/rules/explicit-module-boundary-types explicit-module-boundary-types}
   */
  "@typescript-eslint/explicit-module-boundary-types"?: ExplicitModuleBoundaryTypes;
  /**
   * Require or disallow initialization in variable declarations
   *
   * @see {@link https://typescript-eslint.io/rules/init-declarations init-declarations}
   */
  "@typescript-eslint/init-declarations"?: InitDeclarations;
  /**
   * Enforce a maximum number of parameters in function definitions
   *
   * @see {@link https://typescript-eslint.io/rules/max-params max-params}
   */
  "@typescript-eslint/max-params"?: MaxParams;
  /**
   * Require a consistent member declaration order
   *
   * @see {@link https://typescript-eslint.io/rules/member-ordering member-ordering}
   */
  "@typescript-eslint/member-ordering"?: MemberOrdering;
  /**
   * Enforce using a particular method signature syntax
   *
   * @see {@link https://typescript-eslint.io/rules/method-signature-style method-signature-style}
   */
  "@typescript-eslint/method-signature-style"?: MethodSignatureStyle;
  /**
   * Enforce naming conventions for everything across a codebase
   *
   * @see {@link https://typescript-eslint.io/rules/naming-convention naming-convention}
   */
  "@typescript-eslint/naming-convention"?: NamingConvention;
  /**
   * Disallow generic `Array` constructors
   *
   * @see {@link https://typescript-eslint.io/rules/no-array-constructor no-array-constructor}
   */
  "@typescript-eslint/no-array-constructor"?: NoArrayConstructor;
  /**
   * Disallow using the `delete` operator on array values
   *
   * @see {@link https://typescript-eslint.io/rules/no-array-delete no-array-delete}
   */
  "@typescript-eslint/no-array-delete"?: NoArrayDelete;
  /**
   * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
   *
   * @see {@link https://typescript-eslint.io/rules/no-base-to-string no-base-to-string}
   */
  "@typescript-eslint/no-base-to-string"?: NoBaseToString;
  /**
   * Disallow non-null assertion in locations that may be confusing
   *
   * @see {@link https://typescript-eslint.io/rules/no-confusing-non-null-assertion no-confusing-non-null-assertion}
   */
  "@typescript-eslint/no-confusing-non-null-assertion"?: NoConfusingNonNullAssertion;
  /**
   * Require expressions of type void to appear in statement position
   *
   * @see {@link https://typescript-eslint.io/rules/no-confusing-void-expression no-confusing-void-expression}
   */
  "@typescript-eslint/no-confusing-void-expression"?: NoConfusingVoidExpression;
  /**
   * Disallow using code marked as `@deprecated`
   *
   * @see {@link https://typescript-eslint.io/rules/no-deprecated no-deprecated}
   */
  "@typescript-eslint/no-deprecated"?: NoDeprecated;
  /**
   * Disallow duplicate class members
   *
   * @see {@link https://typescript-eslint.io/rules/no-dupe-class-members no-dupe-class-members}
   */
  "@typescript-eslint/no-dupe-class-members"?: NoDupeClassMembers;
  /**
   * Disallow duplicate enum member values
   *
   * @see {@link https://typescript-eslint.io/rules/no-duplicate-enum-values no-duplicate-enum-values}
   */
  "@typescript-eslint/no-duplicate-enum-values"?: NoDuplicateEnumValues;
  /**
   * Disallow duplicate constituents of union or intersection types
   *
   * @see {@link https://typescript-eslint.io/rules/no-duplicate-type-constituents no-duplicate-type-constituents}
   */
  "@typescript-eslint/no-duplicate-type-constituents"?: NoDuplicateTypeConstituents;
  /**
   * Disallow using the `delete` operator on computed key expressions
   *
   * @see {@link https://typescript-eslint.io/rules/no-dynamic-delete no-dynamic-delete}
   */
  "@typescript-eslint/no-dynamic-delete"?: NoDynamicDelete;
  /**
   * Disallow empty functions
   *
   * @see {@link https://typescript-eslint.io/rules/no-empty-function no-empty-function}
   */
  "@typescript-eslint/no-empty-function"?: NoEmptyFunction;
  /**
   * Disallow the declaration of empty interfaces
   *
   * @see {@link https://typescript-eslint.io/rules/no-empty-interface no-empty-interface}
   * @deprecated This rule was `deprecated` in typescript v8.0.0. Please use the {@link https://typescript-eslint.io/rules/no-empty-object-type `@typescript-eslint/no-empty-object-type`} rule instead. {@link https://github.com/typescript-eslint/typescript-eslint/pull/8977 Learn more}
   */
  "@typescript-eslint/no-empty-interface"?: NoEmptyInterface;
  /**
   * Disallow accidentally using the "empty object" type
   *
   * @see {@link https://typescript-eslint.io/rules/no-empty-object-type no-empty-object-type}
   */
  "@typescript-eslint/no-empty-object-type"?: NoEmptyObjectType;
  /**
   * Disallow the `any` type
   *
   * @see {@link https://typescript-eslint.io/rules/no-explicit-any no-explicit-any}
   */
  "@typescript-eslint/no-explicit-any"?: NoExplicitAny;
  /**
   * Disallow extra non-null assertions
   *
   * @see {@link https://typescript-eslint.io/rules/no-extra-non-null-assertion no-extra-non-null-assertion}
   */
  "@typescript-eslint/no-extra-non-null-assertion"?: NoExtraNonNullAssertion;
  /**
   * Disallow classes used as namespaces
   *
   * @see {@link https://typescript-eslint.io/rules/no-extraneous-class no-extraneous-class}
   */
  "@typescript-eslint/no-extraneous-class"?: NoExtraneousClass;
  /**
   * Require Promise-like statements to be handled appropriately
   *
   * @see {@link https://typescript-eslint.io/rules/no-floating-promises no-floating-promises}
   */
  "@typescript-eslint/no-floating-promises"?: NoFloatingPromises;
  /**
   * Disallow iterating over an array with a for-in loop
   *
   * @see {@link https://typescript-eslint.io/rules/no-for-in-array no-for-in-array}
   */
  "@typescript-eslint/no-for-in-array"?: NoForInArray;
  /**
   * Disallow the use of `eval()`-like functions
   *
   * @see {@link https://typescript-eslint.io/rules/no-implied-eval no-implied-eval}
   */
  "@typescript-eslint/no-implied-eval"?: NoImpliedEval;
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   *
   * @see {@link https://typescript-eslint.io/rules/no-import-type-side-effects no-import-type-side-effects}
   */
  "@typescript-eslint/no-import-type-side-effects"?: NoImportTypeSideEffects;
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   *
   * @see {@link https://typescript-eslint.io/rules/no-inferrable-types no-inferrable-types}
   */
  "@typescript-eslint/no-inferrable-types"?: NoInferrableTypes;
  /**
   * Disallow `this` keywords outside of classes or class-like objects
   *
   * @see {@link https://typescript-eslint.io/rules/no-invalid-this no-invalid-this}
   */
  "@typescript-eslint/no-invalid-this"?: NoInvalidThis;
  /**
   * Disallow `void` type outside of generic or return types
   *
   * @see {@link https://typescript-eslint.io/rules/no-invalid-void-type no-invalid-void-type}
   */
  "@typescript-eslint/no-invalid-void-type"?: NoInvalidVoidType;
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   *
   * @see {@link https://typescript-eslint.io/rules/no-loop-func no-loop-func}
   */
  "@typescript-eslint/no-loop-func"?: NoLoopFunc;
  /**
   * Disallow literal numbers that lose precision
   *
   * @see {@link https://typescript-eslint.io/rules/no-loss-of-precision no-loss-of-precision}
   * @deprecated This rule was `deprecated` in typescript v8.0.0. Please use the {@link https://eslint.org/docs/latest/rules/no-loss-of-precision `no-loss-of-precision`} rule instead. {@link https://github.com/typescript-eslint/typescript-eslint/pull/8832 Learn more}
   */
  "@typescript-eslint/no-loss-of-precision"?: NoLossOfPrecision;
  /**
   * Disallow magic numbers
   *
   * @see {@link https://typescript-eslint.io/rules/no-magic-numbers no-magic-numbers}
   */
  "@typescript-eslint/no-magic-numbers"?: NoMagicNumbers;
  /**
   * Disallow the `void` operator except when used to discard a value
   *
   * @see {@link https://typescript-eslint.io/rules/no-meaningless-void-operator no-meaningless-void-operator}
   */
  "@typescript-eslint/no-meaningless-void-operator"?: NoMeaninglessVoidOperator;
  /**
   * Enforce valid definition of `new` and `constructor`
   *
   * @see {@link https://typescript-eslint.io/rules/no-misused-new no-misused-new}
   */
  "@typescript-eslint/no-misused-new"?: NoMisusedNew;
  /**
   * Disallow Promises in places not designed to handle them
   *
   * @see {@link https://typescript-eslint.io/rules/no-misused-promises no-misused-promises}
   */
  "@typescript-eslint/no-misused-promises"?: NoMisusedPromises;
  /**
   * Disallow using the spread operator when it might cause unexpected behavior
   *
   * @see {@link https://typescript-eslint.io/rules/no-misused-spread no-misused-spread}
   */
  "@typescript-eslint/no-misused-spread"?: NoMisusedSpread;
  /**
   * Disallow enums from having both number and string members
   *
   * @see {@link https://typescript-eslint.io/rules/no-mixed-enums no-mixed-enums}
   */
  "@typescript-eslint/no-mixed-enums"?: NoMixedEnums;
  /**
   * Disallow TypeScript namespaces
   *
   * @see {@link https://typescript-eslint.io/rules/no-namespace no-namespace}
   */
  "@typescript-eslint/no-namespace"?: NoNamespace;
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   *
   * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing no-non-null-asserted-nullish-coalescing}
   */
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing"?: NoNonNullAssertedNullishCoalescing;
  /**
   * Disallow non-null assertions after an optional chain expression
   *
   * @see {@link https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain no-non-null-asserted-optional-chain}
   */
  "@typescript-eslint/no-non-null-asserted-optional-chain"?: NoNonNullAssertedOptionalChain;
  /**
   * Disallow non-null assertions using the `!` postfix operator
   *
   * @see {@link https://typescript-eslint.io/rules/no-non-null-assertion no-non-null-assertion}
   */
  "@typescript-eslint/no-non-null-assertion"?: NoNonNullAssertion;
  /**
   * Disallow variable redeclaration
   *
   * @see {@link https://typescript-eslint.io/rules/no-redeclare no-redeclare}
   */
  "@typescript-eslint/no-redeclare"?: NoRedeclare;
  /**
   * Disallow members of unions and intersections that do nothing or override type information
   *
   * @see {@link https://typescript-eslint.io/rules/no-redundant-type-constituents no-redundant-type-constituents}
   */
  "@typescript-eslint/no-redundant-type-constituents"?: NoRedundantTypeConstituents;
  /**
   * Disallow invocation of `require()`
   *
   * @see {@link https://typescript-eslint.io/rules/no-require-imports no-require-imports}
   */
  "@typescript-eslint/no-require-imports"?: NoRequireImports;
  /**
   * Disallow specified modules when loaded by `import`
   *
   * @see {@link https://typescript-eslint.io/rules/no-restricted-imports no-restricted-imports}
   */
  "@typescript-eslint/no-restricted-imports"?: NoRestrictedImports;
  /**
   * Disallow certain types
   *
   * @see {@link https://typescript-eslint.io/rules/no-restricted-types no-restricted-types}
   */
  "@typescript-eslint/no-restricted-types"?: NoRestrictedTypes;
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   *
   * @see {@link https://typescript-eslint.io/rules/no-shadow no-shadow}
   */
  "@typescript-eslint/no-shadow"?: NoShadow;
  /**
   * Disallow aliasing `this`
   *
   * @see {@link https://typescript-eslint.io/rules/no-this-alias no-this-alias}
   */
  "@typescript-eslint/no-this-alias"?: NoThisAlias;
  /**
   * Disallow type aliases
   *
   * @see {@link https://typescript-eslint.io/rules/no-type-alias no-type-alias}
   * @deprecated This rule was `deprecated` in typescript v6.0.0. Please use the {@link https://typescript-eslint.io/rules/consistent-type-definitions `@typescript-eslint/consistent-type-definitions`} rule instead. {@link https://github.com/typescript-eslint/typescript-eslint/pull/6229 Learn more}
   */
  "@typescript-eslint/no-type-alias"?: NoTypeAlias;
  /**
   * Disallow unnecessary equality comparisons against boolean literals
   *
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare no-unnecessary-boolean-literal-compare}
   */
  "@typescript-eslint/no-unnecessary-boolean-literal-compare"?: NoUnnecessaryBooleanLiteralCompare;
  /**
   * Disallow conditionals where the type is always truthy or always falsy
   *
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-condition no-unnecessary-condition}
   */
  "@typescript-eslint/no-unnecessary-condition"?: NoUnnecessaryCondition;
  /**
   * Disallow unnecessary assignment of constructor property parameter
   *
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment no-unnecessary-parameter-property-assignment}
   */
  "@typescript-eslint/no-unnecessary-parameter-property-assignment"?: NoUnnecessaryParameterPropertyAssignment;
  /**
   * Disallow unnecessary namespace qualifiers
   *
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-qualifier no-unnecessary-qualifier}
   */
  "@typescript-eslint/no-unnecessary-qualifier"?: NoUnnecessaryQualifier;
  /**
   * Disallow unnecessary template expressions
   *
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-template-expression no-unnecessary-template-expression}
   */
  "@typescript-eslint/no-unnecessary-template-expression"?: NoUnnecessaryTemplateExpression;
  /**
   * Disallow type arguments that are equal to the default
   *
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-arguments no-unnecessary-type-arguments}
   */
  "@typescript-eslint/no-unnecessary-type-arguments"?: NoUnnecessaryTypeArguments;
  /**
   * Disallow type assertions that do not change the type of an expression
   *
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-assertion no-unnecessary-type-assertion}
   */
  "@typescript-eslint/no-unnecessary-type-assertion"?: NoUnnecessaryTypeAssertion;
  /**
   * Disallow unnecessary constraints on generic types
   *
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-constraint no-unnecessary-type-constraint}
   */
  "@typescript-eslint/no-unnecessary-type-constraint"?: NoUnnecessaryTypeConstraint;
  /**
   * Disallow conversion idioms when they do not change the type or value of the expression
   *
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-conversion no-unnecessary-type-conversion}
   */
  "@typescript-eslint/no-unnecessary-type-conversion"?: NoUnnecessaryTypeConversion;
  /**
   * Disallow type parameters that aren't used multiple times
   *
   * @see {@link https://typescript-eslint.io/rules/no-unnecessary-type-parameters no-unnecessary-type-parameters}
   */
  "@typescript-eslint/no-unnecessary-type-parameters"?: NoUnnecessaryTypeParameters;
  /**
   * Disallow calling a function with a value with type `any`
   *
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-argument no-unsafe-argument}
   */
  "@typescript-eslint/no-unsafe-argument"?: NoUnsafeArgument;
  /**
   * Disallow assigning a value with type `any` to variables and properties
   *
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-assignment no-unsafe-assignment}
   */
  "@typescript-eslint/no-unsafe-assignment"?: NoUnsafeAssignment;
  /**
   * Disallow calling a value with type `any`
   *
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-call no-unsafe-call}
   */
  "@typescript-eslint/no-unsafe-call"?: NoUnsafeCall;
  /**
   * Disallow unsafe declaration merging
   *
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-declaration-merging no-unsafe-declaration-merging}
   */
  "@typescript-eslint/no-unsafe-declaration-merging"?: NoUnsafeDeclarationMerging;
  /**
   * Disallow comparing an enum value with a non-enum value
   *
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-enum-comparison no-unsafe-enum-comparison}
   */
  "@typescript-eslint/no-unsafe-enum-comparison"?: NoUnsafeEnumComparison;
  /**
   * Disallow using the unsafe built-in Function type
   *
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-function-type no-unsafe-function-type}
   */
  "@typescript-eslint/no-unsafe-function-type"?: NoUnsafeFunctionType;
  /**
   * Disallow member access on a value with type `any`
   *
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-member-access no-unsafe-member-access}
   */
  "@typescript-eslint/no-unsafe-member-access"?: NoUnsafeMemberAccess;
  /**
   * Disallow returning a value with type `any` from a function
   *
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-return no-unsafe-return}
   */
  "@typescript-eslint/no-unsafe-return"?: NoUnsafeReturn;
  /**
   * Disallow type assertions that narrow a type
   *
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-type-assertion no-unsafe-type-assertion}
   */
  "@typescript-eslint/no-unsafe-type-assertion"?: NoUnsafeTypeAssertion;
  /**
   * Require unary negation to take a number
   *
   * @see {@link https://typescript-eslint.io/rules/no-unsafe-unary-minus no-unsafe-unary-minus}
   */
  "@typescript-eslint/no-unsafe-unary-minus"?: NoUnsafeUnaryMinus;
  /**
   * Disallow unused expressions
   *
   * @see {@link https://typescript-eslint.io/rules/no-unused-expressions no-unused-expressions}
   */
  "@typescript-eslint/no-unused-expressions"?: NoUnusedExpressions;
  /**
   * Disallow unused private class members
   *
   * @see {@link https://typescript-eslint.io/rules/no-unused-private-class-members no-unused-private-class-members}
   */
  "@typescript-eslint/no-unused-private-class-members"?: NoUnusedPrivateClassMembers;
  /**
   * Disallow unused variables
   *
   * @see {@link https://typescript-eslint.io/rules/no-unused-vars no-unused-vars}
   */
  "@typescript-eslint/no-unused-vars"?: NoUnusedVars;
  /**
   * Disallow the use of variables before they are defined
   *
   * @see {@link https://typescript-eslint.io/rules/no-use-before-define no-use-before-define}
   */
  "@typescript-eslint/no-use-before-define"?: NoUseBeforeDefine;
  /**
   * Disallow unnecessary constructors
   *
   * @see {@link https://typescript-eslint.io/rules/no-useless-constructor no-useless-constructor}
   */
  "@typescript-eslint/no-useless-constructor"?: NoUselessConstructor;
  /**
   * Disallow default values that will never be used
   *
   * @see {@link https://typescript-eslint.io/rules/no-useless-default-assignment no-useless-default-assignment}
   */
  "@typescript-eslint/no-useless-default-assignment"?: NoUselessDefaultAssignment;
  /**
   * Disallow empty exports that don't change anything in a module file
   *
   * @see {@link https://typescript-eslint.io/rules/no-useless-empty-export no-useless-empty-export}
   */
  "@typescript-eslint/no-useless-empty-export"?: NoUselessEmptyExport;
  /**
   * Disallow `require` statements except in import statements
   *
   * @see {@link https://typescript-eslint.io/rules/no-var-requires no-var-requires}
   * @deprecated This rule was `deprecated` in typescript v8.0.0. Please use the {@link https://typescript-eslint.io/rules/no-require-imports `@typescript-eslint/no-require-imports`} rule instead. {@link https://github.com/typescript-eslint/typescript-eslint/pull/8334 Learn more}
   */
  "@typescript-eslint/no-var-requires"?: NoVarRequires;
  /**
   * Disallow using confusing built-in primitive class wrappers
   *
   * @see {@link https://typescript-eslint.io/rules/no-wrapper-object-types no-wrapper-object-types}
   */
  "@typescript-eslint/no-wrapper-object-types"?: NoWrapperObjectTypes;
  /**
   * Enforce non-null assertions over explicit type assertions
   *
   * @see {@link https://typescript-eslint.io/rules/non-nullable-type-assertion-style non-nullable-type-assertion-style}
   */
  "@typescript-eslint/non-nullable-type-assertion-style"?: NonNullableTypeAssertionStyle;
  /**
   * Disallow throwing non-`Error` values as exceptions
   *
   * @see {@link https://typescript-eslint.io/rules/only-throw-error only-throw-error}
   */
  "@typescript-eslint/only-throw-error"?: OnlyThrowError;
  /**
   * Require or disallow parameter properties in class constructors
   *
   * @see {@link https://typescript-eslint.io/rules/parameter-properties parameter-properties}
   */
  "@typescript-eslint/parameter-properties"?: ParameterProperties;
  /**
   * Enforce the use of `as const` over literal type
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-as-const prefer-as-const}
   */
  "@typescript-eslint/prefer-as-const"?: PreferAsConst;
  /**
   * Require destructuring from arrays and/or objects
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-destructuring prefer-destructuring}
   */
  "@typescript-eslint/prefer-destructuring"?: PreferDestructuring;
  /**
   * Require each enum member value to be explicitly initialized
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-enum-initializers prefer-enum-initializers}
   */
  "@typescript-eslint/prefer-enum-initializers"?: PreferEnumInitializers;
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-find prefer-find}
   */
  "@typescript-eslint/prefer-find"?: PreferFind;
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-for-of prefer-for-of}
   */
  "@typescript-eslint/prefer-for-of"?: PreferForOf;
  /**
   * Enforce using function types instead of interfaces with call signatures
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-function-type prefer-function-type}
   */
  "@typescript-eslint/prefer-function-type"?: PreferFunctionType;
  /**
   * Enforce `includes` method over `indexOf` method
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-includes prefer-includes}
   */
  "@typescript-eslint/prefer-includes"?: PreferIncludes;
  /**
   * Require all enum members to be literal values
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-literal-enum-member prefer-literal-enum-member}
   */
  "@typescript-eslint/prefer-literal-enum-member"?: PreferLiteralEnumMember;
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-namespace-keyword prefer-namespace-keyword}
   */
  "@typescript-eslint/prefer-namespace-keyword"?: PreferNamespaceKeyword;
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-nullish-coalescing prefer-nullish-coalescing}
   */
  "@typescript-eslint/prefer-nullish-coalescing"?: PreferNullishCoalescing;
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-optional-chain prefer-optional-chain}
   */
  "@typescript-eslint/prefer-optional-chain"?: PreferOptionalChain;
  /**
   * Require using Error objects as Promise rejection reasons
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-promise-reject-errors prefer-promise-reject-errors}
   */
  "@typescript-eslint/prefer-promise-reject-errors"?: PreferPromiseRejectErrors;
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-readonly prefer-readonly}
   */
  "@typescript-eslint/prefer-readonly"?: PreferReadonly;
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-readonly-parameter-types prefer-readonly-parameter-types}
   */
  "@typescript-eslint/prefer-readonly-parameter-types"?: PreferReadonlyParameterTypes;
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-reduce-type-parameter prefer-reduce-type-parameter}
   */
  "@typescript-eslint/prefer-reduce-type-parameter"?: PreferReduceTypeParameter;
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-regexp-exec prefer-regexp-exec}
   */
  "@typescript-eslint/prefer-regexp-exec"?: PreferRegexpExec;
  /**
   * Enforce that `this` is used when only `this` type is returned
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-return-this-type prefer-return-this-type}
   */
  "@typescript-eslint/prefer-return-this-type"?: PreferReturnThisType;
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-string-starts-ends-with prefer-string-starts-ends-with}
   */
  "@typescript-eslint/prefer-string-starts-ends-with"?: PreferStringStartsEndsWith;
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   *
   * @see {@link https://typescript-eslint.io/rules/prefer-ts-expect-error prefer-ts-expect-error}
   * @deprecated This rule was `deprecated` in typescript v7.11.0. Please use the {@link https://typescript-eslint.io/rules/ban-ts-comment `@typescript-eslint/ban-ts-comment`} rule instead. {@link https://github.com/typescript-eslint/typescript-eslint/pull/9081 Learn more}
   */
  "@typescript-eslint/prefer-ts-expect-error"?: PreferTsExpectError;
  /**
   * Require any function or method that returns a Promise to be marked async
   *
   * @see {@link https://typescript-eslint.io/rules/promise-function-async promise-function-async}
   */
  "@typescript-eslint/promise-function-async"?: PromiseFunctionAsync;
  /**
   * Enforce that `get()` types should be assignable to their equivalent `set()` type
   *
   * @see {@link https://typescript-eslint.io/rules/related-getter-setter-pairs related-getter-setter-pairs}
   */
  "@typescript-eslint/related-getter-setter-pairs"?: RelatedGetterSetterPairs;
  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   *
   * @see {@link https://typescript-eslint.io/rules/require-array-sort-compare require-array-sort-compare}
   */
  "@typescript-eslint/require-array-sort-compare"?: RequireArraySortCompare;
  /**
   * Disallow async functions which do not return promises and have no `await` expression
   *
   * @see {@link https://typescript-eslint.io/rules/require-await require-await}
   */
  "@typescript-eslint/require-await"?: RequireAwait;
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   *
   * @see {@link https://typescript-eslint.io/rules/restrict-plus-operands restrict-plus-operands}
   */
  "@typescript-eslint/restrict-plus-operands"?: RestrictPlusOperands;
  /**
   * Enforce template literal expressions to be of `string` type
   *
   * @see {@link https://typescript-eslint.io/rules/restrict-template-expressions restrict-template-expressions}
   */
  "@typescript-eslint/restrict-template-expressions"?: RestrictTemplateExpressions;
  /**
   * Enforce consistent awaiting of returned promises
   *
   * @see {@link https://typescript-eslint.io/rules/return-await return-await}
   */
  "@typescript-eslint/return-await"?: ReturnAwait;
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   *
   * @see {@link https://typescript-eslint.io/rules/sort-type-constituents sort-type-constituents}
   * @deprecated This rule was `deprecated` in typescript v7.13.0. Please use the {@link https://perfectionist.dev/rules/sort-intersection-types `perfectionist/sort-intersection-types`} in {@link https://perfectionist.dev `eslint-plugin-perfectionist`},{@link https://perfectionist.dev/rules/sort-union-types `perfectionist/sort-union-types`} in {@link https://perfectionist.dev `eslint-plugin-perfectionist`} rule instead. {@link https://github.com/typescript-eslint/typescript-eslint/pull/9253 Learn more}
   */
  "@typescript-eslint/sort-type-constituents"?: SortTypeConstituents;
  /**
   * Disallow certain types in boolean expressions
   *
   * @see {@link https://typescript-eslint.io/rules/strict-boolean-expressions strict-boolean-expressions}
   */
  "@typescript-eslint/strict-boolean-expressions"?: StrictBooleanExpressions;
  /**
   * Disallow passing a value-returning function in a position accepting a void function
   *
   * @see {@link https://typescript-eslint.io/rules/strict-void-return strict-void-return}
   */
  "@typescript-eslint/strict-void-return"?: StrictVoidReturn;
  /**
   * Require switch-case statements to be exhaustive
   *
   * @see {@link https://typescript-eslint.io/rules/switch-exhaustiveness-check switch-exhaustiveness-check}
   */
  "@typescript-eslint/switch-exhaustiveness-check"?: SwitchExhaustivenessCheck;
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   *
   * @see {@link https://typescript-eslint.io/rules/triple-slash-reference triple-slash-reference}
   */
  "@typescript-eslint/triple-slash-reference"?: TripleSlashReference;
  /**
   * Require type annotations in certain places
   *
   * @see {@link https://typescript-eslint.io/rules/typedef typedef}
   * @deprecated This rule was `deprecated` in typescript v8.33.0. There is no replacement rule.
   */
  "@typescript-eslint/typedef"?: Typedef;
  /**
   * Enforce unbound methods are called with their expected scope
   *
   * @see {@link https://typescript-eslint.io/rules/unbound-method unbound-method}
   */
  "@typescript-eslint/unbound-method"?: UnboundMethod;
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   *
   * @see {@link https://typescript-eslint.io/rules/unified-signatures unified-signatures}
   */
  "@typescript-eslint/unified-signatures"?: UnifiedSignatures;
  /**
   * Enforce typing arguments in Promise rejection callbacks as `unknown`
   *
   * @see {@link https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable use-unknown-in-catch-callback-variable}
   */
  "@typescript-eslint/use-unknown-in-catch-callback-variable"?: UseUnknownInCatchCallbackVariable;
}
export interface MatchRegexConfig {
  match: boolean;
  regex: string;
}
