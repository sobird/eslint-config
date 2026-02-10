import { gitignore } from '../utils';

import type { ESLintConfigObject } from '../types';

export function ignores(customPath = ''): ESLintConfigObject[] {
  return [
    gitignore(customPath) as ESLintConfigObject,
  ];
}
