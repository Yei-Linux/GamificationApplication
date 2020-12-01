const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  ...defaultTheme,
  theme: {
    flex: {
      ...defaultTheme.flex,
      grow: "0.7 0",
      shrink: "0 1",
      height: "20rem"
    },
    extend: {
      fontFamily: {
        'condensed': ["'Open Sans Condensed'", 'sans-serif'],
        'ptsans': ["'PT Sans'", 'sans-serif'],
        'indiecustom': ["'Indie Flower'", 'cursive']
      },
      backgroundColor: {
        'mainvariant': "#7f9cf5",
        'darkvariant': "#141c3a",
        'transparentvariant': "#fffffff5"
      },
      borderColor: {
        'dark': "#141c3a",
        'ocendark': "#007ea7"
      },
      borderRadius: {
        'circle': "7em"
      },
      textColor: {
        "mainvariant": "#7f9cf5",
        "secondaryvariant": "#4fd1c5",
        "thirdvariant": "#f6ad55",
        "fourthvariant": "#ffff3f",
        "darkvariant": "#141c3a"
      },
      height: {
        'small': "3rem",
        'normal': "4rem",
        xs: "20rem"
      },
      width: {
        'small': "3rem",
        'normal': "4rem",
        80: "25rem",
        90: "30rem",
        "fit": "fit-content"
      },
      minHeight: {
        "screen-80": "80vh"
      }
    }
  }
}