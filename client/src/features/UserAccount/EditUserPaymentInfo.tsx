import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { payment } from "./UserAccountSlice";
import { addPaymentInfo } from "./UserAccountSlice";

const EditUserPaymentInfo = () => {
  const paymentInfo = useAppSelector((state) => state.user.paymentInfo);
  const [editPayment, setEditPayment] = useState<payment>({
    cardNumber: paymentInfo.cardNumber,
    nameOnCard: paymentInfo.nameOnCard,
    cardExpiration: paymentInfo.cardExpiration,
    securityCode: paymentInfo.securityCode,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEditPaymentInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditPayment({
      ...editPayment,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmitEditPayment = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPaymentInfo(editPayment));
    navigate("/user");
  };

  return (
    <div>
      <form onSubmit={handleSubmitEditPayment}>
        <input
          name="cardNumber"
          type="text"
          onChange={handleEditPaymentInfo}
          value={paymentInfo.cardNumber}
          placeholder="Card Number"
        />
        <input
          name="nameOnCard"
          type="text"
          onChange={handleEditPaymentInfo}
          value={paymentInfo.nameOnCard}
          placeholder="Name on Card"
        />
        <input
          name="cardExpiration"
          type="text"
          onChange={handleEditPaymentInfo}
          value={paymentInfo.cardExpiration}
          placeholder="Expiration date"
        />
        <input
          name="securityCode"
          type="text"
          onChange={handleEditPaymentInfo}
          value={paymentInfo.securityCode}
          placeholder="Security Code"
        />
        <button>Add Payment</button>
      </form>
    </div>
  );
};

export default EditUserPaymentInfo;
