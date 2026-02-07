// https://eslint.org/docs/latest/use/configure/configuration-files

import { sobird } from './src';

export default sobird({
  typescript: true,
  rules: {
    '@typescript/no-explicit-any': [{ fixToUnknown: true }],
  },
});
