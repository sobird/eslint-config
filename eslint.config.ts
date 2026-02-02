// https://eslint.org/docs/latest/use/configure/configuration-files

import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
]);
