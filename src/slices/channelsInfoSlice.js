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
    renameChannel: (state, action) => {
      const { id, name } = action.payload;
      const channels = state.channels
        .map((channel) => ((channel.id === id) ? { ...channel, name } : channel));
      return { ...state, channels };
    },
    setCurrentChannelId: (state, action) => {
      const { id } = action.payload;
      return {
        ...state, currentChannelId: id,
      };
    },
  },
});

export const { addChannel, renameChannel, setCurrentChannelId } = channelsInfoSlice.actions;

export default channelsInfoSlice.reducer;
