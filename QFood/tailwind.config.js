/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db', // Màu xanh chủ đạo
        secondary: '#2980b9', // Màu xanh đậm hơn cho hover
        background: '#ecf0f1', // Màu nền nhẹ
        text: '#333333', // Màu chữ đen
      }
    },
  },
  plugins: [],
}

