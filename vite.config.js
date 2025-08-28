import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase build timeout to handle large files
    rollupOptions: {
      output: {
        // Optimize chunk size
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Optimize asset handling
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
      },
    },
    // Increase chunk size warning limit
    // Add source maps for debugging
    sourcemap: false,
    // Optimize asset handling
    assetsInlineLimit: 4096, // 4KB limit for inline assets
    // Ensure public directory is copied
    copyPublicDir: true,
    // Increase build timeout
    minify: 'esbuild',
    target: 'es2015' ,
    // Performance optimizations
    reportCompressedSize: false,
    chunkSizeWarningLimit: 3000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // Server options for development
  server: {
    // Increase timeout for file operations
    fs: {
      strict: false,
    },
  },
  // Public directory handling - keep this enabled for images
  publicDir: 'public',
  // Global performance settings
  esbuild: {
    target: 'es2015',
  },
})
