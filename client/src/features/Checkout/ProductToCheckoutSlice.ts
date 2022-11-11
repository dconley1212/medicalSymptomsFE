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
  paymentMessage: string;
}

const initialState: InitialState = {
  cartItems: [],
  itemOne: 0,
  itemTwo: 0,
  totalQuantity: 0,
  totalPrice: 0,
  paymentMessage: "",
};

export const productToCheckoutSlice = createSlice({
  name: "checkout_items",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsInCheckout>) => {
      if (state.cartItems.length === 0) {
        state.cartItems.push(action.payload);
      }
      if (
        state.cartItems.length === 1 &&
        action.payload.id !== state.cartItems[0].id
      ) {
        state.cartItems.push(action.payload);
      }

      if (action.payload.id === 1) {
        state.itemOne++;
      } else {
        state.itemTwo++;
      }
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
      const fixedPrice = state.totalPrice.toFixed(2);
      state.totalPrice = parseFloat(fixedPrice);
    },
    removeFromCart: (state, action) => {
      state.totalQuantity--;
      if (state.itemOne === 1 || state.itemTwo === 1) {
        for (let i = 0; i < state.cartItems.length; i++) {
          if (state.cartItems[i].id === action.payload.id) {
            state.cartItems.splice(i, 1);
          }
        }
      }
      if (action.payload.id === 1) {
        state.itemOne--;
      } else {
        state.itemTwo--;
      }
      state.totalPrice -= action.payload.price;
      const twoDecimals = state.totalPrice.toFixed(2);
      state.totalPrice = parseFloat(twoDecimals);
    },
    addPaymentMessage: (state, action) => {
      state.paymentMessage = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, addPaymentMessage } =
  productToCheckoutSlice.actions;
export const productsInCart = (state: InitialState[]) => {
  return state;
};
export default productToCheckoutSlice.reducer;
