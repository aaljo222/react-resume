import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        exports: 'auto', // default와 named export 혼용 처리
      },
    },
  },
});
