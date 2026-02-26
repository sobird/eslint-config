/* eslint-disable */

/**
 * @minItems 1
 * @maxItems 1
 */
export type OnlyExportComponents = [
  {
    extraHOCs?: string[];
    allowExportNames?: string[];
    allowConstantExport?: boolean;
    checkJS?: boolean;
  }
];

/**
 * 1 ESLint rules for react-refresh
 *
 * @namespace `react-refresh`
 */
export interface ReactRefreshRules {
  /**
   *
   *
   */
  "react-refresh/only-export-components"?: OnlyExportComponents;
}
