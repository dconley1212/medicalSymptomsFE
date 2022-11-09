import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios, { AxiosRequestHeaders } from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFormStripe from "./CheckoutFormStripe";
import { useAppSelector } from "../../app/hooks";

const StyledWrapperDiv = styled.div`
  background-color: #f5f5f5;
  position: relative;
  left: 5rem;
  padding: 3rem;
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

const stripePromise = loadStripe(
  "pk_test_51M0C2qEWZ0R1qcwzvt3v8LJr6BcP3KMB6a5DpZPQUr5tcgQiBwtitv5sx9LWoIiatbS2dAmHUzwVtuQTyGthUYIr00yLQpxt8s"
);

interface OptionsProp {
  clientSecret: string;
  appearance: {
    theme: "stripe";
  };
}

const CheckoutItems = () => {
  const cartProducts = useAppSelector((state) => state);

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
  }, [clientSecret]);

  const options: OptionsProp = {
    clientSecret: clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <StyledWrapperDiv>
      <h3>Order Summary</h3>
      {cartProducts.itemsInCart.cartItems.map((item) => {
        return (
          <div key={Math.random()}>
            {item.id === 1 && cartProducts.itemsInCart.itemOne > 0 ? (
              <div>
                <p data-testid="ItemOne">{item.name}</p>
                <p data-testid="productPriceOne">{item.price}</p>
                <p>{cartProducts.itemsInCart.itemOne}</p>
              </div>
            ) : null}
            {item.id === 2 && cartProducts.itemsInCart.itemTwo > 0 ? (
              <div>
                <p data-testid="ItemTwo">{item.name}</p>
                <p data-testid="productPriceTwo">{item.price}</p>
                <p>{cartProducts.itemsInCart.itemTwo}</p>
              </div>
            ) : null}
          </div>
        );
      })}
      <p>Total Quantity: {cartProducts.itemsInCart.totalQuantity}</p>
      <p>Total Price: {cartProducts.itemsInCart.totalPrice}</p>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutFormStripe />
        </Elements>
      )}
    </StyledWrapperDiv>
  );
};

export default CheckoutItems;
