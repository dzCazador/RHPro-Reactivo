import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/rhpro': {
      target: 'http://sd-1891194-w.ferozo.com:4001',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/rhpro/, ''),
    },
  },
})
