/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Maven Pro', 'Sans-serif'],
          'serif': ['font-family', 'ui-serif', 'Georgia', ' Cambria', 'Times New Roman'],
        },
      },
    },
    // plugins: [
    //   require("tw-elements/dist/plugin.cjs"),
    //   require('tailwind-scrollbar')({ nocompatible: true }),
    // ],
    variants:{
      scrollbar:['rounded'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    }
  }