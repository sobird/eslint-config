/* eslint-disable no-await-in-loop */
import fs from 'node:fs/promises';
import path from 'node:path';

import { compile } from 'json-schema-to-typescript';

import eslint from './rules/eslint';

const dir = path.join('types', 'rules');

await fs.mkdir(dir, { recursive: true });


for (const item of [eslint]) {
  const { schema, name } = item;

  const result = await compile(schema, '', { bannerComment: '/* eslint-disable */' });

  await fs.writeFile(path.join(dir, `${name}.d.ts`), result);
}
