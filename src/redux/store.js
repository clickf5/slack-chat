import { configureStore } from '@reduxjs/toolkit';
import gon from 'gon';
import channelsReducer from '../slices/channelsSlice';
import currentChannelIdReducer from '../slices/currentChannelIdSlice';
import messagesReducer from '../slices/messagesSlice';
import modalReducer from '../slices/modalSlice';

const reducer = {
  channels: channelsReducer,
  currentChannelId: currentChannelIdReducer,
  messages: messagesReducer,
  modal: modalReducer,
};

const preloadedState = {
  channels: gon.channels,
  currentChannelId: gon.currentChannelId,
  messages: gon.messages,
};

const getStore = () => configureStore({
  reducer,
  preloadedState,
  devTools: (process.env.NODE_ENV !== 'production'),
});

export default getStore;
