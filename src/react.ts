export default {
  extends: [
    'airbnb',
    'airbnb/hooks',
    './base.cjs',
    // 'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
  },
  rules: {
    'react/function-component-definition': ['error', {
      namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
      unnamedComponents: ['function-expression', 'arrow-function'],
    }],
  },
};
