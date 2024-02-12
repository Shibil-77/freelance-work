/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom color definitions here
        'primary': '#ffff',
        'secondary': '#00b7aa',
        'text-color':'#333e48'
      },
      container: {
        center: true,
        padding: '5rem', // You can adjust the padding as needed
      }
    },
  },
  plugins: [],
}