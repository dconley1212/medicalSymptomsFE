import React from "react";

const UserPaymentInfo = () => {
  return (
    <div>
      <form>
        <input name="Card Number" type="text" />
        <input name="Name on Card" type="text" />
        <input name="Card Expiration" type="text" />
        <input name="Security Code" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserPaymentInfo;
