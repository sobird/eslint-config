/* eslint-disable no-await-in-loop */
import fs from 'node:fs/promises';
import path from 'node:path';

import { compile } from 'json-schema-to-typescript';

import { stylisticPlugin, importPlugin } from '@/configs';

import { ESlintPluginRulesToJSONSchema } from './utils';

const dir = path.join('types', 'rules');

await fs.mkdir(dir, { recursive: true });

const plugins = [
  importPlugin,
  stylisticPlugin,
];

for (const plugin of plugins) {
  const { filename } = plugin;
  const schema = ESlintPluginRulesToJSONSchema(plugin);
  const result = await compile(schema, '', { bannerComment: '/* eslint-disable */' });
  await fs.writeFile(path.join(dir, `${filename}.d.ts`), result);
}
