import React from "react";
import { useAppSelector } from "../../app/hooks";

const CheckoutMessage = () => {
  const paymentMessage = useAppSelector(
    (state) => state.itemsInCart.paymentMessage
  );
  return (
    <div>
      <h2>{paymentMessage}</h2>
    </div>
  );
};

export default CheckoutMessage;
