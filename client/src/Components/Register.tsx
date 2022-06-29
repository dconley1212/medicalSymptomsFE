import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  border: 2px solid black;
  background-color: #db7093;
  height: 100vh;
`;

const RegisterFormStyle = styled.form`
  display: flex;
  padding: 1rem;
  border: 2px solid black;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  border-radius: 15px;
  background-color: #ffffff;
`;

const FormInputsStyle = styled.input`
  display: flex;
  margin: 0.4rem 0.4rem;
  padding: 0.7rem;
  width: 90%;
  border: 2px solid black;
  border-radius: 15px;
  background-color: #f5f5f5;
`;

const StyledButton = styled.button`
  display: flex;
  position: relative;
  left: 30%;
  font-size: 1rem;
  padding: 1rem;
  justify-content: center;
  width: 40%;
  border-radius: 15px;
  background-color: #4682b4;
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
        <h2>ConleyCare</h2>
        <h3>Create an Account</h3>
        <FormInputsStyle
          type="text"
          name="username"
          placeholder="Create Username"
          value={account.username}
          onChange={handleChange}
        />
        <FormInputsStyle
          type="password"
          name="password"
          placeholder="Create Password"
          value={account.password}
          onChange={handleChange}
        />
        <FormInputsStyle
          type="email"
          name="email"
          placeholder="Email"
          value={account.email}
          onChange={handleChange}
        />
        <FormInputsStyle
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          value={account.phone_number}
          onChange={handleChange}
        />
        <StyledButton>Submit</StyledButton>
      </RegisterFormStyle>
    </FormWrapper>
  );
};

export default Register;
