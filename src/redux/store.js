import { configureStore } from '@reduxjs/toolkit';
import channelsInfoReducer from '../slices/channelsInfoSlice';
import messagesReducer from '../slices/messagesSlice';
import modalReducer from '../slices/modalSlice';

const reducer = {
  channelsInfo: channelsInfoReducer,
  messages: messagesReducer,
  modal: modalReducer,
};

const getStore = (preloadedState) => configureStore({
  reducer,
  preloadedState,
  devTools: (process.env.NODE_ENV !== 'production'),
});

export default getStore;
