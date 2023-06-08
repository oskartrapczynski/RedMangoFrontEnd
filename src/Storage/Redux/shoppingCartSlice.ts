import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const shoppingCart = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    setShoppingCart: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setShoppingCart } = shoppingCart.actions;
export const shoppingCartReducer = shoppingCart.reducer;
