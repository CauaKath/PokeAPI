import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url('https://images7.alphacoders.com/310/310611.jpg');
    background-size: cover;
    background-position: 0 700px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px 40px;
  }

  button {
    cursor: pointer;
  }
`;
