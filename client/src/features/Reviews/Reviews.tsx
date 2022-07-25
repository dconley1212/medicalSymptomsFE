import React from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { Review, reviews } from "./ReviewsSlice";
import { FaStar } from "react-icons/fa";
import ReviewStars from "./ReviewStars";
import styled from "styled-components";

const StyledReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledStarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

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
            <StyledReviewWrapper>
              <StyledStarWrapper>
                {[1, 2, 3, 4, 5].map((itemOne) => {
                  return <ReviewStars rating={item.rating} value={itemOne} />;
                })}
              </StyledStarWrapper>
              <p>{item.comments}</p>
              <p>- {item.reviewerName}</p>
            </StyledReviewWrapper>
          );
        })}
      </div>
      <div>
        <h3>Item two</h3>
        {reviews.itemTwoReviews.map((item) => {
          return (
            <StyledReviewWrapper>
              <StyledStarWrapper>
                {[1, 2, 3, 4, 5].map((itemTwo) => {
                  return <ReviewStars rating={item.rating} value={itemTwo} />;
                })}
              </StyledStarWrapper>
              <p>{item.comments}</p>
              <p>- {item.reviewerName}</p>
            </StyledReviewWrapper>
          );
        })}
        <p></p>
      </div>
    </div>
  );
};
export default Reviews;
