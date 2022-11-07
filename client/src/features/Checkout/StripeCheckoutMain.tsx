import React, { useState, useEffect } from "react";
import axios, { AxiosRequestHeaders } from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFormStripe from "./CheckoutFormStripe";

const stripePromise = loadStripe(
  "pk_test_51M0C2qEWZ0R1qcwzvt3v8LJr6BcP3KMB6a5DpZPQUr5tcgQiBwtitv5sx9LWoIiatbS2dAmHUzwVtuQTyGthUYIr00yLQpxt8s"
);

// interface AppearanceObject {
//     theme: string;
//   }

interface OptionsProp {
  clientSecret: string;
  appearance: {
    theme: "stripe";
  };
}

const StripeCheckoutMain = () => {
  const [clientSecret, setClientSecret] = useState<string>("");

  let headers: AxiosRequestHeaders = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    axios
      .post(
        "http://localhost:8080/create-payment-intent",
        { items: [{ id: "pills" }] },
        {
          headers,
        }
      )
      .then((data) => {
        console.log(data);
      })
      .catch();
  }, []);

  //   const appearance: AppearanceObject = {
  //     theme: "stripe",
  //   };

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
