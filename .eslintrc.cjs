/**
 * "off" or 0 - turn the rule off
 * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
 * "error" or 2 - turn the rule on as an error (exit code will be 1)
 *
 * @see https://typescript-eslint.io/play
 */

module.exports = {
  extends: './dist/base.cjs',
  overrides: [
    {
      files: ['*.ts'],
      extends: './dist/typescript.cjs',
    },
  ],
  rules: {},
};
