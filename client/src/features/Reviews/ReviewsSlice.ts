import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Review {
  itemName: string;
  rating: number;
  comments: string;
}

interface ReviewsData {
  reviews: Review[];
}

const initialState: ReviewsData = {
  reviews: [],
};

export const reviewsSlice = createSlice({
  name: "Reviews",
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Review>) => {
      state.reviews.push(action.payload);
    },
  },
});

export const { add } = reviewsSlice.actions;
export const reviews = (state: ReviewsData) => {
  return state;
};
export default reviewsSlice.reducer;
