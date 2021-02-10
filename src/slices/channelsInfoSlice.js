import { createSlice } from '@reduxjs/toolkit';

const channelsInfoSlice = createSlice({
  name: 'channels',
  initialState: {
    channels: [],
    currentChannelId: 1,
  },
  reducers: {
    addChannel: (state, action) => {
      const channel = action.payload;
      return {
        ...state, channels: [...state.channels, channel],
      };
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
