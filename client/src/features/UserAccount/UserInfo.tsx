import React, { useEffect, useState } from "react";
import UserPaymentInfo from "./UserPaymentInfo";
import { useAppSelector } from "../../app/hooks";
import UserAddressInfo from "./UserAddressInfo";
import { useNavigate } from "react-router";

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
    <div>
      <h2>Name</h2>
      <p>password shown as stars</p>
      <p>Phone Number</p>
      {addAddress === false ? (
        <div>
          <UserAddressInfo handleSubmit={handleSubmit} />
        </div>
      ) : (
        <div title="address">
          <h3>Address</h3>
          <p>{user.userInfo.address}</p>
          <p>{user.userInfo.apartment_suite_etc}</p>
          <p>{user.userInfo.city}</p>
          <p>{user.userInfo.state}</p>
          <p>{user.userInfo.zipcode}</p>
          <button onClick={handleEditUserInfo}>Edit Address</button>
        </div>
      )}
      {paymentInfo === false ? (
        <UserPaymentInfo handleSubmitPayment={handleSubmitPayment} />
      ) : (
        <div>
          <h3>Payment</h3>
          <p>CardNumber: {user.paymentInfo.cardNumber}</p>
          <p>Name on card: {user.paymentInfo.nameOnCard}</p>
          <p>Card Expiration: {user.paymentInfo.cardExpiration}</p>
          <p>Security Code: {user.paymentInfo.securityCode}</p>
          <button onClick={handleEditPayment}>Edit Payment</button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
