const SCRIPT_EXT = '{js,jsx,ts,tsx,cjs,cjsx,mjs,mjsx,cts,ctsx,mts,mtsx}';
const JS_EXT = '{js,jsx,cjs,mjs,cjsx,mjsx}';
const TS_EXT = '{ts,tsx,cts,mts,ctsx,mtsx}';
const JSX_EXT = '{jsx,tsx,cjsx,mjsx,ctsx,mtsx}';

export const SCRIPT_FILES = [`**/*.${SCRIPT_EXT}`];
export const JS_FILES = [`**/*.${JS_EXT}`];
export const TS_FILES = [`**/*.${TS_EXT}`];
export const JSX_FILES = [`**/*.${JSX_EXT}`];
export const YAML_FILES = ['**/*.y?(a)ml'];

export const REACT_FILES = [`**/*.${SCRIPT_EXT}`];
export const JSON_FILES = ['**/*.{json,json5,jsonc}'];
export const VUE_FILES = ['**/*.vue'];

export const TEST_FILES = [
  `**/*.{test,spec}.${SCRIPT_EXT}`,
  `test.${SCRIPT_EXT}`,
  `test-*.${SCRIPT_EXT}`,
  '**/{tests,test,__tests__,__mocks__,spec,e2e,cypress,playwright}/**/*',
];
export const CONF_FILES = [
  '**/{next,nuxt,vue,webpack,vite,rollup,tsup,jest,vitest}.config.?([cm])[jt]s',
];

export const MISC_FILES = [
  ...TEST_FILES,
  ...CONF_FILES,
];

export const EXCLUDE_FILES = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.svelte-kit',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/.yarn',
  '**/vite.config.*.timestamp-*',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
];
