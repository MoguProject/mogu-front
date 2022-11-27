import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Roboto:wght@300;400;500;700;900&display=swap');
  ${reset}

  a {
    text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
      font-family: 'Noto Sans KR', sans-serif;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    height: 100%;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }  
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

`;

export default GlobalStyles;
