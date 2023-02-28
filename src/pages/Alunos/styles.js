import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 0;

  }

  > div + div {
    border-top: 1px solid #ccc;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
