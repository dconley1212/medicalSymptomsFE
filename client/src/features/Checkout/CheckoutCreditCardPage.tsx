import React from "react";
import Header from "../../Components/Header";
import CheckoutItems from "./CheckoutItems";

const CheckoutCreditCardPage = () => {
  return (
    <div>
      <Header />
      <CheckoutItems />
      <div>
        <input placeholder="Card Number" />
        <input placeholder="Name on card" />
        <input placeholder="Expiration data (mm/yy)" />
        <input placeholder="Security Code" />
        <input placeholder="Same as Shipping address" />
        <input placeholder="Used a different billing address" />
      </div>
    </div>
  );
};

export default CheckoutCreditCardPage;
