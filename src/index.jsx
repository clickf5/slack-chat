// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { io } from 'socket.io-client';
import '../assets/application.scss';

// @ts-ignore
import gon from 'gon';

import App from './App.jsx';
import getStore from './redux/store.js';
import AuthContext from './contexts/AuthContext.js';
import auth from './utils/auth.js';

import { addMessage } from './slices/messagesSlice';
import { addChannel, renameChannel, removeChannel } from './slices/channelsInfoSlice';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const { channels, currentChannelId, messages } = gon;

const preloadedState = {
  channelsInfo: {
    channels,
    currentChannelId,
  },
  messages,
};

const store = getStore(preloadedState);

const nickname = auth();

const socket = io();

socket.on('newMessage', ({ data }) => {
  const message = data.attributes;
  store.dispatch(addMessage(message));
});

socket.on('newChannel', ({ data }) => {
  const channel = data.attributes;
  store.dispatch(addChannel(channel));
});

socket.on('renameChannel', ({ data }) => {
  const channel = data.attributes;
  store.dispatch(renameChannel(channel));
});

socket.on('removeChannel', ({ data }) => {
  const channelId = data.id;
  store.dispatch(removeChannel({ channelId }));
});

ReactDOM.render(
  <Provider store={store}>
    <AuthContext.Provider value={{ nickname }}>
      <App />
    </AuthContext.Provider>
  </Provider>,
  document.getElementById('chat'),
);
