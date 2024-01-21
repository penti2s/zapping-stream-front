/** @type {import('tailwindcss').Config} */
export default {
  themes: ["light", "dark", "cupcake"],
  theme: {},
  plugins: [require("daisyui")],
  content: [
    './index.html',
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
  ]
}