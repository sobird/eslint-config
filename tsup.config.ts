import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  format: ['esm', 'cjs'],
  shims: true,
  clean: true,
  dts: { resolve: false },
  treeshake: true,
  minify: true,
});
