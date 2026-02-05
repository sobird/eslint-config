// https://github.com/eslint-stylistic/eslint-stylistic/blob/main/scripts/update/schema-to-ts.ts
import fs from 'node:fs/promises';

import camelcase from 'camelcase';
import { Linter, ESLint, type Rule } from 'eslint';
import { compile } from 'json-schema-to-typescript';
import { format } from 'prettier';

import { getRuleMetaData } from './eslint';

export async function convertRuleModuleToDts(ruleMeta: Rule.RuleMetaData, ruleName: string) {
  const messageIds = Object.keys(ruleMeta.messages ?? {});
  const { schema } = ruleMeta;
  if (schema === false || schema === undefined) {
    return;
  }
  const schemas = Array.isArray(schema) ? schema : [schema];

  const RuleName = camelcase(ruleName, { pascalCase: true });

  console.log('schemas', schemas);
  const options = await Promise.all(schemas.map(async (ruleSchema, index) => {
    // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-unsafe-assignment
    ruleSchema = JSON.parse(JSON.stringify(ruleSchema).replace(/#\/items\/0\/\$defs\//gu, '#/$defs/'));
    const RuleTypeName = `${RuleName}Schema${index}`;

    try {
      const compiled = await compile(ruleSchema, RuleTypeName, { bannerComment: '' });
      return [RuleTypeName, compiled] as const;
    } catch {
      console.warn(`Failed to compile schema Schema${index} for rule ${ruleName}. Falling back to unknown.`);
      return [RuleTypeName, `export type ${RuleTypeName} = unknown\n`] as const;
    }
  }));
  // console.log('options', options);
  const map = new Map(options);


  const ruleOptionTypeValue = Array.isArray(schema)
    ? `[${[...map.keys()].join(', ')}]`
    : schema
      ? `${RuleName}Schema0`
      : '[]';


  const lines = [
    ...map.values(),
    `export type ${RuleName}RuleOptions = ${ruleOptionTypeValue}`,
    '',
    `export type RuleOptions = ${RuleName}RuleOptions`,
    `export type MessageIds = ${messageIds.map(i => `'${i}'`).join(' | ') || 'never'}`,
    '',
  ];
  // console.log(lines.join('\n'));

  const formatted = await format(lines.join('\n'), {
    parser: 'typescript',
    printWidth: 60,
    singleQuote: true,
    semi: false,
  });
  console.log('formatted', formatted);
}

const eslintRuleMetaData = getRuleMetaData();

console.log('first', eslintRuleMetaData.keys());
for (const [ruleName, ruleMeta] of eslintRuleMetaData) {
  await convertRuleModuleToDts(ruleMeta, ruleName);
}
