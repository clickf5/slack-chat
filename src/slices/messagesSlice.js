import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  redusers: {
    addMessage: (state, action) => {
      const { text, userName } = action.payload;
      state.push({
        id: uniqueId(),
        text,
        userName,
      });
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
