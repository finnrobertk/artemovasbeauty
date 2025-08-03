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
        foreground: '#F2EAB8',
        primary: {
          DEFAULT: '#F2EAB8',
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
          foreground: '#F2EAB8',
        },
        popover: {
          DEFAULT: '#2A2A2A',
          foreground: '#F2EAB8',
        },
        secondary: {
          DEFAULT: '#3A3A3A',
          foreground: '#F2EAB8',
        },
        muted: {
          DEFAULT: '#3A3A3A',
          foreground: '#B8B8B8',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#F2EAB8',
        },
        border: '#3A3A3A',
        input: '#3A3A3A',
        ring: '#F2EAB8',
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #FFDD9E 0%, #DD9200 100%)',
        'gradient-gold-hover': 'linear-gradient(135deg, #DD9200 0%, #FFDD9E 100%)',
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
