import { plugin } from 'typescript-eslint';

import type { Rule } from 'eslint';
import { rulesToJSONSchema } from 'scripts/utils';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'typescript',
  get schema() {
    if (plugin.rules) {
      const entries = Object.entries(plugin.rules);
      return rulesToJSONSchema(new Map<string, Rule.RuleModule>(entries), 'Typescript-ESLint', '');
    }
  },
};
