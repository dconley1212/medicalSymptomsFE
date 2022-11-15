import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutInfoPage from "./CheckoutInfoPage";
import styled from "styled-components";

const StyledCardForm = styled.form`
  border: #f6f9fc solid 1px;
  border-radius: var(--radius);
  padding: 20px;
  margin: 10px 10px;
  box-shadow: 0 30px 50px -20px rgb(50 50 93 / 25%),
    0 30px 60px -30px rgb(0 0 0 / 30%);
`;

const StyledPaymentButton = styled.button`
  background: #cb4a6f;
  border-radius: 5px;
  color: white;
  border: 0;
  padding: 1em 1.5em;
  margin-top: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: block;
`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }: any) => {
        switch (paymentIntent) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
  }, [stripe]);

  const handleSubmitPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment/message",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <div>
      <CheckoutInfoPage />
      <StyledCardForm onSubmit={handleSubmitPayment}>
        <PaymentElement id="payment-element" />
        <StyledPaymentButton>
          <span>{isLoading ? <div></div> : "Pay now"}</span>
        </StyledPaymentButton>
        {message && <div>{message}</div>}
      </StyledCardForm>
    </div>
  );
};

export default CheckoutForm;
