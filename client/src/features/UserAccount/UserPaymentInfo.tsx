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
  const handleSubmiPaymentInfo = () => {
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
        />
        <input
          name="nameOnCard"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.nameOnCard}
        />
        <input
          name="cardExpiration"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.cardExpiration}
        />
        <input
          name="securityCode"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.securityCode}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserPaymentInfo;
