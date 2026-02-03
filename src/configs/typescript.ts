// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/flat/all.ts
// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts

import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import tseslint from 'typescript-eslint';
import type { ConfigObject } from "..";



export function typescript(): ConfigObject[] {
  const typeChecked = true;
  return [
    {
      name: 'typescript-eslint/base',
      languageOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
        parserOptions: {
          // projectService: true,
        }
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
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
        // "no-new-symbol" was deprecated in ESLint 9.0.0 and will be removed in
        // ESLint v11.0.0. See:
        // https://eslint.org/docs/latest/rules/no-new-symbol
        // We need to keep the rule disabled until TSESLint drops support for
        // ESlint 8. See:
        // https://github.com/typescript-eslint/typescript-eslint/pull/8895
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
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        // '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/class-literal-property-style': 'error',
        'class-methods-use-this': 'off',
        '@typescript-eslint/class-methods-use-this': 'error',
        '@typescript-eslint/consistent-generic-constructors': 'error',
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        'consistent-return': 'off',
        // '@typescript-eslint/consistent-return': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        // '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'dot-notation': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'error',
        'max-params': 'off',
        '@typescript-eslint/max-params': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/naming-convention': 'error',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-array-delete': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-confusing-void-expression': 'error',
        // 💭 This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-deprecated': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-object-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        'no-implied-eval': 'off',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-meaningless-void-operator': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-misused-promises': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-misused-spread': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-mixed-enums': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        'no-restricted-imports': 'off',
        '@typescript-eslint/no-restricted-imports': 'error',
        '@typescript-eslint/no-restricted-types': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unnecessary-qualifier': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unnecessary-template-expression': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unnecessary-type-conversion': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unnecessary-type-parameters': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unsafe-argument': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unsafe-assignment': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unsafe-enum-comparison': 'error',
        '@typescript-eslint/no-unsafe-function-type': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unsafe-member-access': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unsafe-return': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-unsafe-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-unary-minus': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'no-unused-private-class-members': 'off',
        '@typescript-eslint/no-unused-private-class-members': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/no-useless-default-assignment': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/no-wrapper-object-types': 'error',
        // This rule requires type information to run, which comes with performance tradeoffs.
        // '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        'no-throw-literal': 'off',
        // '@typescript-eslint/only-throw-error': 'error',
        '@typescript-eslint/parameter-properties': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        'prefer-destructuring': 'off',
        // '@typescript-eslint/prefer-destructuring': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        // '@typescript-eslint/prefer-find': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        // '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        // '@typescript-eslint/prefer-nullish-coalescing': 'error',
        // '@typescript-eslint/prefer-optional-chain': 'error',
        'prefer-promise-reject-errors': 'off',
        // '@typescript-eslint/prefer-promise-reject-errors': 'error',
        // '@typescript-eslint/prefer-readonly': 'error',
        // '@typescript-eslint/prefer-readonly-parameter-types': 'error',
        // '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        // '@typescript-eslint/prefer-regexp-exec': 'error',
        // '@typescript-eslint/prefer-return-this-type': 'error',
        // '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        // '@typescript-eslint/promise-function-async': 'error',
        // '@typescript-eslint/related-getter-setter-pairs': 'error',
        // '@typescript-eslint/require-array-sort-compare': 'error',
        'require-await': 'off',
        // '@typescript-eslint/require-await': 'error',
        // '@typescript-eslint/restrict-plus-operands': 'error',
        // '@typescript-eslint/restrict-template-expressions': 'error',
        'no-return-await': 'off',
        // '@typescript-eslint/return-await': 'error',
        // '@typescript-eslint/strict-boolean-expressions': 'error',
        // '@typescript-eslint/strict-void-return': 'error',
        // '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        // '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        // '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
      },
    },
// tseslint.configs.disableTypeChecked,
    {
    files: ['**/*.ts'],
    // extends: [tseslint.configs.disableTypeChecked],
  },

    // {
    //   files: ['**/*.js'],
    //   extends: [tseslint.configs.disableTypeChecked],
    // },
  ]
}