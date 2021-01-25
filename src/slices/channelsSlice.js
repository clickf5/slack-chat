import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    addChannel: (state, action) => {
      const { name } = action.payload;
      const id = uniqueId();
      state.push({ id, name, removable: true });
    },
  },
});

export const { addChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
