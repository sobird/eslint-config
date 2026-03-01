/* eslint-disable @typescript-eslint/no-unsafe-type-assertion */
import pluginMarkdown from '@eslint/markdown';

import { MARKDOWN_FILES, MARKDOWN_IN_MARKDOWN_FILES, MARKDOWN_CODE_FILES } from '../files';

import type {
  ESLintConfigObject, ESLintPlugin, ComposeRulesConfig, RulesName,
} from '../types';
import type { ESLint } from 'eslint';

const { meta = {}, rules } = pluginMarkdown as ESLint.Plugin;
const {
  name,
  version,
  namespace = 'markdown',
} = meta;
export const MARKDOWN: ESLintPlugin = {
  meta: {
    name,
    namespace,
    title: namespace,
    version,
  },
  rules,
};

interface Options {
  files?: string[];
  rules?: ComposeRulesConfig<'markdown'>;
  codeRules?: ComposeRulesConfig<Exclude<RulesName, 'markdown'>>;

  /**
   * Enable GFM (GitHub Flavored Markdown) support.
   *
   * @default true
   */
  gfm?: boolean;
}
export type MarkdownOptions = boolean | Options;

export function markdown(options: MarkdownOptions = true): ESLintConfigObject[] {
  if (options === false) {
    return [];
  }

  const {
    files = [...MARKDOWN_FILES],
    gfm = true,
    rules: overrides = {},
    codeRules = {},
  } = options === true ? {} : options;

  const { processors } = pluginMarkdown;

  return [
    {
      name: 'sobird:markdown:setup',
      plugins: {
        markdown: pluginMarkdown as ESLint.Plugin,
      },
    },
    {
      name: 'sobird:markdown:processor',
      files,
      ignores: [...MARKDOWN_IN_MARKDOWN_FILES],
      processor: {
        preprocess(text, filename) {
          return [...processors.markdown.preprocess(text, filename), { text, filename: 'self.md' }];
        },
        postprocess(messages, filename) {
          const blockMessages = processors.markdown.postprocess(messages.slice(0, -1), filename);
          const rawMessages = messages[messages.length - 1];
          return [...blockMessages, ...rawMessages];
        },
        supportsAutofix: true,
      },
    },
    {
      name: 'sobird:markdown:parser',
      files,
      language: gfm ? 'markdown/gfm' : 'markdown/commonmark',
    },
    {
      files,
      name: 'sobird:markdown:rules',
      rules: {
        'markdown/fenced-code-language': 'error',
        'markdown/heading-increment': 'error',
        'markdown/no-bare-urls': 'off',
        'markdown/no-duplicate-definitions': 'error',
        'markdown/no-duplicate-headings': 'off',
        'markdown/no-empty-definitions': 'error',
        'markdown/no-empty-images': 'error',
        'markdown/no-empty-links': 'error',
        'markdown/no-html': 'off',
        'markdown/no-invalid-label-refs': 'error',
        'markdown/no-missing-atx-heading-space': 'error',
        // https://github.com/eslint/markdown/issues/294
        'markdown/no-missing-label-refs': 'off',
        'markdown/no-missing-link-fragments': 'error',
        'markdown/no-multiple-h1': 'error',
        'markdown/no-reference-like-urls': 'error',
        'markdown/no-reversed-media-syntax': 'error',
        'markdown/no-space-in-emphasis': 'error',
        'markdown/no-unused-definitions': 'error',
        'markdown/require-alt-text': 'error',
        'markdown/table-column-count': 'error',

        ...overrides,
      },
    },
    {
      files,
      name: 'sobird:markdown:disables',
      rules: {
        // Disable rules do not work with markdown sourcecode.
        'no-irregular-whitespace': 'off',
        'logical-assignment-operators': 'off',
        'n/no-unsupported-features/es-syntax': 'off',
        'n/no-unsupported-features/node-builtins': 'off',
        '@stylistic/indent': 'off',
        '@stylistic/lines-around-comment': 'off',
      },
    },
    {
      name: 'sobird:markdown:code',
      files: [...MARKDOWN_CODE_FILES],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
      },
      rules: {
        // The Markdown parser automatically trims trailing
        // newlines from code blocks.
        'eol-last': 'off',

        // In code snippets and examples, these rules are often
        // counterproductive to clarity and brevity.
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'padded-blocks': 'off',

        // Adding a "use strict" directive at the top of every
        // code block is tedious and distracting. The config
        // opts into strict mode parsing without the directive.
        'strict': 'off',

        // The processor will not receive a Unicode Byte Order
        // Mark from the Markdown parser.
        'unicode-bom': 'off',

        'no-alert': 'off',
        'no-console': 'off',
        'no-labels': 'off',
        'no-lone-blocks': 'off',
        'no-restricted-syntax': 'off',

        'no-unused-labels': 'off',

        'n/prefer-global/process': 'off',

        '@stylistic/comma-dangle': 'off',
        '@stylistic/eol-last': 'off',
        '@stylistic/padding-line-between-statements': 'off',

        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',

        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',

        ...codeRules,
      },
    },
  ];
}
