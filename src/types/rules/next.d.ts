/* eslint-disable */

/**
 * @minItems 0
 * @maxItems 0
 */
export type GoogleFontDisplay = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type GoogleFontPreconnect = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type InlineScriptId = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NextScriptForGa = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoAssignModuleVariable = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoAsyncClientComponent = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoBeforeInteractiveScriptOutsideDocument = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoCssTags = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDocumentImportInPage = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoDuplicateHead = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoHeadElement = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoHeadImportInDocument = [];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoHtmlLinkForPages = [string | string[]];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoImgElement = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoPageCustomFont = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoScriptComponentInHead = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoStyledJsxInDocument = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoSyncScripts = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoTitleInDocumentHead = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoTypos = [];
/**
 * @minItems 0
 * @maxItems 0
 */
export type NoUnwantedPolyfillio = [];

/**
 * 21 ESLint rules for next
 *
 * @package `@next/eslint-plugin-next`
 * @namespace `@next/next`
 */
export interface NextRules {
  /**
   * Enforce font-display behavior with Google Fonts.
   *
   * @see {@link https://nextjs.org/docs/messages/google-font-display google-font-display}
   */
  "@next/next/google-font-display"?: GoogleFontDisplay;
  /**
   * Ensure `preconnect` is used with Google Fonts.
   *
   * @see {@link https://nextjs.org/docs/messages/google-font-preconnect google-font-preconnect}
   */
  "@next/next/google-font-preconnect"?: GoogleFontPreconnect;
  /**
   * Enforce `id` attribute on `next/script` components with inline content.
   *
   * @see {@link https://nextjs.org/docs/messages/inline-script-id inline-script-id}
   */
  "@next/next/inline-script-id"?: InlineScriptId;
  /**
   * Prefer `@next/third-parties/google` when using the inline script for Google Analytics and Tag Manager.
   *
   * @see {@link https://nextjs.org/docs/messages/next-script-for-ga next-script-for-ga}
   */
  "@next/next/next-script-for-ga"?: NextScriptForGa;
  /**
   * Prevent assignment to the `module` variable.
   *
   * @see {@link https://nextjs.org/docs/messages/no-assign-module-variable no-assign-module-variable}
   */
  "@next/next/no-assign-module-variable"?: NoAssignModuleVariable;
  /**
   * Prevent Client Components from being async functions.
   *
   * @see {@link https://nextjs.org/docs/messages/no-async-client-component no-async-client-component}
   */
  "@next/next/no-async-client-component"?: NoAsyncClientComponent;
  /**
   * Prevent usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`.
   *
   * @see {@link https://nextjs.org/docs/messages/no-before-interactive-script-outside-document no-before-interactive-script-outside-document}
   */
  "@next/next/no-before-interactive-script-outside-document"?: NoBeforeInteractiveScriptOutsideDocument;
  /**
   * Prevent manual stylesheet tags.
   *
   * @see {@link https://nextjs.org/docs/messages/no-css-tags no-css-tags}
   */
  "@next/next/no-css-tags"?: NoCssTags;
  /**
   * Prevent importing `next/document` outside of `pages/_document.js`.
   *
   * @see {@link https://nextjs.org/docs/messages/no-document-import-in-page no-document-import-in-page}
   */
  "@next/next/no-document-import-in-page"?: NoDocumentImportInPage;
  /**
   * Prevent duplicate usage of `<Head>` in `pages/_document.js`.
   *
   * @see {@link https://nextjs.org/docs/messages/no-duplicate-head no-duplicate-head}
   */
  "@next/next/no-duplicate-head"?: NoDuplicateHead;
  /**
   * Prevent usage of `<head>` element.
   *
   * @see {@link https://nextjs.org/docs/messages/no-head-element no-head-element}
   */
  "@next/next/no-head-element"?: NoHeadElement;
  /**
   * Prevent usage of `next/head` in `pages/_document.js`.
   *
   * @see {@link https://nextjs.org/docs/messages/no-head-import-in-document no-head-import-in-document}
   */
  "@next/next/no-head-import-in-document"?: NoHeadImportInDocument;
  /**
   * Prevent usage of `<a>` elements to navigate to internal Next.js pages.
   *
   * @see {@link https://nextjs.org/docs/messages/no-html-link-for-pages no-html-link-for-pages}
   */
  "@next/next/no-html-link-for-pages"?: NoHtmlLinkForPages;
  /**
   * Prevent usage of `<img>` element due to slower LCP and higher bandwidth.
   *
   * @see {@link https://nextjs.org/docs/messages/no-img-element no-img-element}
   */
  "@next/next/no-img-element"?: NoImgElement;
  /**
   * Prevent page-only custom fonts.
   *
   * @see {@link https://nextjs.org/docs/messages/no-page-custom-font no-page-custom-font}
   */
  "@next/next/no-page-custom-font"?: NoPageCustomFont;
  /**
   * Prevent usage of `next/script` in `next/head` component.
   *
   * @see {@link https://nextjs.org/docs/messages/no-script-component-in-head no-script-component-in-head}
   */
  "@next/next/no-script-component-in-head"?: NoScriptComponentInHead;
  /**
   * Prevent usage of `styled-jsx` in `pages/_document.js`.
   *
   * @see {@link https://nextjs.org/docs/messages/no-styled-jsx-in-document no-styled-jsx-in-document}
   */
  "@next/next/no-styled-jsx-in-document"?: NoStyledJsxInDocument;
  /**
   * Prevent synchronous scripts.
   *
   * @see {@link https://nextjs.org/docs/messages/no-sync-scripts no-sync-scripts}
   */
  "@next/next/no-sync-scripts"?: NoSyncScripts;
  /**
   * Prevent usage of `<title>` with `Head` component from `next/document`.
   *
   * @see {@link https://nextjs.org/docs/messages/no-title-in-document-head no-title-in-document-head}
   */
  "@next/next/no-title-in-document-head"?: NoTitleInDocumentHead;
  /**
   * Prevent common typos in Next.js data fetching functions.
   *
   * @see {@link undefined no-typos}
   */
  "@next/next/no-typos"?: NoTypos;
  /**
   * Prevent duplicate polyfills from Polyfill.io.
   *
   * @see {@link https://nextjs.org/docs/messages/no-unwanted-polyfillio no-unwanted-polyfillio}
   */
  "@next/next/no-unwanted-polyfillio"?: NoUnwantedPolyfillio;
}
