/*
 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/flat/all.ts
 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts
 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/flat/disable-type-checked.ts
 */

// https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js

import { parser, plugin, configs } from 'typescript-eslint';

import { rules as javascriptRules } from './javascript';
import { renameRules } from '../utils';
import type { ParserOptions } from '@typescript-eslint/utils/ts-eslint';
import type { ESLintConfigObject } from 'types';

interface Options {

  /**
   * Enable typescript type checking
   */
  typed?: boolean;
  parserOptions?: ParserOptions;
}

export function typescript(options: Options = {}): ESLintConfigObject<ParserOptions>[] {
  const { typed = false, parserOptions = {} } = options;
  const { disableTypeChecked } = configs;

  disableTypeChecked.rules = renameRules(
    // eslint-disable-next-line @typescript/no-non-null-assertion
    disableTypeChecked.rules!,
    '@typescript-eslint/',
    '@typescript/',
  );

  return [
    {
      name: 'sobird:typescript:setup',
      languageOptions: {
        parser,
        // https://typescript-eslint.io/packages/parser/#configuration
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          // We now recommend using projectService instead of project for easier configuration and faster linting.
          ...typed ? { projectService: true } : {},
          ...parserOptions,
        },
      },
      plugins: {
        '@typescript': plugin,
      },
    },
    {
      name: 'sobird:typescript:reset',
      files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx', '**/*.mtsx', '**/*.ctsx'],
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
      name: 'sobird:typescript',
      rules: {
        '@typescript/adjacent-overload-signatures': 'error',
        '@typescript/array-type': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/await-thenable': 'error',
        '@typescript/ban-ts-comment': 'error',
        '@typescript/ban-tslint-comment': 'error',
        '@typescript/class-literal-property-style': 'error',
        'class-methods-use-this': 'off',
        '@typescript/class-methods-use-this': javascriptRules['class-methods-use-this'],
        '@typescript/consistent-generic-constructors': 'error',
        '@typescript/consistent-indexed-object-style': 'error',
        'consistent-return': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/consistent-return': javascriptRules['consistent-return'],
        '@typescript/consistent-type-assertions': 'error',
        '@typescript/consistent-type-definitions': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/consistent-type-exports': 'error',
        '@typescript/consistent-type-imports': 'error',
        'default-param-last': 'off',
        '@typescript/default-param-last': javascriptRules['default-param-last'],
        'dot-notation': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/dot-notation': javascriptRules['dot-notation'],
        '@typescript/explicit-function-return-type': ['warn', {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowFunctionsWithoutTypeParameters: true,
          allowIIFEs: true,
        }],
        '@typescript/explicit-member-accessibility': 'error',
        // todo
        '@typescript/explicit-module-boundary-types': 'warn',
        'init-declarations': 'off',
        '@typescript/init-declarations': javascriptRules['init-declarations'],
        'max-params': 'off',
        '@typescript/max-params': javascriptRules['max-params'],
        '@typescript/member-ordering': 'error',
        '@typescript/method-signature-style': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/naming-convention': ['error',
          // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          // Allow camelCase functions (23.2), and PascalCase functions (23.8)
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations,
          // we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          }],
        'no-array-constructor': 'off',
        '@typescript/no-array-constructor': javascriptRules['no-array-constructor'],
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-array-delete': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-base-to-string': 'error',
        '@typescript/no-confusing-non-null-assertion': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-confusing-void-expression': 'error',
        // 💭 This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-deprecated': 'error',
        'no-dupe-class-members': 'off',
        '@typescript/no-dupe-class-members': javascriptRules['no-dupe-class-members'],
        '@typescript/no-duplicate-enum-values': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-duplicate-type-constituents': 'error',
        '@typescript/no-dynamic-delete': 'error',
        'no-empty-function': 'off',
        '@typescript/no-empty-function': javascriptRules['no-empty-function'],
        '@typescript/no-empty-object-type': ['error', {
          allowInterfaces: 'always',
          allowObjectTypes: 'always',
        }],
        '@typescript/no-explicit-any': ['error', {
          fixToUnknown: true,
          ignoreRestArgs: true,
        }],
        '@typescript/no-extra-non-null-assertion': 'error',
        '@typescript/no-extraneous-class': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-floating-promises': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-for-in-array': 'error',
        'no-implied-eval': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-implied-eval': javascriptRules['no-implied-eval'],
        '@typescript/no-import-type-side-effects': 'error',
        '@typescript/no-inferrable-types': 'error',
        'no-invalid-this': 'off',
        '@typescript/no-invalid-this': javascriptRules['no-invalid-this'],
        '@typescript/no-invalid-void-type': 'error',
        'no-loop-func': 'off',
        '@typescript/no-loop-func': javascriptRules['no-loop-func'],
        'no-magic-numbers': 'off',
        '@typescript/no-magic-numbers': javascriptRules['no-magic-numbers'],
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-meaningless-void-operator': 'error',
        '@typescript/no-misused-new': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-misused-promises': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-misused-spread': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-mixed-enums': 'error',
        '@typescript/no-namespace': 'error',
        '@typescript/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript/no-non-null-asserted-optional-chain': 'error',
        '@typescript/no-non-null-assertion': 'error',
        'no-redeclare': 'off',
        '@typescript/no-redeclare': javascriptRules['no-redeclare'],
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-redundant-type-constituents': 'error',
        'import/no-commonjs': 'off',
        '@typescript/no-require-imports': 'error',
        'no-restricted-imports': 'off',
        '@typescript/no-restricted-imports': javascriptRules['no-restricted-imports'],
        '@typescript/no-restricted-types': 'error',
        'no-shadow': 'off',
        '@typescript/no-shadow': javascriptRules['no-shadow'],
        '@typescript/no-this-alias': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unnecessary-boolean-literal-compare': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unnecessary-condition': ['error', {
          allowConstantLoopConditions: 'never',
          checkTypePredicates: true,
        }],
        '@typescript/no-unnecessary-parameter-property-assignment': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unnecessary-qualifier': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unnecessary-template-expression': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unnecessary-type-arguments': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unnecessary-type-assertion': 'error',
        '@typescript/no-unnecessary-type-constraint': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unnecessary-type-conversion': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unnecessary-type-parameters': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unsafe-argument': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unsafe-assignment': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unsafe-call': 'error',
        '@typescript/no-unsafe-declaration-merging': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unsafe-enum-comparison': 'error',
        '@typescript/no-unsafe-function-type': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unsafe-member-access': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unsafe-return': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unsafe-type-assertion': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-unsafe-unary-minus': 'error',
        'no-unused-expressions': 'off',
        '@typescript/no-unused-expressions': javascriptRules['no-unused-expressions'],
        'no-unused-private-class-members': 'off',
        '@typescript/no-unused-private-class-members': javascriptRules['no-unused-private-class-members'],
        'no-unused-vars': 'off',
        '@typescript/no-unused-vars': javascriptRules['no-unused-vars'],
        'no-use-before-define': 'off',
        '@typescript/no-use-before-define': javascriptRules['no-use-before-define'],
        'no-useless-constructor': 'off',
        '@typescript/no-useless-constructor': javascriptRules['no-useless-constructor'],
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/no-useless-default-assignment': 'error',
        '@typescript/no-useless-empty-export': 'error',
        '@typescript/no-wrapper-object-types': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/non-nullable-type-assertion-style': 'error',
        'no-throw-literal': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/only-throw-error': javascriptRules['no-throw-literal'],
        '@typescript/parameter-properties': 'error',
        '@typescript/prefer-as-const': 'error',
        'prefer-destructuring': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-destructuring': javascriptRules['prefer-destructuring'],
        '@typescript/prefer-enum-initializers': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-find': 'error',
        '@typescript/prefer-for-of': 'error',
        '@typescript/prefer-function-type': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-includes': 'error',
        '@typescript/prefer-literal-enum-member': 'error',
        '@typescript/prefer-namespace-keyword': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-nullish-coalescing': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-optional-chain': 'error',
        'prefer-promise-reject-errors': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-promise-reject-errors': javascriptRules['prefer-promise-reject-errors'],
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-readonly': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-readonly-parameter-types': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-reduce-type-parameter': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-regexp-exec': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-return-this-type': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/prefer-string-starts-ends-with': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/promise-function-async': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/related-getter-setter-pairs': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/require-array-sort-compare': 'error',
        'require-await': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/require-await': javascriptRules['require-await'],
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/restrict-plus-operands': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/restrict-template-expressions': 'error',

        /**
         * @deprecated
         */

        'no-return-await': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // javascriptRules['no-return-await']
        '@typescript/return-await': ['off', 'in-try-catch'],
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/strict-boolean-expressions': ['error', {
          allowString: false,
          allowNumber: false,
          allowNullableObject: true,
          allowNullableBoolean: true,
          allowNullableString: false,
          allowNullableNumber: false,
          allowNullableEnum: false,
          allowAny: false,
        }],
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/strict-void-return': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/switch-exhaustiveness-check': 'error',
        '@typescript/triple-slash-reference': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/unbound-method': 'error',
        '@typescript/unified-signatures': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        '@typescript/use-unknown-in-catch-callback-variable': 'error',
      },
    },
    (typed ? {} : disableTypeChecked),
  ];
}
