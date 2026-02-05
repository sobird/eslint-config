/**
 * @see https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-all.js
 * @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
 *
 * sobird<i@sobird.me> at 2024/10/23 23:08:17 created.
 */

import type { ConfigObject, ExactProps } from '..';
import type { ESLintRules } from 'eslint/rules';

export const rules: Partial<ESLintRules> = {
  'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
  'array-callback-return': ['error', { allowImplicit: true }],
  'arrow-body-style': ['error', 'as-needed', {
    requireReturnForObjectLiteral: false,
  }],
  'block-scoped-var': 'error',
  'camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
  'capitalized-comments': ['off', 'never', {
    line: {
      ignorePattern: '.*',
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    },
    block: {
      ignorePattern: '.*',
      ignoreInlineComments: true,
      ignoreConsecutiveComments: true,
    },
  }],
  'class-methods-use-this': ['error', {
    exceptMethods: [],
  }],
  'complexity': 'off',
  'consistent-return': 'error',
  'consistent-this': 'error',
  'constructor-super': 'error',
  'curly': ['error', 'multi-line'],
  'default-case': ['error', { commentPattern: '^no default$' }],
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-notation': ['error', { allowKeywords: false }],
  'eqeqeq': ['error', 'always', { null: 'ignore' }],
  'for-direction': 'error',
  'func-name-matching': ['off', 'always', {
    includeCommonJSModuleExports: false,
    considerPropertyDescriptor: true,
  }],
  'func-names': 'warn',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true, allowTypeAnnotation: true }],
  'getter-return': ['error', { allowImplicit: true }],
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'id-denylist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'init-declarations': 'off',
  'logical-assignment-operators': 'error',
  'max-classes-per-file': 'error',
  'max-depth': 'error',
  'max-lines': ['error', {
    max: 500,
    skipBlankLines: true,
    skipComments: true,
  }],
  'max-lines-per-function': ['off', {
    max: 50,
    skipBlankLines: true,
    skipComments: true,
    IIFEs: true,
  }],
  'max-nested-callbacks': 'error',
  'max-params': 'off',
  'max-statements': 'off',
  'new-cap': ['error', {
    newIsCap: true,
    newIsCapExceptions: [],
    capIsNew: false,
    capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
  }],
  'no-alert': 'warn',
  'no-array-constructor': 'error',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'error',
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  // todo
  'no-console': 'error',
  'no-const-assign': 'error',
  'no-constant-binary-expression': 'error',
  'no-constant-condition': 'warn',
  'no-constructor-return': 'error',
  'no-continue': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-div-regex': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'error',
  'no-else-return': ['error', { allowElseIf: false }],
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-function': ['error', {
    allow: [
      'arrowFunctions',
      'functions',
      'methods',
    ],
  }],
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-ex-assign': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-import-assign': 'error',
  'no-inline-comments': 'off',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-invalid-this': 'error',
  'no-irregular-whitespace': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-loss-of-precision': 'error',
  // todo
  'no-magic-numbers': [
    'error',
    {
      ignore: [0, 1, 2, -1],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      ignoreClassFieldInitialValues: true,
      enforceConst: true,
      detectObjects: false,

      // typescript
      ignoreEnums: true,
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: true,
      ignoreTypeIndexes: true,
    },
  ],
  'no-misleading-character-class': 'error',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-object-constructor': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': ['error', {
    props: true,
    ignorePropertyModificationsFor: [
      'acc', // for reduce accumulators
      'accumulator', // for reduce accumulators
      'e', // for e.returnvalue
      'ctx', // for Koa routing
      'context', // for Koa routing
      'req', // for Express requests
      'request', // for Express requests
      'res', // for Express responses
      'response', // for Express responses
      '$scope', // for Angular 1 scopes
      'staticContext', // for ReactRouter context
    ],
  }],
  'no-plusplus': 'error',
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-restricted-exports': ['error', {
    restrictedNamedExports: [
      'default', // use `export default` to provide a default export
      'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
    ],
  }],
  // todo confusingBrowserGlobals
  'no-restricted-globals': ['error', { message: 'Use `globalThis` instead.', name: 'global' }, { message: 'Use `globalThis` instead.', name: 'self' }, {
    name: 'isFinite',
    message:
        'Use Number.isFinite instead',
  }, {
    name: 'isNaN',
    message:
        'Use Number.isNaN instead.',
  }],
  'no-restricted-imports': 'off',
  'no-restricted-properties': ['error', {
    object: 'arguments',
    property: 'callee',
    message: 'arguments.callee is deprecated',
  }, {
    object: 'global',
    property: 'isFinite',
    message: 'Please use Number.isFinite instead',
  }, {
    object: 'self',
    property: 'isFinite',
    message: 'Please use Number.isFinite instead',
  }, {
    object: 'window',
    property: 'isFinite',
    message: 'Please use Number.isFinite instead',
  }, {
    object: 'global',
    property: 'isNaN',
    message: 'Please use Number.isNaN instead',
  }, {
    object: 'self',
    property: 'isNaN',
    message: 'Please use Number.isNaN instead',
  }, {
    object: 'window',
    property: 'isNaN',
    message: 'Please use Number.isNaN instead',
  }, {
    property: '__defineGetter__',
    message: 'Please use Object.defineProperty instead.',
  }, {
    property: '__defineSetter__',
    message: 'Please use Object.defineProperty instead.',
  }, {
    object: 'Math',
    property: 'pow',
    message: 'Use the exponentiation operator (**) instead.',
  }, { message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.', property: '__proto__' }, { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' }, { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' }],
  'no-restricted-syntax': ['error', {
    selector: 'ForInStatement',
    message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
  }, {
    selector: 'ForOfStatement',
    message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
  }, {
    selector: 'LabeledStatement',
    message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
  }, {
    selector: 'WithStatement',
    message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
  }],
  'no-return-assign': 'error',
  'no-script-url': 'error',
  'no-self-assign': ['error', { props: true }],
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-setter-return': 'error',
  'no-shadow': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-ternary': 'off',
  'no-this-before-super': 'error',
  'no-throw-literal': 'error',
  'no-unassigned-vars': 'error',
  'no-undef': 'error',
  'no-undef-init': 'error',
  'no-undefined': 'error',
  // todo
  'no-underscore-dangle': 'error',
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': 'error',
  'no-unreachable': 'error',
  'no-unreachable-loop': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
  // todo
  'no-unused-expressions': ['error', {
    allowShortCircuit: true,
    allowTaggedTemplates: true,
    allowTernary: true,
  }],
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
  'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  'no-useless-assignment': 'error',
  'no-useless-backreference': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'no-warning-comments': ['error', {
    terms: ['fixme', 'xxx'],
    location: 'start',
  }],
  'no-with': 'error',
  'object-shorthand': 'error',
  'one-var': ['error', 'never'],
  'operator-assignment': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': ['error', {
    destructuring: 'any',
    ignoreReadBeforeAssign: false,
  }],
  'prefer-destructuring': 'error',
  'prefer-exponentiation-operator': 'error',
  'prefer-named-capture-group': 'off',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'prefer-regex-literals': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'preserve-caught-error': 'error',
  'radix': 'error',
  'require-atomic-updates': 'error',
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  'require-yield': 'error',
  // todo
  'sort-imports': 'error',
  'sort-keys': 'off',
  'sort-vars': 'off',
  'strict': 'error',
  'symbol-description': 'error',
  'unicode-bom': 'error',
  'use-isnan': 'error',
  'valid-typeof': ['error', { requireStringLiterals: true }],
  'vars-on-top': 'error',
  'yoda': 'error',

  // todo
  'no-return-await': 'off',
  'prefer-reflect': 'error',
};

