import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import UserInfo from "./UserInfo";
import styled from "styled-components";

const StyledUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #f5f5f5;
`;

const StyledDivButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100vh;
  background-color: #4682b4;
`;

const StyledButtons = styled.button`
  height: 10vh;
  background-color: #cb4a6f;
  border-color: #ffffff;
  cursor: pointer;
`;

const UserAccount = () => {
  const user = useAppSelector((state) => state.user);
  const [showUser, setShowUser] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);

  useEffect(() => {
    if (user.userInfo.address === "") {
      setButton(false);
    }
    if (user.userInfo.address !== "" || user.paymentInfo.cardNumber !== "") {
      setShowUser(true);
    }
  }, []);

  const handleUserInfoClick = () => {
    setShowUser(!showUser);
  };

  return (
    <StyledUserWrapper>
      <StyledDivButtons>
        <StyledButtons onClick={handleUserInfoClick}>
          {button === false ? "Add info for a faster checkout!" : "My Info"}
        </StyledButtons>
        <StyledButtons>News</StyledButtons>
      </StyledDivButtons>
      <div>
        {showUser === true ? (
          <div>
            <UserInfo />
          </div>
        ) : null}
      </div>
    </StyledUserWrapper>
  );
};

export default UserAccount;
