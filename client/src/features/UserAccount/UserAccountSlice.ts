import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface insurance {
  nameForInsurance: string;
  insuranceCompany: string;
  insuranceFile: string;
}

export interface userInformation {
  username: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment_suite_etc: string;
  city: string;
  state: string;
  zipcode: string;
  user_id: number;
}

interface user {
  userInfo: userInformation;
  insuranceInfo: insurance;
}

const initialState: user = {
  userInfo: {
    username: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment_suite_etc: "",
    city: "",
    state: "",
    zipcode: "",
    user_id: 0,
  },
  insuranceInfo: {
    nameForInsurance: "",
    insuranceCompany: "",
    insuranceFile: "",
  },
};

export const UserAccount = createSlice({
  name: "UserAccount",
  initialState: initialState,
  reducers: {
    addUserInfo: (state, action: PayloadAction<userInformation>) => {
      state.userInfo = action.payload;
    },
    addInsuranceInfo: (state, action: PayloadAction<insurance>) => {
      state.insuranceInfo = action.payload;
    },
  },
});

export const { addUserInfo, addInsuranceInfo } = UserAccount.actions;

export const User = (state: user) => {
  return state;
};
export default UserAccount.reducer;
