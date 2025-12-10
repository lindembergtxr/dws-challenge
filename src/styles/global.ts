import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
    box-sizing: border-box;
  }
  body {
    position: relative;
    width: 100vw;
    min-height: 400vh;
    font-family: 'Open Sans', sans-serif;
    background-color: white;
  }
`
