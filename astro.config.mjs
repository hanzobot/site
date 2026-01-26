import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hanzo.bot',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
