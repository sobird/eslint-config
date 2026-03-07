/* GENERATED, DO NOT EDIT DIRECTLY */

/**
 * @minItems 1
 * @maxItems 1
 */
export type SortVariableDeclarations = [
  {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: "asc" | "desc";
    };
    /**
     * Specifies the sorting method.
     */
    type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to trim, remove, or keep special characters before sorting.
     */
    specialCharacters?: "remove" | "trim" | "keep";
    /**
     * Controls whether sorting should be case-sensitive or not.
     */
    ignoreCase?: boolean;
    /**
     * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
     */
    alphabet?: string;
    /**
     * Specifies the sorting locales.
     */
    locales?: string | string[];
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
    /**
     * Defines custom groups to match specific members.
     */
    customGroups?: (
      | {
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Custom group name.
           */
          groupName: string;
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          /**
           * @minItems 1
           */
          anyOf: [
            {
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Selector filter.
               */
              selector?: "initialized" | "uninitialized";
            },
            ...{
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Selector filter.
               */
              selector?: "initialized" | "uninitialized";
            }[]
          ];
        }
      | {
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Custom group name.
           */
          groupName: string;
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
          /**
           * Selector filter.
           */
          selector?: "initialized" | "uninitialized";
        }
    )[];
    newlinesInside?: ("ignore" | number) | "newlinesBetween";
    /**
     * Specifies a list of groups for sorting.
     */
    groups?: (
      | string
      | [string, ...string[]]
      | {
          newlinesBetween: "ignore" | number;
        }
      | {
          group: string | [string, ...string[]];
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies a comment to enforce above the group.
           */
          commentAbove?: string;
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        }
    )[];
    newlinesBetween?: "ignore" | number;
    /**
     * Enables experimental dependency detection for sorting rules that support it.
     */
    useExperimentalDependencyDetection?: boolean;
    /**
     * Enables the use of comments to separate the nodes into logical groups.
     */
    partitionByComment?:
      | boolean
      | (
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )
        )
      | {
          /**
           * Enables specific block comments to separate the nodes.
           */
          block?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
          /**
           * Enables specific line comments to separate the nodes.
           */
          line?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
        };
    /**
     * Enables the use of newlines to separate the nodes into logical groups.
     */
    partitionByNewLine?: boolean;
  }
];
export type SortIntersectionTypes = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Selector filter.
             */
            selector?:
              | "intersection"
              | "conditional"
              | "function"
              | "operator"
              | "keyword"
              | "literal"
              | "nullish"
              | "import"
              | "object"
              | "named"
              | "tuple"
              | "union";
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Selector filter.
             */
            selector?:
              | "intersection"
              | "conditional"
              | "function"
              | "operator"
              | "keyword"
              | "literal"
              | "nullish"
              | "import"
              | "object"
              | "named"
              | "tuple"
              | "union";
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Selector filter.
         */
        selector?:
          | "intersection"
          | "conditional"
          | "function"
          | "operator"
          | "keyword"
          | "literal"
          | "nullish"
          | "import"
          | "object"
          | "named"
          | "tuple"
          | "union";
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortImportAttributes = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortExportAttributes = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortHeritageClauses = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
}[];
export type SortArrayIncludes = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Selector filter.
             */
            selector?: "literal";
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Selector filter.
             */
            selector?: "literal";
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Selector filter.
         */
        selector?: "literal";
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortNamedImports = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("value" | "type")[];
            /**
             * Selector filter.
             */
            selector?: "import";
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("value" | "type")[];
            /**
             * Selector filter.
             */
            selector?: "import";
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Modifier filters.
         */
        modifiers?: ("value" | "type")[];
        /**
         * Selector filter.
         */
        selector?: "import";
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Controls whether to ignore alias names.
   */
  ignoreAlias?: boolean;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortNamedExports = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("value" | "type")[];
            /**
             * Selector filter.
             */
            selector?: "export";
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("value" | "type")[];
            /**
             * Selector filter.
             */
            selector?: "export";
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Modifier filters.
         */
        modifiers?: ("value" | "type")[];
        /**
         * Selector filter.
         */
        selector?: "export";
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Controls whether to ignore alias names.
   */
  ignoreAlias?: boolean;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortObjectTypes = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
    sortBy?: "name" | "value";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  sortBy?: "name" | "value";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "name" | "value";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "name" | "value";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("optional" | "required" | "multiline")[];
            /**
             * Selector filter.
             */
            selector?: "index-signature" | "member" | "method" | "property";
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("optional" | "required" | "multiline")[];
            /**
             * Selector filter.
             */
            selector?: "index-signature" | "member" | "method" | "property";
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "name" | "value";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "name" | "value";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Modifier filters.
         */
        modifiers?: ("optional" | "required" | "multiline")[];
        /**
         * Selector filter.
         */
        selector?: "index-signature" | "member" | "method" | "property";
        /**
         * Regular expression.
         */
        elementValuePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "name" | "value";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "name" | "value";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Specifies whether to only match types that have exclusively numeric keys.
     */
    hasNumericKeysOnly?: boolean;
    /**
     * Regular expression.
     */
    declarationCommentMatchesPattern?:
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Regular expression.
     */
    declarationMatchesPattern?:
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortUnionTypes = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Selector filter.
             */
            selector?:
              | "intersection"
              | "conditional"
              | "function"
              | "operator"
              | "keyword"
              | "literal"
              | "nullish"
              | "import"
              | "object"
              | "named"
              | "tuple"
              | "union";
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Selector filter.
             */
            selector?:
              | "intersection"
              | "conditional"
              | "function"
              | "operator"
              | "keyword"
              | "literal"
              | "nullish"
              | "import"
              | "object"
              | "named"
              | "tuple"
              | "union";
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Selector filter.
         */
        selector?:
          | "intersection"
          | "conditional"
          | "function"
          | "operator"
          | "keyword"
          | "literal"
          | "nullish"
          | "import"
          | "object"
          | "named"
          | "tuple"
          | "union";
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SortSwitchCase = [
  {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: "asc" | "desc";
    };
    /**
     * Specifies the sorting method.
     */
    type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to trim, remove, or keep special characters before sorting.
     */
    specialCharacters?: "remove" | "trim" | "keep";
    /**
     * Controls whether sorting should be case-sensitive or not.
     */
    ignoreCase?: boolean;
    /**
     * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
     */
    alphabet?: string;
    /**
     * Specifies the sorting locales.
     */
    locales?: string | string[];
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  }
];
export type SortDecorators = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Controls whether sorting should be enabled for method parameter decorators.
   */
  sortOnParameters?: boolean;
  /**
   * Controls whether sorting should be enabled for class property decorators.
   */
  sortOnProperties?: boolean;
  /**
   * Controls whether sorting should be enabled for class accessor decorators.
   */
  sortOnAccessors?: boolean;
  /**
   * Controls whether sorting should be enabled for class method decorators.
   */
  sortOnMethods?: boolean;
  /**
   * Controls whether sorting should be enabled for class decorators.
   */
  sortOnClasses?: boolean;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortInterfaces = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
    sortBy?: "name" | "value";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  sortBy?: "name" | "value";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "name" | "value";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "name" | "value";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("optional" | "required" | "multiline")[];
            /**
             * Selector filter.
             */
            selector?: "index-signature" | "member" | "method" | "property";
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("optional" | "required" | "multiline")[];
            /**
             * Selector filter.
             */
            selector?: "index-signature" | "member" | "method" | "property";
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "name" | "value";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "name" | "value";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Modifier filters.
         */
        modifiers?: ("optional" | "required" | "multiline")[];
        /**
         * Selector filter.
         */
        selector?: "index-signature" | "member" | "method" | "property";
        /**
         * Regular expression.
         */
        elementValuePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "name" | "value";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "name" | "value";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Specifies whether to only match types that have exclusively numeric keys.
     */
    hasNumericKeysOnly?: boolean;
    /**
     * Regular expression.
     */
    declarationCommentMatchesPattern?:
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Regular expression.
     */
    declarationMatchesPattern?:
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortJsxProps = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("shorthand" | "multiline")[];
            /**
             * Selector filter.
             */
            selector?: "prop";
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("shorthand" | "multiline")[];
            /**
             * Selector filter.
             */
            selector?: "prop";
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Modifier filters.
         */
        modifiers?: ("shorthand" | "multiline")[];
        /**
         * Selector filter.
         */
        selector?: "prop";
        /**
         * Regular expression.
         */
        elementValuePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Regular expression.
     */
    tagMatchesPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SortModules = [
  {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage";
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: "asc" | "desc";
    };
    /**
     * Specifies the sorting method.
     */
    type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage";
    /**
     * Specifies whether to trim, remove, or keep special characters before sorting.
     */
    specialCharacters?: "remove" | "trim" | "keep";
    /**
     * Controls whether sorting should be case-sensitive or not.
     */
    ignoreCase?: boolean;
    /**
     * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
     */
    alphabet?: string;
    /**
     * Specifies the sorting locales.
     */
    locales?: string | string[];
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
    /**
     * Defines custom groups to match specific members.
     */
    customGroups?: (
      | {
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage";
          /**
           * Custom group name.
           */
          groupName: string;
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          /**
           * @minItems 1
           */
          anyOf: [
            {
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Modifier filters.
               */
              modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[];
              /**
               * Selector filter.
               */
              selector?: "enum" | "function" | "interface" | "type" | "class";
              /**
               * Regular expression.
               */
              decoratorNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
            },
            ...{
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Modifier filters.
               */
              modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[];
              /**
               * Selector filter.
               */
              selector?: "enum" | "function" | "interface" | "type" | "class";
              /**
               * Regular expression.
               */
              decoratorNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
            }[]
          ];
        }
      | {
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage";
          /**
           * Custom group name.
           */
          groupName: string;
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
          /**
           * Modifier filters.
           */
          modifiers?: ("async" | "declare" | "decorated" | "default" | "export")[];
          /**
           * Selector filter.
           */
          selector?: "enum" | "function" | "interface" | "type" | "class";
          /**
           * Regular expression.
           */
          decoratorNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }
    )[];
    newlinesInside?: ("ignore" | number) | "newlinesBetween";
    /**
     * Specifies a list of groups for sorting.
     */
    groups?: (
      | string
      | [string, ...string[]]
      | {
          newlinesBetween: "ignore" | number;
        }
      | {
          group: string | [string, ...string[]];
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies a comment to enforce above the group.
           */
          commentAbove?: string;
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "usage";
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        }
    )[];
    newlinesBetween?: "ignore" | number;
    /**
     * Enables experimental dependency detection for sorting rules that support it.
     */
    useExperimentalDependencyDetection?: boolean;
    /**
     * Enables the use of comments to separate the nodes into logical groups.
     */
    partitionByComment?:
      | boolean
      | (
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )
        )
      | {
          /**
           * Enables specific block comments to separate the nodes.
           */
          block?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
          /**
           * Enables specific line comments to separate the nodes.
           */
          line?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
        };
    /**
     * Enables the use of newlines to separate the nodes into logical groups.
     */
    partitionByNewLine?: boolean;
  }
];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SortClasses = [
  {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: "asc" | "desc";
    };
    /**
     * Specifies the sorting method.
     */
    type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to trim, remove, or keep special characters before sorting.
     */
    specialCharacters?: "remove" | "trim" | "keep";
    /**
     * Controls whether sorting should be case-sensitive or not.
     */
    ignoreCase?: boolean;
    /**
     * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
     */
    alphabet?: string;
    /**
     * Specifies the sorting locales.
     */
    locales?: string | string[];
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
    /**
     * Defines custom groups to match specific members.
     */
    customGroups?: (
      | {
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Custom group name.
           */
          groupName: string;
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          /**
           * @minItems 1
           */
          anyOf: [
            {
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Modifier filters.
               */
              modifiers?: (
                | "async"
                | "protected"
                | "private"
                | "public"
                | "static"
                | "abstract"
                | "override"
                | "readonly"
                | "decorated"
                | "declare"
                | "optional"
              )[];
              /**
               * Selector filter.
               */
              selector?:
                | "accessor-property"
                | "index-signature"
                | "constructor"
                | "static-block"
                | "get-method"
                | "set-method"
                | "function-property"
                | "property"
                | "method";
              /**
               * Regular expression.
               */
              decoratorNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Regular expression.
               */
              elementValuePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
            },
            ...{
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Modifier filters.
               */
              modifiers?: (
                | "async"
                | "protected"
                | "private"
                | "public"
                | "static"
                | "abstract"
                | "override"
                | "readonly"
                | "decorated"
                | "declare"
                | "optional"
              )[];
              /**
               * Selector filter.
               */
              selector?:
                | "accessor-property"
                | "index-signature"
                | "constructor"
                | "static-block"
                | "get-method"
                | "set-method"
                | "function-property"
                | "property"
                | "method";
              /**
               * Regular expression.
               */
              decoratorNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Regular expression.
               */
              elementValuePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
            }[]
          ];
        }
      | {
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Custom group name.
           */
          groupName: string;
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
          /**
           * Modifier filters.
           */
          modifiers?: (
            | "async"
            | "protected"
            | "private"
            | "public"
            | "static"
            | "abstract"
            | "override"
            | "readonly"
            | "decorated"
            | "declare"
            | "optional"
          )[];
          /**
           * Selector filter.
           */
          selector?:
            | "accessor-property"
            | "index-signature"
            | "constructor"
            | "static-block"
            | "get-method"
            | "set-method"
            | "function-property"
            | "property"
            | "method";
          /**
           * Regular expression.
           */
          decoratorNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
          /**
           * Regular expression.
           */
          elementValuePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }
    )[];
    newlinesInside?: ("ignore" | number) | "newlinesBetween";
    /**
     * Specifies a list of groups for sorting.
     */
    groups?: (
      | string
      | [string, ...string[]]
      | {
          newlinesBetween: "ignore" | number;
        }
      | {
          group: string | [string, ...string[]];
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies a comment to enforce above the group.
           */
          commentAbove?: string;
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        }
    )[];
    newlinesBetween?: "ignore" | number;
    /**
     * Enables experimental dependency detection for sorting rules that support it.
     */
    useExperimentalDependencyDetection?: boolean;
    /**
     * Regular expression.
     */
    ignoreCallbackDependenciesPatterns?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Enables the use of comments to separate the nodes into logical groups.
     */
    partitionByComment?:
      | boolean
      | (
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )
        )
      | {
          /**
           * Enables specific block comments to separate the nodes.
           */
          block?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
          /**
           * Enables specific line comments to separate the nodes.
           */
          line?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
        };
    /**
     * Enables the use of newlines to separate the nodes into logical groups.
     */
    partitionByNewLine?: boolean;
  }
];
export type SortImports = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "type-import-first";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
    sortBy?: "specifier" | "path";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order" | "type-import-first";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  sortBy?: "specifier" | "path";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type:
            | "alphabetical"
            | "natural"
            | "line-length"
            | "custom"
            | "unsorted"
            | "subgroup-order"
            | "type-import-first";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "specifier" | "path";
        };
        /**
         * Specifies the sorting method.
         */
        type?:
          | "alphabetical"
          | "natural"
          | "line-length"
          | "custom"
          | "unsorted"
          | "subgroup-order"
          | "type-import-first";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "specifier" | "path";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: (
              | "default"
              | "multiline"
              | "named"
              | "require"
              | "side-effect"
              | "singleline"
              | "ts-equals"
              | "type"
              | "value"
              | "wildcard"
            )[];
            /**
             * Selector filter.
             */
            selector?:
              | "side-effect-style"
              | "tsconfig-path"
              | "side-effect"
              | "external"
              | "internal"
              | "builtin"
              | "sibling"
              | "subpath"
              | "import"
              | "parent"
              | "index"
              | "style"
              | "type";
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: (
              | "default"
              | "multiline"
              | "named"
              | "require"
              | "side-effect"
              | "singleline"
              | "ts-equals"
              | "type"
              | "value"
              | "wildcard"
            )[];
            /**
             * Selector filter.
             */
            selector?:
              | "side-effect-style"
              | "tsconfig-path"
              | "side-effect"
              | "external"
              | "internal"
              | "builtin"
              | "sibling"
              | "subpath"
              | "import"
              | "parent"
              | "index"
              | "style"
              | "type";
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type:
            | "alphabetical"
            | "natural"
            | "line-length"
            | "custom"
            | "unsorted"
            | "subgroup-order"
            | "type-import-first";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "specifier" | "path";
        };
        /**
         * Specifies the sorting method.
         */
        type?:
          | "alphabetical"
          | "natural"
          | "line-length"
          | "custom"
          | "unsorted"
          | "subgroup-order"
          | "type-import-first";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "specifier" | "path";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Modifier filters.
         */
        modifiers?: (
          | "default"
          | "multiline"
          | "named"
          | "require"
          | "side-effect"
          | "singleline"
          | "ts-equals"
          | "type"
          | "value"
          | "wildcard"
        )[];
        /**
         * Selector filter.
         */
        selector?:
          | "side-effect-style"
          | "tsconfig-path"
          | "side-effect"
          | "external"
          | "internal"
          | "builtin"
          | "sibling"
          | "subpath"
          | "import"
          | "parent"
          | "index"
          | "style"
          | "type";
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type:
            | "alphabetical"
            | "natural"
            | "line-length"
            | "custom"
            | "unsorted"
            | "subgroup-order"
            | "type-import-first";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "specifier" | "path";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?:
          | "alphabetical"
          | "natural"
          | "line-length"
          | "custom"
          | "unsorted"
          | "subgroup-order"
          | "type-import-first";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "specifier" | "path";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  tsconfig?: {
    /**
     * Specifies the tsConfig root directory.
     */
    rootDir: string;
    /**
     * Specifies the tsConfig filename.
     */
    filename?: string;
  };
  /**
   * Specifies the maximum line length.
   */
  maxLineLength?: number;
  /**
   * Controls whether side-effect imports should be sorted.
   */
  sortSideEffects?: boolean;
  /**
   * Specifies the environment.
   */
  environment?: "node" | "bun";
  /**
   * Enables experimental dependency detection for sorting rules that support it.
   */
  useExperimentalDependencyDetection?: boolean;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
  /**
   * Regular expression.
   */
  internalPattern?:
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      )[]
    | (
        | {
            /**
             * Regular expression pattern.
             */
            pattern: string;
            /**
             * Regular expression flags.
             */
            flags?: string;
          }
        | string
      );
}[];
export type SortExports = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("value" | "type" | "named" | "wildcard" | "multiline" | "singleline")[];
            /**
             * Selector filter.
             */
            selector?: "export";
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: ("value" | "type" | "named" | "wildcard" | "multiline" | "singleline")[];
            /**
             * Selector filter.
             */
            selector?: "export";
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Modifier filters.
         */
        modifiers?: ("value" | "type" | "named" | "wildcard" | "multiline" | "singleline")[];
        /**
         * Selector filter.
         */
        selector?: "export";
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortObjects = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
    sortBy?: "name" | "value";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  sortBy?: "name" | "value";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "name" | "value";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "name" | "value";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: "multiline"[];
            /**
             * Selector filter.
             */
            selector?: "member" | "method" | "property";
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Modifier filters.
             */
            modifiers?: "multiline"[];
            /**
             * Selector filter.
             */
            selector?: "member" | "method" | "property";
            /**
             * Regular expression.
             */
            elementValuePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "name" | "value";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "name" | "value";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Modifier filters.
         */
        modifiers?: "multiline"[];
        /**
         * Selector filter.
         */
        selector?: "member" | "method" | "property";
        /**
         * Regular expression.
         */
        elementValuePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          sortBy?: "name" | "value";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        sortBy?: "name" | "value";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Specifies whether to only match destructured objects or regular objects.
     */
    objectType?: "destructured" | "non-destructured";
    /**
     * Specifies whether to only match objects that have exclusively numeric keys.
     */
    hasNumericKeysOnly?: boolean;
    /**
     * Regular expression.
     */
    declarationCommentMatchesPattern?:
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Regular expression.
     */
    callingFunctionNamePattern?:
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
    /**
     * Regular expression.
     */
    declarationMatchesPattern?:
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              scope?: "shallow" | "deep";
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Controls whether to sort styled components.
   */
  styledComponents?: boolean;
  /**
   * Enables experimental dependency detection for sorting rules that support it.
   */
  useExperimentalDependencyDetection?: boolean;
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
/**
 * @minItems 1
 * @maxItems 1
 */
