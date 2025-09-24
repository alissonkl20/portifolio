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
            'text-shadow': '0 0 5px #6C63FF, 0 0 10px #6C63FF, 0 0 15px #6C63FF',
            'box-shadow': '0 0 5px #6C63FF, 0 0 10px #6C63FF',
          },
          '100%': {
            'text-shadow': '0 0 10px #6C63FF, 0 0 20px #6C63FF, 0 0 30px #6C63FF',
            'box-shadow': '0 0 10px #6C63FF, 0 0 20px #6C63FF, 0 0 30px #6C63FF',
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
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
      },
      colors: {
        'neon-purple': '#6C63FF',
        'neon-pink': '#FF6584',
        'neon-blue': '#00D4FF',
        'neon-green': '#00FF88',
        'space-black': '#0F0F1C',
        'space-blue': '#1A1A2E',
        'space-purple': '#16213E',
        'cosmic-purple': '#2D1B69',
        'galaxy-blue': '#1C1C3C',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      boxShadow: {
        'neon': '0 0 10px #6C63FF, 0 0 20px #6C63FF',
        'neon-lg': '0 0 20px #6C63FF, 0 0 40px #6C63FF, 0 0 60px #6C63FF',
        'neon-purple': '0 0 10px #6C63FF, 0 0 20px #6C63FF, 0 0 40px #6C63FF',
        'neon-pink': '0 0 10px #FF6584, 0 0 20px #FF6584, 0 0 40px #FF6584',
        'neon-blue': '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 40px #00D4FF',
        'glow': '0 0 30px rgba(108, 99, 255, 0.5)',
        'space': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      textShadow: {
        'neon': '0 0 5px #6C63FF, 0 0 10px #6C63FF',
        'neon-lg': '0 0 10px #6C63FF, 0 0 20px #6C63FF, 0 0 30px #6C63FF',
      },
      gradientColorStops: {
        'space-start': '#0F0F1C',
        'space-end': '#2D1B69',
        'cosmic-start': '#1C1C3C',
        'cosmic-end': '#6C63FF',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionDelay: {
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
      rotate: {
        '15': '15deg',
        '30': '30deg',
        '60': '60deg',
      },
      skew: {
        '15': '15deg',
        '30': '30deg',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
        },
        '.text-shadow-lg': {
          textShadow: '0 15px 30px rgba(0, 0, 0, 0.11), 0 5px 15px rgba(0, 0, 0, 0.08)',
        },
        '.text-shadow-xl': {
          textShadow: '0 20px 40px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(0, 0, 0, 0.06)',
        },
        '.text-shadow-2xl': {
          textShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.neon-text': {
          textShadow: '0 0 5px #6C63FF, 0 0 10px #6C63FF, 0 0 15px #6C63FF, 0 0 20px #6C63FF',
        },
        '.neon-text-pink': {
          textShadow: '0 0 5px #FF6584, 0 0 10px #FF6584, 0 0 15px #FF6584, 0 0 20px #FF6584',
        },
        '.neon-text-blue': {
          textShadow: '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF, 0 0 20px #00D4FF',
        },
        '.glow-effect': {
          boxShadow: '0 0 20px #6C63FF, 0 0 40px #6C63FF, 0 0 60px #6C63FF',
        },
        '.space-gradient': {
          background: 'linear-gradient(135deg, #0F0F1C 0%, #2D1B69 50%, #1C1C3C 100%)',
        },
        '.cosmic-gradient': {
          background: 'linear-gradient(135deg, #1C1C3C 0%, #6C63FF 50%, #00D4FF 100%)',
        },
        '.astronaut-gradient': {
          background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 50%, #00D4FF 100%)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};