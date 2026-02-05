import { Linter, type Rule } from 'eslint';

import versions from './versions.json';

export const name = 'eslint';

export function getRuleMetaData() {
  const liner = new Linter({ configType: 'eslintrc' });
  const rules = liner.getRules();
  const map = new Map<string, Rule.RuleMetaData>();

  rules.forEach((rule, ruleName) => {
    const { meta } = rule;
    if (meta === undefined) {
      return;
    }
    if (ruleName in versions.added) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta.version = versions.added[ruleName];
      console.log('meta.version', meta.version);
    }
    map.set(ruleName, meta);
  });

  return map;
}
