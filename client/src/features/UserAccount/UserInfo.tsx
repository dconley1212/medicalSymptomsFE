import React, { useEffect, useState } from "react";
import UserInsuranceInfo from "./UserInsuranceInfo";
import { useAppSelector } from "../../app/hooks";
import UserAddressInfo from "./UserAddressInfo";
import { useNavigate } from "react-router";
import styled from "styled-components";

const StyledUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
  padding: 0.5rem 5rem;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledUserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5rem;
  padding: 0.5rem 5rem;
  width: 100%;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    margin: 0.1rem 0rem 0.1rem 0rem;
    padding: 0.1rem 0rem 0.1rem 0rem;
  }
`;
const StyledUserLoginInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAddressDiv = styled.div`
  padding: 1rem 3rem;
  border: solid 3px #000000;
  background-color: #ffffff;
  width: 100%;
`;

const StyledAddressTitle = styled.h2`
  color: #4682b4;
  /* text-decoration: underline 3px black; */
`;

const StyledParagraphAddress = styled.p`
  width: 20rem;
  font-weight: bold;
`;

const StyledEditAddress = styled.button`
  background-color: #cb4a6f;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
`;

const StyledPaymentDiv = styled.div`
  padding: 1rem 5rem;
  margin-left: 1rem;
  border: solid 3px #000000;
  background-color: #ffffff;
  width: 100%;
`;

const StyledPaymentTitle = styled.h2`
  color: #4682b4;
`;

const StyledPaymentParagraph = styled.p`
  width: 15rem;
  font-weight: bold;
`;

const StyledEditPayment = styled.button`
  background-color: #cb4a6f;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
`;

const UserInfo = () => {
  const [addAddress, setAddAddress] = useState<boolean>(false);
  const [paymentInfo, setPaymentInfo] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    // if (user.userInfo.address === "") {
    //   setAddAddress(false);
    // }
    if (user.insuranceInfo.nameForInsurance === "") {
      setPaymentInfo(false);
    }
  }, []);

  const handleEditUserInfo = () => {
    navigate("/user/editAddress");
  };

  const handleSubmit = (route: string) => {
    if (route === "error") {
      setAddAddress(false);
    } else {
      setAddAddress(true);
    }

    return addAddress;
  };

  const handleSubmitInsurance = () => {
    setPaymentInfo(true);
    return paymentInfo;
  };

  const handleEditInsurance = () => {
    navigate("/user/editPayment");
  };

  return (
    <StyledUserInfoWrapper>
      <StyledUserLoginInfo>
        <h2>Name</h2>
        <p>password shown as stars</p>
        <p>Phone Number</p>
      </StyledUserLoginInfo>
      <StyledUserInfoDiv>
        {addAddress === false ? (
          <div>
            {message}
            <UserAddressInfo
              handleSubmit={handleSubmit}
              setMessage={setMessage}
            />
          </div>
        ) : (
          <StyledAddressDiv title="address">
            <StyledAddressTitle>Address:</StyledAddressTitle>
            <StyledParagraphAddress>
              Street Address: {user.userInfo.address}
            </StyledParagraphAddress>
            <StyledParagraphAddress>
              Apartment/Suite/etc:{user.userInfo.apartment_suite_etc}
            </StyledParagraphAddress>
            <StyledParagraphAddress>
              City: {user.userInfo.city}
            </StyledParagraphAddress>
            <StyledParagraphAddress>
              State: {user.userInfo.state}
            </StyledParagraphAddress>
            <StyledParagraphAddress>
              Zip Code: {user.userInfo.zipcode}
            </StyledParagraphAddress>
            <StyledEditAddress onClick={handleEditUserInfo}>
              Edit Address
            </StyledEditAddress>
          </StyledAddressDiv>
        )}
        {paymentInfo === false ? (
          <UserInsuranceInfo handleSubmitInsurance={handleSubmitInsurance} />
        ) : (
          <StyledPaymentDiv>
            <StyledPaymentTitle>Payment</StyledPaymentTitle>
            <StyledPaymentParagraph>
              Name on Insurance Card: {user.insuranceInfo.nameForInsurance}
            </StyledPaymentParagraph>
            <StyledPaymentParagraph>
              Insurance Company: {user.insuranceInfo.insuranceCompany}
            </StyledPaymentParagraph>
            <StyledPaymentParagraph>
              We have your insurance card on file.
            </StyledPaymentParagraph>
            <StyledEditPayment onClick={handleEditInsurance}>
              Edit Insurance
            </StyledEditPayment>
          </StyledPaymentDiv>
        )}
      </StyledUserInfoDiv>
    </StyledUserInfoWrapper>
  );
};

export default UserInfo;
