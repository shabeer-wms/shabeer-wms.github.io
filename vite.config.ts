import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shabeer-wms.github.io/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
