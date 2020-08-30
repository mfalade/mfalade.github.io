import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  html {
    height: 100vh;
    background: ${({ theme }) => theme.color.gray1};
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: lighter;
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.family.primary};
    letter-spacing: 1.5px;
  }
  h1, h2 {
    letter-spacing: 5px;
    word-spacing: 8px;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  button {
    outline: none;
    cursor: pointer;
    letter-spacing: 2px;
  }
`;

export default GlobalStyle;
