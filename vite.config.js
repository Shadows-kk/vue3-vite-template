import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import copy from 'rollup-plugin-copy'
import viteCompression from 'vite-plugin-compression'
import { createSvg } from './src/components/svg/svg-plugin'
export default defineConfig((command, mode) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: '/',
    server: {
      port: 8080,
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://192.168.1.43:8088',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      extensions: ['.js', '.json', '.vue', '.jsx', '.tsx', '.ts'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/style/element/index.scss" as *;`
        }
      }
    },
    plugins: [
      vue(),
      createSvg('./src/assets/icons/'),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        directoryAsNamespace: true
      }),
      // createSvgIconsPlugin({
      //   // 指定需要缓存的图标文件夹
      //   iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      //   // 指定symbolId格式
      //   symbolId: 'icon-[dir]-[name]'
      // }),
      copy({
        targets: [
          { src: './static/js/globalConfig.js', dest: 'dist/static/js' } //执行拷贝
          // { src: './src/assets/icons', dest: 'dist/static/icons/js' } //执行拷贝
          // { src: "./index.html", dest: "build/public" },
        ],
        // rollup构建的钩子函数，目的是将两次产出的结果整合（这里是为了rollup-plugin-copy的结果不被清空）
        hook: 'writeBundle'
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      })
    ],
    build: {
      outDir: 'dist', //指定输出路径
      // 提升打包警告阈值
      chunkSizeWarningLimit: 1000,
      // 清除console和debugger
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: true
      //   }
      // },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          },
          assetFileNames: (assetInfo) => {
            var info = assetInfo.name.split('.')
            var extType = info[info.length - 1]
            if (
              /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
            ) {
              extType = 'media'
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = 'img'
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'fonts'
            }
            return `static/${extType}/[name]-[hash][extname]`
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js'
        }
      }
    }
  }
})
