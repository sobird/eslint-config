module.exports = {
  root: true,
  extends: [
    'sobird/base.cjs',
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'sobird/typescript.cjs',
      ],
      rules: {},
    },
  ],
  rules: {},
};
