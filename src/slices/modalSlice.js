import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpened: false, type: null, extra: null },
  reducers: {
    openModal: (state, action) => {
      const { type, extra } = action.payload;
      return {
        ...state, isOpened: true, type, extra,
      };
    },
    closeModal: () => ({
      isOpened: false, type: null, extra: null,
    }),
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
