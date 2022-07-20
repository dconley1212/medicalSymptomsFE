import React from "react";
import Header from "../../Components/Header";
import CheckoutItems from "./CheckoutItems";

const CheckoutCreditCardPage = () => {
  return (
    <div>
      <Header />
      <CheckoutItems />
      <div>
        <input name="Card Number" placeholder="Card Number" />
        <input name="Name on Card" placeholder="Name on card" />
        <input name="Card Expiration" placeholder="Expiration data (mm/yy)" />
        <input name="Security Code" placeholder="Security Code" />
        <input
          name="Same as Shipping"
          placeholder="Same as Shipping address"
          type="radio"
        />
        <input
          name="Different Billing Address"
          placeholder="Used a different billing address"
          type="radio"
        />
      </div>
    </div>
  );
};

export default CheckoutCreditCardPage;
