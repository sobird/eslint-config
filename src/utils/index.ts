import type { Rule } from 'eslint';

export { gitignore } from './gitignore';
export { isPackagePresent } from './isPackagePresent';

export function allRules(rules: Record<string, Rule.RuleModule>, namespace = '') {
  return Object.fromEntries(Object.entries(rules).map(([key]) => {
    return [`${namespace}${key}`, 'error'];
  }));
}
