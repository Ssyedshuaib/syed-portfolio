import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter Tight', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: '#0B1116',
        foreground: '#EAE0C8',
        card: {
          DEFAULT: 'rgba(83, 104, 120, 0.06)',
          foreground: '#EAE0C8',
        },
        popover: {
          DEFAULT: '#0B1116',
          foreground: '#EAE0C8',
        },
        primary: {
          DEFAULT: '#EAE0C8',
          foreground: '#0B1116',
        },
        secondary: {
          DEFAULT: '#536878',
          foreground: '#EAE0C8',
        },
        muted: {
          DEFAULT: 'rgba(83, 104, 120, 0.4)',
          foreground: 'rgba(234, 224, 200, 0.6)',
        },
        accent: {
          DEFAULT: 'rgba(83, 104, 120, 0.12)',
          foreground: '#EAE0C8',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'rgba(234, 224, 200, 0.08)',
        input: 'rgba(83, 104, 120, 0.15)',
        ring: '#536878',
        sidebar: {
          DEFAULT: '#0B1116',
          foreground: '#EAE0C8',
          primary: '#EAE0C8',
          'primary-foreground': '#0B1116',
          accent: 'rgba(83, 104, 120, 0.1)',
          'accent-foreground': '#EAE0C8',
          border: 'rgba(234, 224, 200, 0.08)',
          ring: '#536878',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'scroll-down': 'scroll-down 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;