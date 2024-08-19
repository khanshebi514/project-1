/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    extend: {

      colors:{
        "primary-black":"#000000",
        "gray-text":"#00000060",
        "text-white":"#ffffff",
        "lily-white":"#E7F9FD",
      },

      fontFamily:{
        "inter" : "Inter, sans-serif",
        "lobster" : "Lobster, sans-serif"
        
      },

      backgroundImage:{
        "white-off":"bg-gradient-to-b from-white to-white",
        "green-snake":"bg-gradient-to-b from-white to-[#6cc63f4b]",
        "black-white":"bg-gradient-to-b from-[white] to-[#00000033]",
        "thunder-bird":"bg-gradient-to-b from-white to-[#cc271b27]",
        "lily-white":"bg-gradient-to-b from-white to-[#E7F9FD]",
        
      }
    },
  },
  plugins: [],
};
