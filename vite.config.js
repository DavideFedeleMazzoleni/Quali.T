import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
const projectRoot = fileURLToPath(new URL('.', import.meta.url))
export default defineConfig({
  plugins: [vue()],
  build: { rollupOptions: { input: {
    index: resolve(projectRoot, 'index.html'),
    home: resolve(projectRoot, 'home.html'),
    app: resolve(projectRoot, 'app.html')
  } } }
})
