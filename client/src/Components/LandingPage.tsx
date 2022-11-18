import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { DataBaseReview } from "../features/Reviews/ReviewsSlice";
import backgroundImg from "../Assets/austin-distel-7bMdiIqz_J4-unsplash.jpg";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { add } from "../features/Reviews/ReviewsSlice";
import { useNavigate } from "react-router";

const StyledWrapper = styled.div`
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`;

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12rem 5rem;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid black;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100vw; */
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    height: 100vh;
    overflow: hidden;
  }
`;

const StyledLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandingPageHook = styled.h2`
  font-size: 2rem;
  position: relative;
  bottom: 9rem;
  padding: 3rem;
  @media screen and (max-width: 460px) {
    position: relative;
    bottom: 15rem;
    right: 4rem;
  }
`;

const StyledLowerDiv = styled.div`
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: row;
    width: 90%;
  }
`;

const LandingPageStat = styled.p`
  padding: 3rem;
  position: relative;
  bottom: 10rem;
  width: 40%;
  font-size: 1.5rem;
  color: white;
  @media screen and (max-width: 460px) {
    position: relative;
    padding: 0.5rem;
    width: 20vw;
    top: 5rem;
    right: 6rem;
    color: #ffffff;
    background-color: #000000;
    border-radius: 10px;
    font-size: 1.2rem;
  }
`;
const SurveyButton = styled.button`
  padding: 1.2em;
  border-radius: 10px;
  color: white;
  background-color: black;
  width: 30%;
  position: relative;
  left: 5rem;
  bottom: 7rem;
  font-size: 1em;
  cursor: pointer;
  box-sizing: border-box;
  @media screen and (max-width: 460px) {
    position: relative;
    top: 25rem;
    padding: 1rem;
    height: 10vh;
    width: 40%;
    cursor: pointer;
  } ;
`;

const StyledReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  margin-left: 15rem;
  margin-bottom: 15rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #4682b4;
`;

const StyledReviewQuote = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 0rem;
  font-size: 1.5rem;
`;
const StyledReviewerNameParagraph = styled.p`
  margin-top: 0rem;
`;

const StyledReviewButton = styled.button`
  padding: 0.8em;
  background-color: #ffffff;
  border: solid black 2px;
  border-radius: 5px;
  cursor: pointer;
  color: #4682b4;
  width: 75%;
`;

const LandingPage = () => {
  const [review, setReview] = useState<DataBaseReview | undefined>();
  const reviews = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let isCancelled = false;
    if (
      reviews.itemOneReviews.length === 0 ||
      reviews.itemTwoReviews.length === 0
    ) {
      axios
        .get("http://localhost:9000/reviews")
        .then((resp) => {
          if (!isCancelled) {
            resp.data.forEach((review: DataBaseReview) =>
              dispatch(add(review))
            );
            const specificReview =
              resp.data[Math.floor(Math.random() * resp.data.length)];
            setReview(specificReview);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setReview(
        reviews.itemOneReviews[
          Math.floor(Math.random() * reviews.itemOneReviews.length)
        ]
      );
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  const handleRecommendationButton = () => {
    navigate("/survey");
  };

  const handleProductButton = () => {
    navigate("/products");
  };

  return (
    <StyledWrapper>
      <StyledMainDiv>
        <StyledLeftDiv>
          <LandingPageHook>Tired of back pain?</LandingPageHook>
          <StyledLowerDiv>
            <LandingPageStat>
              You're in good company too. 1 in 3 Adults experience back pain!
            </LandingPageStat>
            <SurveyButton onClick={handleRecommendationButton}>
              Want a doctors recomendation?
            </SurveyButton>
          </StyledLowerDiv>
        </StyledLeftDiv>
        <StyledReviewDiv>
          <p data-testid="itemName">
            Product: {review !== undefined ? review.itemName : null}
          </p>
          <StyledReviewQuote>
            <q data-testid="comment">
              {review !== undefined ? review.comments : null}
            </q>
          </StyledReviewQuote>
          <StyledReviewerNameParagraph data-testid="reviewerName">
            - {review !== undefined ? review.reviewerName : null}
          </StyledReviewerNameParagraph>
          <StyledReviewButton onClick={handleProductButton}>
            Find Product
          </StyledReviewButton>
        </StyledReviewDiv>
      </StyledMainDiv>
    </StyledWrapper>
  );
};

export default LandingPage;
