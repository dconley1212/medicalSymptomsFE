import React from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { Review } from "./ReviewsSlice";

const Reviews = () => {
  const reviews = useAppSelector((state) => state.reviews);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addreview");
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>Want to add your own Review</button>
        <h2>What are people saying about our Products</h2>
      </div>
      <div>
        <h3>Item One</h3>
        {reviews.itemOneReviews.map((item: Review) => {
          return (
            <div>
              <p>{item.comments}</p>
              <p>- {item.reviewerName}</p>
            </div>
          );
        })}
        <h3>Item two</h3>
        <p></p>
      </div>
    </div>
  );
};
export default Reviews;
