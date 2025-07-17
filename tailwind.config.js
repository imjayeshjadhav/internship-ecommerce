module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem', // 1280px
      },
      animation: {
        'bounce-slow': 'bounce 2.5s infinite',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // npm install tailwind-scrollbar-hide
  ],
}; 