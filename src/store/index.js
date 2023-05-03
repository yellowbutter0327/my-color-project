import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Feature/cartReducer';
import userReducer from './Feature/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
