import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  border: 2px solid black;
`;

const RegisterFormStyle = styled.form`
  display: flex;
  padding: 1rem;
  border: 2px solid black;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  border-radius: 15px;
`;

const StyledLabels = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.4rem 0rem;
`;

const FormInputsStyle = styled.input`
  display: flex;
  margin: 0.4rem 0.4rem;
  padding: 0.7rem;
  width: 90%;
  border: 2px solid black;
  border-radius: 15px;
`;

const StyledButton = styled.button`
  display: flex;
  padding: 1rem;
  justify-content: center;
  width: 40%;
  border-radius: 15px;
`;

const Register = () => {
  const [account, setAccount] = useState<{ [x: string]: string }>({
    username: "",
    password: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setAccount({ ...account, [name]: value });
    console.log(account);
  };
  const navigate = useNavigate();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <FormWrapper>
      <RegisterFormStyle onSubmit={handleSubmit}>
        <StyledLabels>
          {"Create Username: "}
          <FormInputsStyle
            type="text"
            name="username"
            value={account.username}
            onChange={handleChange}
          />
        </StyledLabels>
        <StyledLabels>
          {"Create Password: "}
          <FormInputsStyle
            type="password"
            name="password"
            value={account.password}
            onChange={handleChange}
          />
        </StyledLabels>
        <StyledLabels>
          {"Email: "}
          <FormInputsStyle
            type="email"
            name="email"
            value={account.email}
            onChange={handleChange}
          />
        </StyledLabels>
        <StyledLabels>
          {" Phone Number:"}
          <FormInputsStyle
            type="tel"
            name="phone_number"
            value={account.phone_number}
            onChange={handleChange}
          />
        </StyledLabels>
        <StyledButton>Submit</StyledButton>
      </RegisterFormStyle>
    </FormWrapper>
  );
};

export default Register;
