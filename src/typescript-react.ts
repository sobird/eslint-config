export default {
  extends: ['./typescript.cjs', 'plugin:react/recommended'],
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    'useJSXTextNode': true,
  },
  settings: {},
  rules: {}
};
