import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const ogOrigin = (process.env.VITE_OG_ORIGIN ?? 'https://dizzledigital.com').replace(/\/$/, '');

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'inject-og-origin',
      transformIndexHtml(html: string) {
        return html.replaceAll('%OG_ORIGIN%', ogOrigin);
      },
    },
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
});
