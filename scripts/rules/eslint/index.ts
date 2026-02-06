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

export function ruleMetaToJSONSchema() {
  const liner = new Linter({ configType: 'eslintrc' });
  const rules = liner.getRules();
  return [...rules].map(([ruleName, ruleModule]) => {
    const { meta } = ruleModule;
    if (!meta) {
      return [];
    }

    const oldRefPrefix = '"$ref":"#/';
    const newRefPrefix = `"$ref":"#/properties/${ruleName}/allOf/0/`;

    let ruleSchema = meta.schema;
    ruleSchema = JSON.parse(JSON.stringify(ruleSchema).replaceAll(oldRefPrefix, newRefPrefix));


    if (Array.isArray(meta.schema)) {
      const JSONSchema: Rule.RuleMetaData['schema'] = {
        description: meta.docs?.description,
        allOf: [
          {
            title: ruleName,
            type: 'array',
            items: ruleSchema,
          },
        ],
        // 'x-comment': meta.docs?.description,
      };
      return [ruleName, JSONSchema];
    }
    const JSONSchema: Rule.RuleMetaData['schema'] = {
      description: meta.docs?.description,
      allOf: [
        {
          title: ruleName,
          ...ruleSchema,
        },
      ],
    };
    return [ruleName, JSONSchema];
  });
}
