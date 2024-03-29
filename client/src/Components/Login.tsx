import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getPayloadData from "../utilities/tokenPayload";
import styled from "styled-components";
import axios from "axios";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  height: 100vh;
  @media screen and (max-width: 460px) {
    width: 100vw;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  padding: 4rem;
  background-color: #ffffff;
  border-style: solid;
  border-width: 5px;
  border-image: linear-gradient(#4682b4, #db7093) 5;
  width: 20%;
  @media screen and (max-width: 460px) {
    padding: 5rem;
    margin: 3rem 1rem;
    width: 50vw;
  }
`;

const StyledTitleLogo = styled.h2`
  position: relative;
  bottom: 4rem;
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
  padding: 0.8em 2em;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  display: flex;
  padding: 1.1em;
  justify-content: center;
  border: 1px solid #4682b4;
  background-color: #ffffff;
  width: 50%;
  border-radius: 5px;
  font-size: 0.9em;
  cursor: pointer;
  color: #4682b4;
  &:hover {
    transition-timing-function: ease;
    background-color: #db7093;
    color: #ffffff;
  }
`;

const Login = () => {
  const [login, setLogin] = useState<{ [x: string]: string }>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/auth/login", login)
      .then((resp) => {
        getPayloadData(resp.data.token);
        return navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <LoginWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitleLogo>ConleyCare</StyledTitleLogo>
          <StyledDirections>Please Sign In</StyledDirections>
          <StyledInput
            placeholder="email"
            name="username"
            value={login.username}
            onChange={handleChange}
          />
          <StyledInput
            placeholder="password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />
          <StyledButton>Sign In</StyledButton>
        </StyledForm>
      </LoginWrapper>
    </div>
  );
};

export default Login;
