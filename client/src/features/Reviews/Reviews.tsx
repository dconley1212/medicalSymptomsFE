import React from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { Review, reviews } from "./ReviewsSlice";
import { FaStar } from "react-icons/fa";
import ReviewStars from "./ReviewStars";
import styled from "styled-components";

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
              {[1, 2, 3, 4, 5].map((itemOne) => {
                return <ReviewStars rating={item.rating} value={itemOne} />;
              })}
              <p>{item.comments}</p>
              <p>- {item.reviewerName}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Item two</h3>
        {reviews.itemTwoReviews.map((item) => {
          return (
            <div>
              {[1, 2, 3, 4, 5].map(() => {
                return (
                  <div>
                    <div>
                      <FaStar />
                    </div>
                    <div>
                      <FaStar />
                    </div>
                  </div>
                );
              })}
              <p>{item.comments}</p>
              <p>- {item.reviewerName}</p>
            </div>
          );
        })}
        <p></p>
      </div>
    </div>
  );
};
export default Reviews;
