import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { includeIgnoreFile } from '@eslint/compat';

import type { ESLintConfigObject } from '../types';

export function gitignore(customPath: string): ESLintConfigObject {
  const possiblePaths = [
    customPath,
    path.resolve(process.cwd(), '.gitignore'),
    path.resolve(import.meta.dirname, '.gitignore'),
  ].filter(Boolean);

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      try {
        return includeIgnoreFile(p);
      } catch {
        // eslint-disable-next-line no-console
        console.warn(`Get .gitignore file error: ${p}`);
        return {};
      }
    }
  }
  return {};
}
