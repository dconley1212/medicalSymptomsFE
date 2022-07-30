import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface payment {
  cardNumber: string;
  nameOnCard: string;
  cardExpiration: string;
  securityCode: string;
}

export interface userInformation {
  username: string;
  phone: string;
  address: string;
  apartment_suite_etc: string;
  city: string;
  state: string;
  zipcode: string;
}

interface user {
  userInfo: userInformation;
  paymentInfo: payment;
}

const initialState: user = {
  userInfo: {
    username: "",
    phone: "",
    address: "",
    apartment_suite_etc: "",
    city: "",
    state: "",
    zipcode: "",
  },
  paymentInfo: {
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
    add: (state, action: PayloadAction<userInformation>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { add } = UserAccount.actions;

export const User = (state: user) => {
  return state;
};
export default UserAccount.reducer;
