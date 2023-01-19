import { createGlobalStyle, useTheme } from "styled-components";
import { dark } from "./Variables";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${dark.colorBase.gray600}
  }
  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.4;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit
  }
  img {
    display:block;
    max-width: 100%
  }
`;
