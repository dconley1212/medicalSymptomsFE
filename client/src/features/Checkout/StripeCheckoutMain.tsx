import React, { useState, useEffect } from "react";
import axios, { AxiosRequestHeaders } from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useAppSelector } from "../../app/hooks";

//tomorrow I need to test the payment option to see if it will display the right page
// after pay now button is clicked

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
      .then((resp: any) => {
        console.log(resp);
        setClientSecret(resp.data.clientSecret);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default StripeCheckoutMain;
