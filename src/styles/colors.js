/* eslint-disable key-spacing */

const palette = {
  white: '#FFFFFF',
  blue: '#1395BA'
}

const loadComponentColors = () => {
  return {
    navbarBackground: palette.blue
  }
}

export const color = (componentName) => {
  let componentColors

  if (!componentColors) {
    componentColors = loadComponentColors()
  }

  if (!componentColors[componentName]) {
    throw new Error(`Component color "${componentName}" does not exist.`)
  }

  return componentColors[componentName]
}
