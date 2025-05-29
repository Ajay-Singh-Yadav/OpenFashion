import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../store/slice/cartSlice';
import addressReducer from '../store/slice/addressSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    address: addressReducer,
  },
});
