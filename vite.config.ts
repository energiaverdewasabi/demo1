import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optimización de React para producción
      babel: {
        plugins: [
          // Eliminar PropTypes en producción
          ['babel-plugin-transform-react-remove-prop-types', { removeImport: true }]
        ]
      }
    })
  ],
  
  // Optimizaciones de dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    exclude: []
  },

  // Configuración de build ultra optimizada
  build: {
    // Minificación agresiva
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },

    // Configuración de chunks para carga óptima
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk para librerías principales
          vendor: ['react', 'react-dom'],
          // Icons chunk separado para lazy loading
          icons: ['lucide-react'],
          // Form utilities
          forms: ['react-hook-form']
        },
        // Nombres de archivos optimizados
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },

    // Configuraciones adicionales de rendimiento
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,

    // Configuración de assets
    assetsInlineLimit: 4096, // Inline assets menores a 4KB
    
    // Target moderno para mejor optimización
    target: 'es2020'
  },

  // Configuración del servidor de desarrollo
  server: {
    hmr: {
      overlay: false
    },
    // Preload de módulos críticos
    warmup: {
      clientFiles: ['./src/main.tsx', './src/App.tsx']
    }
  },

  // Configuración de preview
  preview: {
    port: 4173,
    strictPort: true
  },

  // Configuración de CSS
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      // Optimizaciones de CSS
    }
  },

  // Configuración de worker
  worker: {
    format: 'es'
  }
});