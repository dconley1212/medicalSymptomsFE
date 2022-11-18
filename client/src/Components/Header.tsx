import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.2rem;
  background: #4682b4;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 460px) {
    display: flex;
    padding: 0.1rem;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 12vh;
  }
`;
const StyledLogoTitle = styled(Link)`
  font-size: 1.2rem;
  color: #000000;
  font-weight: bold;
  @media screen and (max-width: 460px) {
    font-size: 0.9rem;
  }
`;

const StyledLinksDiv = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
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
  @media screen and (max-width: 460px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 0.8rem;
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
        <StyledLinks to="/reviews">Reviews</StyledLinks>
        <StyledLinks to="/checkoutinfo">Checkout</StyledLinks>
        <StyledLinks to="/user">My Account</StyledLinks>
      </StyledLinksDiv>
    </StyledHeader>
  );
};

export default Header;
