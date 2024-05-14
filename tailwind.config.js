/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-image': "url('./public/podcastbg.webp')",
        'opacity-30': 'rgba(0, 0, 0, 0.3)',
      }),
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        xxl: "1.5rem",
        xxxl: "1.875rem",
        ivxl: "2.25rem",
        vxl: "3rem",
        vixl: "4rem",
      },

    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.pseudo::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: '-1',
         
        }
      }
      addUtilities(newUtilities, ['before'])
    }
  ],
}

