import { configureStore } from "@reduxjs/toolkit";
import ProductToCheckoutReducer from "../features/Checkout/ProductToCheckoutSlice";

export const store = configureStore({
  reducer: {
    itemsInCart: ProductToCheckoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
