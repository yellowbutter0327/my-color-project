import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const { id, title, src, price, quantity, uid } = action.payload;
      return [...state, { id, title, src, price, quantity, uid }];
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
