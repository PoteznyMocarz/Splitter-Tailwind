/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        'white-neutral': 'hsl(0, 0%, 100%)',
        'opacity-color': 'rgba(255, 0, 0, 0)'
      },
      fontFamily: {
        SpaceMono: "'Space Mono', monospace;"
      }
    },
  },
  plugins: [],
}

