import type { ESLintConfigObject } from '../types';
import { gitignore } from '../utils';

export function ignores(customPath = ''): ESLintConfigObject[] {
  return [
    gitignore(customPath) as ESLintConfigObject,
  ];
}
