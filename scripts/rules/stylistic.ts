import pluginStylistic from '@stylistic/eslint-plugin';

import type { Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';
import { rulesToJSONSchema } from 'scripts/utils';

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
