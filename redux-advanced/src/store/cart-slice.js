import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { items: [], changed: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.cart;
    },
    addToCart(state, action) {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.amount++;
      } else {
        state.items.push(action.payload);
      }
      state.changed = true;
    },
    removeFromCart(state, action) {
      const productIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[productIndex].amount < 2) {
        state = state.items.splice(productIndex, 1);
      } else {
        state.items[productIndex].amount--;
      }
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
