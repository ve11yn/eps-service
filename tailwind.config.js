/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': 'var(--navy-deep)',
        'navy': 'var(--navy)',
        'brand-blue': 'var(--brand-blue)',
        'brand-blue-bright': 'var(--brand-blue-bright)',
        'soft-grey': 'var(--soft-grey)',
      },
      fontFamily: {
        'display': ['Manrope', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'float': 'float-slow 6s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      spacing: {
        // Scale down common spacing values
        'scale-1': '0.25rem',
        'scale-2': '0.5rem', 
        'scale-3': '0.75rem',
        'scale-4': '1rem',
        'scale-5': '1.25rem',
        'scale-6': '1.5rem',
        'scale-8': '2rem',
        'scale-10': '2.5rem',
        'scale-12': '3rem',
        'scale-16': '4rem',
        'scale-20': '5rem',
        'scale-24': '6rem',
        'scale-32': '8rem',
      },
      maxWidth: {
        'compact': '1024px', // Smaller max width
      },
    },
  },
  plugins: [],
}