import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

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
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
