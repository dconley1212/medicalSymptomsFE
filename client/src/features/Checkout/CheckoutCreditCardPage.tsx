import React from "react";
import Header from "../../Components/Header";
import CheckoutItems from "./CheckoutItems";
import styled from "styled-components";

const StyledPaymentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledFormDiv = styled.div`
  width: 50%;
  margin: 5rem;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 5em;
`;

const StyledTextInput = styled.input`
  margin-bottom: 1em;
  padding: 0.75em;
  border-radius: 10px;
  font-size: 0.9em;
`;

const StyledRadioLabel = styled.label`
  margin-bottom: 1em;
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
`;

const StyledCheckoutComponent = styled.div`
  margin: 5rem;
  height: 50vh;
`;

const CheckoutCreditCardPage = () => {
  return (
    <div>
      <Header />
      <StyledPaymentWrapper>
        <StyledFormDiv>
          <StyledForm>
            <StyledTextInput name="Card Number" placeholder="Card Number" />
            <StyledTextInput name="Name on Card" placeholder="Name on card" />
            <StyledTextInput
              name="Card Expiration"
              placeholder="Expiration data (mm/yy)"
            />
            <StyledTextInput name="Security Code" placeholder="Security Code" />
            <StyledRadioLabel>
              Same as Shipping address
              <StyledRadioInput name="Same as Shipping" type="radio" />
            </StyledRadioLabel>
            <StyledRadioLabel>
              Used a different billing address
              <StyledRadioInput name="Different Billing Address" type="radio" />
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
