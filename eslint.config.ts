// https://eslint.org/docs/latest/use/configure/configuration-files

import { sobird } from './src';

export default sobird({
  ignores: {
    gitignore: true,
    ignores: [],
  },
  typescript: true,
  import: {
    rules: {
      //
    },
  },
  jsonc: {
    package: false,
  },
  jsx: {
    a11y: true,
  },
});
