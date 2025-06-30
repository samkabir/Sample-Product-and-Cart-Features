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
      colors:{
        "green":"#00B795",
        "darkGreen":"#2a985d",
        "newGreen":"#16A637",
        "orange":"#FFA500",
        "lightOrange":"#fff5d1",
        "yellow":"#ffd231",
        "darkYellow":"#ffc700",
        "lighterGrey":"#f7f7f7",
        "grey":"#475569",
        "lightGrey":"#EAEAEA",
        "darkGrey":"#0F172A",
        "red":"#f3274c",
        "darkRed":"#94122a",
        "lightBlack":"#363636",
        scrollbar: '#FFA500', 
        scrollbarHover: '#FF8C00', 
      },
    },
  },
  plugins: [],
}