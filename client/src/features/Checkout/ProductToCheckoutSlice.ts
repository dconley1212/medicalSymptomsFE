import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
  },
});

export const { addToCart } = productToCheckoutSlice.actions;
export const productsInCart = (state: ProductsInCheckout[]) => {
  return state;
};
export default productToCheckoutSlice.reducer;
