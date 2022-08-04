import React from "react";
import styled from "styled-components";
import backgroundImg from "../Assets/austin-distel-7bMdiIqz_J4-unsplash.jpg";
import Header from "./Header";

import { devices } from "./Header";

const StyledWrapper = styled.div`
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StyledMainDiv = styled.div`
  padding: 12rem 5rem;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid black;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
    <StyledWrapper>
      <Header />
      <StyledMainDiv>
        <LandingPageHook>Tired of back pain?</LandingPageHook>
        <LandingPageStat>
          You're in good company too. 1 in 3 Adults experience back pain!
        </LandingPageStat>
        <SurveyButton>Want a doctors recomendation?</SurveyButton>
      </StyledMainDiv>
    </StyledWrapper>
  );
};

export default LandingPage;
