import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: './lib',
  target: 'esnext',
  minify: true, // Minify output
  splitting: false,
  clean: true,
  dts: true,
  sourcemap: true,
  format: ['esm', 'cjs'],
})