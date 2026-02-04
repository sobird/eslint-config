import pluginStylistic, { type RuleOptions } from '@stylistic/eslint-plugin';

import type { ConfigObject, WrapRuleConfig } from '..';

// import  from '@stylistic/eslint-plugin';

export function stylistic(): ConfigObject<WrapRuleConfig<RuleOptions>>[] {
  const indent: number | string = 'tab';

  return [
    {
      name: 'sobird:stylistic',
      plugins: {
        '@stylistic': pluginStylistic,
      },
      // 96
      rules: {
        '@stylistic/array-bracket-newline': 'off',
        '@stylistic/array-bracket-spacing': ['error', 'never'],
        '@stylistic/array-element-newline': 'off',
        '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
        '@stylistic/block-spacing': ['error', 'always'],
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/comma-spacing': ['error', { before: false, after: true }],
        '@stylistic/comma-style': ['error', 'last'],
        '@stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
        '@stylistic/curly-newline': ['error', { multiline: true }],
        '@stylistic/dot-location': ['error', 'property'],
        '@stylistic/eol-last': 'error',
        '@stylistic/exp-list-style': 'error',
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],
        '@stylistic/function-call-spacing': 'error',
        '@stylistic/function-paren-newline': ['error', 'consistent'],
        '@stylistic/generator-star-spacing': ['error', { before: false, after: true }],
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
        '@stylistic/indent-binary-ops': ['error', 2],
        '@stylistic/indent': ['error', 2, {
          ArrayExpression: 1,
          CallExpression: { arguments: 1 },
          flatTernaryExpressions: false,
          FunctionDeclaration: { body: 1, parameters: 1 },
          FunctionExpression: { body: 1, parameters: 1 },
          ignoreComments: false,
          ignoredNodes: [
            'TemplateLiteral *',
            'JSXElement',
            'JSXElement > *',
            'JSXAttribute',
            'JSXIdentifier',
            'JSXNamespacedName',
            'JSXMemberExpression',
            'JSXSpreadAttribute',
            'JSXExpressionContainer',
            'JSXOpeningElement',
            'JSXClosingElement',
            'JSXFragment',
            'JSXOpeningFragment',
            'JSXClosingFragment',
            'JSXText',
            'JSXEmptyExpression',
            'JSXSpreadChild',
            'TSTypeParameterInstantiation',
            'FunctionExpression > .params[decorators.length > 0]',
            'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
            'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
          ],
          ImportDeclaration: 1,
          MemberExpression: 1,
          ObjectExpression: 1,
          offsetTernaryExpressions: true,
          outerIIFEBody: 1,
          SwitchCase: 1,
          VariableDeclarator: 1,
        }],

        // jsx
        '@stylistic/jsx-child-element-spacing': 'error',
        '@stylistic/jsx-closing-bracket-location': 'error',
        '@stylistic/jsx-closing-tag-location': 'error',
        '@stylistic/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
        '@stylistic/jsx-curly-newline': 'error',
        '@stylistic/jsx-curly-spacing': ['error', 'never'],
        '@stylistic/jsx-equals-spacing': 'error',
        '@stylistic/jsx-first-prop-new-line': 'error',
        '@stylistic/jsx-function-call-newline': 'error',
        '@stylistic/jsx-indent-props': ['error', 2],
        // '@stylistic/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
        '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
        '@stylistic/jsx-newline': 'error',
        '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
        '@stylistic/jsx-pascal-case': 'error',
        // '@stylistic/jsx-props-no-multi-spaces': 'error',
        '@stylistic/jsx-quotes': 'error',
        '@stylistic/jsx-self-closing-comp': 'error',
        // '@stylistic/jsx-sort-props': 'error',
        '@stylistic/jsx-tag-spacing': [
          'error',
          {
            afterOpening: 'never',
            beforeClosing: 'never',
            beforeSelfClosing: 'always',
            closingSlash: 'never',
          },
        ],
        '@stylistic/jsx-wrap-multilines': [
          'error',
          {
            arrow: 'parens-new-line',
            assignment: 'parens-new-line',
            condition: 'parens-new-line',
            declaration: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
            return: 'parens-new-line',
          },
        ],

        '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
        '@stylistic/line-comment-position': 'off',
        '@stylistic/linebreak-style': ['error', 'unix'],
        '@stylistic/lines-around-comment': ['error', { afterBlockComment: true }],
        '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        '@stylistic/max-len': ['error', 150, 2, {
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        }],
        '@stylistic/max-statements-per-line': ['error', { max: 1 }],
        '@stylistic/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
        '@stylistic/multiline-comment-style': 'off',
        '@stylistic/multiline-ternary': ['error', 'always-multiline'],
        '@stylistic/new-parens': 'error',
        '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
        '@stylistic/no-confusing-arrow': ['error', {
          allowParens: true,
        }],
        '@stylistic/no-extra-parens': ['error', 'functions'],
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/no-floating-decimal': 'error',

        // todo
        '@stylistic/no-mixed-operators': ['error', {
          allowSamePrecedence: true,
          groups: [
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
        }],
        '@stylistic/no-mixed-spaces-and-tabs': 'error',

        /*
         *    ['error', {
         *   ignoreEOLComments: false,
         * }]
         */

        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        '@stylistic/no-tabs': indent === 'tab' ? 'off' : 'error',
        '@stylistic/no-trailing-spaces': ['error', {
          ignoreComments: false,
        }],
        '@stylistic/no-whitespace-before-property': 'error',
        '@stylistic/nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
        '@stylistic/object-curly-newline': ['error', {
          ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
          ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
          ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
          ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        }],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/object-property-newline': ['error', {
          allowAllPropertiesOnSameLine: true,
        }],
        '@stylistic/one-var-declaration-per-line': ['error', 'always'],
        '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
        '@stylistic/padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
        '@stylistic/padding-line-between-statements': 'error',
        // ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }]
        '@stylistic/quote-props': ['error', 'consistent-as-needed'],
        '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: 'always', avoidEscape: false }],
        '@stylistic/rest-spread-spacing': ['error', 'never'],
        '@stylistic/semi-spacing': ['error', { before: false, after: true }],
        '@stylistic/semi-style': ['error', 'last'],
        // todo
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/space-before-blocks': ['error', 'always'],
        '@stylistic/space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
        '@stylistic/space-in-parens': ['error', 'never'],
        '@stylistic/space-infix-ops': 'error',
        '@stylistic/space-unary-ops': ['error', { nonwords: false, words: true }],
        // todo
        '@stylistic/spaced-comment': ['error', 'always', {
          block: {
            balanced: true,
            exceptions: ['*'],
            markers: ['!'],
          },
          line: {
            exceptions: ['/', '#'],
            markers: ['/'],
          },
        }],
        '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
        '@stylistic/template-curly-spacing': 'error',
        '@stylistic/template-tag-spacing': ['error', 'never'],
        '@stylistic/type-annotation-spacing': ['error', {}],
        '@stylistic/type-generic-spacing': 'error',
        '@stylistic/type-named-tuple-spacing': 'error',
        '@stylistic/wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
        '@stylistic/wrap-regex': 'error',
        // todo
        '@stylistic/yield-star-spacing': ['error', 'both'],
      },
    },
  ];
}
