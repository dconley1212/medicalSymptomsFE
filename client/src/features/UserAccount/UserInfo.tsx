import React, { useEffect, useState } from "react";
import UserPaymentInfo from "./UserPaymentInfo";
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
    margin: .1rem 0rem .1rem 0rem;
    padding: .1rem 0rem .1rem 0rem;
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
`;

const UserInfo = () => {
  const [addAddress, setAddAddress] = useState<boolean>(true);
  const [paymentInfo, setPaymentInfo] = useState<boolean>(true);

  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user.userInfo.address);
    if (user.userInfo.address === "") {
      setAddAddress(false);
    }
    if (user.paymentInfo.cardNumber === "") {
      setPaymentInfo(false);
    }
  }, []);

  const handleEditUserInfo = () => {
    navigate("/user/editAddress");
  };

  const handleSubmit = () => {
    setAddAddress(true);
    return addAddress;
  };

  const handleSubmitPayment = () => {
    setPaymentInfo(true);
    return paymentInfo;
  };

  const handleEditPayment = () => {
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
            <UserAddressInfo handleSubmit={handleSubmit} />
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
          <UserPaymentInfo handleSubmitPayment={handleSubmitPayment} />
        ) : (
          <StyledPaymentDiv>
            <StyledPaymentTitle>Payment</StyledPaymentTitle>
            <StyledPaymentParagraph>
              CardNumber:
              {user.paymentInfo.cardNumber}
            </StyledPaymentParagraph>
            <StyledPaymentParagraph>
              Name on card: {user.paymentInfo.nameOnCard}
            </StyledPaymentParagraph>
            <StyledPaymentParagraph>
              Card Expiration: {user.paymentInfo.cardExpiration}
            </StyledPaymentParagraph>
            <StyledPaymentParagraph>
              Security Code: {user.paymentInfo.securityCode}
            </StyledPaymentParagraph>
            <StyledEditPayment onClick={handleEditPayment}>
              Edit Payment
            </StyledEditPayment>
          </StyledPaymentDiv>
        )}
      </StyledUserInfoDiv>
    </StyledUserInfoWrapper>
  );
};

export default UserInfo;
