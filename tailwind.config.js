module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '540px',
      },
      colors: {
        primary: '#596E07',
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
