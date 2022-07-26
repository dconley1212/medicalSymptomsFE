import { set } from "immer/dist/internal";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StyledStarFilled = styled.div`
  color: black;
`;
const StyledStarUnfilled = styled.div`
  color: #ffffff;
`;

interface rating {
  rating: number;
  value: number;
}

const ReviewStars = ({ rating, value }: rating) => {
  const [color, setColor] = useState<boolean>(false);

  useEffect(() => {
    if (value <= rating) {
      setColor(true);
    }
  }, []);

  return (
    <div>
      {color === true ? (
        <StyledStarFilled>
          <FaStar />
        </StyledStarFilled>
      ) : (
        <StyledStarUnfilled>
          <FaStar />
        </StyledStarUnfilled>
      )}
    </div>
  );
};

export default ReviewStars;
