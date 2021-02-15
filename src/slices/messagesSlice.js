import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';
import { removeChannel } from './channelsInfoSlice';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      const { body, nickname, channelId } = action.payload;
      const message = {
        id: uniqueId(),
        body,
        nickname,
        channelId,
      };
      return [...state, message];
    },
  },
  extraReducers: {
    [removeChannel]: (state, action) => {
      const { channelId } = action.payload;
      return state.filter((message) => message.channelId !== channelId);
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
