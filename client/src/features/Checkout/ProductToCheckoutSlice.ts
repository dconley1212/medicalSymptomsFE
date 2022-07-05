import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stringify } from "querystring";

interface ProductsInCheckout {
  product_name: string;
}

const initialState: ProductsInCheckout[] = [
  {
    product_name: "",
  },
];

export const productToCheckoutSlice = createSlice({
  name: "Checkout_Item",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsInCheckout>) => {},
  },
});
