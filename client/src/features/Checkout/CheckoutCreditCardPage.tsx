import React, { useState, useEffect } from "react";

import CheckoutItems from "./CheckoutItems";
import { useAppSelector } from "../../app/hooks";
import { payment } from "../UserAccount/UserAccountSlice";
import styled from "styled-components";

const StyledPaymentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: #f5f5f5;
  }
`;

const StyledFormDiv = styled.div`
  width: 50%;
  margin: 5rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  @media screen and (max-width: 460px) {
    display: flex;
    width: 100%;
    margin: 0rem 1rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 5em;
  @media screen and (max-width: 460px) {
    margin: 4em 3em;
  }
`;

const StyledTextInput = styled.input`
  margin-bottom: 1em;
  padding: 0.75em;
  border-radius: 10px;
  font-size: 0.9em;
  @media screen and (max-width: 460px) {
    margin-bottom: 1.2em;
    padding: 1em;
  }
`;

const StyledRadioLabel = styled.label`
  margin-bottom: 1em;
  @media screen and (max-width: 460px) {
    margin-bottom: 1.2em;
  }
`;

const StyledRadioInput = styled.input`
  margin-left: 1em;
`;

const StyledButton = styled.button`
  width: 50%;
  padding: 1em;
  border-radius: 10px;
  background-color: #cb4a6f;
  font-size: 1em;
  cursor: pointer;
  @media screen and (max-width: 460px) {
    margin-top: 1.2em;
    width: 100%;
  }
`;

const StyledCheckoutComponent = styled.div`
  margin: 5rem;
  height: 50vh;
`;

const CheckoutCreditCardPage = () => {
  const [payment, setPayment] = useState<payment>({
    cardNumber: "",
    nameOnCard: "",
    cardExpiration: "",
    securityCode: "",
  });
  const creditCardInfo = useAppSelector((state) => state.user.paymentInfo);

  useEffect(() => {
    if (creditCardInfo.cardNumber) {
      setPayment(creditCardInfo);
    }
  }, []);
  return (
    <div>
      <StyledPaymentWrapper>
        <StyledFormDiv>
          <StyledForm>
            <StyledTextInput
              value={payment.cardNumber}
              name="Card Number"
              placeholder="Card Number"
            />
            <StyledTextInput
              value={payment.nameOnCard}
              name="Name on Card"
              placeholder="Name on card"
            />
            <StyledTextInput
              name="Card Expiration"
              placeholder="Expiration data (mm/yy)"
              value={payment.cardExpiration}
            />
            <StyledTextInput
              value={payment.securityCode}
              name="Security Code"
              placeholder="Security Code"
            />
            <StyledRadioLabel>
              Same as Shipping address
              <StyledRadioInput name="Billing Address" type="radio" />
            </StyledRadioLabel>
            <StyledRadioLabel>
              Used a different billing address
              <StyledRadioInput name="Billing Address" type="radio" />
            </StyledRadioLabel>
            <StyledButton>Submit Order</StyledButton>
          </StyledForm>
        </StyledFormDiv>
        <StyledCheckoutComponent>
          <CheckoutItems />
        </StyledCheckoutComponent>
      </StyledPaymentWrapper>
    </div>
  );
};

export default CheckoutCreditCardPage;
