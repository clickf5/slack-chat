import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      const { body, nickname, channelId } = action.payload;
      state.push({
        id: uniqueId(),
        body,
        nickname,
        channelId,
      });
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
