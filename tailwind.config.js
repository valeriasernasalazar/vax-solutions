/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fa',
          100: '#dae3f3',
          200: '#bccbe6',
          300: '#93a9d4',
          400: '#6a82bd',
          500: '#4c62a7',
          600: '#3c4e89', // Azul marino similar al logo
          700: '#192550', // Color principal del logo
          800: '#10193a',
          900: '#0a1029',
          950: '#050816',
          DEFAULT: '#192550',
        },
        secondary: {
          50: '#eefafd',
          100: '#d4f2fa',
          200: '#afe6f5',
          300: '#7bd4ee',
          400: '#3dbae0',
          500: '#1ca0ca',
          600: '#167fa2',
          700: '#186684',
          800: '#1a546c',
          900: '#19465c',
          950: '#0c2a38',
          DEFAULT: '#3dbae0',
        },
        accent: {
          50: '#f2f7fb',
          100: '#e0ecf6',
          200: '#c6dded',
          300: '#a0c5de',
          400: '#72a5cc',
          500: '#4f86ba',
          600: '#3f6c9d',
          700: '#365781',
          800: '#2f4a69',
          900: '#2a3e59',
          950: '#1b283b',
          DEFAULT: '#4f86ba',
        },
        background: '#f8fafc',
        foreground: '#0f172a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(25, 37, 80, 0.15)',
        'glass-hover': '0 8px 32px 0 rgba(25, 37, 80, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
      }
    }
  },
  plugins: []
}