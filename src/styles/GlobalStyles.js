import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

`;

export const Container = styled.section`
  max-width: 36rem;
  background: #fff;
  margin: 3rem auto;
  padding: 3rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
`;
