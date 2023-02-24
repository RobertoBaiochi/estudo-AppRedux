import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}

export default App;
