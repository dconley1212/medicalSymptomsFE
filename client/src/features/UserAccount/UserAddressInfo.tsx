import React, { useState, useEffect } from "react";
import { userInformation, addUserInfo } from "./UserAccountSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styled from "styled-components";
import axios from "axios";

const StyledAddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

const StyledLabel = styled.label`
  padding: 0.5rem;
`;

const StyledSelect = styled.select`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #cb4a6f;
`;

interface props {
  handleSubmit: (route: string) => {};
  setMessage: (value: string) => void;
}

const UserAddressInfo = ({ handleSubmit, setMessage }: props) => {
  const id = localStorage.getItem("id") || "";
  const user_id = parseInt(id);

  const [userInfo, setUserInfo] = useState<userInformation>({
    username: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment_suite_etc: "",
    city: "",
    state: "",
    zipcode: "",
    user_id: user_id,
  });

  const dispatch = useAppDispatch();
  const userAddress = useAppSelector((state) => state.user.userInfo);

  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    if (userAddress.firstName === "") {
      axios
        .get(`http://localhost:9000/user/${id}/address`, {
          headers: {
            authorization: token,
          },
        })
        .then((resp) => {
          // console.log(resp.data);
          if (resp.data.firstName) {
            dispatch(addUserInfo(resp.data));
            handleSubmit("bueno");
          }
        })
        .catch((err) => {
          console.log(err);
          setMessage(err.response.data.message);
          handleSubmit("error");
        });
    } else {
      handleSubmit("bueno");
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
      state: e.currentTarget.value,
    });
  };

  const handleUserInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(`http://localhost:9000/user/${id}/address`, userInfo, {
        headers: {
          authorization: token,
        },
      })
      .then((resp) => {
        dispatch(addUserInfo(resp.data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <StyledAddressWrapper>
      <StyledForm onSubmit={handleUserInfoSubmit}>
        <StyledInput
          value={userInfo.username}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Username"
        />
        <StyledInput
          value={userInfo.phone}
          onChange={handleChange}
          name="phone"
          type="text"
          placeholder="Phone Number"
        />
        <StyledInput
          data-testid="firstName"
          value={userInfo.firstName}
          onChange={handleChange}
          name="firstName"
          type="text"
          placeholder="First name"
        />
        <StyledInput
          value={userInfo.lastName}
          onChange={handleChange}
          name="lastName"
          type="text"
          placeholder="Last name"
          data-testid="lastName"
        />
        <StyledInput
          value={userInfo.address}
          onChange={handleChange}
          name="address"
          type="text"
          placeholder="Address"
          data-testid="address"
        />
        <StyledInput
          onChange={handleChange}
          name="apartment_suite_etc"
          type="text"
          value={userInfo.apartment_suite_etc}
          placeholder="Apt., Suite, etc."
          data-testid="apartment_suite_etc"
        />
        <StyledInput
          name="city"
          type="text"
          onChange={handleChange}
          value={userInfo.city}
          placeholder="City"
          data-testid="city"
        />
        <StyledLabel>Use dropdown to pick your state</StyledLabel>
        <StyledSelect
          data-testid="dropdown"
          onChange={handleSelectChange}
          value={userInfo.state}
        >
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
        </StyledSelect>
        <StyledInput
          name="zipcode"
          type="text"
          onChange={handleChange}
          value={userInfo.zipcode}
          placeholder="Zipcode"
          data-testid="zipcode"
        />
        <StyledButton>Submit Billing Address</StyledButton>
      </StyledForm>
    </StyledAddressWrapper>
  );
};

export default UserAddressInfo;
