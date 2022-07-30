import React, { useEffect, useState } from "react";
import UserPaymentInfo from "./UserPaymentInfo";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { userInformation, add } from "./UserAccountSlice";

const UserInfo = () => {
  const [addAddress, setAddAddress] = useState<boolean>(true);
  const [paymentInfo, setPaymentInfo] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<userInformation>({
    username: "",
    phone: "",
    address: "",
    apartment_suite_etc: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user.userInfo.address) {
      setAddAddress(false);
    }
    if (!user.paymentInfo.cardNumber) {
      setPaymentInfo(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserInfo({
      ...userInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleUserInfoSubmit = () => {
    dispatch(add(userInfo));
  };

  return (
    <div>
      <h2>Name</h2>
      <p>password shown as stars</p>
      <p>Phone Number</p>
      {addAddress === false ? (
        <div>
          <form onSubmit={handleUserInfoSubmit}>
            <input
              value={userInfo.address}
              onChange={handleChange}
              name="address"
              type="text"
            />
            <input
              onChange={handleChange}
              name="apartment_suite_etc"
              type="text"
              value={userInfo.apartment_suite_etc}
            />
            <input
              name="city"
              type="text"
              onChange={handleChange}
              value={userInfo.city}
            />
            <label>Choose A State</label>
            <select onChange={handleSelectChange} value={user.userInfo.state}>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <input
              name="Zip_code"
              type="text"
              onChange={handleChange}
              value={userInfo.zipcode}
            />
            <button>Submit Billing Address</button>
          </form>
        </div>
      ) : (
        <div>
          <p>{user.userInfo.address}</p>
          <p>{user.userInfo.apartment_suite_etc}</p>
          <p>{user.userInfo.city}</p>
          <p>{user.userInfo.state}</p>
          <p>{user.userInfo.zipcode}</p>
        </div>
      )}
      <button>Add Payment Info</button>
      {paymentInfo === false ? <UserPaymentInfo /> : null}
    </div>
  );
};

export default UserInfo;
