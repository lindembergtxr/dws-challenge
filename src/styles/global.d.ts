import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        light: string
        medium: string
        dark: string
      }
      secondary: {
        light: string
        medium: string
        dark: string
      }
      accent: {
        light: string
        medium: string
        dark: string
      }
      neutral: {
        lightest: string
        extraLight: string
        light: string
        medium: string
        dark: string
        extraDark: string
        darkest: string
      }
      backgorundBlob: {
        primary: string
        secondary: string
        accent: string
      }
    }
    fontSizes: {
      xs: string
      sm: string
      base: string
      md: string
      lg: string
      xl: string
    }
    lineHeight: {
      base: number
      lg: number
    }
    fontWeight: {
      regular: number
      medium: number
      semibold: number
      bold: number
    }
    devices: {
      mobile: string
      tablet: string
      desktop: string
      widescreen: string
    }
  }
}
