import importPlugin from 'eslint-plugin-import';

import type { Rule } from 'eslint';
import { rulesToJSONSchema } from 'scripts/utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'imports',
  get schema() {
    if (typeof importPlugin.rules === 'object') {
      const entries = Object.entries(importPlugin.rules);
      return rulesToJSONSchema(new Map<string, Rule.RuleModule>(entries), 'ESLint-plugin-import', '');
    }
  },
};
