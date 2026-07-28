import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

const src = new URL('./src', import.meta.url).pathname

export default defineConfig({
  server: {
    headers: {
      'Permissions-Policy': 'camera=*',
    },
  },
  plugins: [
    tanstackRouter({
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@src': `${src}`,
      '@api': `${src}/api`,
      '@view': `${src}/component/view`,
      '@layout': `${src}/component/layout`,
      '@card': `${src}/component/card`,
      '@form': `${src}/component/form`,
      '@lib': `${src}/lib`,
      '@routes': `${src}/routes`,
      '@component': `${src}/component`,
      '@modal': `${src}/component/modal`,
      '@store': `${src}/store`,
    },
  },
})
