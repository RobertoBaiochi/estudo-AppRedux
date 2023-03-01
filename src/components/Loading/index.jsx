import P from 'prop-types';
import { Container } from './styles';

const Loading = ({ isLoading }) => {
  if (!isLoading) return <></>;

  return (
    <Container>
      <div />
      <span>Carregando...</span>
    </Container>
  );
};

export default Loading;

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: P.bool,
};
