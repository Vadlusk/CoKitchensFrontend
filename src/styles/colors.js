/* eslint-disable key-spacing */

const palette = {
  white: '#FFFFFF'
}

const loadComponentColors = () => {
  return {
    background: palette.white
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
