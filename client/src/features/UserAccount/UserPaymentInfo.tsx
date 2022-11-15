import React, { useState } from "react";
import { insurance } from "./UserAccountSlice";
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

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #cb4a6f;
`;

interface paymentProp {
  handleSubmitPayment: () => {};
}

const UserPaymentInfo = ({ handleSubmitPayment }: paymentProp) => {
  const [insuranceInfo, setInsuranceInfo] = useState<insurance>({
    nameForInsurance: "",
    insuranceCompany: "",
    insuranceFile: "",
  });

  const dispatch = useAppDispatch();

  const handleInsuranceInfoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInsuranceInfo({
      ...insuranceInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitInsuranceInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(addPaymentInfo(paymentInfo));
    handleSubmitPayment();
  };
  return (
    <StyledPaymentWrapper>
      <StyledForm onSubmit={handleSubmitInsuranceInfo}>
        <StyledInput
          name="nameForInsurance"
          type="text"
          onChange={handleInsuranceInfoChange}
          value={insuranceInfo.nameForInsurance}
          placeholder="Name on Insurance Card"
          data-testid="nameOnCard"
        />
        <StyledInput
          name="insuranceCompany"
          type="text"
          onChange={handleInsuranceInfoChange}
          value={insuranceInfo.insuranceCompany}
          placeholder="Insurance Company"
          data-testid="cardExpiration"
        />
        <StyledInput
          name="insuranceFile"
          type="file"
          onChange={handleInsuranceInfoChange}
          value={insuranceInfo.insuranceFile}
          placeholder="Add insurance File"
          data-testid="securityCode"
        />
        <StyledButton>Add Payment</StyledButton>
      </StyledForm>
    </StyledPaymentWrapper>
  );
};

export default UserPaymentInfo;
