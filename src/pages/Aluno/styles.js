import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 3rem;
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

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  margin-top: 2rem;
  position: relative;

  img {
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
  }
`;
