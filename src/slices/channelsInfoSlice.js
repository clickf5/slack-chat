import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

const channelsInfoSlice = createSlice({
  name: 'channels',
  initialState: {
    channels: [],
    currentChannelId: 1,
  },
  reducers: {
    addChannel: (state, action) => {
      const { name } = action.payload;
      const id = uniqueId();
      state.push({ id, name, removable: true });
    },
    setCurrentChannelId: (state, action) => {
      const { id } = action.payload;
      return {
        ...state, currentChannelId: id,
      };
    },
  },
});

export const { addChannel, setCurrentChannelId } = channelsInfoSlice.actions;

export default channelsInfoSlice.reducer;
