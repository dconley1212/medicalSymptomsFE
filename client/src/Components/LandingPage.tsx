import React from "react";
import styled from "styled-components";
import backgroundImg from "../Assets/austin-distel-7bMdiIqz_J4-unsplash.jpg";

const StyledHeader = styled.header`
  padding: 1rem;
  background: #4682b4;
  color: #faf0e6;
  font-size: 1.2rem;
`;

const StyledMainDiv = styled.div`
  padding: 20rem 15rem;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const LandingPageHook = styled.h2`
  font-size: 2rem;
`;

const LandingPage = () => {
  return (
    <div>
      <StyledHeader>
        <h2>ConleyCare</h2>
      </StyledHeader>
      <StyledMainDiv>
        <LandingPageHook>Tired of back pain?</LandingPageHook>
        <p>You're in good company too. 1 in 3 Adults experience back pain!</p>
        <button>Want a doctors recomendation?</button>
      </StyledMainDiv>
    </div>
  );
};

export default LandingPage;
