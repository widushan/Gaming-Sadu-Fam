import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-main': 'var(--color-bg-main)',
        'bg-section': 'var(--color-bg-section)',
        'bg-card': 'var(--color-bg-card)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          soft: 'var(--color-primary-soft)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          soft: 'var(--color-secondary-soft)',
        },
        heading: 'var(--color-heading)',
        body: 'var(--color-body)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      fontSize: {
        h1: ['var(--text-h1)', { lineHeight: 'var(--text-h1--line-height)', fontWeight: 'var(--text-h1--font-weight)' }],
        h2: ['var(--text-h2)', { lineHeight: 'var(--text-h2--line-height)', fontWeight: 'var(--text-h2--font-weight)' }],
        h3: ['var(--text-h3)', { lineHeight: 'var(--text-h3--line-height)', fontWeight: 'var(--text-h3--font-weight)' }],
        h4: ['var(--text-h4)', { lineHeight: 'var(--text-h4--line-height)', fontWeight: 'var(--text-h4--font-weight)' }],
        'body-lg': ['var(--text-body-lg)', { lineHeight: 'var(--text-body-lg--line-height)' }],
        body: ['var(--text-body)', { lineHeight: 'var(--text-body--line-height)' }],
        'body-sm': ['var(--text-body-sm)', { lineHeight: 'var(--text-body-sm--line-height)' }],
        caption: ['var(--text-caption)', { lineHeight: 'var(--text-caption--line-height)' }],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
      },
    },
  },
  plugins: [],
} satisfies Config;
