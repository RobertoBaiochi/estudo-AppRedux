import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Provider>
  );
}

export default App;
