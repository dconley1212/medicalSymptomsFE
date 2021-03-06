import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.2rem;
  background: #4682b4;
`;
const StyledLogoTitle = styled(Link)`
  font-size: 1.2rem;
  color: #000000;
  font-weight: bold;
`;

const StyledLinksDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLinks = styled(Link)`
  margin: 0em 1em;
  color: #000000;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    transition-timing-function: ease;
    color: #ffffff;
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoTitle to="/">ConleyCare</StyledLogoTitle>
      <StyledLinksDiv>
        <StyledLinks to="/register">Create Account</StyledLinks>
        <StyledLinks to="/login">Login</StyledLinks>
        <StyledLinks to="/products">Products</StyledLinks>
        <StyledLinks to="/checkoutinfo">Checkout</StyledLinks>
      </StyledLinksDiv>
    </StyledHeader>
  );
};

export default Header;
