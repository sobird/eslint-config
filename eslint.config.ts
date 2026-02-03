// https://eslint.org/docs/latest/use/configure/configuration-files

import eslint from "@eslint/js";
import { defineConfig } from 'eslint/config';
import { sobird } from "./src";
import tseslint from 'typescript-eslint';

// console.log('eslint', eslint, tseslint)

// export default defineConfig(
//   // eslint.configs.recommended,
//   tseslint.configs.all,
//   {
//     languageOptions: {
//       parserOptions: {
//         projectService: true,
//       },
//     },
//   },
// );

export default sobird();
