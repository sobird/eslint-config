import fs from 'node:fs/promises';

import nodePlugin, { type Configs } from 'eslint-plugin-n';
import { compile, type JSONSchema } from 'json-schema-to-typescript';

import { ruleMetaToJSONSchema, ArrayElementNewline } from 'scripts/rules/eslint';

// for (const item of Object.entries(nodePlugin.rules)) {
//   console.log(item[0], item[1]);
// }

const result = ruleMetaToJSONSchema();

const bigSchema: JSONSchema = {
  $schema: 'http://json-schema.org/draft-04/schema#', // 遵循JSON Schema Draft 04（ESLint标准）
  type: 'object',
  title: 'All ESLint Custom Rule Schemas',
  description: '所有ESLint自定义规则的配置项Schema，key为规则名，value为对应规则的配置Schema',
  // $defs: {
  //   ...Object.fromEntries(result.map(([name, rule]) => [name, {
  //     type: 'object',
  //     definitions: 'test',
  //     properties: {
  //       [name]: rule,
  //     },
  //     additionalProperties: false,
  //     required: [name],
  //   }])),
  // },
  // allOf: result.map(([name, rule]) => ({
  //   description: 'dddd',
  //   $ref: `#/$defs/${name}`,
  //   additionalProperties: false,
  // })),
  properties: {
    'test-multi-schema': {
      type: 'object',
      description: '测试多schema元素的规则 配置项可传字符串枚举，或对象配置',
      oneOf: [
        {
          type: 'string',
          enum: ['a', 'b', 'c'],
          description: '字符串枚举配置',
          additionalProperties: false,
        },
        {
          type: 'object',
          properties: {
            key: { type: 'string' },
            value: { type: 'number' },
          },
          description: '对象配置',
          additionalProperties: false,
        },
      ],
      additionalProperties: false,
    },
    'hello': {
      description: 'hello',
    },

    ...Object.fromEntries(result),
  }, // 核心：key=规则名，value=对应规则的schema
  additionalProperties: false, // 禁止额外的规则名，保证强类型
};


await fs.writeFile('bigSchema.json', JSON.stringify(bigSchema));

const compiled = await compile(bigSchema, 'Sobird', { bannerComment: '/* GENERATED, DO NOT EDIT DIRECTLY */' });
await fs.writeFile('test.d.ts', compiled);
