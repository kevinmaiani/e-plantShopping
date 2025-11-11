import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const exisitingItem = state.items.find(item => item.name === name);

      if (exisitingItem) {
        exisitingItem.quantity++;
      }
      else {
        state.items.push({ name, image, cost, quantity: 1})
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload; 

      const matchedItem = state.items.find(item => item.name === name);

      if (matchedItem)
        matchedItem.quantity = quantity;
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
