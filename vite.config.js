import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/BLOG/', 
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        external: ['@fortawesome/fontawesome-free']
      },
    },
  },
})
