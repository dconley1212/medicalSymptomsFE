import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51M0C2qEWZ0R1qcwzvt3v8LJr6BcP3KMB6a5DpZPQUr5tcgQiBwtitv5sx9LWoIiatbS2dAmHUzwVtuQTyGthUYIr00yLQpxt8s"
);

const StripeCheckoutMain = () => {
  const [clientSecret, setClientSecret] = useState<string>("");
};

export default StripeCheckoutMain;
