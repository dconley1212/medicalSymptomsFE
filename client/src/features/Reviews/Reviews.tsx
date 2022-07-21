import React from "react";
import { useNavigate } from "react-router";

const Reviews = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addreview");
  };
  return (
    <div>
      <button onClick={handleClick}>Want to add your own Review</button>
      <h2>What are people saying about our Products</h2>
      <div>
        <h3>Item One</h3>
        <p></p>
      </div>
      <div>
        <h3>Item two</h3>
        <p></p>
      </div>
    </div>
  );
};
export default Reviews;
