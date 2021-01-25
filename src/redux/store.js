import { configureStore } from '@reduxjs/toolkit';
import gon from 'gon';
import channelsReducer from '../slices/channelsSlice';
import currentChannelIdReducer from '../slices/currentChannelIdSlice';
import messagesReducer from '../slices/messagesSlice';

const reducer = {
  channels: channelsReducer,
  currentChannelId: currentChannelIdReducer,
  messages: messagesReducer,
};

const preloadedState = {
  channels: gon.channels,
  currentChannelId: gon.currentChannelId,
  messages: gon.messages,
};

const getStore = () => configureStore({
  reducer,
  preloadedState,
});

export default getStore;
