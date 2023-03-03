import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  input {
    height: 4rem;
    margin-bottom: 2rem;
    border: 1px solid #ccc;
    border-radius: .4rem;
    padding-inline: 1rem;
    font-size: 1.8rem;

    &:focus {
      border: 1px solid ${colors.primaryColor}
    }
  }
`;
