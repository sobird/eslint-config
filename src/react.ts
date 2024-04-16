export default {
  extends: [
    'airbnb',
    './base.cjs',
    './import.cjs',
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
    // 非 required 的 prop 必须有 defaultProps
    // @off 不强制要求写 defaultProps
    'react/require-default-props': 'off',
    // 防止React被错误地标记为未使用
    'react/jsx-uses-react': 'error',
    // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': ['error', {
      allowAsProps: true,
    }],
    'react-hooks/exhaustive-deps': 'off',
    // 禁用
    'react/jsx-props-no-spreading': 'off',

    // 不允许使用未知DOM属性(Disallow usage of unknown DOM property)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
