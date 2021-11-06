export const theme = {
  colors: {
    primary: {
      color: getComputedStyle(document.documentElement).getPropertyValue(
        '--color-lavender'
      ),
      contrast: getComputedStyle(document.documentElement).getPropertyValue(
        '--color-white'
      )
    },
    error: getComputedStyle(document.documentElement).getPropertyValue(
      '--color-tomato'
    ),
    success: getComputedStyle(document.documentElement).getPropertyValue(
      '--color-lime'
    ),
    warning: getComputedStyle(document.documentElement).getPropertyValue(
      '--color-orange'
    ),
    info: getComputedStyle(document.documentElement).getPropertyValue(
      '--color-blue'
    ),
    lightGrey: getComputedStyle(document.documentElement).getPropertyValue(
      '--color-light-grey'
    ),
    darkGrey: getComputedStyle(document.documentElement).getPropertyValue(
      '--color-dark-grey'
    ),
    slate: getComputedStyle(document.documentElement).getPropertyValue(
      '--color-slate'
    ),
    white: getComputedStyle(document.documentElement).getPropertyValue(
      '--color-white'
    )
  },
  fontFamily: getComputedStyle(document.documentElement).getPropertyValue(
    '--font-mono'
  )
};
