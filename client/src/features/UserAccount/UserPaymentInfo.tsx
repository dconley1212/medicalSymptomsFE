import React, { useState } from "react";
import { payment } from "./UserAccountSlice";
import { addPaymentInfo } from "./UserAccountSlice";
import { useAppDispatch } from "../../app/hooks";

const UserPaymentInfo = () => {
  const [paymentInfo, setPaymentInfo] = useState<payment>({
    cardNumber: "",
    nameOnCard: "",
    cardExpiration: "",
    securityCode: "",
  });

  const dispatch = useAppDispatch();

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleSubmiPaymentInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPaymentInfo(paymentInfo));
  };
  return (
    <div>
      <form onSubmit={handleSubmiPaymentInfo}>
        <input
          name="cardNumber"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.cardNumber}
          placeholder="Card Number"
        />
        <input
          name="nameOnCard"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.nameOnCard}
          placeholder="Name on Card"
        />
        <input
          name="cardExpiration"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.cardExpiration}
          placeholder="Expiration date"
        />
        <input
          name="securityCode"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.securityCode}
          placeholder="Security Code"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserPaymentInfo;
