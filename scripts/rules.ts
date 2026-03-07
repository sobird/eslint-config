/* eslint-disable no-await-in-loop */
import fs from 'node:fs/promises';
import path from 'node:path';

import { compile } from 'json-schema-to-typescript';

import {
  COMMENTS,
  IMPORT,
  JAVASCRIPT,
  JSONC,
  JSX_A11Y,
  MARKDOWN,
  NEXT,
  NODE,
  PERFECTIONIST,
  REACT,
  REACT_HOOKS,
  REACT_REFRESH,
  STYLISTIC,
  TOML,
  TYPESCRIPT,
  VUE,
  YAML,
} from '../src/configs';
import { ESlintPluginRulesToJSONSchema } from './utils';

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
  REACT_REFRESH,
  JSX_A11Y,
  NEXT,
  JSONC,
  VUE,
  YAML,
  TOML,
  MARKDOWN,
  COMMENTS,
  PERFECTIONIST,
];

for (const plugin of plugins) {
  const { meta: { title } } = plugin;
  const schema = ESlintPluginRulesToJSONSchema(plugin);
  const result = await compile(schema, '', { bannerComment: '/* GENERATED, DO NOT EDIT DIRECTLY */' });
  await fs.writeFile(path.join(dir, `${title.toLowerCase()}.d.ts`), result);
}
