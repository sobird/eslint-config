import type { DeprecatedInfo } from '@eslint/core';
import type { Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';

function formatDeprecation(deprecated?: DeprecatedInfo | boolean, legacyReplacedBy?: readonly string[]): string {
  let message = '';
  if (deprecated === true) {
    message = 'This rule is deprecated.';
    if (legacyReplacedBy) {
      message += ` It was replaced by ${legacyReplacedBy.join(',')}.`;
    }
  } else if (typeof deprecated === 'object') {
    const { deprecatedSince, availableUntil, replacedBy } = deprecated;
    if (typeof deprecatedSince === 'string') {
      message += `This rule was \`deprecated\` in ESLint v${deprecatedSince}.`;
    } else {
      message += 'This rule is deprecated.';
    }

    if (typeof availableUntil === 'string') {
      message += ` It will be removed in v${availableUntil}.`;
    }

    if (replacedBy && replacedBy.length > 0) {
      const names = replacedBy.map(item => [`{@link ${item.rule?.url} ${item.rule?.name}}`, `{@link ${item.plugin?.url} ${item.plugin?.name}}`].join(' in '));
      message += ` Please use the ${names.join(',')} rule instead.`;
    } else {
      message += ' There is no replacement rule.';
    }

    if (typeof deprecated.url === 'string') {
      message += ` {@link ${deprecated.url} Learn more}`;
    }
  }
  return message;
}

export function describe(meta: Rule.RuleModule['meta'], ruleName: string): string {
  if (!meta) {
    return '';
  }
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  const { docs, deprecated, replacedBy } = meta;

  const desc: string[] = [];
  desc.push(docs?.description?.replace(/\*\/`/gu, '*\\/`') ?? '');
  desc.push('');
  if (meta.version !== undefined) {
    desc.push(`@since v${meta.version}`);
  }

  desc.push(`@see {@link ${docs?.url} ${ruleName}}`);

  const deprecation = formatDeprecation(deprecated, replacedBy);
  if (deprecation !== '') {
    desc.push(`@deprecated ${deprecation}`);
  }


  return desc.join('\n');
}

export function rulesToJSONSchema(rules: Map<string, Rule.RuleModule>, title: string, description: string): JSONSchema4 {
  const entries = Array.from(rules, ([ruleName, ruleModule]) => {
    const { meta } = ruleModule;
    if (!meta) {
      return [ruleName, {}];
    }

    const { schema } = meta;
    if (typeof schema !== 'object') {
      return [ruleName, {}];
    }

    // replace $ref json pointer
    const oldRefPrefix = '"$ref":"#/';
    const newRefPrefix = `"$ref":"#/properties/${ruleName}/allOf/0/`;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const ruleSchema: JSONSchema4[] | JSONSchema4 = JSON.parse(JSON.stringify(schema).replaceAll(oldRefPrefix, newRefPrefix));

    if (Array.isArray(ruleSchema)) {
      const ruleJSONSchema: Rule.RuleMetaData['schema'] = {
        description: describe(meta, ruleName),
        allOf: [
          {
            title: ruleName,
            type: 'array',
            items: ruleSchema,
            minItems: ruleSchema.length,
            maxItems: ruleSchema.length,
          },
        ],
      };
      return [ruleName, ruleJSONSchema];
    }

    const ruleJSONSchema: Rule.RuleMetaData['schema'] = {
      description: describe(meta, ruleName),
      allOf: [
        {
          title: ruleName,
          ...ruleSchema,
        },
      ],
    };
    return [ruleName, ruleJSONSchema];
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const properties: Record<string, JSONSchema4> = Object.fromEntries(entries);

  return {
    $schema: 'http://json-schema.org/draft-04/schema#',
    type: 'object',
    title: `${title}RuleOptions`,
    description,
    properties,
    additionalProperties: false,
  };
}