export function javascript(): ConfigObject<ExactProps<ESLintRules>>[] {
  return [
    {
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {},
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules,
    },
    {
      files: ['**/*.test.ts', '**/*.test.js', 'scripts/**/*'],
      rules: {
        'no-console': 'off',
      },
    },
  ];
}

const config = {
  root: true,
  rules: {

    /*
     * style
     * Disallow bitwise operators
     * https://eslint.org/docs/rules/no-bitwise
     */

    'no-bitwise': ['off'],

    /*
     * 要求箭头函数体使用大括号(Require braces around arrow function bodies)
     * https://eslint.org/docs/latest/rules/arrow-body-style
     */

    'arrow-body-style': ['error', 'always'],

    /*
     * 禁止使用一元操作符 ++ 和 --(disallow use of unary operators, ++ and --)
     * https://eslint.org/docs/rules/no-plusplus
     */

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    /*
     * 代码行最大长度(specify the maximum length of a line in your program)
     * https://eslint.org/docs/rules/max-len
     */

    'max-len': ['error', {
      code: 150,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    /*
     * 要求使用一致的 return 语句(require return statements to either always or never specify values)
     * https://eslint.org/docs/rules/consistent-return
     */

    'consistent-return': 'off',

    /*
     * 禁止标识符中有悬空下划线(disallow dangling underscores in identifiers)
     * https://eslint.org/docs/rules/no-underscore-dangle
     */

    'no-underscore-dangle': ['error', {
      allow: ['__filename', '__dirname'],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],

    /*
     * best-practices
     * 禁止对函数参数再赋值(Disallow reassigning function parameters)
     * disallow parameter object manipulation except for specific exclusions
     * rule: https://eslint.org/docs/rules/no-param-reassign.html
     */

    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        'state', // for store state
        'accu', // for reduce
      ],
    }],
  },
};

export default config;
