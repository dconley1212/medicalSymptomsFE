import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import LandingPage from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Products from "../features/Checkout/Products";
import CheckoutInfoPage from "../features/Checkout/CheckoutInfoPage";
import AddReview from "../features/Reviews/AddRevew";
import Reviews from "../features/Reviews/Reviews";
import CheckoutCreditCardPage from "../features/Checkout/CheckoutCreditCardPage";
import User from "../features/UserAccount/User";
import EditUserAddressInfo from "../features/UserAccount/EditUserAddressInfo";
import UserInfo from "../features/UserAccount/UserInfo";
import EditUserPaymentInfo from "../features/UserAccount/EditUserPaymentInfo";
import Header from "./Header";
import styled from "styled-components";
import Survey from "../features/Questionaire/Survey";
import { PrivateRouteProps } from "./PrivateRoute";

// left off trying to understand how to handle fire events (click, change, etc) when
// the button my be found in a different component then the function or if the button
// causes an event to change the route. A few things that are holding me up right now in testing
// Part of me feels like I should just upgrade to the userEvent version 14 to handle these
// types of events that I am dealing with

const StyledAppWrapper = styled.div`
  /* @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
  } */
`;

interface AppStatePrivateRoute {
  isAuthenticated: boolean;
  path: string;
}

function App() {
  const [privateRoute, setPrivateRoute] = useState<AppStatePrivateRoute>({
    isAuthenticated: false,
    path: "/",
  });

  useEffect(() => {
    let token = localStorage.getItem("token") || "";
    if (token) {
      setPrivateRoute({ ...privateRoute, isAuthenticated: true });
    }
  }, []);

  return (
    <StyledAppWrapper>
      <Header />
      <Routes>
        <Route path="/survey" element={<Survey />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/editPayment" element={<EditUserPaymentInfo />} />
        <Route path="/user/info" element={<UserInfo />} />
        <Route path="/user/editAddress" element={<EditUserAddressInfo />} />
        <Route path="/checkoutpayment" element={<CheckoutCreditCardPage />} />
        <Route path="/addreview" element={<AddReview />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/checkoutinfo" element={<CheckoutInfoPage />} />
        <Route path="/todolist" element={<ToDo />} />
        <Route path="products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </StyledAppWrapper>
  );
}

export default App;
