import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Helvetica Neue, Medium;
  }

  html, body, #root{
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }
`
