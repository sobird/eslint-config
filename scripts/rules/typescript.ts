import { plugin } from 'typescript-eslint';

import type { Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';
import { rulesToJSONSchema } from 'scripts/utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'typescript',
  get schema(): JSONSchema4 {
    if (plugin.rules) {
      const entries = Object.entries(plugin.rules);
      return rulesToJSONSchema(new Map<string, Rule.RuleModule>(entries), '@typescript/', '');
    }
    return {};
  },
};
