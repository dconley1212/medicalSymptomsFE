import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface user {
  username: string;
  phone: string;
  address: string;
  apartment_suite_etc: string;
  city: string;
  state: string;
  zipcode: string;
  cardNumber: string;
  nameOnCard: string;
  cardExpiration: string;
  securityCode: string;
}

const initialState: user = {
  username: "",
  phone: "",
  address: "",
  apartment_suite_etc: "",
  city: "",
  state: "",
  zipcode: "",
  cardNumber: "",
  nameOnCard: "",
  cardExpiration: "",
  securityCode: "",
};

export const UserAccount = createSlice({
  name: "UserAccount",
  initialState: initialState,
  reducers: {},
});
