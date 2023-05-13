import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    isLoggedIn: false,
    cart: [],
  },
  reducers: {
    login: (state, action) => {
      state.userId = action.payload;
      state.isLoggedIn = true;
      state.cart = action.payload.cart;
    },
    logout: state => {
      state.userId = null;
      state.isLoggedIn = false;
      state.cart = [];
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectCart = state => state.user.cart;

export default userSlice.reducer;
