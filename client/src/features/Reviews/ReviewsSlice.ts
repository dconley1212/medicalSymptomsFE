import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Review {
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
  reducers: {},
});
