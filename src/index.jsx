// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import App from './App.jsx';
import getStore from './redux/store.js';
import AuthContext from './contexts/AuthContext.js';
import auth from './utils/auth.js';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const store = getStore();

const nickname = auth();

ReactDOM.render(
  <Provider store={store}>
    <AuthContext.Provider value={{ nickname }}>
      <App />
    </AuthContext.Provider>
  </Provider>,
  document.getElementById('chat'),
);
