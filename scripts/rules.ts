/* eslint-disable no-await-in-loop */
import fs from 'node:fs/promises';
import path from 'node:path';

import { compile } from 'json-schema-to-typescript';

import { ESlintPluginRulesToJSONSchema } from './utils';
import {
  JAVASCRIPT,
  IMPORT,
  JSONC,
  NEXT,
  NODE,
  REACT,
  REACT_HOOKS,
  STYLISTIC,
  TYPESCRIPT,
  VUE,
} from '../src/configs';

const dir = path.join('src', 'types', 'rules');

await fs.mkdir(dir, { recursive: true });

const plugins = [
  JAVASCRIPT,
  IMPORT,
  STYLISTIC,
  NODE,
  TYPESCRIPT,
  REACT,
  REACT_HOOKS,
  NEXT,
  JSONC,
  VUE,
];

for (const plugin of plugins) {
  const { meta: { title } } = plugin;
  const schema = ESlintPluginRulesToJSONSchema(plugin);
  const result = await compile(schema, '', { bannerComment: '/* eslint-disable */' });
  await fs.writeFile(path.join(dir, `${title.toLowerCase()}.d.ts`), result);
}
