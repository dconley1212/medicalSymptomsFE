import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// I should create a remove reducer and then look into how to manage the state for adding
// products to the cart with redux and the components that will need the slice I created
interface ProductsInCheckout {
  product_name: string;
}

const initialState: ProductsInCheckout[] = [
  {
    product_name: "",
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
