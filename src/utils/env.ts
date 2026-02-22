import { isPackagePresent } from './isPackagePresent';

const PACKAGES = {
  typescript: ['typescript'],
  next: ['next'],
  vite: ['vite'],
  react: ['react', 'next', '@remix-run/react', '@react-router/react'],
  vue: ['vue', 'nuxt', 'vitepress', '@vue/runtime-dom'],
  remix: ['@remix-run/node', '@remix-run/react', '@remix-run/serve', '@remix-run/dev'],
  reactRouter: ['@react-router/node', '@react-router/react', '@react-router/serve', '@react-router/dev'],
  reactCompiler: ['babel-plugin-react-compiler'],
};

type PackageKey = keyof typeof PACKAGES;

const cache = new Map<PackageKey, boolean>();
export const detect = (key: PackageKey): boolean => {
  if (cache.has(key)) {
    return cache.get(key) || false;
  }

  const packages = PACKAGES[key];
  const result = packages.some(pkg => isPackagePresent(pkg));

  cache.set(key, result);
  return result;
};

export const env = {
  get isTypeScript() {
    return detect('typescript');
  },

  // framework
  get isReact() {
    return detect('react');
  },
  get isVue() {
    return detect('vue');
  },

  // react ecosystem
  get isNext() {
    return detect('next');
  },
  get isRemix() {
    return detect('remix');
  },
  get isReactRouter() {
    return detect('reactRouter');
  },
  get isReactCompiler() {
    return detect('reactCompiler');
  },
  get isVite() {
    return detect('vite');
  },
  get isFramework() {
    return this.isNext || this.isRemix || this.isReactRouter;
  },
} as const;
