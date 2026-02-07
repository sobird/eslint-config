import type { Rule } from 'eslint';

export function renameRules(rules: Record<string, unknown> | object, from: string, to: string) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        if (key.startsWith(from)) {
          return [to + key.slice(from.length), value];
        }
        return [key, value];
      }),
  );
}

export function allRules(rules: Record<string, Rule.RuleModule>, namespace = '') {
  return Object.fromEntries(Object.entries(rules).map(([key]) => [`${namespace}${key}`, 'error']));
}
