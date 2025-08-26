/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme brand colors
        background: '#1A1A1A',
        foreground: '#C5B358',
        gold: '#C5B358',
        primary: {
          DEFAULT: '#C5B358',
          foreground: '#1A1A1A',
        },
        accent: {
          light: '#FFDD9E',
          dark: '#DD9200',
          DEFAULT: '#FFDD9E',
        },
        // Semantic colors based on brand palette
        card: {
          DEFAULT: '#2A2A2A',
          foreground: '#C5B358',
        },
        popover: {
          DEFAULT: '#2A2A2A',
          foreground: '#C5B358',
        },
        secondary: {
          DEFAULT: '#3A3A3A',
          foreground: '#C5B358',
        },
        muted: {
          DEFAULT: '#3A3A3A',
          foreground: '#B8B8B8',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#C5B358',
        },
        border: '#3A3A3A',
        input: '#3A3A3A',
        ring: '#C5B358',
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #FFDD9E 0%, #DD9200 100%)',
        'gradient-gold-hover': 'linear-gradient(135deg, #DD9200 0%, #FFDD9E 100%)',
        // Text-specific gold gradient using provided stops for a more realistic gold
        // Stops: #F9F295, #E0AA3E, #FAF398, #B88A44
        'gold-text': 'linear-gradient(135deg, #F9F295 0%, #E0AA3E 30%, #FAF398 60%, #B88A44 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