export type SortEnums = [
  {
    /**
     * Fallback sort order.
     */
    fallbackSort?: {
      /**
       * Specifies the sorting method.
       */
      type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
      /**
       * Specifies whether to sort items in ascending or descending order.
       */
      order?: "asc" | "desc";
    };
    /**
     * Specifies the sorting method.
     */
    type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to trim, remove, or keep special characters before sorting.
     */
    specialCharacters?: "remove" | "trim" | "keep";
    /**
     * Controls whether sorting should be case-sensitive or not.
     */
    ignoreCase?: boolean;
    /**
     * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
     */
    alphabet?: string;
    /**
     * Specifies the sorting locales.
     */
    locales?: string | string[];
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
    /**
     * Defines custom groups to match specific members.
     */
    customGroups?: (
      | {
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Custom group name.
           */
          groupName: string;
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          /**
           * @minItems 1
           */
          anyOf: [
            {
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Regular expression.
               */
              elementValuePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
            },
            ...{
              /**
               * Regular expression.
               */
              elementNamePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
              /**
               * Regular expression.
               */
              elementValuePattern?:
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  );
            }[]
          ];
        }
      | {
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Custom group name.
           */
          groupName: string;
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
          /**
           * Regular expression.
           */
          elementNamePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
          /**
           * Regular expression.
           */
          elementValuePattern?:
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              )[]
            | (
                | {
                    /**
                     * Regular expression pattern.
                     */
                    pattern: string;
                    /**
                     * Regular expression flags.
                     */
                    flags?: string;
                  }
                | string
              );
        }
    )[];
    newlinesInside?: ("ignore" | number) | "newlinesBetween";
    /**
     * Specifies a list of groups for sorting.
     */
    groups?: (
      | string
      | [string, ...string[]]
      | {
          newlinesBetween: "ignore" | number;
        }
      | {
          group: string | [string, ...string[]];
          /**
           * Fallback sort order.
           */
          fallbackSort?: {
            /**
             * Specifies the sorting method.
             */
            type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
            /**
             * Specifies whether to sort items in ascending or descending order.
             */
            order?: "asc" | "desc";
          };
          /**
           * Specifies a comment to enforce above the group.
           */
          commentAbove?: string;
          /**
           * Specifies the sorting method.
           */
          type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          newlinesInside?: "ignore" | number;
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        }
    )[];
    newlinesBetween?: "ignore" | number;
    /**
     * Specifies whether to sort enums by value.
     */
    sortByValue?: "always" | "ifNumericEnum" | "never";
    /**
     * Enables experimental dependency detection for sorting rules that support it.
     */
    useExperimentalDependencyDetection?: boolean;
    /**
     * Enables the use of comments to separate the nodes into logical groups.
     */
    partitionByComment?:
      | boolean
      | (
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )
        )
      | {
          /**
           * Enables specific block comments to separate the nodes.
           */
          block?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
          /**
           * Enables specific line comments to separate the nodes.
           */
          line?:
            | boolean
            | (
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )[]
                | (
                    | {
                        /**
                         * Regular expression pattern.
                         */
                        pattern: string;
                        /**
                         * Regular expression flags.
                         */
                        flags?: string;
                      }
                    | string
                  )
              );
        };
    /**
     * Enables the use of newlines to separate the nodes into logical groups.
     */
    partitionByNewLine?: boolean;
  }
];
export type SortSets = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Selector filter.
             */
            selector?: "literal";
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
            /**
             * Selector filter.
             */
            selector?: "literal";
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
        /**
         * Selector filter.
         */
        selector?: "literal";
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];
export type SortMaps = {
  /**
   * Fallback sort order.
   */
  fallbackSort?: {
    /**
     * Specifies the sorting method.
     */
    type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
    /**
     * Specifies whether to sort items in ascending or descending order.
     */
    order?: "asc" | "desc";
  };
  /**
   * Specifies the sorting method.
   */
  type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
  /**
   * Specifies whether to trim, remove, or keep special characters before sorting.
   */
  specialCharacters?: "remove" | "trim" | "keep";
  /**
   * Controls whether sorting should be case-sensitive or not.
   */
  ignoreCase?: boolean;
  /**
   * Used only when the `type` option is set to `'custom'`. Specifies the custom alphabet for sorting.
   */
  alphabet?: string;
  /**
   * Specifies the sorting locales.
   */
  locales?: string | string[];
  /**
   * Specifies whether to sort items in ascending or descending order.
   */
  order?: "asc" | "desc";
  /**
   * Defines custom groups to match specific members.
   */
  customGroups?: (
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * @minItems 1
         */
        anyOf: [
          {
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          },
          ...{
            /**
             * Regular expression.
             */
            elementNamePattern?:
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                );
          }[]
        ];
      }
    | {
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        /**
         * Custom group name.
         */
        groupName: string;
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
        /**
         * Regular expression.
         */
        elementNamePattern?:
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            )[]
          | (
              | {
                  /**
                   * Regular expression pattern.
                   */
                  pattern: string;
                  /**
                   * Regular expression flags.
                   */
                  flags?: string;
                }
              | string
            );
      }
  )[];
  newlinesInside?: ("ignore" | number) | "newlinesBetween";
  /**
   * Specifies a list of groups for sorting.
   */
  groups?: (
    | string
    | [string, ...string[]]
    | {
        newlinesBetween: "ignore" | number;
      }
    | {
        group: string | [string, ...string[]];
        /**
         * Fallback sort order.
         */
        fallbackSort?: {
          /**
           * Specifies the sorting method.
           */
          type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
          /**
           * Specifies whether to sort items in ascending or descending order.
           */
          order?: "asc" | "desc";
        };
        /**
         * Specifies a comment to enforce above the group.
         */
        commentAbove?: string;
        /**
         * Specifies the sorting method.
         */
        type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted" | "subgroup-order";
        newlinesInside?: "ignore" | number;
        /**
         * Specifies whether to sort items in ascending or descending order.
         */
        order?: "asc" | "desc";
      }
  )[];
  newlinesBetween?: "ignore" | number;
  /**
   * Specifies filters to match a particular options configuration for a given element to sort.
   */
  useConfigurationIf?: {
    /**
     * Regular expression.
     */
    allNamesMatchPattern?:
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        )[]
      | (
          | {
              /**
               * Regular expression pattern.
               */
              pattern: string;
              /**
               * Regular expression flags.
               */
              flags?: string;
            }
          | string
        );
  };
  /**
   * Enables the use of comments to separate the nodes into logical groups.
   */
  partitionByComment?:
    | boolean
    | (
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )[]
        | (
            | {
                /**
                 * Regular expression pattern.
                 */
                pattern: string;
                /**
                 * Regular expression flags.
                 */
                flags?: string;
              }
            | string
          )
      )
    | {
        /**
         * Enables specific block comments to separate the nodes.
         */
        block?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
        /**
         * Enables specific line comments to separate the nodes.
         */
        line?:
          | boolean
          | (
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )[]
              | (
                  | {
                      /**
                       * Regular expression pattern.
                       */
                      pattern: string;
                      /**
                       * Regular expression flags.
                       */
                      flags?: string;
                    }
                  | string
                )
            );
      };
  /**
   * Enables the use of newlines to separate the nodes into logical groups.
   */
  partitionByNewLine?: boolean;
}[];

