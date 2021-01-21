// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

// @ts-ignore
import gon from 'gon';

import App from './App.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const { channels, currentChannelId } = gon;

ReactDOM.render(
  <App channels={channels} currentChannelId={currentChannelId} />,
  document.getElementById('chat'),
);

// console.log('it works!');
console.log('gon', gon);
