/**
 * nextjs
 *
 * sobird<i@sobird.me> at 2023/11/27 16:58:36 created.
 */

import ESLintPluginNext from '@next/eslint-plugin-next';

import { SCRIPT_FILES } from '../files';
import { env } from '../utils';

import type { ESLintConfigObject, ESLintPlugin, ComposeRulesConfig } from '../types';

const { rules: pluginRules } = ESLintPluginNext;

export const NEXT: ESLintPlugin = {
  meta: {
    pkgname: '@next/eslint-plugin-next',
    namespace: '@next/next',
    title: 'next',
  },
  rules: pluginRules,
};

interface Options {
  vitals?: boolean;
  rules?: ComposeRulesConfig<'next'>;
}
export type NextOptions = Options | boolean;
export function next(options: NextOptions = env.isNext): ESLintConfigObject[] {
  if (options === false) {
    return [];
  }

  const { vitals = false, rules = {} } = options === true ? {} : options;

  const files = [...SCRIPT_FILES];

  return [
    {
      name: 'sobird:next:setup',
      plugins: {
        '@next/next': ESLintPluginNext,
      },
    },
    {
      name: 'sobird:next:rules',
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        '@next/next/google-font-display': 'warn',
        '@next/next/google-font-preconnect': 'warn',
        '@next/next/inline-script-id': 'error',
        '@next/next/next-script-for-ga': 'warn',
        '@next/next/no-assign-module-variable': 'error',
        '@next/next/no-async-client-component': 'warn',
        '@next/next/no-before-interactive-script-outside-document': 'warn',
        '@next/next/no-css-tags': 'warn',
        '@next/next/no-document-import-in-page': 'error',
        '@next/next/no-duplicate-head': 'error',
        '@next/next/no-head-element': 'warn',
        '@next/next/no-head-import-in-document': 'error',
        '@next/next/no-img-element': 'warn',
        '@next/next/no-page-custom-font': 'warn',
        '@next/next/no-script-component-in-head': 'error',
        '@next/next/no-styled-jsx-in-document': 'warn',
        '@next/next/no-title-in-document-head': 'warn',
        '@next/next/no-typos': 'warn',
        '@next/next/no-unwanted-polyfillio': 'warn',

        ...(vitals
          ? {
              '@next/next/no-html-link-for-pages': 'error',
              '@next/next/no-sync-scripts': 'error',
            }
          : {}),

        ...rules,
      },
    },
  ];
}
