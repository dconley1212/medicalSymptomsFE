import React, { MouseEvent } from "react";
import { FaStar } from "react-icons/fa";

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
