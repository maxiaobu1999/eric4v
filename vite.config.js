import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from "path";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";


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
    // 自动引入组件
    Components({
      dirs: [
        'src/components'
      ],
      resolvers: [
        ElementPlusResolver()
      ],
      dts: 'src/auto-import/components.d.ts'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
