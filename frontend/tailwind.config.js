/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Asegúrate de que se incluyan los archivos de React
  ],
  darkMode: 'class',  // Esto habilita el modo oscuro por clase
  theme: {
    extend: {},
  },
  plugins: [],
}
