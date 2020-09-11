import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'PT Sans', sans-serif;
    --light: #dadbd3;
    --dark: #090E11;
  }
`;
