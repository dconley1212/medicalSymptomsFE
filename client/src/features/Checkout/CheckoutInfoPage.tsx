import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import CheckoutItems from "./CheckoutItems";
import styled from "styled-components";
import { userInformation } from "../UserAccount/UserAccountSlice";
import { useAppSelector } from "../../app/hooks";

const StyledCheckoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

const StyledFormWrappper = styled.div`
  margin: 0rem 2rem;
  padding: 0 4rem;
  width: 50%;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 0rem 0rem;
    padding: 0rem 2rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  width: 75%;
`;

const StyledInput = styled.input`
  padding: 0.75rem;
  margin: 0.5rem 0rem;
  border-radius: 5px;
`;

const StyledCheckoutComponent = styled.div`
  height: 100vh;
  border-left: 1px solid black;
`;

const StyledStateLabel = styled.label`
  margin: 0.5rem 0rem;
  font-size: 1em;
`;

const StyledStateSelector = styled.select`
  padding: 0.5em;
`;

const StyledPromotionLabel = styled.label`
  margin-top: 0.5rem;
`;

const StyledCheckBox = styled.input`
  margin-left: 2rem;
  @media screen and (max-width: 460px) {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  width: 50%;
  padding: 1rem;
  background-color: #cb4a6f;
  color: #000000;
  font-size: 1rem;
  cursor: pointer;
  @media screen and (max-width: 460px) {
    width: 90%;
  }
`;

export interface CheckoutInfo {
  username: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment_suite_etc: string;
  city: string;
  state: string;
  zipcode: string;
}

const CheckoutInfoPage = () => {
  const [userCheckoutInfo, setUserCheckoutInfo] = useState<CheckoutInfo>({
    username: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment_suite_etc: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const userInfo = useAppSelector((state) => state.user.userInfo);

  useEffect(() => {
    if (userInfo.firstName) setUserCheckoutInfo(userInfo);
  }, []);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCheckoutInfo({
      ...userCheckoutInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserCheckoutInfo({
      ...userCheckoutInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    navigate("/checkoutpayment");
  };

  return (
    <div>
      <StyledCheckoutWrapper>
        <StyledFormWrappper>
          <StyledForm>
            <StyledInput
              name="firstName"
              placeholder="First name"
              type="text"
              value={userCheckoutInfo.firstName}
              onChange={handleChange}
            />
            <StyledInput
              name="lastName"
              placeholder="Last name"
              type="text"
              value={userCheckoutInfo.lastName}
              onChange={handleChange}
            />
            <StyledInput name="Email" placeholder="Email" />
            <StyledInput
              name="address"
              placeholder="Address"
              type="text"
              value={userCheckoutInfo.address}
              onChange={handleChange}
            />
            <StyledInput
              name="apartment_suite_etc"
              placeholder="Apartment, suite, etc. (optional)"
              value={userCheckoutInfo.apartment_suite_etc}
              onChange={handleChange}
            />
            <StyledInput
              name="city"
              placeholder="City"
              value={userCheckoutInfo.city}
              onChange={handleChange}
            />
            <StyledStateLabel>
              Choose a state from the Dropdown
            </StyledStateLabel>
            <StyledStateSelector
              data-testid="dropdown"
              name="state"
              value={userCheckoutInfo.state}
              onChange={handleDropdownChange}
            >
              <option value="">Find Your State</option>
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
            </StyledStateSelector>
            <StyledInput
              name="zipcode"
              placeholder="ZIP code"
              type="text"
              value={userCheckoutInfo.zipcode}
              onChange={handleChange}
            />
            <StyledInput
              name="phone"
              placeholder="Phone"
              type="text"
              value={userCheckoutInfo.phone}
              onChange={handleChange}
            />
            <StyledPromotionLabel>
              Check the box if you want to subscribe to promotions and news
              <StyledCheckBox name="Subscriber" type="checkbox" />
            </StyledPromotionLabel>
            <StyledButton onClick={handleClick}>
              Continue to Payment
            </StyledButton>
          </StyledForm>
        </StyledFormWrappper>
        <StyledCheckoutComponent>
          <CheckoutItems />
        </StyledCheckoutComponent>
      </StyledCheckoutWrapper>
    </div>
  );
};

export default CheckoutInfoPage;
