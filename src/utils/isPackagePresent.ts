import { createRequire } from 'node:module';
import process from 'node:process';

const _require = createRequire(import.meta.url);

export function isPackagePresent(name: string, fromPath: string = process.cwd()): boolean {
  try {
    _require.resolve(`${name}`, { paths: [fromPath] });
    return true;
  } catch {
    return false;
  }
}
