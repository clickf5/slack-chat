// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { io } from 'socket.io-client';

import '../assets/application.scss';

import App from './App.jsx';
import getStore from './redux/store.js';
import AuthContext from './contexts/AuthContext.js';
import auth from './utils/auth.js';

import * as actions from './slices/messagesSlice';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const store = getStore();

const nickname = auth();

const socket = io();

socket.on('newMessage', (data) => {
  const message = data.data.attributes;
  store.dispatch(actions.addMessage(message));
});

ReactDOM.render(
  <Provider store={store}>
    <AuthContext.Provider value={{ nickname }}>
      <App />
    </AuthContext.Provider>
  </Provider>,
  document.getElementById('chat'),
);
