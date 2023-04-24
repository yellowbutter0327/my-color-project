import { configureStore, createSlice } from '@reduxjs/toolkit';

const item = createSlice({
  name: 'item',
  initialState: [
    {
      id: 0,
      listId: 0,
      title: '핑크 블러셔',
      originPrice: '10000',
      price: '5000',
      src: './images/product1.jpg',
    },
    {
      id: 1,
      listId: 0,
      title: '봄웜 찰떡 섀도우',
      originPrice: '54000',
      price: '49000',
      src: './images/product2.jpg',
    },
  ],
  reducers: {
    addCount(state, action) {
      let nums = state.findIndex(a => a.id === action.payload);
      state[nums].count++;
    },
    minusCount(state, action) {
      let nums = state.findIndex(a => a.id === action.payload);
      if (state[nums].count > 1) state[nums].count--;
    },
    deleteCount(state, action) {
      action.payload.remove();
    },
  },
});

export const { addCount, minusCount, deleteCount } = item.actions;

export default configureStore({
  reducer: {
    item: item.reducer,
  },
});
