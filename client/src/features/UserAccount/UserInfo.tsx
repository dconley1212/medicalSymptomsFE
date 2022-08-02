import React, { useEffect, useState } from "react";
import UserPaymentInfo from "./UserPaymentInfo";
import { useAppSelector } from "../../app/hooks";
import UserAddressInfo from "./UserAddressInfo";
import { useNavigate } from "react-router";

// left off trying to fix the state for showing the added billing address/ update billing address
// Ran into a little trouble with the interface type for a handle submit function

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
    navigate("/user/userAddress");
  };

  const handleSubmit = () => {
    setAddAddress(true);
    return addAddress;
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
        <div>
          <p>{user.userInfo.address}</p>
          <p>{user.userInfo.apartment_suite_etc}</p>
          <p>{user.userInfo.city}</p>
          <p>{user.userInfo.state}</p>
          <p>{user.userInfo.zipcode}</p>
          <button onChange={handleEditUserInfo}>Edit my info</button>
        </div>
      )}
      <button>Add Payment Info</button>
      {paymentInfo === false ? <UserPaymentInfo /> : null}
    </div>
  );
};

export default UserInfo;
