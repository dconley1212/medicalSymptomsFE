import React from "react";
import ToDo from "./ToDo";
import LandingPage from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Products from "../features/Checkout/Products";
import AddReview from "../features/Reviews/AddRevew";
import Reviews from "../features/Reviews/Reviews";
import CheckoutCreditCardPage from "../features/Checkout/CheckoutCreditCardPage";
import User from "../features/UserAccount/User";
import EditUserAddressInfo from "../features/UserAccount/EditUserAddressInfo";
import UserInfo from "../features/UserAccount/UserInfo";
import EditUserPaymentInfo from "../features/UserAccount/EditUserPaymentInfo";
import Header from "./Header";
import Survey from "../features/Questionaire/Survey";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router } from "react-router-dom";
import StripeCheckoutMain from "../features/Checkout/StripeCheckoutMain";
import CheckoutMessage from "../features/Checkout/CheckoutMessage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/payment/message" element={<CheckoutMessage />} />
          <Route path="/checkoutinfo" element={<StripeCheckoutMain />} />
          <Route path="/survey" element={<Survey />} />
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
          <Route path="/user/editPayment" element={<EditUserPaymentInfo />} />
          <Route path="/user/info" element={<UserInfo />} />
          <Route path="/user/editAddress" element={<EditUserAddressInfo />} />
          <Route path="/checkoutpayment" element={<CheckoutCreditCardPage />} />
          <Route path="/addreview" element={<AddReview />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* <Route path="/checkoutinfo" element={<CheckoutInfoPage />} /> */}
          <Route path="/todolist" element={<ToDo />} />
          <Route path="products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
