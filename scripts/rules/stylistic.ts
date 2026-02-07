import pluginStylistic from '@stylistic/eslint-plugin';

import type { Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';
import { rulesToJSONSchema } from 'scripts/utils';

const test = Object.entries(pluginStylistic.rules);

for (const [ruleId, ruleDefinition] of test) {
  if (ruleId === 'no-console') {
    console.log(ruleDefinition.meta.docs.description);
    // 输出: Disallow the use of console
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'stylistic',
  get schema(): JSONSchema4 {
    if (typeof pluginStylistic.rules === 'object') {
      const entries = Object.entries(pluginStylistic.rules);
      return rulesToJSONSchema(new Map<string, Rule.RuleModule>(entries), '@stylistic/', '');
    }
    return {};
  },
};
