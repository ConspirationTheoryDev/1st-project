import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: { port: 3000 },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      routes: `${path.resolve(__dirname, './src/routes/')}`,
      store: `${path.resolve(__dirname, './src/store/')}`,
      utils: `${path.resolve(__dirname, './src/utils/')}`,
      api: `${path.resolve(__dirname, './src/api/')}`,
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      theme: `${path.resolve(__dirname, './src/theme/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
    },
  },
})
