/* eslint-disable no-await-in-loop */
import fs from 'node:fs/promises';
import path from 'node:path';

import { compile } from 'json-schema-to-typescript';

import {
  stylisticPlugin,
  importPlugin,
  eslintPlugin,
  typescriptPlugin,
  nodePlugin,
  reactPlugin,
} from '@/configs';

import { ESlintPluginRulesToJSONSchema } from './utils';

const dir = path.join('src', 'types', 'rules');

await fs.mkdir(dir, { recursive: true });

const plugins = [
  eslintPlugin,
  importPlugin,
  stylisticPlugin,
  nodePlugin,
  typescriptPlugin,
  reactPlugin,
];

for (const plugin of plugins) {
  const { meta: { title } } = plugin;
  const schema = ESlintPluginRulesToJSONSchema(plugin);
  const result = await compile(schema, '', { bannerComment: '/* eslint-disable */' });
  await fs.writeFile(path.join(dir, `${title.toLowerCase()}.d.ts`), result);
}
