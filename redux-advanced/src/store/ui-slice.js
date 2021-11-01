import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { showCart: false, notification: null },
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    setNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
