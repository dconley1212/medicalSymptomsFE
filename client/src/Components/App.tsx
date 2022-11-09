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
import Survey from "../features/Questionaire/Survey";
import PrivateRoute from "./PrivateRoute";
import StripeCheckoutMain from "../features/Checkout/StripeCheckoutMain";
import axios, { AxiosRequestHeaders } from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFormStripe from "../features/Checkout/CheckoutFormStripe";
import { useAppSelector } from "../app/hooks";

const stripePromise = loadStripe(
  "pk_test_51M0C2qEWZ0R1qcwzvt3v8LJr6BcP3KMB6a5DpZPQUr5tcgQiBwtitv5sx9LWoIiatbS2dAmHUzwVtuQTyGthUYIr00yLQpxt8s"
);

interface OptionsProp {
  clientSecret: string;
  appearance: {
    theme: "stripe";
  };
}

function App() {
  const [clientSecret, setClientSecret] = useState<string>("");

  const items = useAppSelector((state) => state.itemsInCart.cartItems);

  let headers: AxiosRequestHeaders = {
    "Content-Type": "application/json",
  };
  console.log(items);

  useEffect(() => {
    console.log(items);
    axios
      .post(
        "http://localhost:8080/create-payment-intent",
        { items },
        {
          headers,
        }
      )
      .then((data: any) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      })
      .catch((err) => console.log(err));
  }, []);

  const options: OptionsProp = {
    clientSecret: clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/checkoutinfo"
          element={
            clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutFormStripe />
              </Elements>
            )
          }
        />
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
    </div>
  );
}

export default App;
