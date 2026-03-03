/* eslint-disable max-lines */
/*
 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/flat/all.ts
 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts
 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/flat/disable-type-checked.ts
 */

// https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js

import { parser, plugin } from 'typescript-eslint';

import { JAVASCRIPT_RULES } from './eslint';
import { TS_FILES, SCRIPT_FILES, MISC_FILES } from '../files';
import { env } from '../utils';

import type { ESLintConfigObject, ESLintPlugin, ComposeRulesConfig } from '../types';
import type { ParserOptions } from '@typescript-eslint/parser';
import type { ESLint } from 'eslint';

const { meta = {}, rules } = plugin as ESLint.Plugin;
const {
  name = 'typescript-eslint',
  version = '',
  namespace = '@typescript-eslint',
} = meta;

export const TYPESCRIPT: ESLintPlugin = {
  meta: {
    name,
    namespace,
    version,
    title: 'typescript',
  },
  rules,
};

interface Options {
  files?: string[];

  /**
   * Enable typescript type checking
   */
  typed?: boolean;
  parserOptions?: ParserOptions;
  rules?: ComposeRulesConfig<'typescript'>;
}
export type TypeScriptOptions = Options | boolean;

export function typescript(options: TypeScriptOptions = env.isTypeScript): ESLintConfigObject<ParserOptions>[] {
  if (options === false) {
    return [];
  }

  const {
    files = [...TS_FILES], typed = true, parserOptions = {}, rules: overrides = {},
  } = options === true ? {} : options;

  return [
    {
      name: 'sobird:typescript:setup',
      plugins: {
        [namespace]: plugin,
      },
    },
    {
      name: 'sobird:typescript:reset',
      files,
      languageOptions: {
        parser,
        // https://typescript-eslint.io/packages/parser/#configuration
        parserOptions: {
          ecmaVersion: 'latest',
          ecmaFeatures: {
            jsx: true,
          },
          sourceType: 'module',

          // project: './tsconfig.json',
          // tsconfigRootDir: process.cwd(),
          // We now recommend using projectService instead of project for easier configuration and faster linting.
          ...typed ? { projectService: true } : {},
          ...parserOptions,
        },
      },
      settings: {
        'import/extensions': SCRIPT_FILES,
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': {
          '@typescript-eslint/parser': files,
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
          },
        },
      },
      rules: {
        'constructor-super': 'off', // ts(2335) & ts(2377)
        'getter-return': 'off', // ts(2378)
        'no-class-assign': 'off', // ts(2629)
        'no-const-assign': 'off', // ts(2588)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2630)
        'no-import-assign': 'off', // ts(2632) & ts(2540)
        'no-new-native-nonconstructor': 'off', // ts(7009)
        /*
         * "no-new-symbol" was deprecated in ESLint 9.0.0 and will be removed in
         * ESLint v11.0.0. See:
         * https://eslint.org/docs/latest/rules/no-new-symbol
         * We need to keep the rule disabled until TSESLint drops support for
         * ESlint 8. See:
         * https://github.com/typescript-eslint/typescript-eslint/pull/8895
         */
        'no-new-symbol': 'off', // ts(7009)
        'no-obj-calls': 'off', // ts(2349)
        'no-redeclare': 'off', // ts(2451)
        'no-setter-return': 'off', // ts(2408)
        'no-this-before-super': 'off', // ts(2376) & ts(17009)
        'no-undef': 'off', // ts(2304) & ts(2552)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
        'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
        'no-with': 'off', // ts(1101) & ts(2410)
        'prefer-const': 'error', // ts provides better types with const
        'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
        'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
      },
    },
    {
      name: 'sobird:typescript:rules',
      files,
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/class-literal-property-style': 'error',
        'class-methods-use-this': 'off',
        '@typescript-eslint/class-methods-use-this': ['error', {
          ignoreOverrideMethods: true,
          ignoreClassesThatImplementAnInterface: true,
          enforceForClassFields: true,
          exceptMethods: [],
        }],
        '@typescript-eslint/consistent-generic-constructors': 'error',
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': JAVASCRIPT_RULES['default-param-last'],
        '@typescript-eslint/explicit-function-return-type': ['warn', {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowFunctionsWithoutTypeParameters: true,
          allowIIFEs: true,
        }],
        '@typescript-eslint/explicit-member-accessibility': ['error', {
          accessibility: 'explicit',
          overrides: {
            accessors: 'explicit',
            constructors: 'no-public',
            methods: 'explicit',
            properties: 'explicit',
            parameterProperties: 'explicit',
          },
        }],
        '@typescript-eslint/explicit-module-boundary-types': ['error', {
          allowArgumentsExplicitlyTypedAsAny: false,
          allowDirectConstAssertionInArrowFunctions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
        }],
        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': JAVASCRIPT_RULES['init-declarations'],
        'max-params': 'off',
        '@typescript-eslint/max-params': ['off'],
        '@typescript-eslint/member-ordering': ['error',
          {
            default: [
              // 静态
              'static-readonly-field',
              'static-field',
              'static-get',
              'static-set',
              'static-method',

              // 公共实例
              'public-readonly-field',
              'public-field',
              'public-get',
              'public-set',

              // 受保护实例
              'protected-readonly-field',
              'protected-field',
              'protected-get',
              'protected-set',

              // 私有实例
              'private-readonly-field',
              'private-field',
              'private-get',
              'private-set',

              // 构造器
              'constructor',

              // 方法
              'public-method',
              'protected-method',
              'private-method',
            ],
          },
        ],
        '@typescript-eslint/method-signature-style': 'error',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': JAVASCRIPT_RULES['no-array-constructor'],
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': JAVASCRIPT_RULES['no-dupe-class-members'],
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': [
          'error',
          {
            allow: ['arrowFunctions', 'functions', 'methods'],
          },
        ],
        '@typescript-eslint/no-empty-object-type': ['error', {
          allowInterfaces: 'always',
          allowObjectTypes: 'always',
        }],
        '@typescript-eslint/no-explicit-any': ['error', {
          ignoreRestArgs: true,
        }],
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': JAVASCRIPT_RULES['no-invalid-this'],
        '@typescript-eslint/no-invalid-void-type': 'error',
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': JAVASCRIPT_RULES['no-loop-func'],
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': JAVASCRIPT_RULES['no-magic-numbers'],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': JAVASCRIPT_RULES['no-redeclare'],
        'import/no-commonjs': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        'no-restricted-imports': 'off',
        '@typescript-eslint/no-restricted-imports': JAVASCRIPT_RULES['no-restricted-imports'],
        '@typescript-eslint/no-restricted-types': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': JAVASCRIPT_RULES['no-shadow'],
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        '@typescript-eslint/no-unsafe-function-type': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': JAVASCRIPT_RULES['no-unused-expressions'],
        'no-unused-private-class-members': 'off',
        '@typescript-eslint/no-unused-private-class-members': JAVASCRIPT_RULES['no-unused-private-class-members'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': JAVASCRIPT_RULES['no-unused-vars'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': JAVASCRIPT_RULES['no-use-before-define'],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': JAVASCRIPT_RULES['no-useless-constructor'],
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/no-wrapper-object-types': 'error',
        '@typescript-eslint/parameter-properties': ['error', {
          prefer: 'class-property',
          allow: [
            'private readonly',
            'protected readonly',
            'public readonly',
          ],
        }],
        '@typescript-eslint/prefer-as-const': 'error',
        'prefer-destructuring': 'off',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/unified-signatures': 'error',

        ...overrides,
      },
    },

    typed
      ? {
          name: 'sobird:typescript:typed',
          files,
          rules: {
            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/await-thenable': 'error',
            'consistent-return': 'off',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/consistent-return': JAVASCRIPT_RULES['consistent-return'],

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/consistent-type-exports': 'error',
            'dot-notation': 'off',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/dot-notation': JAVASCRIPT_RULES['dot-notation'],

            'camelcase': 'off',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/naming-convention': ['error',
              {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                leadingUnderscore: 'allowSingleOrDouble',
              },
              {
                selector: 'variable',
                modifiers: ['destructured'],
                format: ['camelCase', 'snake_case'],
              },
              {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
              },
              {
                selector: 'typeLike',
                format: ['PascalCase'],
              },
              {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                  regex: '^I[A-Z]',
                  match: false,
                },
              },
            ],

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-array-delete': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-base-to-string': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-confusing-void-expression': 'error',

            // 💭 This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-deprecated': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-duplicate-type-constituents': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-floating-promises': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-for-in-array': 'error',
            'no-implied-eval': 'off',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-implied-eval': JAVASCRIPT_RULES['no-implied-eval'],

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-meaningless-void-operator': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-misused-promises': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-misused-spread': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-mixed-enums': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-redundant-type-constituents': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unnecessary-condition': ['error', {
              allowConstantLoopConditions: 'never',
              checkTypePredicates: true,
            }],

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unnecessary-qualifier': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unnecessary-template-expression': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unnecessary-type-arguments': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unnecessary-type-conversion': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unnecessary-type-parameters': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unsafe-argument': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unsafe-assignment': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unsafe-call': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unsafe-enum-comparison': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unsafe-member-access': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unsafe-return': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unsafe-type-assertion': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-unsafe-unary-minus': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/no-useless-default-assignment': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/non-nullable-type-assertion-style': 'error',
            'no-throw-literal': 'off',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/only-throw-error': JAVASCRIPT_RULES['no-throw-literal'],

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-destructuring': JAVASCRIPT_RULES['prefer-destructuring'],

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-find': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-includes': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-nullish-coalescing': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-optional-chain': 'error',

            'prefer-promise-reject-errors': 'off',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-promise-reject-errors': JAVASCRIPT_RULES['prefer-promise-reject-errors'],

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-readonly': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-readonly-parameter-types': 'off',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-reduce-type-parameter': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-regexp-exec': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-return-this-type': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/promise-function-async': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/related-getter-setter-pairs': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/require-array-sort-compare': 'error',
            'require-await': 'off',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/require-await': JAVASCRIPT_RULES['require-await'],

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/restrict-plus-operands': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/restrict-template-expressions': 'error',
            'no-return-await': 'off',

            // This rule requires type information to run, which comes with performance tradeoffs.
            // JAVASCRIPT_RULES['no-return-await']
            '@typescript-eslint/return-await': ['off', 'in-try-catch'],

            'no-extra-boolean-cast': 'off',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/strict-boolean-expressions': ['error', {
              allowString: true,
              allowNumber: false,
              allowNullableObject: true,
              allowNullableBoolean: true,
              allowNullableString: false,
              allowNullableNumber: false,
              allowNullableEnum: false,
              allowAny: false,
            }],

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/strict-void-return': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/switch-exhaustiveness-check': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/unbound-method': 'error',

            // This rule requires type information to run, which comes with performance tradeoffs.
            '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
          },
        }
      : {},

    {
      name: 'sobird:typescript:misc',
      files: [...MISC_FILES],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ];
}
