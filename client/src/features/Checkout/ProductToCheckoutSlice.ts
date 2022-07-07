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

const initialState: ProductsInCheckout[] = [
  {
    id: 0,
    name: "",
    price: 0,
    description: "",
    imgurl: "",
  },
];

export const productToCheckoutSlice = createSlice({
  name: "checkout_items",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsInCheckout>) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = productToCheckoutSlice.actions;
export const productsInCart = (state: ProductsInCheckout[]) => {
  return state;
};
export default productToCheckoutSlice.reducer;
