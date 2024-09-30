import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Escuela Técnica N°12',
        short_name: 'ET12',
        description: 'App Oficial de Escuela Técnica N°12 ',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },

      // Esta opción asegura que se generen los archivos
      devOptions: {
        enabled: true, // Habilita el plugin también en desarrollo
      },
    }),
  ],
});
