import React from "react";
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

function App() {
  return (
    <div>
      <Header />
      <Routes>
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
    </div>
  );
}

export default App;
