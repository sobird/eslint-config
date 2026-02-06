import nodePlugin from 'eslint-plugin-n';

import type { Rule } from 'eslint';
import { rulesToJSONSchema } from 'scripts/utils';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'node',
  get schema() {
    if (nodePlugin.rules) {
      const entries = Object.entries(nodePlugin.rules);
      return rulesToJSONSchema(new Map<string, Rule.RuleModule>(entries), 'Node', '');
    }
  },
};
