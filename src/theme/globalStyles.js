import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Inter', Arial, sans-serif;
    background-color: ${props => props.theme.colors.bg};
  }
`

export default GlobalStyles;