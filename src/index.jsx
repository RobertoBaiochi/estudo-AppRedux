import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import history from './services/history';
import { Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
);
