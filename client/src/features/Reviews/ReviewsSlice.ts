import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Review {
  reviewerName: string;
  itemName: string;
  rating: number;
  comments: string;
}

interface ReviewsData {
  itemOneReviews: Review[];
  itemTwoReviews: Review[];
}

const initialState: ReviewsData = {
  itemOneReviews: [],
  itemTwoReviews: [],
};

export const reviewsSlice = createSlice({
  name: "Reviews",
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Review>) => {
      if (action.payload.itemName === "ItemOne") {
        state.itemOneReviews.push(action.payload);
      } else {
        state.itemTwoReviews.push(action.payload);
      }
    },
  },
});

export const { add } = reviewsSlice.actions;
export const reviews = (state: ReviewsData) => {
  return state;
};
export default reviewsSlice.reducer;
