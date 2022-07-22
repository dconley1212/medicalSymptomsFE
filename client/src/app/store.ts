import { configureStore } from "@reduxjs/toolkit";
import ProductToCheckoutReducer from "../features/Checkout/ProductToCheckoutSlice";
import ReviewsReducer from "../features/Reviews/ReviewsSlice";

export const store = configureStore({
  reducer: {
    itemsInCart: ProductToCheckoutReducer,
    reviews: ReviewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
