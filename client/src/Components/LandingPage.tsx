import React from "react";
import styled from "styled-components";
import backgroundImg from "../Assets/austin-distel-7bMdiIqz_J4-unsplash.jpg";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.2rem;
  background: #4682b4;
`;
const StyledLogoTitle = styled.h2`
  font-size: 1.2rem;
  color: #000000;
`;

const StyledLinksDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLinks = styled(Link)`
  margin: 0em 1em;
  color: #000000;
  text-decoration: none;
  &:hover {
    transition-timing-function: ease;
    color: #ffffff;
    text-decoration: underline;
  }
`;

const StyledMainDiv = styled.div`
  padding: 12rem 5rem;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid black;
`;

const LandingPageHook = styled.h2`
  font-size: 2rem;
  position: relative;
  bottom: 9rem;
  padding: 3rem;
`;

const LandingPageStat = styled.p`
  padding: 3rem;
  position: relative;
  bottom: 10rem;
  width: 23%;
  font-size: 1.5rem;
  color: white;
`;
const SurveyButton = styled.button`
  padding: 1.2rem;
  border-radius: 10px;
  color: white;
  background-color: black;
  width: 15%;
  position: relative;
  left: 5rem;
  bottom: 7rem;
  font-size: 1rem;
  cursor: pointer;
`;

const LandingPage = () => {
  return (
    <div>
      <StyledHeader>
        <StyledLogoTitle>ConleyCare</StyledLogoTitle>
        <StyledLinksDiv>
          <StyledLinks to="/register">Create Account</StyledLinks>
          <StyledLinks to="/login">Login</StyledLinks>
        </StyledLinksDiv>
      </StyledHeader>
      <StyledMainDiv>
        <LandingPageHook>Tired of back pain?</LandingPageHook>
        <LandingPageStat>
          You're in good company too. 1 in 3 Adults experience back pain!
        </LandingPageStat>
        <SurveyButton>Want a doctors recomendation?</SurveyButton>
      </StyledMainDiv>
    </div>
  );
};

export default LandingPage;
