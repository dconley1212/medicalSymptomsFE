import React from "react";
import styled from "styled-components";

const StyledMainDiv = styled.div`
  background-image: url("../Assets/humberto-chavez-FVh_yqLR9eA-unsplash.jpg");
`;

const LandingPage = () => {
  return (
    <div>
      <header></header>
      <StyledMainDiv>
        <h2>Tired of back Pain?</h2>
        <p>Some statistic</p>
        <button>Want a doctors recomendation?</button>
      </StyledMainDiv>
    </div>
  );
};

export default LandingPage;
