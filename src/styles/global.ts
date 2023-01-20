import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.gray600}
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

export const Container = styled.main`
  max-width: calc(800px + 1rem);
  margin: 0 auto;
  padding: 0 1rem;
`;
