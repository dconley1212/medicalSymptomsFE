import React from "react";
import CheckoutItems from "./CheckoutItems";

const CheckoutInfoPage = () => {
  return (
    <div>
      <div>
        <CheckoutItems />
      </div>
      <div>
        <form>
          <input placeholder="First name" type="text" />
          <input placeholder="Last name" type="text" />
          <input placeholder="Email" />
          <input placeholder="address" type="text" />
          <input placeholder="Apartment, suite, etc. (optional" />
          <input placeholder="City" />
          <input placeholder="State" type="dropdown" />
          <input placeholder="ZIP code" type="text" />
          <input placeholder="Phone" type="text" />
          <input placeholder="email me with news and offers" type="checkbox" />
          <button>Continue to Payment</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutInfoPage;
