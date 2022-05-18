module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rightleft: {
          '0%, 100%': {transform: `translateX(0)`},
          '50%': {transform: `translateX(3em)`},
        },
      },
      colors: {
       'underline-red': '#DF0000'
      },
      spacing: {
        '112': '27rem',
        'bigger': '40rem',
      },
      brightness: {
        500:'500',
      },
      fontFamily: {
        dreaming: ["Dreaming In The Moonlight", "cursive"],
      },
    },
    },
  plugins: [],
}