/**
 * 22 ESLint rules for perfectionist
 *
 * @package `eslint-plugin-perfectionist`
 * @namespace `perfectionist`
 * @version 5.6.0
 */
export interface PerfectionistRules {
  /**
   * Enforce sorted variable declarations.
   *
   * @see {@link https://perfectionist.dev/rules/sort-variable-declarations sort-variable-declarations}
   */
  "perfectionist/sort-variable-declarations"?: SortVariableDeclarations;
  /**
   * Enforce sorted intersection types.
   *
   * @see {@link https://perfectionist.dev/rules/sort-intersection-types sort-intersection-types}
   */
  "perfectionist/sort-intersection-types"?: SortIntersectionTypes;
  /**
   * Enforce sorted import attributes.
   *
   * @see {@link https://perfectionist.dev/rules/sort-import-attributes sort-import-attributes}
   */
  "perfectionist/sort-import-attributes"?: SortImportAttributes;
  /**
   * Enforce sorted export attributes.
   *
   * @see {@link https://perfectionist.dev/rules/sort-export-attributes sort-export-attributes}
   */
  "perfectionist/sort-export-attributes"?: SortExportAttributes;
  /**
   * Enforce sorted heritage clauses.
   *
   * @see {@link https://perfectionist.dev/rules/sort-heritage-clauses sort-heritage-clauses}
   */
  "perfectionist/sort-heritage-clauses"?: SortHeritageClauses;
  /**
   * Enforce sorted arrays before include method.
   *
   * @see {@link https://perfectionist.dev/rules/sort-array-includes sort-array-includes}
   */
  "perfectionist/sort-array-includes"?: SortArrayIncludes;
  /**
   * Enforce sorted named imports.
   *
   * @see {@link https://perfectionist.dev/rules/sort-named-imports sort-named-imports}
   */
  "perfectionist/sort-named-imports"?: SortNamedImports;
  /**
   * Enforce sorted named exports.
   *
   * @see {@link https://perfectionist.dev/rules/sort-named-exports sort-named-exports}
   */
  "perfectionist/sort-named-exports"?: SortNamedExports;
  /**
   * Enforce sorted object types.
   *
   * @see {@link https://perfectionist.dev/rules/sort-object-types sort-object-types}
   */
  "perfectionist/sort-object-types"?: SortObjectTypes;
  /**
   * Enforce sorted union types.
   *
   * @see {@link https://perfectionist.dev/rules/sort-union-types sort-union-types}
   */
  "perfectionist/sort-union-types"?: SortUnionTypes;
  /**
   * Enforce sorted switch cases.
   *
   * @see {@link https://perfectionist.dev/rules/sort-switch-case sort-switch-case}
   */
  "perfectionist/sort-switch-case"?: SortSwitchCase;
  /**
   * Enforce sorted decorators.
   *
   * @see {@link https://perfectionist.dev/rules/sort-decorators sort-decorators}
   */
  "perfectionist/sort-decorators"?: SortDecorators;
  /**
   * Enforce sorted interface properties.
   *
   * @see {@link https://perfectionist.dev/rules/sort-interfaces sort-interfaces}
   */
  "perfectionist/sort-interfaces"?: SortInterfaces;
  /**
   * Enforce sorted JSX props.
   *
   * @see {@link https://perfectionist.dev/rules/sort-jsx-props sort-jsx-props}
   */
  "perfectionist/sort-jsx-props"?: SortJsxProps;
  /**
   * Enforce sorted modules.
   *
   * @see {@link https://perfectionist.dev/rules/sort-modules sort-modules}
   */
  "perfectionist/sort-modules"?: SortModules;
  /**
   * Enforce sorted classes.
   *
   * @see {@link https://perfectionist.dev/rules/sort-classes sort-classes}
   */
  "perfectionist/sort-classes"?: SortClasses;
  /**
   * Enforce sorted imports.
   *
   * @see {@link https://perfectionist.dev/rules/sort-imports sort-imports}
   */
  "perfectionist/sort-imports"?: SortImports;
  /**
   * Enforce sorted exports.
   *
   * @see {@link https://perfectionist.dev/rules/sort-exports sort-exports}
   */
  "perfectionist/sort-exports"?: SortExports;
  /**
   * Enforce sorted objects.
   *
   * @see {@link https://perfectionist.dev/rules/sort-objects sort-objects}
   */
  "perfectionist/sort-objects"?: SortObjects;
  /**
   * Enforce sorted TypeScript enums.
   *
   * @see {@link https://perfectionist.dev/rules/sort-enums sort-enums}
   */
  "perfectionist/sort-enums"?: SortEnums;
  /**
   * Enforce sorted sets.
   *
   * @see {@link https://perfectionist.dev/rules/sort-sets sort-sets}
   */
  "perfectionist/sort-sets"?: SortSets;
  /**
   * Enforce sorted Map elements.
   *
   * @see {@link https://perfectionist.dev/rules/sort-maps sort-maps}
   */
  "perfectionist/sort-maps"?: SortMaps;
}
