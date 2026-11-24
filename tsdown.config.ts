import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  platform: 'browser',
  globalName: 'AdaptiveSingleChoice',
  outDir: 'dist',
  dts: false,
  clean: true,
  sourcemap: true,
  minify: false,
})
