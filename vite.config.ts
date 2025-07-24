import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // 優化構建輸出
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // 生產環境不需要 sourcemap
    
    // 代碼拆分優化
    rollupOptions: {
      output: {
        // 手動拆分 chunks
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-avatar', '@radix-ui/react-dialog'],
          utils: ['clsx', 'class-variance-authority', 'tailwind-merge']
        },
        // 優化文件命名
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name ? assetInfo.name.split('.') : [];
          let extType = info[info.length - 1];
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(assetInfo.name || '')) {
            extType = 'media';
          } else if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) {
            extType = 'images';
          } else if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash].[ext]`;
        }
      }
    },
    
    // 壓縮設置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console.log
        drop_debugger: true // 移除 debugger
      }
    },
    
    // 設置 chunk 大小警告限制
    chunkSizeWarningLimit: 1000
  },
  
  // 開發服務器優化
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  
  // 預覽服務器設置
  preview: {
    port: 4173,
    host: true
  }
})