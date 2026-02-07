import type { DeprecatedInfo } from '@eslint/core';
import type { Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';

function formatDeprecation(deprecated?: DeprecatedInfo | boolean, legacyReplacedBy?: readonly string[], title?: string): string {
  let message = '';
  if (deprecated === true) {
    message = 'This rule is deprecated.';
    if (legacyReplacedBy) {
      message += ` It was replaced by ${legacyReplacedBy.join(',')}.`;
    }
  } else if (typeof deprecated === 'object') {
    const { deprecatedSince, availableUntil, replacedBy } = deprecated;
    if (typeof deprecatedSince === 'string') {
      message += `This rule was \`deprecated\` in ${title} v${deprecatedSince}.`;
    } else {
      message += 'This rule is deprecated.';
    }

    if (typeof availableUntil === 'string') {
      message += ` It will be removed in v${availableUntil}.`;
    }

    if (replacedBy && replacedBy.length > 0) {
      const names = replacedBy.map((item) => {
        const replacement: string[] = [];
        if (typeof item.rule?.name === 'string') {
          if (typeof item.rule.url === 'string') {
            replacement.push(`{@link ${item.rule.url} \`${item.rule.name}\`}`);
          } else {
            replacement.push(`\`${item.rule.name}\``);
          }
        }

        if (typeof item.plugin?.name === 'string') {
          if (typeof item.plugin.url === 'string') {
            replacement.push(`{@link ${item.plugin.url} \`${item.plugin.name}\`}`);
          } else {
            replacement.push(`\`${item.plugin.name}\``);
          }
        }

        return replacement.join(' in ');
      });
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

export function describe(meta: Rule.RuleModule['meta'], ruleName: string, title: string): string {
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

  const deprecation = formatDeprecation(deprecated, replacedBy, title);
  if (deprecation !== '') {
    desc.push(`@deprecated ${deprecation}`);
  }


  return desc.join('\n');
}


function escapeJsonPointer(str: string): string {
  return str.replace(/~/gu, '~0').replace(/\//gu, '~1');
}

export function rulesToJSONSchema(
  rules: Map<string, Rule.RuleModule>,
  namespace = '',
  description?: string,
): JSONSchema4 {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const title = namespace.trim() || 'ESLint';
  const prefix = namespace.trim();

  const entries = Array.from(rules, ([ruleName, ruleModule]) => {
    const ruleNameWithPrefix = prefix + ruleName;

    const { meta } = ruleModule;
    if (!meta) {
      return [ruleNameWithPrefix, {}];
    }

    const { schema } = meta;
    if (typeof schema !== 'object') {
      return [ruleNameWithPrefix, {}];
    }

    // replace $ref json pointer
    const oldRefPrefix = '"$ref":"#/';
    const newRefPrefix = `"$ref":"#/properties/${escapeJsonPointer(ruleNameWithPrefix)}/allOf/0/`;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const ruleSchema: JSONSchema4[] | JSONSchema4 = JSON.parse(JSON.stringify(schema).replaceAll(oldRefPrefix, newRefPrefix));

    if (Array.isArray(ruleSchema)) {
      const ruleJSONSchema: Rule.RuleMetaData['schema'] = {
        description: describe(meta, ruleName, title),
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
      return [ruleNameWithPrefix, ruleJSONSchema];
    }

    const ruleJSONSchema: Rule.RuleMetaData['schema'] = {
      description: describe(meta, ruleName, title),
      allOf: [
        {
          title: ruleName,
          ...ruleSchema,
        },
      ],
    };
    return [ruleNameWithPrefix, ruleJSONSchema];
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const properties: Record<string, JSONSchema4> = Object.fromEntries(entries);


  return {
    $schema: 'http://json-schema.org/draft-04/schema#',
    type: 'object',
    title: `${title}RuleOptions`,
    description: description ?? `ESLint rule options for ${title}`,
    properties,
    additionalProperties: false,
  };
}
