import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// I should create a remove reducer and then look into how to manage the state for adding
// products to the cart with redux and the components that will need the slice I created
export interface ProductsInCheckout {
  id: number;
  name: string;
  price: number;
  description: string;
  imgurl: string;
}

interface InitialState {
  cartItems: ProductsInCheckout[];
  itemQuantity: number;
  totalPrice: number;
}

const initialState: InitialState = {
  cartItems: [],
  itemQuantity: 0,
  totalPrice: 0,
};

export const productToCheckoutSlice = createSlice({
  name: "checkout_items",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsInCheckout>) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems.filter((cartItem) => {
        return action.payload.id !== cartItem.id;
      });
    },
  },
});

export const { addToCart, removeFromCart } = productToCheckoutSlice.actions;
export const productsInCart = (state: ProductsInCheckout[]) => {
  return state;
};
export default productToCheckoutSlice.reducer;
