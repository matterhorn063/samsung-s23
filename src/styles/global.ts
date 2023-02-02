import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }: { theme: any }) => css`
    * {
      margin: 0;
      outline: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
    }

    html {
      font-size: 62.5%;
      min-width: 320px;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      font-size: 1.6rem;
      line-height: 1.5;
      font-weight: 400 !important;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ul,
    li,
    ol {
      list-style: none;
    }

    h1 {
      color: ${theme.colors.white};
    }
    h2 {
      color: ${theme.colors.white};
      line-height: 140%;
    }
    h3 {
      color: ${theme.colors.white};
      font-size: 40px;
      line-height: 140%;
      text-align: center;
    }
    h4 {
      color: ${theme.colors.white};
      font-size: 36px;
      line-height: 140%;
      text-align: center;
    }
    h5 {
      color: ${theme.colors.white};
      font-size: 28px;
      line-height: 140%;
      text-align: center;
    }
    h6 {
      color: ${theme.colors.white};
      font-size: 18px;
      line-height: 140%;
      text-align: center;
    }
  `};
`
