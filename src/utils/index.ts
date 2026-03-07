import type { Rule } from 'eslint';

export * from './env';
export { gitignore } from './gitignore';
export { isPackagePresent } from './isPackagePresent';

export function allRules(rules: Record<string, Rule.RuleModule>, namespace = ''): Record<string, string> {
  return Object.fromEntries(Object.entries(rules).map(([key]) => [`${namespace}${key}`, 'error']));
}
