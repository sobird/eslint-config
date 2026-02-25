import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/cli.ts',
  ],
  format: ['esm', 'cjs'],
  shims: true,
  clean: true,
  dts: { resolve: false },
  treeshake: true,
  minify: true,
});
