import type { Rule } from 'eslint';

export { gitignore } from './gitignore';
export { isPackagePresent } from './isPackagePresent';
export * from './env';

export function allRules(rules: Record<string, Rule.RuleModule>, namespace = ''): Record<string, string> {
  return Object.fromEntries(Object.entries(rules).map(([key]) => [`${namespace}${key}`, 'error']));
}
