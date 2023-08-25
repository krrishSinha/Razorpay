/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#02042B',
        'light-blue': '#2B84EA',
        'blue-500': '#0B72E7',
        'white': 'rgb(245,245,245)',
      },
      fontFamily: {
        'mulish': ['Mulish'],
      },
      backgroundImage: {
        'feature-pattern': "linear-gradient(180deg, rgba(74, 144, 245, 0.21) -34.7%, rgba(125, 186, 244, 0.063) 100%, rgba(125, 186, 244, 0.1295) 100%)",
      },
    },
  },
  plugins: [],
}

