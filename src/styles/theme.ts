import type { DefaultTheme } from 'styled-components'

export const devices: DefaultTheme['devices'] = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
  widescreen: '1440px',
} as const

export const theme = {
  colors: {
    primary: {
      light: '#0B0E3A',
      medium: '#060725',
      dark: '#020318',
    },
    secondary: {
      light: '#EF4C84',
      medium: '#D31450',
      dark: '#8C1038',
    },
    accent: {
      light: '#00BFC1',
      medium: '#009598',
      dark: '#006C6E',
    },
    neutral: {
      lightest: '#F0F0F2',
      extraLight: '#E0E2E6',
      light: '#C0C2C8',
      medium: '#9EA0A5',
      dark: '#7F8185',
      extraDark: '#5E5F63',
      darkest: '#202122',
    },
    backgorundBlob: {
      primary: '#91A7E0',
      secondary: '#F098BB',
      accent: '#93E6E9',
    },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.25rem',
    lg: '2.25rem',
    xl: '3.5rem',
  },
  lineHeight: {
    base: 1.3,
    lg: 1.5,
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  devices,
} as const
