import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {},
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

export const { addChannel, setCurrentChannelId } = channelsSlice.actions;

export default channelsSlice.reducer;
