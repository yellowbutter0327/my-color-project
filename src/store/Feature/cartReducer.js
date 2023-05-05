import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const { id, title, src, price, quantity } = action.payload;
      state.push({ id, title, src, price, quantity });
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
