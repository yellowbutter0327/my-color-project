import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const { id, title, src, price, quantity } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ id, title, src, price, quantity });
      }
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
