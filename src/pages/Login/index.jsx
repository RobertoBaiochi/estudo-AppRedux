import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styles';
import * as exampleActions from '../../store/modules/example/actions';

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao());
  };

  return (
    <Container>
      <Title>Login</Title>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
};

export default Login;
