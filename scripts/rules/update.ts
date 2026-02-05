/* eslint-disable no-await-in-loop */
// https://github.com/eslint-stylistic/eslint-stylistic/blob/main/scripts/update/schema-to-ts.ts
import fs from 'node:fs/promises';
import path from 'node:path';

import camelcase from 'camelcase';
import { compile } from 'json-schema-to-typescript';
import { format } from 'prettier';

import { getRuleMetaData } from './eslint';
import type { Rule } from 'eslint';

export const GEN_HEADER = '/* GENERATED, DO NOT EDIT DIRECTLY */';

export async function convertRuleModuleToDts(ruleMeta: Rule.RuleMetaData, ruleName: string) {
  const { schema } = ruleMeta;
  if (schema === false || schema === undefined) {
    return '';
  }
  const schemas = Array.isArray(schema) ? schema : [schema];

  const RuleName = camelcase(ruleName, { pascalCase: true });

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
  const map = new Map(options);

  const ruleOptionTypeValue = `[${[...map.keys()].join(', ')}]`;

  const lines = [
    GEN_HEADER,
    '',
    ...map.values(),
    `export type ${RuleName}RuleOptions = ${ruleOptionTypeValue}`,
    '',
  ];


  return await format(lines.join('\n'), {
    parser: 'typescript',
    printWidth: 60,
    singleQuote: true,
    semi: true,
  });
}

async function test() {
  const eslintRuleMetaData = getRuleMetaData();

  const lines: string[] = [];
  const dir = path.join('types', 'rules', 'eslint');

  const dddd: string[] = [];

  for (const [ruleName, ruleMeta] of eslintRuleMetaData) {
    const result = await convertRuleModuleToDts(ruleMeta, ruleName);

    await fs.mkdir(dir, { recursive: true });

    await fs.writeFile(path.join(dir, `${ruleName}.d.ts`), result);

    const RuleName = camelcase(ruleName, { pascalCase: true });

    lines.push(`import type { ${RuleName}RuleOptions } from './${ruleName}';`);


    dddd.push(...[
      '  /**',
        `   * ${ruleMeta.docs?.description?.replace(/\*\/`/gu, '*\\/`') ?? ''}`,
        '   *',
        `   * @since ${ruleMeta.version}`,
        `   * @see {@link ${ruleMeta.docs?.url} ${ruleName}}`,
    ]);

    //     {
    //   message: 'Formatting rules are being moved out of ESLint core.',
    //   url: 'https://eslint.org/blog/2023/10/deprecating-formatting-rules/',
    //   deprecatedSince: '8.53.0',
    //   availableUntil: '11.0.0',
    //   replacedBy: [
    //     {
    //       message: 'ESLint Stylistic now maintains deprecated stylistic core rules.',
    //       url: 'https://eslint.style/guide/migration',
    //       plugin: [Object],
    //       rule: [Object]
    //     }
    //   ]
    // }

    //   {
    //   message: 'ESLint Stylistic now maintains deprecated stylistic core rules.',
    //   url: 'https://eslint.style/guide/migration',
    //   plugin: { name: '@stylistic/eslint-plugin', url: 'https://eslint.style' },
    //   rule: {
    //     name: 'yield-star-spacing',
    //     url: 'https://eslint.style/rules/yield-star-spacing'
    //   }
    // }
    if (ruleMeta.deprecated) {
      const replacedBy = (ruleMeta.deprecated.replacedBy ?? [])[0];
      dddd.push('   * @deprecated');
      dddd.push('   *');
      dddd.push('   * ⚠️ **Important**');
      dddd.push('   *');
      dddd.push(`   * This rule was \`deprecated\` in ESLint v${ruleMeta.deprecated?.deprecatedSince}. It will be removed in v${ruleMeta.deprecated?.availableUntil}.`);
      dddd.push(`   * Please use the {@link ${replacedBy?.rule?.url} ${replacedBy?.rule?.name} rule}  in {@link ${replacedBy?.plugin?.url} ${replacedBy?.plugin?.name}}.`);
      dddd.push('   *');
      dddd.push(`   * {@link ${ruleMeta.deprecated?.url} Learn more}`);
    }
    dddd.push(...['   */',
        `  '${ruleName}': ${RuleName}RuleOptions;`]);
  }

  lines.push('');
  lines.push('export interface RuleOptions {');
  lines.push(...dddd);
  lines.push('}');
  lines.push('');

  // console.log('dddd', dddd);
  await fs.writeFile(path.join(dir, 'index.d.ts'), lines.join('\n'));
}
test();
