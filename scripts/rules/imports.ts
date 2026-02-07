import importPlugin from 'eslint-plugin-import';

import type { Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';
import { rulesToJSONSchema } from 'scripts/utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'imports',
  get schema(): JSONSchema4 {
    if (typeof importPlugin.rules === 'object') {
      const entries = Object.entries(importPlugin.rules);
      return rulesToJSONSchema(new Map<string, Rule.RuleModule>(entries), '@import/');
    }
    return {};
  },
};
