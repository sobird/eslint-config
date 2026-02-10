/* eslint-disable max-lines */

import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';

import { REACT_FILES, TS_FILES } from '../files';

import type { ESLintConfigObject, ESLintPlugin } from '../types';
import type { ESLint } from 'eslint';

const { rules } = eslintPluginReact;

export const REACT: ESLintPlugin = {
  meta: {
    pkgname: 'eslint-plugin-react',
    namespace: 'react',
    title: 'react',
  },
  rules,
};
export const REACT_HOOKS: ESLintPlugin = {
  meta: {
    pkgname: eslintPluginReactHooks.meta.name || 'eslint-plugin-react-hooks',
    namespace: 'react-hooks',
    title: 'react-hooks',
    version: eslintPluginReactHooks.meta.version,
  },
  rules: eslintPluginReactHooks.rules,
};
export const REACT_REFRESH: ESLintPlugin = {
  meta: {
    pkgname: (eslintPluginReactRefresh as ESLint.Plugin).meta?.name || 'eslint-plugin-react-refresh',
    namespace: 'react-refresh',
    title: 'react-refresh',
    version: (eslintPluginReactRefresh as ESLint.Plugin).meta?.version || '',
  },
  rules: eslintPluginReactRefresh.rules,
};

export function react(): ESLintConfigObject[] {
  return [
    {
      name: 'sobird:react:setup',
      plugins: {
        'react': eslintPluginReact,
        'react-hooks': eslintPluginReactHooks as ESLint.Plugin,
        'react-refresh': eslintPluginReactRefresh,
      },
    },
    {
      name: 'sobird:react:rules',
      files: [...REACT_FILES],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      rules: {
        'react/boolean-prop-naming': ['warn', {
          // propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
          rule: '^(is|has|can|should)[A-Z]([A-Za-z0-9]?)+',
          message: 'Boolean type properties ({{propName}}) must start with \'is\',\' has\', \'can\', or \'should\'',
        }],
        'react/button-has-type': ['error', {
          button: true,
          submit: true,
          reset: false,
        }],
        'react/checked-requires-onchange-or-readonly': 'error',
        'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
        'react/destructuring-assignment': ['warn', 'always',
          { ignoreClassFields: true },
        ],
        // 'react/display-name': 'error',
        // 'react/forbid-component-props': 'error',
        // 'react/forbid-dom-props': 'error',
        // 'react/forbid-elements': 'error',
        // 'react/forbid-foreign-prop-types': 'error',
        // 'react/forbid-prop-types': ['error', {
        //   forbid: ['any', 'array', 'object'],
        //   checkContextTypes: true,
        //   checkChildContextTypes: true,
        // }],
        'react/forward-ref-uses-ref': 'error',
        'react/function-component-definition': ['error', {
          namedComponents: ['function-declaration', 'function-expression'],
          unnamedComponents: 'function-expression',
        }],
        'react/hook-use-state': 'error',
        'react/iframe-missing-sandbox': 'error',
        'react/jsx-boolean-value': ['error', 'never', { always: [] }],
        'react/jsx-child-element-spacing': 'error', // done
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-closing-tag-location': ['error'],
        'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
        'react/jsx-curly-newline': ['error', {
          multiline: 'consistent',
          singleline: 'consistent',
        }],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-handler-names': [
          'error',
          {
            eventHandlerPropPrefix: 'on',
            handlerNamePrefix: 'handle',
            checkLocalVariables: true,
            checkInlineFunction: false,
          },
        ],
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],
        'react/jsx-key': [
          'error',
          {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
            warnOnDuplicates: true,
          },
        ],
        'react/jsx-max-depth': ['warn', { max: 5 }],
        'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
        // 'react/jsx-newline': 'error',
        // todo
        'react/jsx-no-bind': ['error', {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: true,
          allowBind: false,
          ignoreDOMComponents: true,
        }],
        'react/jsx-no-comment-textnodes': 'error', // done
        'react/jsx-no-constructed-context-values': 'error', // done
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
        'react/jsx-no-leaked-render': 'error',
        // 'react/jsx-no-literals': 'error',
        'react/jsx-no-script-url': [
          'error',
          [
            {
              name: 'Link',
              props: ['to'],
            },
          ],
        ],
        'react/jsx-no-target-blank': ['error', {
          allowReferrer: false,
          enforceDynamicLinks: 'always',
          warnOnSpreadAttributes: true,
        }],
        'react/jsx-no-useless-fragment': 'error', // done
        'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
        'react/jsx-no-undef': 'error', // done
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never', propElementValues: 'always' }],
        'react/jsx-pascal-case': ['error', {
          allowAllCaps: true,
          allowNamespace: true,
          ignore: [],
        }],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-props-no-multi-spaces': 'error', // done
        'react/jsx-props-no-spreading': ['error', {
          html: 'ignore',
          custom: 'enforce',
          explicitSpread: 'ignore',
          exceptions: [],
        }],
        'react/jsx-props-no-spread-multi': 'error',
        // 'react/jsx-sort-default-props': 'error',
        'react/jsx-sort-props': ['error', {
          ignoreCase: true,
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          multiline: 'last',
        }],
        // 'react/jsx-space-before-closing': 'error',
        'react/jsx-tag-spacing': ['error', {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        }],
        // 'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error', // done
        'react/jsx-wrap-multilines': ['error', {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'ignore',
        }],
        'react/no-invalid-html-attribute': 'error', // done
        'react/no-access-state-in-setstate': 'error', // done
        // 'react/no-adjacent-inline-elements': 'error',
        'react/no-array-index-key': 'error', // done
        'react/no-arrow-function-lifecycle': 'error', // done
        'react/no-children-prop': 'error', // done
        'react/no-danger': 'warn',
        'react/no-danger-with-children': 'error', // done
        'react/no-deprecated': 'error', // done
        'react/no-did-mount-set-state': 'error', // done
        'react/no-did-update-set-state': 'error', // done
        'react/no-direct-mutation-state': 'error', // done
        'react/no-find-dom-node': 'error', // done
        'react/no-is-mounted': 'error', // done
        'react/no-multi-comp': [
          'warn',
          {
            ignoreStateless: true,
          },
        ],
        'react/no-namespace': 'error', // done
        // 'react/no-set-state': 'error',
        'react/no-string-refs': 'error', // done
        'react/no-redundant-should-component-update': 'error', // done
        'react/no-render-return-value': 'error', // done
        'react/no-this-in-sfc': 'error', // done
        'react/no-typos': 'error', // done
        'react/no-unescaped-entities': ['error', {
          forbid: [
            { char: '>', alternatives: ['&gt;'] },
            { char: '"', alternatives: ['&quot;', '{"""}'] },
            { char: '\'', alternatives: ['&apos;', '{"\'"}'] },
            { char: '}', alternatives: ['&#125;'] },
          ],
        }],
        'react/no-unknown-property': 'error', // done
        'react/no-unsafe': ['error', { checkAliases: true }],
        'react/no-unstable-nested-components': 'error', // done
        'react/no-unused-class-component-methods': 'error', // done
        'react/no-unused-prop-types': ['error', {
          customValidators: [],
          skipShapeProps: true,
        }],
        'react/no-unused-state': 'error', // done
        'react/no-object-type-as-default-prop': 'error',
        'react/no-will-update-set-state': 'error', // done
        'react/prefer-es6-class': ['error', 'always'],
        // 'react/prefer-exact-props': 'error',
        'react/prefer-read-only-props': 'error', // done
        'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
        // 'react/prop-types': 'error',
        // 'react/react-in-jsx-scope': 'error',
        'react/require-default-props': ['error',
          {
            forbidDefaultForRequired: true,
            functions: 'ignore',
          },
        ],
        'react/require-optimization': ['warn', {
          allowDecorators: [],
        }],
        'react/require-render-return': 'error', // done
        'react/self-closing-comp': 'error', // done
        'react/sort-comp': ['error', {
          order: [
            'static-variables',
            'static-methods',
            'instance-variables',
            'lifecycle',
            '/^handle.+$/',
            '/^on.+$/',
            'getters',
            'setters',
            '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
            'instance-methods',
            'everything-else',
            'rendering',
          ],
          groups: {
            lifecycle: [
              'displayName',
              'propTypes',
              'contextTypes',
              'childContextTypes',
              'mixins',
              'statics',
              'defaultProps',
              'constructor',
              'getDefaultProps',
              'getInitialState',
              'state',
              'getChildContext',
              'getDerivedStateFromProps',
              'componentWillMount',
              'UNSAFE_componentWillMount',
              'componentDidMount',
              'componentWillReceiveProps',
              'UNSAFE_componentWillReceiveProps',
              'shouldComponentUpdate',
              'componentWillUpdate',
              'UNSAFE_componentWillUpdate',
              'getSnapshotBeforeUpdate',
              'componentDidUpdate',
              'componentDidCatch',
              'componentWillUnmount',
            ],
            rendering: [
              '/^render.+$/',
              'render',
            ],
          },
        }],
        'react/sort-default-props': 'error',
        'react/sort-prop-types': [
          'off',
          {
            callbacksLast: true,
            ignoreCase: true,
            requiredFirst: true,
            sortShapeProp: true,
            noSortAlphabetically: false,
          },
        ],
        'react/state-in-constructor': ['error', 'never'],
        'react/static-property-placement': ['error', 'property assignment'],
        'react/style-prop-object': 'error', // done
        'react/void-dom-elements-no-children': 'error', // done
      },
    },
    {
      name: 'sobird:react-hooks:rules',
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/static-components': 'error',
        'react-hooks/use-memo': 'error',
        'react-hooks/void-use-memo': 'error',
        'react-hooks/component-hook-factories': 'error',
        'react-hooks/preserve-manual-memoization': 'error',
        'react-hooks/incompatible-library': 'warn',
        'react-hooks/immutability': 'error',
        'react-hooks/globals': 'error',
        'react-hooks/refs': 'error',
        'react-hooks/set-state-in-effect': 'error',
        'react-hooks/error-boundaries': 'error',
        'react-hooks/purity': 'error',
        'react-hooks/set-state-in-render': 'error',
        'react-hooks/unsupported-syntax': 'warn',
        'react-hooks/config': 'error',
        'react-hooks/gating': 'error',
      },
    },
    {
      name: 'sobird:react-refresh:rules',
      rules: {
        'react-refresh/only-export-components': ['error'],
      },
    },
    {
      files: [...TS_FILES],
      rules: {
        'react/jsx-uses-vars': 'off',
      },
    },
  ];
}
