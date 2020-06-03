import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  html {
    height: 100vh;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.white};
    font-family: ${({ theme }) => theme.font.family.primary};
    font-weight: lighter;
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
  }
`;

export default GlobalStyle;
