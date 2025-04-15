// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'
  
  export default defineConfig({
    shortcuts: {
      // Reusable utility groups
      'btn': 'px-4 py-2 rounded-lg font-medium transition-colors',
      'btn-primary': 'btn bg-floralPink text-white hover:bg-floralPink/90',
      'nav-link': 'text-gray-700 hover:text-floralPink transition-colors'
    },
    theme: {
      colors: {
        floralPink: '#d14d72', // Your brand color
        floralGreen: '#98fb98' // Complementary color
      }
    },
    presets: [
      presetUno(), // Core preset
      presetAttributify(), // Enable attribute mode (e.g., `<div text="xl pink">`)
      presetIcons() // For icon support
    ],
    transformers: [
      transformerDirectives(), // Enable @apply directives
      transformerVariantGroup() // For grouping variants (hover:, focus:)
    ]
  })