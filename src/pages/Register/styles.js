import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  input {
    height: 4rem;
    font-size: 1.8rem;
    border: 1px solid #ccc;
    padding-inline: 1rem;
    border-radius: .4rem;
    margin-top: .5rem;

    &:focus {
      border: 1px solid ${colors.primaryColor}
    }
  }

  bu
`;
