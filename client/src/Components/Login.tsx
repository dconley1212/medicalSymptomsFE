import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  padding: 5rem;
  background-color: #ffffff;
  border-style: solid;
  border-width: 5px;
  border-image: linear-gradient(#4682b4, #db7093) 5;
`;

const StyledTitleLogo = styled.h2`
  position: relative;
  bottom: 2rem;
  font-size: 2rem;
  color: #4682b4;
`;

const StyledDirections = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;
const StyledInput = styled.input`
  display: flex;
`;

const Login = () => {
  const [login, setLogin] = useState<{ [x: string]: string }>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <LoginWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitleLogo>ConleyCare</StyledTitleLogo>
        <StyledDirections>Please Sign In</StyledDirections>
        <input
          placeholder="email"
          name="email"
          value={login.email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <button></button>
      </StyledForm>
    </LoginWrapper>
  );
};

export default Login;
