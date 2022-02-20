import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      powderWhite: string
      persianGreen: string
      lightBlue: string
      onyx: string
    }
    fontSizes: {
      small: string
      medium: string
      large: string
    }
    body: string
  }
}
