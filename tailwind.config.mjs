/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        monokai: {
          bg: '#2D2A2E',
          fg: '#FCFCFA',
          red: '#FF6188',
          orange: '#FC9867',
          yellow: '#FFD866',
          green: '#A9DC76',
          blue: '#78DCE8',
          purple: '#AB9DF2',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#FCFCFA',
            a: {
              color: '#78DCE8',
              '&:hover': {
                color: '#A9DC76',
              },
            },
            h1: {
              color: '#FF6188',
            },
            h2: {
              color: '#FC9867',
            },
            h3: {
              color: '#FFD866',
            },
            h4: {
              color: '#A9DC76',
            },
            blockquote: {
              color: '#AB9DF2',
              borderLeftColor: '#AB9DF2',
            },
            strong: {
              color: '#FC9867',
            },
            code: {
              color: '#A9DC76',
              backgroundColor: 'rgba(41, 38, 42, 0.5)',
              padding: '0.25rem',
              borderRadius: '0.25rem',
            },
            pre: {
              backgroundColor: '#2D2A2E',
              code: {
                backgroundColor: 'transparent',
                color: '#FCFCFA',
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} 