import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn: (warning, warn) => {
        // Suppress the "use client" directive warning from react-hot-toast
        if (warning.message && warning.message.includes('use client')) {
          return;
        }
        warn(warning);
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})