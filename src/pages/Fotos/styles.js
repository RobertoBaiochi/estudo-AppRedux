import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`

  label {
    width: 18rem;
    height: 18rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ccc;
    border: .5rem dashed ${colors.primaryColor};
    margin: 3rem auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 18rem;
      height: 18rem;
    }
  }

  input {
    display: none;
  }
`;
