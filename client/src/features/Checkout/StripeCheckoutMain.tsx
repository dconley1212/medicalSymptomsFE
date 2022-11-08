import React, { useState, useEffect } from "react";
import axios, { AxiosRequestHeaders } from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFormStripe from "./CheckoutFormStripe";
import { useAppSelector } from "../../app/hooks";

//need to make sure the routes are showing for the new checkout components and that we are getting
//the right item information sent to the backend server to send back the pricing information and
//payment

const stripePromise = loadStripe(
  "pk_test_51M0C2qEWZ0R1qcwzvt3v8LJr6BcP3KMB6a5DpZPQUr5tcgQiBwtitv5sx9LWoIiatbS2dAmHUzwVtuQTyGthUYIr00yLQpxt8s"
);

interface OptionsProp {
  clientSecret: string;
  appearance: {
    theme: "stripe";
  };
}

const StripeCheckoutMain = () => {
  const [clientSecret, setClientSecret] = useState<string>("");

  const items = useAppSelector((state) => state.itemsInCart.cartItems);

  let headers: AxiosRequestHeaders = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
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
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutFormStripe />
        </Elements>
      )}
    </div>
  );
};

export default StripeCheckoutMain;
