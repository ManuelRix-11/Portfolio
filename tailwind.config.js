/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        hightext: "#60F6D3",
        opalwhite: "#cbd5f6",
        opacwhite: "#8892af",
        basebg: "#0A182E"
      },
      height: {
        "0-9": "0.10rem"
      }
    },
  },
  plugins: [],
}
