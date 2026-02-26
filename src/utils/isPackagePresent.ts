import { createRequire } from 'node:module';

const req = createRequire(import.meta.url);

export function isPackagePresent(name: string, fromPath: string = process.cwd()): boolean {
  try {
    req.resolve(name, { paths: [fromPath] });
    return true;
  } catch {
    return false;
  }
}
