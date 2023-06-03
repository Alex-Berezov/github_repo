import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import graphqlPlugin from 'vite-plugin-graphql'
import codegen from 'vite-plugin-graphql-codegen'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), graphqlPlugin, codegen()],
})
