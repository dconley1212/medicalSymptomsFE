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

const StyledItemOneColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 3rem;
  width: 30%;
  margin-top: 2rem;
`;

const StyledItemTwoColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 3rem;
  width: 30%;
  margin-top: 2rem;
`;

const StyledItemNames = styled.h3`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  margin-top: 0rem;
  font-size: 1.3rem;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  width: 30%;
  border-radius: 8px;
  padding: 0.5em;
  margin-bottom: 2rem;
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
        <StyledItemOneColumn>
          <StyledItemNames>Item One</StyledItemNames>
          <StyledButtonDiv>
            <StyledButton onClick={handleClick}>
              Add your own Review
            </StyledButton>
          </StyledButtonDiv>
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
        </StyledItemOneColumn>
        <StyledItemTwoColumn>
          <StyledItemNames>Item Two</StyledItemNames>
          <StyledButtonDiv>
            <StyledButton onClick={handleClick}>
              Add your own Review
            </StyledButton>
          </StyledButtonDiv>
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
        </StyledItemTwoColumn>
      </StyledItemsDiv>
    </div>
  );
};
export default Reviews;
