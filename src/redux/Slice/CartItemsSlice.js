import {createSlice} from '@reduxjs/toolkit';
import CartItems from '../../Components/CartItems';

const CartItemsSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const {id, name, price, image, brand} = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          name,
          price,
          image,
          brand,
          quantity: 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        // Remove item if quantity is 1 and user tries to decrease
        state.items = state.items.filter(i => i.name !== action.payload.name);
      }
    },
  },
});

export const {addToCart, increaseQuantity, decreaseQuantity} =
  CartItemsSlice.actions;
export default CartItemsSlice.reducer;
