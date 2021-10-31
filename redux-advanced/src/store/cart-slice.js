import { createSlice } from '@reduxjs/toolkit';

const initialCartState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.amount++;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const productIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state[productIndex].amount < 2) {
        //state = state.filter((item) => item.id !== action.payload.id);
        state = state.splice(productIndex, 1);
      } else {
        state[productIndex].amount--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
