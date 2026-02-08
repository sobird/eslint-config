import fs from 'node:fs';
import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';

import type { Rule } from 'eslint';

export function renameRules(rules: Record<string, unknown> | object, from: string, to: string) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        if (key.startsWith(from)) {
          return [to + key.slice(from.length), value];
        }
        return [key, value];
      }),
  );
}

export function allRules(rules: Record<string, Rule.RuleModule>, namespace = '') {
  return Object.fromEntries(Object.entries(rules).map(([key]) => [`${namespace}${key}`, 'error']));
}
export function gitignore(customPath: string) {
  const possiblePaths = [
    customPath,
    path.resolve(process.cwd(), '.gitignore'),
    path.resolve(import.meta.dirname, '.gitignore'),
  ].filter(Boolean);

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      try {
        return includeIgnoreFile(p);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(`Get .gitignore file error: ${p}`);
        return {};
      }
    }
  }
  return {};
}
