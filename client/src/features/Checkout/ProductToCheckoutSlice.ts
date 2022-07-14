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
  itemOne: number;
  itemTwo: number;
  totalQuantity: number;
  totalPrice: number;
}

const initialState: InitialState = {
  cartItems: [],
  itemOne: 0,
  itemTwo: 0,
  totalQuantity: 0,
  totalPrice: 0,
};

export const productToCheckoutSlice = createSlice({
  name: "checkout_items",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsInCheckout>) => {
      const inCart = state.cartItems.filter((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      if (inCart[0]) {
        if (inCart[0].id === 1) {
          state.itemOne++;
        } else {
          state.itemTwo++;
        }
      } else {
        state.cartItems.push(action.payload);
        if (action.payload.id === 1) {
          state.itemOne++;
        } else {
          state.itemTwo++;
        }
      }
      state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      state.totalQuantity--;
      state.cartItems = state.cartItems.filter((cartItem) => {
        return action.payload.id !== cartItem.id;
      });
      if (action.payload.id === 1) {
        state.itemOne--;
      } else {
        state.itemTwo--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = productToCheckoutSlice.actions;
export const productsInCart = (state: ProductsInCheckout[]) => {
  return state;
};
export default productToCheckoutSlice.reducer;
