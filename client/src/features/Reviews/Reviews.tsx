import React from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { DataBaseReview } from "./ReviewsSlice";
import ReviewStars from "./ReviewStars";
import styled from "styled-components";

const StyledComponentWrapper = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

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
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 5rem;
  }
`;

const StyledItemsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledItemOneColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  padding: 3rem;
  width: 30%;
  margin-top: 2rem;
  background-color: #cb4a6f;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledItemTwoColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  padding: 3rem;
  width: 30%;
  margin-top: 2rem;
  background-color: #cb4a6f; ;
`;

const StyledItemNames = styled.h3`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  margin-top: 0rem;
  font-size: 1.5rem;
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
  color: #000000;
  background-color: #4682b4;
  cursor: pointer;
  font-size: 1rem;
  @media screen and (max-width: 460px) {
    width: 70%;
    padding: 1em, 1.5em;
  }
`;

const StyledReviewerName = styled.p`
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  color: #000000;
`;

// it might be best to have a loading state or if then statement in the jsx
// for when the component is inititally rendered.

const Reviews = () => {
  const reviews = useAppSelector((state) => state.reviews);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addreview");
  };
  return (
    <div>
      <StyledComponentWrapper>
        <StyledTitleDiv>
          <h2>What are people saying about our products?</h2>
        </StyledTitleDiv>
        <StyledItemsDiv>
          <StyledItemOneColumn data-testid="itemOneCard">
            <StyledItemNames>Item One</StyledItemNames>
            <StyledButtonDiv>
              <StyledButton onClick={handleClick}>Add a Review</StyledButton>
            </StyledButtonDiv>
            {reviews.itemOneReviews.map((item: DataBaseReview) => {
              return (
                <StyledReviewWrapper key={item.review_id}>
                  <StyledStarWrapper>
                    {[1, 2, 3, 4, 5].map((itemOne) => {
                      return (
                        <ReviewStars rating={item.rating} value={itemOne} />
                      );
                    })}
                  </StyledStarWrapper>
                  <p>{item.comments}</p>
                  <StyledReviewerName>- {item.reviewerName}</StyledReviewerName>
                </StyledReviewWrapper>
              );
            })}
          </StyledItemOneColumn>
          <StyledItemTwoColumn data-testid="itemTwoCard">
            <StyledItemNames>Item Two</StyledItemNames>
            <StyledButtonDiv>
              <StyledButton onClick={handleClick}>Add a Review</StyledButton>
            </StyledButtonDiv>
            {reviews.itemTwoReviews.map((item) => {
              return (
                <StyledReviewWrapper>
                  <StyledStarWrapper>
                    {[1, 2, 3, 4, 5].map((itemTwo) => {
                      return (
                        <ReviewStars rating={item.rating} value={itemTwo} />
                      );
                    })}
                  </StyledStarWrapper>
                  <p>{item.comments}</p>
                  <StyledReviewerName>- {item.reviewerName}</StyledReviewerName>
                </StyledReviewWrapper>
              );
            })}
          </StyledItemTwoColumn>
        </StyledItemsDiv>
      </StyledComponentWrapper>
    </div>
  );
};
export default Reviews;
