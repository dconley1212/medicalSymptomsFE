import React, { useState } from "react";
import { payment } from "./UserAccountSlice";
import { addPaymentInfo } from "./UserAccountSlice";
import { useAppDispatch } from "../../app/hooks";
import styled from "styled-components";

const StyledPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-left: 4rem;
  width: 90%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

const StyledInput = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

interface paymentProp {
  handleSubmitPayment: () => {};
}

const UserPaymentInfo = ({ handleSubmitPayment }: paymentProp) => {
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
    handleSubmitPayment();
  };
  return (
    <StyledPaymentWrapper>
      <StyledForm onSubmit={handleSubmiPaymentInfo}>
        <StyledInput
          name="cardNumber"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.cardNumber}
          placeholder="Card Number"
        />
        <StyledInput
          name="nameOnCard"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.nameOnCard}
          placeholder="Name on Card"
        />
        <StyledInput
          name="cardExpiration"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.cardExpiration}
          placeholder="Expiration date"
        />
        <StyledInput
          name="securityCode"
          type="text"
          onChange={handlePaymentInfoChange}
          value={paymentInfo.securityCode}
          placeholder="Security Code"
        />
        <button>Add Payment</button>
      </StyledForm>
    </StyledPaymentWrapper>
  );
};

export default UserPaymentInfo;
