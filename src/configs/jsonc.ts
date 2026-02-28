import pluginJSONC from 'eslint-plugin-jsonc';

import { JSON_FILES } from '../files';

import type { ESLintConfigObject, ESLintPlugin, ComposeRulesConfig } from '../types';
import type { Options as StylisticOptions } from './stylistic';
import type { ESLint } from 'eslint';

const { meta, rules: pluginRules } = pluginJSONC as ESLint.Plugin;
const {
  name = 'eslint-plugin-jsonc',
  namespace = 'jsonc',
  version,
} = meta ?? {};
export const JSONC: ESLintPlugin = {
  meta: {
    name,
    title: namespace,
    namespace,
    version,
  },
  rules: pluginRules,
};

interface Options {
  files?: string[];
  rules?: ComposeRulesConfig<'jsonc'>;
  stylistic?: boolean | Pick<StylisticOptions, 'indent'>;
  package?: boolean;
  tsconfig?: boolean;
}
export type JsoncOptions = Options | boolean;

export function jsonc(options: JsoncOptions = true): ESLintConfigObject[] {
  if (options === false) {
    return [];
  }
  const {
    files = [...JSON_FILES], rules = {}, stylistic = true, package: pkg = true, tsconfig = true,
  } = options === true ? {} : options;

  const {
    indent = 2,
  } = typeof stylistic === 'boolean' ? {} : stylistic;

  return [
    {
      name: 'sobird:jsonc:setup',
      plugins: {
        jsonc: pluginJSONC as ESLint.Plugin,
      },
    },
    {
      name: 'sobird:jsonc:rules',
      files,
      language: 'jsonc/x',
      rules: {
        'strict': 'off',
        'max-lines': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'jsonc/auto': 'error',

        // 'jsonc/comma-dangle': 'error',
        // 'jsonc/comma-style': 'error',

        // 'jsonc/indent': ['error', typeof indent === 'number' ? indent : indent === 'tab' ? 'tab' : 2],
        'jsonc/key-name-casing': 'off',

        // 'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
        'jsonc/no-bigint-literals': 'error',
        'jsonc/no-binary-expression': 'error',
        'jsonc/no-binary-numeric-literals': 'error',

        // 'jsonc/no-comments': 'error',
        'jsonc/no-dupe-keys': 'error',
        'jsonc/no-escape-sequence-in-identifier': 'error',
        'jsonc/no-floating-decimal': 'error',
        'jsonc/no-hexadecimal-numeric-literals': 'error',
        'jsonc/no-infinity': 'error',
        'jsonc/no-irregular-whitespace': 'error',
        'jsonc/no-multi-str': 'error',
        'jsonc/no-nan': 'error',
        'jsonc/no-number-props': 'error',
        'jsonc/no-numeric-separators': 'error',
        'jsonc/no-octal-escape': 'error',
        'jsonc/no-octal-numeric-literals': 'error',
        'jsonc/no-octal': 'error',
        'jsonc/no-parenthesized': 'error',
        'jsonc/no-plus-sign': 'error',
        'jsonc/no-regexp-literals': 'error',
        'jsonc/no-sparse-arrays': 'error',
        'jsonc/no-template-literals': 'error',
        'jsonc/no-undefined-value': 'error',
        'jsonc/no-unicode-codepoint-escapes': 'error',
        'jsonc/no-useless-escape': 'error',

        // 'jsonc/object-curly-newline': 'error',
        // 'jsonc/object-curly-spacing': 'error',
        // 'jsonc/object-property-newline': 'error',
        // 'jsonc/quote-props': 'error',
        // 'jsonc/quotes': 'error',

        // 'jsonc/sort-array-values': 'error',
        // 'jsonc/sort-keys': 'error',
        'jsonc/space-unary-ops': 'error',
        'jsonc/valid-json-number': 'error',
        'jsonc/vue-custom-block/no-parsing-error': 'error',

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        ...stylistic
          ? {
              'jsonc/array-bracket-newline': 'off',
              'jsonc/array-bracket-spacing': ['error', 'never'],
              'jsonc/array-element-newline': 'off',
              'jsonc/comma-dangle': ['error', 'never'],
              'jsonc/comma-style': ['error', 'last'],
              // eslint-disable-next-line no-nested-ternary
              'jsonc/indent': ['error', typeof indent === 'number' ? indent : indent === 'tab' ? 'tab' : 2],
              'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
              'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
              'jsonc/object-curly-spacing': ['error', 'always'],
              'jsonc/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
              'jsonc/quote-props': 'error',

              // must use double
              'jsonc/quotes': 'error',
            }
          : {},

        ...rules,
      },
    },
    pkg
      ? {
          name: 'sobird:sort/package',
          files: ['**/package.json'],
          rules: {
            'jsonc/sort-array-values': [
              'error',
              {
                order: { type: 'asc' },
                pathPattern: '^files$',
              },
            ],
            'jsonc/sort-keys': [
              'error',
              {
                order: [
                  'publisher',
                  'name',
                  'displayName',
                  'type',
                  'version',
                  'private',
                  'packageManager',
                  'description',
                  'author',
                  'license',
                  'funding',
                  'homepage',
                  'repository',
                  'bugs',
                  'keywords',
                  'categories',
                  'sideEffects',
                  'exports',
                  'main',
                  'module',
                  'unpkg',
                  'jsdelivr',
                  'types',
                  'typesVersions',
                  'bin',
                  'icon',
                  'files',
                  'engines',
                  'activationEvents',
                  'contributes',
                  'scripts',
                  'peerDependencies',
                  'peerDependenciesMeta',
                  'dependencies',
                  'optionalDependencies',
                  'devDependencies',
                  'pnpm',
                  'overrides',
                  'resolutions',
                  'husky',
                  'simple-git-hooks',
                  'lint-staged',
                  'eslintConfig',
                ],
                pathPattern: '^$',
              },
              {
                order: { type: 'asc' },
                pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
              },
              {
                order: { type: 'asc' },
                pathPattern: '^resolutions$',
              },
              {
                order: { type: 'asc' },
                pathPattern: '^pnpm.overrides$',
              },
              {
                order: [
                  'types',
                  'import',
                  'require',
                  'default',
                ],
                pathPattern: '^exports.*$',
              },
            ],
          },
        }
      : {},

    tsconfig
      ? {
          name: 'sobird:sort/tsconfig',
          files: ['**/tsconfig.json', '**/tsconfig.*.json'],
          rules: {
            'jsonc/sort-keys': [
              'error',
              {
                order: [
                  'extends',
                  'compilerOptions',
                  'references',
                  'files',
                  'include',
                  'exclude',
                ],
                pathPattern: '^$',
              },
              {
                order: [

                  /* Projects */
                  'incremental',
                  'composite',
                  'tsBuildInfoFile',
                  'disableSourceOfProjectReferenceRedirect',
                  'disableSolutionSearching',
                  'disableReferencedProjectLoad',

                  /* Language and Environment */
                  'target',
                  'jsx',
                  'jsxFactory',
                  'jsxFragmentFactory',
                  'jsxImportSource',
                  'lib',
                  'moduleDetection',
                  'noLib',
                  'reactNamespace',
                  'useDefineForClassFields',
                  'emitDecoratorMetadata',
                  'experimentalDecorators',

                  /* Modules */
                  'baseUrl',
                  'rootDir',
                  'rootDirs',
                  'customConditions',
                  'module',
                  'moduleResolution',
                  'moduleSuffixes',
                  'noResolve',
                  'paths',
                  'resolveJsonModule',
                  'resolvePackageJsonExports',
                  'resolvePackageJsonImports',
                  'typeRoots',
                  'types',
                  'allowArbitraryExtensions',
                  'allowImportingTsExtensions',
                  'allowUmdGlobalAccess',

                  /* JavaScript Support */
                  'allowJs',
                  'checkJs',
                  'maxNodeModuleJsDepth',

                  /* Type Checking */
                  'strict',
                  'strictBindCallApply',
                  'strictFunctionTypes',
                  'strictNullChecks',
                  'strictPropertyInitialization',
                  'allowUnreachableCode',
                  'allowUnusedLabels',
                  'alwaysStrict',
                  'exactOptionalPropertyTypes',
                  'noFallthroughCasesInSwitch',
                  'noImplicitAny',
                  'noImplicitOverride',
                  'noImplicitReturns',
                  'noImplicitThis',
                  'noPropertyAccessFromIndexSignature',
                  'noUncheckedIndexedAccess',
                  'noUnusedLocals',
                  'noUnusedParameters',
                  'useUnknownInCatchVariables',

                  /* Emit */
                  'declaration',
                  'declarationDir',
                  'declarationMap',
                  'downlevelIteration',
                  'emitBOM',
                  'emitDeclarationOnly',
                  'importHelpers',
                  'importsNotUsedAsValues',
                  'inlineSourceMap',
                  'inlineSources',
                  'mapRoot',
                  'newLine',
                  'noEmit',
                  'noEmitHelpers',
                  'noEmitOnError',
                  'outDir',
                  'outFile',
                  'preserveConstEnums',
                  'preserveValueImports',
                  'removeComments',
                  'sourceMap',
                  'sourceRoot',
                  'stripInternal',

                  /* Interop Constraints */
                  'allowSyntheticDefaultImports',
                  'esModuleInterop',
                  'forceConsistentCasingInFileNames',
                  'isolatedModules',
                  'preserveSymlinks',
                  'verbatimModuleSyntax',

                  /* Completeness */
                  'skipDefaultLibCheck',
                  'skipLibCheck',
                ],
                pathPattern: '^compilerOptions$',
              },
            ],
          },
        }
      : {},
  ];
}
