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
`;

const StyledUserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5rem;
  padding: 0.5rem 5rem;
  width: 100%;
`;
const StyledUserLoginInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledAddressDiv = styled.div`
  padding: 1rem 6rem;
  border: solid 3px #000000;
  background-color: #ffffff;
  width: 100%;
`;

const StyledAddressTitle = styled.h2`
  color: #4682b4;
  /* text-decoration: underline 3px black; */
`;

const StyledParagraphAddress = styled.p`
  width: 100%;
`;

const StyledPaymentDiv = styled.div`
  padding: 0.5rem 5rem;
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
            <p>Apartment/Suite/etc:{user.userInfo.apartment_suite_etc}</p>
            <p>City: {user.userInfo.city}</p>
            <p>State: {user.userInfo.state}</p>
            <p>Zip Code: {user.userInfo.zipcode}</p>
            <button onClick={handleEditUserInfo}>Edit Address</button>
          </StyledAddressDiv>
        )}
        {paymentInfo === false ? (
          <UserPaymentInfo handleSubmitPayment={handleSubmitPayment} />
        ) : (
          <StyledPaymentDiv>
            <h2>Payment</h2>
            <p>CardNumber: {user.paymentInfo.cardNumber}</p>
            <p>Name on card: {user.paymentInfo.nameOnCard}</p>
            <p>Card Expiration: {user.paymentInfo.cardExpiration}</p>
            <p>Security Code: {user.paymentInfo.securityCode}</p>
            <button onClick={handleEditPayment}>Edit Payment</button>
          </StyledPaymentDiv>
        )}
      </StyledUserInfoDiv>
    </StyledUserInfoWrapper>
  );
};

export default UserInfo;
