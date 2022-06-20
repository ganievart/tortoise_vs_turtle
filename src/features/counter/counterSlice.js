import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  isMessageVisible: false,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.isMessageVisible = true;
    },
    hideMessage: (state) => {
      state.isMessageVisible = false;
    },
    nextImage: {
      //TODO
    }
  }
});

export const { increment, hideMessage } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectMessageVisibility = (state) => state.counter.isMessageVisible;

export default counterSlice.reducer;
