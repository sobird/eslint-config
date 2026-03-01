/* GENERATED, DO NOT EDIT DIRECTLY */

/**
 * @minItems 1
 * @maxItems 1
 */
export type AccessibleEmoji = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AltText = [
  {
    elements?: string[];
    img?: string[];
    object?: string[];
    area?: string[];
    'input[type="image"]'?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AnchorAmbiguousText = [
  {
    words?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AnchorHasContent = [
  {
    components?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AnchorIsValid = [
  {
    components?: string[];
    specialLink?: string[];
    /**
     * @minItems 1
     */
    aspects?: ["noHref" | "invalidHref" | "preferButton", ...("noHref" | "invalidHref" | "preferButton")[]];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AriaActivedescendantHasTabindex = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AriaProps = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AriaProptypes = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AriaRole = [
  {
    allowedInvalidRoles?: string[];
    ignoreNonDOM?: boolean;
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AriaUnsupportedElements = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type AutocompleteValid = [
  {
    inputComponents?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ClickEventsHaveKeyEvents = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ControlHasAssociatedLabel = [
  {
    labelAttributes?: string[];
    controlComponents?: string[];
    ignoreElements?: string[];
    ignoreRoles?: string[];
    /**
     * JSX tree depth limit to check for accessible label
     */
    depth?: number;
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type HeadingHasContent = [
  {
    components?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type HtmlHasLang = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type IframeHasTitle = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type ImgRedundantAlt = [
  {
    components?: string[];
    words?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type InteractiveSupportsFocus = [
  {
    /**
     * @minItems 0
     */
    tabbable?: (
      | "button"
      | "checkbox"
      | "columnheader"
      | "combobox"
      | "grid"
      | "gridcell"
      | "link"
      | "listbox"
      | "menu"
      | "menubar"
      | "menuitem"
      | "menuitemcheckbox"
      | "menuitemradio"
      | "option"
      | "progressbar"
      | "radio"
      | "radiogroup"
      | "row"
      | "rowheader"
      | "scrollbar"
      | "searchbox"
      | "slider"
      | "spinbutton"
      | "switch"
      | "tab"
      | "tablist"
      | "textbox"
      | "tree"
      | "treegrid"
      | "treeitem"
      | "doc-backlink"
      | "doc-biblioref"
      | "doc-glossref"
      | "doc-noteref"
    )[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type LabelHasAssociatedControl = [
  {
    labelComponents?: string[];
    labelAttributes?: string[];
    controlComponents?: string[];
    /**
     * Assert that the label has htmlFor, a nested label, both or either
     */
    assert?: "htmlFor" | "nesting" | "both" | "either";
    /**
     * JSX tree depth limit to check for accessible label
     */
    depth?: number;
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type LabelHasFor = [
  {
    components?: string[];
    required?:
      | ("nesting" | "id")
      | {
          /**
           * @minItems 0
           */
          some: ("nesting" | "id")[];
          [k: string]: unknown;
        }
      | {
          /**
           * @minItems 0
           */
          every: ("nesting" | "id")[];
          [k: string]: unknown;
        };
    allowChildren?: boolean;
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Lang = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MediaHasCaption = [
  {
    audio?: string[];
    video?: string[];
    track?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type MouseEventsHaveKeyEvents = [
  {
    /**
     * An array of events that need to be accompanied by `onFocus`
     */
    hoverInHandlers?: string[];
    /**
     * An array of events that need to be accompanied by `onBlur`
     */
    hoverOutHandlers?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoAccessKey = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoAriaHiddenOnFocusable = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoAutofocus = [
  {
    ignoreNonDOM?: boolean;
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoDistractingElements = [
  {
    /**
     * @minItems 0
     */
    elements?: ("marquee" | "blink")[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoInteractiveElementToNoninteractiveRole = [
  {
    [k: string]: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoNoninteractiveElementInteractions = [
  {
    handlers?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoNoninteractiveElementToInteractiveRole = [
  {
    [k: string]: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoNoninteractiveTabindex = [
  {
    /**
     * An array of ARIA roles
     */
    roles?: string[];
    /**
     * An array of HTML tag names
     */
    tags?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoOnchange = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoRedundantRoles = [
  {
    [k: string]: string[];
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type NoStaticElementInteractions = [
  {
    handlers?: string[];
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type PreferTagOverRole = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RoleHasRequiredAriaProps = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type RoleSupportsAriaProps = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Scope = [
  {
    [k: string]: unknown;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type TabindexNoPositive = [
  {
    [k: string]: unknown;
  }
];

/**
 * 39 ESLint rules for jsx-a11y
 *
 * @package `eslint-plugin-jsx-a11y`
 * @namespace `jsx-a11y`
 * @version 6.10.2
 */
export interface JsxA11YRules {
  /**
   * Enforce emojis are wrapped in `<span>` and provide screen reader access.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md accessible-emoji}
   * @deprecated This rule is deprecated.
   */
  "jsx-a11y/accessible-emoji"?: AccessibleEmoji;
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md alt-text}
   */
  "jsx-a11y/alt-text"?: AltText;
  /**
   * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md anchor-ambiguous-text}
   */
  "jsx-a11y/anchor-ambiguous-text"?: AnchorAmbiguousText;
  /**
   * Enforce all anchors to contain accessible content.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md anchor-has-content}
   */
  "jsx-a11y/anchor-has-content"?: AnchorHasContent;
  /**
   * Enforce all anchors are valid, navigable elements.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md anchor-is-valid}
   */
  "jsx-a11y/anchor-is-valid"?: AnchorIsValid;
  /**
   * Enforce elements with aria-activedescendant are tabbable.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md aria-activedescendant-has-tabindex}
   */
  "jsx-a11y/aria-activedescendant-has-tabindex"?: AriaActivedescendantHasTabindex;
  /**
   * Enforce all `aria-*` props are valid.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md aria-props}
   */
  "jsx-a11y/aria-props"?: AriaProps;
  /**
   * Enforce ARIA state and property values are valid.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md aria-proptypes}
   */
  "jsx-a11y/aria-proptypes"?: AriaProptypes;
  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md aria-role}
   */
  "jsx-a11y/aria-role"?: AriaRole;
  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md aria-unsupported-elements}
   */
  "jsx-a11y/aria-unsupported-elements"?: AriaUnsupportedElements;
  /**
   * Enforce that autocomplete attributes are used correctly.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md autocomplete-valid}
   */
  "jsx-a11y/autocomplete-valid"?: AutocompleteValid;
  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md click-events-have-key-events}
   */
  "jsx-a11y/click-events-have-key-events"?: ClickEventsHaveKeyEvents;
  /**
   * Enforce that a control (an interactive element) has a text label.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md control-has-associated-label}
   */
  "jsx-a11y/control-has-associated-label"?: ControlHasAssociatedLabel;
  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md heading-has-content}
   */
  "jsx-a11y/heading-has-content"?: HeadingHasContent;
  /**
   * Enforce `<html>` element has `lang` prop.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md html-has-lang}
   */
  "jsx-a11y/html-has-lang"?: HtmlHasLang;
  /**
   * Enforce iframe elements have a title attribute.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md iframe-has-title}
   */
  "jsx-a11y/iframe-has-title"?: IframeHasTitle;
  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md img-redundant-alt}
   */
  "jsx-a11y/img-redundant-alt"?: ImgRedundantAlt;
  /**
   * Enforce that elements with interactive handlers like `onClick` must be focusable.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/interactive-supports-focus.md interactive-supports-focus}
   */
  "jsx-a11y/interactive-supports-focus"?: InteractiveSupportsFocus;
  /**
   * Enforce that a `label` tag has a text label and an associated control.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md label-has-associated-control}
   */
  "jsx-a11y/label-has-associated-control"?: LabelHasAssociatedControl;
  /**
   * Enforce that `<label>` elements have the `htmlFor` prop.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/label-has-for.md label-has-for}
   * @deprecated This rule is deprecated. It was replaced by label-has-associated-control.
   */
  "jsx-a11y/label-has-for"?: LabelHasFor;
  /**
   * Enforce lang attribute has a valid value.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md lang}
   */
  "jsx-a11y/lang"?: Lang;
  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md media-has-caption}
   */
  "jsx-a11y/media-has-caption"?: MediaHasCaption;
  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md mouse-events-have-key-events}
   */
  "jsx-a11y/mouse-events-have-key-events"?: MouseEventsHaveKeyEvents;
  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md no-access-key}
   */
  "jsx-a11y/no-access-key"?: NoAccessKey;
  /**
   * Disallow `aria-hidden="true"` from being set on focusable elements.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md no-aria-hidden-on-focusable}
   */
  "jsx-a11y/no-aria-hidden-on-focusable"?: NoAriaHiddenOnFocusable;
  /**
   * Enforce autoFocus prop is not used.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md no-autofocus}
   */
  "jsx-a11y/no-autofocus"?: NoAutofocus;
  /**
   * Enforce distracting elements are not used.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md no-distracting-elements}
   */
  "jsx-a11y/no-distracting-elements"?: NoDistractingElements;
  /**
   * Interactive elements should not be assigned non-interactive roles.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md no-interactive-element-to-noninteractive-role}
   */
  "jsx-a11y/no-interactive-element-to-noninteractive-role"?: NoInteractiveElementToNoninteractiveRole;
  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md no-noninteractive-element-interactions}
   */
  "jsx-a11y/no-noninteractive-element-interactions"?: NoNoninteractiveElementInteractions;
  /**
   * Non-interactive elements should not be assigned interactive roles.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md no-noninteractive-element-to-interactive-role}
   */
  "jsx-a11y/no-noninteractive-element-to-interactive-role"?: NoNoninteractiveElementToInteractiveRole;
  /**
   * `tabIndex` should only be declared on interactive elements.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md no-noninteractive-tabindex}
   */
  "jsx-a11y/no-noninteractive-tabindex"?: NoNoninteractiveTabindex;
  /**
   * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md no-onchange}
   * @deprecated This rule is deprecated.
   */
  "jsx-a11y/no-onchange"?: NoOnchange;
  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md no-redundant-roles}
   */
  "jsx-a11y/no-redundant-roles"?: NoRedundantRoles;
  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md no-static-element-interactions}
   */
  "jsx-a11y/no-static-element-interactions"?: NoStaticElementInteractions;
  /**
   * Enforces using semantic DOM elements over the ARIA `role` property.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md prefer-tag-over-role}
   */
  "jsx-a11y/prefer-tag-over-role"?: PreferTagOverRole;
  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md role-has-required-aria-props}
   */
  "jsx-a11y/role-has-required-aria-props"?: RoleHasRequiredAriaProps;
  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md role-supports-aria-props}
   */
  "jsx-a11y/role-supports-aria-props"?: RoleSupportsAriaProps;
  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md scope}
   */
  "jsx-a11y/scope"?: Scope;
  /**
   * Enforce `tabIndex` value is not greater than zero.
   *
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md tabindex-no-positive}
   */
  "jsx-a11y/tabindex-no-positive"?: TabindexNoPositive;
}
