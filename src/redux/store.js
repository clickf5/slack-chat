import { configureStore } from '@reduxjs/toolkit';
import gon from 'gon';
import channelsInfoReducer from '../slices/channelsInfoSlice';
import messagesReducer from '../slices/messagesSlice';
import modalReducer from '../slices/modalSlice';

const reducer = {
  channelsInfo: channelsInfoReducer,
  messages: messagesReducer,
  modal: modalReducer,
};

const preloadedState = {
  channelsInfo: {
    channels: gon.channels,
    currentChannelId: gon.currentChannelId,
  },
  messages: gon.messages,
};

const getStore = () => configureStore({
  reducer,
  preloadedState,
  devTools: (process.env.NODE_ENV !== 'production'),
});

export default getStore;
