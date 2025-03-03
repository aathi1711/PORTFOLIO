/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
          kanit:["Kanit", "sans-serif"],
          reem:["Reem Kufi", "sans-serif"],
          san:["Didact Gothic"," serif"],
          dedact:["Merriweather", "serif"]
      },
      animation: {
        slideIn: 'slideIn 2s ease-out forwards',
        slideOut: 'slideOut 2s ease-out forwards  ',
        fade: 'fadeIn 2s ease-in forwards',
        bouncing:'bounce 2s'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

