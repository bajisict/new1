import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// import db from '@astrojs/db';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: node({
    mode: 'standalone' // or "middleware" if you're deploying to something like Netlify Functions
  }),
});