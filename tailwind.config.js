/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'onest': ['var(--font-onest)', 'sans-serif'],
      },
      colors:{
        "green":"#00B795",
        "lightGreen":"#E6F8F4",
        "darkGreen":"#067460",
        "yellow":"#ffd231",
        "grey":"#475569",
        "red":"#F87171",
        "bloodRed":"#EF4444",
        "lightGrey":"#94A3B8",
        "lighterGrey": "#E2E8F0",
        scrollbar: '#FFA500', 
        scrollbarHover: '#FF8C00', 
      },
    },
  },
  plugins: [],
}