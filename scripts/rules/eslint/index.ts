import { Linter, type Rule } from 'eslint';

import versions from './versions.json';
import type { JSONSchema4 } from 'json-schema';
import { rulesToJSONSchema } from 'scripts/utils';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'eslint',
  get schema(): JSONSchema4 {
    const liner = new Linter({ configType: 'eslintrc' });
    const rules = liner.getRules();
    const { added } = versions;

    const entries = Array.from(rules, ([ruleName, ruleModel]) => {
      if (ruleName in added) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        const version = added[ruleName as keyof typeof added];
        Object.assign(ruleModel.meta ?? {}, { version });
      }

      return [ruleName, ruleModel] as const;
    });

    return rulesToJSONSchema(new Map<string, Rule.RuleModule>(entries));
  },
};
