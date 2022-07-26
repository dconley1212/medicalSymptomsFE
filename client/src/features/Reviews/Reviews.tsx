import React from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { Review, reviews } from "./ReviewsSlice";
import { FaStar } from "react-icons/fa";
import ReviewStars from "./ReviewStars";
import styled from "styled-components";
import Header from "../../Components/Header";

const StyledReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledStarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledItemsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledItemColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Reviews = () => {
  const reviews = useAppSelector((state) => state.reviews);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addreview");
  };
  return (
    <div>
      <Header />
      <StyledTitleDiv>
        <h2>What are people saying about our Products</h2>
      </StyledTitleDiv>
      <StyledItemsDiv>
        <StyledItemColumn>
          <h3>Item One</h3>
          <button onClick={handleClick}>Add your own Review</button>
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
        </StyledItemColumn>
        <StyledItemColumn>
          <h3>Item two</h3>
          <button onClick={handleClick}>Add your own Review</button>
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
        </StyledItemColumn>
      </StyledItemsDiv>
    </div>
  );
};
export default Reviews;
