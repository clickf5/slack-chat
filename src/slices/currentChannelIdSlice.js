import { createSlice } from '@reduxjs/toolkit';

const currentChannelIdSlice = createSlice({
  name: 'currentChannelId',
  initialState: 1,
  reducers: {
    setCurrentChannelId: (state, action) => {
      const { id } = action.payload;
      return id;
    },
  },
});

export const { setCurrentChannelId } = currentChannelIdSlice.actions;

export default currentChannelIdSlice.reducer;
