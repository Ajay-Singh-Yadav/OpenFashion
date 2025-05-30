import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../redux/Slice/CartItemsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
