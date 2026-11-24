// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mmp-tienda.online',
  image: {
    domains: ['i.ibb.co', 'images.unsplash.com'],
    remotePatterns: [
      { protocol: 'https', hostname: '**.ibb.co' }
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});