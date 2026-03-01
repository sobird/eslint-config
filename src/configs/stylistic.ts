// https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts
import pluginStylistic from '@stylistic/eslint-plugin';

import type { ESLintConfigObject, ESLintPlugin, ComposeRulesConfig } from '../types';
import type { StylisticRules } from '../types/rules/stylistic';
import type { ESLint } from 'eslint';

const { meta, rules: pluginRules } = pluginStylistic as ESLint.Plugin;
const {
  name = '@stylistic/eslint-plugin',
  namespace = '@stylistic',
  version,
} = meta ?? {};
export const STYLISTIC: ESLintPlugin = {
  meta: {
    name,
    title: 'stylistic',
    namespace,
    version,
  },
  rules: pluginRules,
};

type IndentRuleOptions = NonNullable<StylisticRules['@stylistic/indent']>;

export interface Options {
  /**
   * When to enable arrow parenthesis
   * Similar to `arrowParens` option in Prettier
   *
   * @default false
   */
  arrowParens?: boolean;

  /**
   * Which brace style to use
   * @default 'stroustrup'
   */
  braceStyle?: '1tbs' | 'stroustrup' | 'allman';

  /**
   * Whether to require spaces around braces
   * Similar to `bracketSpacing` option in Prettier
   *
   * @default true
   */
  blockSpacing?: boolean;

  /**
   * When to enable prop quoting
   * Similar to `quoteProps` option in Prettier
   *
   * @default 'consistent-as-needed'
   */
  quoteProps?: 'always' | 'as-needed' | 'consistent' | 'consistent-as-needed';

  /**
   * When to enable comma dangles
   * Similar to `trailingComma` option in Prettier
   *
   * @default 'always-multiline'
   */
  commaDangle?: 'never' | 'always' | 'always-multiline' | 'only-multiline';

  /**
   * Indentation level
   * Similar to the `tabWidth` and `useTabs` options in Prettier
   *
   * @default 2
   */
  indent?: IndentRuleOptions[0] | IndentRuleOptions;

  /**
   * Quote style
   * Similar to `singleQuote` option in Prettier
   *
   * @default 'single'
   */
  quotes?: 'single' | 'double' | 'backtick';

  /**
   * Whether to enable semicolons
   * Similar to `semi` option in Prettier
   *
   * @default false
   */
  semi?: boolean;

  /**
   * Enable JSX support
   * @default true
   */
  jsx?: boolean;

  rules?: ComposeRulesConfig<'stylistic'>;
}
export type StylisticOptions = Options | boolean;

export function stylistic(options: StylisticOptions = true): ESLintConfigObject[] {
  if (options === false) {
    return [];
  }
  const {
    arrowParens = false,
    blockSpacing = true,
    braceStyle = '1tbs',
    quoteProps = 'consistent-as-needed',
    commaDangle = 'always-multiline',
    indent = 2,
    semi = true,
    quotes = 'single',
    jsx = true,
    rules = {},
  } = options === true ? {} : options;

  const [
    indentLevel = 2,
    indentOptions = {
      ArrayExpression: 1,
      CallExpression: { arguments: 1 },
      flatTernaryExpressions: false,
      FunctionDeclaration: { body: 1, parameters: 1, returnType: 1 },
      FunctionExpression: { body: 1, parameters: 1, returnType: 1 },
      ignoreComments: false,
      ignoredNodes: [
        'TSUnionType',
        'TSIntersectionType',
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
      tabLength: indentLevel === 'tab' ? 4 : indentLevel,
      VariableDeclarator: 1,
    } satisfies IndentRuleOptions[1],
  ] = Array.isArray(indent) ? indent : [indent];

  return [
    {
      name: 'sobird:stylistic:rules',
      plugins: {
        [namespace]: pluginStylistic,
      },
      rules: {
        '@stylistic/array-bracket-newline': 'off',
        '@stylistic/array-bracket-spacing': ['error', 'never'],
        '@stylistic/array-element-newline': 'off',
        '@stylistic/arrow-parens': ['error', arrowParens ? 'always' : 'as-needed', { requireForBlockBody: true }],
        '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
        '@stylistic/block-spacing': ['error', blockSpacing ? 'always' : 'never'],
        '@stylistic/brace-style': ['error', braceStyle, { allowSingleLine: false }],
        '@stylistic/comma-dangle': ['error', commaDangle],
        '@stylistic/comma-spacing': ['error', { before: false, after: true }],
        '@stylistic/comma-style': ['error', 'last'],
        '@stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
        '@stylistic/curly-newline': ['error', { consistent: true }],
        '@stylistic/dot-location': ['error', 'property'],
        '@stylistic/eol-last': 'error',
        '@stylistic/exp-list-style': 'off',
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],
        '@stylistic/function-call-spacing': 'error',
        '@stylistic/function-paren-newline': ['error', 'consistent'],
        '@stylistic/generator-star-spacing': ['error', { before: false, after: true }],
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
        '@stylistic/indent-binary-ops': ['error', indentLevel],
        '@stylistic/indent': ['error', indentLevel, indentOptions],

        ...jsx
          ? {
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
              '@stylistic/jsx-indent-props': ['error', indentLevel],

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
            }
          : {},

        '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
        '@stylistic/line-comment-position': 'off',
        '@stylistic/linebreak-style': ['error', 'unix'],
        // pragma
        '@stylistic/lines-around-comment': ['error', {
          beforeBlockComment: true,
          beforeLineComment: true,
          allowInterfaceStart: true,
          afterHashbangComment: true,
          allowBlockStart: true,
          allowBlockEnd: false,
          allowObjectStart: true,
          allowArrayStart: true,
          allowClassStart: true,
          ignorePattern: 'pragma|eslint|eslint-disable',
        }],
        '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        '@stylistic/max-len': ['error', 120, 2, {
          ignoreUrls: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        }],
        '@stylistic/max-statements-per-line': ['error', { max: 1 }],

        // @see semi
        '@stylistic/member-delimiter-style': ['error', {
          multiline: {
            delimiter: semi ? 'semi' : 'none',
            requireLast: semi,
          },
          multilineDetection: 'brackets',
          overrides: {
            interface: {
              multiline: {
                delimiter: semi ? 'semi' : 'none',
                requireLast: semi,
              },
            },
          },
          singleline: {
            delimiter: semi ? 'semi' : 'comma',
          },
        }],
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
         * ['error', {
         *   ignoreEOLComments: false,
         * }]
         */
        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        '@stylistic/no-tabs': indentLevel === 'tab' ? 'off' : 'error',
        '@stylistic/no-trailing-spaces': ['error', {
          ignoreComments: false,
        }],
        '@stylistic/no-whitespace-before-property': 'error',

        // @see eslint 'curly': ['error', 'all'],
        '@stylistic/nonblock-statement-body-position': ['off', 'beside', { overrides: {} }],
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
        '@stylistic/quote-props': ['error', quoteProps],
        '@stylistic/quotes': ['error', quotes, { allowTemplateLiterals: 'avoidEscape', avoidEscape: false }],
        '@stylistic/rest-spread-spacing': ['error', 'never'],
        '@stylistic/semi-spacing': ['error', { before: false, after: true }],
        '@stylistic/semi-style': ['error', 'last'],

        // todo
        '@stylistic/semi': ['error', semi ? 'always' : 'never'],
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

        ...rules,
      },
    },
  ];
}
