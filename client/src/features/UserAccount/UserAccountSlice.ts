import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface payment {
  cardNumber: string;
  nameOnCard: string;
  cardExpiration: string;
  securityCode: string;
}

interface user {
  username: string;
  phone: string;
  address: string;
  apartment_suite_etc: string;
  city: string;
  state: string;
  zipcode: string;
  payment: payment;
}

const initialState: user = {
  username: "",
  phone: "",
  address: "",
  apartment_suite_etc: "",
  city: "",
  state: "",
  zipcode: "",
  payment: {
    cardNumber: "",
    nameOnCard: "",
    cardExpiration: "",
    securityCode: "",
  },
};

export const UserAccount = createSlice({
  name: "UserAccount",
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<user>) => {
      state = action.payload;
    },
  },
});

export const User = (state: user) => {
  return state;
};
export default UserAccount.reducer;
