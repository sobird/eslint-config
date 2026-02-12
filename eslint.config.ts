// https://eslint.org/docs/latest/use/configure/configuration-files

import { sobird } from './src';

export default sobird({
  react: true,
  rules: {
    'accessor-pairs': 'error',
  },
});
