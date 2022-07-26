import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

interface click {
  handleClick: (value: number) => number;
  value: number;
}

const Star = ({ handleClick, value }: click) => {
  const iconClick = () => {
    handleClick(value);
  };

  return <FaStar onClick={iconClick} />;
};
export default Star;
