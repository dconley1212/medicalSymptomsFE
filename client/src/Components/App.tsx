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
import UserAddressInfo from "../features/UserAccount/UserAddressInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/user/userAddress" element={<UserAddressInfo />} />
        <Route path="/user" element={<User />} />
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
