import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { userInformation } from "./UserAccountSlice";
import { addUserInfo } from "./UserAccountSlice";
import { useNavigate } from "react-router";

const EditUserAddressInfo = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [editedInfo, setEditedInfo] = useState<userInformation>({
    username: userInfo.username,
    phone: userInfo.phone,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    address: userInfo.address,
    apartment_suite_etc: userInfo.apartment_suite_etc,
    city: userInfo.city,
    state: userInfo.state,
    zipcode: userInfo.zipcode,
  });

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedInfo({
      ...editedInfo,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleEditSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditedInfo({
      ...editedInfo,
      state: e.currentTarget.value,
    });
  };
  const handleEditUserInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUserInfo(editedInfo));
    navigate("/user/info");
  };
  return (
    <div>
      <form onSubmit={handleEditUserInfoSubmit}>
        <input
          value={userInfo.firstName}
          onChange={handleEditChange}
          name="firstName"
          type="text"
          placeholder="First name"
        />
        <input
          value={userInfo.lastName}
          onChange={handleEditChange}
          name="lastName"
          type="text"
          placeholder="Last name"
        />
        <input
          value={userInfo.address}
          onChange={handleEditChange}
          name="address"
          type="text"
          placeholder="Address"
        />
        <input
          onChange={handleEditChange}
          name="apartment_suite_etc"
          type="text"
          value={userInfo.apartment_suite_etc}
          placeholder="Apt., Suite, etc."
        />
        <input
          name="city"
          type="text"
          onChange={handleEditChange}
          value={userInfo.city}
          placeholder="City"
        />
        <label>Choose A State</label>
        <select onChange={handleEditSelectChange} value={userInfo.state}>
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
          name="zipcode"
          type="text"
          onChange={handleEditChange}
          value={userInfo.zipcode}
          placeholder="Zipcode"
        />
        <button>Submit Billing Address</button>
      </form>
    </div>
  );
};

export default EditUserAddressInfo;
