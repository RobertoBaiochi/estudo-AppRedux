import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 2rem;
    height: 4rem;
    padding-inline: 1rem;
    border-radius: .4rem;
    border: 1px solid #ccc;
    font-size: 1.8rem;

    &:focus {
      border: 1px solid ${colors.primaryColor}
    }
  }
`;
