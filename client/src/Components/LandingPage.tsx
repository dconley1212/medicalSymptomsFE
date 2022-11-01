import React from "react";
import styled from "styled-components";
import backgroundImg from "../Assets/austin-distel-7bMdiIqz_J4-unsplash.jpg";
import { useAppSelector } from "../app/hooks";

const StyledWrapper = styled.div`
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
  }
`;

const StyledMainDiv = styled.div`
  padding: 12rem 5rem;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid black;
  width: 100vw;
  height: 75vh;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100vw; */
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    height: 100vh;
    overflow: hidden;
  }
`;

const LandingPageHook = styled.h2`
  font-size: 2rem;
  position: relative;
  bottom: 9rem;
  padding: 3rem;
  @media screen and (max-width: 460px) {
    position: relative;
    bottom: 15rem;
    right: 4rem;
  }
`;

const StyledLowerDiv = styled.div`
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: row;
    width: 90%;
  }
`;

const LandingPageStat = styled.p`
  padding: 3rem;
  position: relative;
  bottom: 10rem;
  width: 23%;
  font-size: 1.5rem;
  color: white;
  @media screen and (max-width: 460px) {
    position: relative;
    padding: 0.5rem;
    width: 20vw;
    top: 5rem;
    right: 6rem;
    color: #ffffff;
    background-color: #000000;
    border-radius: 10px;
    font-size: 1.2rem;
  }
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
  @media screen and (max-width: 460px) {
    position: relative;
    top: 25rem;
    padding: 1rem;
    height: 10vh;
    width: 40%;
    cursor: pointer;
  } ;
`;

const LandingPage = () => {
  const reviews = useAppSelector((state) => state.reviews);

  console.log(reviews);

  return (
    <StyledWrapper>
      <StyledMainDiv>
        <LandingPageHook>Tired of back pain?</LandingPageHook>
        <StyledLowerDiv>
          <LandingPageStat>
            You're in good company too. 1 in 3 Adults experience back pain!
          </LandingPageStat>
          <SurveyButton>Want a doctors recomendation?</SurveyButton>
        </StyledLowerDiv>
      </StyledMainDiv>
    </StyledWrapper>
  );
};

export default LandingPage;
