import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[dir]-[name]'
    }),
    // 自动引入内容
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
      dirs: [
        'src/hooks/**',
        'src/stores/**',
        'src/utils/**'
      ],
      resolvers: [
        // ElementPlusResolver()
      ],
      dts: 'src/auto-import/imports.d.ts',
      eslintrc: {
        enabled: false
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
