import daisyui from 'daisyui';
import flowbitePlugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        rotateFull: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotateFull: 'rotateFull 3s linear infinite',
      }
    },
  },
  plugins: [daisyui, flowbitePlugin],
}

