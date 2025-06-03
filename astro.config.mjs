import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import db from '@astrojs/db';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [react(),db()],
  output: 'server',
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }
  },
  adapter: vercel()
});