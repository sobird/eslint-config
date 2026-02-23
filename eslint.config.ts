// https://eslint.org/docs/latest/use/configure/configuration-files

import { sobird } from './src';

export default sobird({
  stylistic: {
    commaDangle: 'always',
  },
  typescript: true,
  import: {
    rules: {
      //
    },
  },
});
