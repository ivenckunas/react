import { createSlice } from '@reduxjs/toolkit';

export const appStore = createSlice({
  name: 'appStore',
  initialState: {
    quant: 0,
    image: ''
  },
  reducers: {
    setQuant: (state, action) => {
      state.quant = action.payload
    },
    setImage: (state, action) => {
      state.image = action.payload
    }
  },
});

export const { setQuant, setImage } = appStore.actions;

export default appStore.reducer;
