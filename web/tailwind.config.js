module.exports = {
  content: ["./src/**/*.{html,tsx,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8757e6',

        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
