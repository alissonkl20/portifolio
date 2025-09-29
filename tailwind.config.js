/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
        'slide-in-left': 'slideInFromLeft 0.8s ease-out',
        'slide-in-right': 'slideInFromRight 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'shake': 'shake 0.5s ease-in-out',
        'zoom-in': 'zoomIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'neon-glow': {
          '0%': {
            'text-shadow': '0 0 5px #ff6600, 0 0 10px #ff6600, 0 0 15px #ff6600',
            'box-shadow': '0 0 5px #ff6600, 0 0 10px #ff6600',
          },
          '100%': {
            'text-shadow': '0 0 10px #ff6600, 0 0 20px #ff6600, 0 0 30px #ff6600',
            'box-shadow': '0 0 10px #ff6600, 0 0 20px #ff6600, 0 0 30px #ff6600',
          },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      },
      colors: {
        // Light theme colors
        'light-orange': '#ff6600',
        'light-blue': '#0066cc',
        'light-bg': '#ffffff',
        'light-card': '#f8fafc',
        
        // Dark theme colors
        'dark-red': '#ff0000',
        'dark-bg': '#000000',
        'dark-card': '#1a1a1a',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}