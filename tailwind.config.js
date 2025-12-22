/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sp-charcoal': '#0F1115',
        'sp-slate': '#161A22',
        'sp-footer': '#0B0D12',
        'sp-text-light': '#F5F7FA',
        'sp-text-muted': '#9AA0A6',
        'sp-accent': '#5B6CFF',
        'sp-border': '#2A2F3A',
        'sp-mint': '#6EE7B7',
      },
    },
  },
  plugins: [],
};
