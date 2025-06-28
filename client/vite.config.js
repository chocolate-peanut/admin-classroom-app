import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
      'assets': '/src/assets',
      'components': '/src/components',
      'pages': '/src/pages',
      'utils': '/src/utils',
    },
  },
})