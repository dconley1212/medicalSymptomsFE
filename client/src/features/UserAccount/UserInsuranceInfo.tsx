import React, { useState, useEffect } from "react";
import { insurance } from "./UserAccountSlice";
import { addInsuranceInfo } from "./UserAccountSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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

interface InsuranceProp {
  handleSubmitInsurance: (route: string) => {};
}

const UserPaymentInfo = ({ handleSubmitInsurance }: InsuranceProp) => {
  const [insuranceInfo, setInsuranceInfo] = useState<insurance>({
    nameForInsurance: "",
    insuranceCompany: "",
    insuranceFile: "",
  });

  const dispatch = useAppDispatch();
  const userInsuranceInfo = useAppSelector((state) => state.user.insuranceInfo);

  useEffect(() => {
    if (userInsuranceInfo.nameForInsurance === "") {
      handleSubmitInsurance("error");
    }
  }, []);

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
    dispatch(addInsuranceInfo(insuranceInfo));
    handleSubmitInsurance("bueno");
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
          data-testid="nameOnInsurance"
        />
        <StyledInput
          name="insuranceCompany"
          type="text"
          onChange={handleInsuranceInfoChange}
          value={insuranceInfo.insuranceCompany}
          placeholder="Insurance Company"
          data-testid="insuranceCompany"
        />
        <StyledInput
          name="insuranceFile"
          type="file"
          onChange={handleInsuranceInfoChange}
          value={insuranceInfo.insuranceFile}
          placeholder="Add insurance File"
          data-testid="insuranceFile"
        />
        <StyledButton>Upload Insurance Information</StyledButton>
      </StyledForm>
    </StyledPaymentWrapper>
  );
};

export default UserPaymentInfo;
