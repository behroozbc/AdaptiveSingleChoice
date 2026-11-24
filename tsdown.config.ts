import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['client/js/index.ts'],
  platform: 'browser',
  globalName: 'AdaptiveSingleChoice',
  outDir: 'dist',
  dts: false,
  clean: true,
  sourcemap: true,
  minify: false,
})
