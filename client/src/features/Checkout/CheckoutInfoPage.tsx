import React from "react";
import Header from "../../Components/Header";
import CheckoutItems from "./CheckoutItems";
import styled from "styled-components";

const StyledCheckoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0rem;
`;

const StyledFormWrappper = styled.div`
  margin: 0rem 2rem;
  padding: 0 4rem;
  width: 50%;
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
`;

const CheckoutInfoPage = () => {
  return (
    <div>
      <Header />
      <StyledCheckoutWrapper>
        <StyledFormWrappper>
          <StyledForm>
            <StyledInput
              name="First_name"
              placeholder="First name"
              type="text"
            />
            <StyledInput name="Last_name" placeholder="Last name" type="text" />
            <StyledInput name="Email" placeholder="Email" />
            <StyledInput name="address" placeholder="address" type="text" />
            <StyledInput
              name="Apartment_Suite_Etc"
              placeholder="Apartment, suite, etc. (optional"
            />
            <StyledInput name="City" placeholder="City" />
            <label>Choose a state from the Dropdown</label>
            <select>
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
            <StyledInput name="Zip_code" placeholder="ZIP code" type="text" />
            <StyledInput name="Phone" placeholder="Phone" type="text" />
            <StyledInput
              name="Subscriber"
              placeholder="email me with news and offers"
              type="checkbox"
            />
            <button>Continue to Payment</button>
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
