import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

interface click {
  handleClick: (value: number) => number;
  handleMouseOver: (value: number) => number;
  handleMouseLeave: () => null;
  value: number;
}

const Star = ({
  handleClick,
  handleMouseOver,
  handleMouseLeave,
  value,
}: click) => {
  const iconClick = () => {
    handleClick(value);
  };

  const hover = () => {
    handleMouseOver(value);
  };

  return (
    <FaStar
      onMouseLeave={handleMouseLeave}
      onMouseOver={hover}
      onClick={iconClick}
    />
  );
};
export default Star;
