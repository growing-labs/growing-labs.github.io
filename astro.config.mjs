import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.growing-labs.com',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});