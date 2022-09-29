import React, { useState } from "react";
import { useNavigate } from "react-router";
import { add } from "./ReviewsSlice";
import { useAppDispatch } from "../../app/hooks";
import Star from "./Star";
import styled from "styled-components";
import axios from "axios";

const StyledAddReviewWrapper = styled.div`
  @media screen and (max-width: 460px) {
    background-color: #f5f5f5;
    width: 100vw;
  }
`;

const StyledAddReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    padding: 3rem 3.5rem;
    width
  }
`;

const StyledFilledStar = styled.div`
  color: #cb4a6f;
  padding: 2rem;
`;
const StyledUnfilledStar = styled.div`
  color: grey;
  padding: 2rem;
  &:hover {
    color: #cb4a6f;
    transition: ease-in-out;
  }
`;

const StyledStarsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextBox = styled.input`
  padding: 2em 6em;
  font-size: 1.3rem;
  @media screen and (max-width: 460px) {
    padding: 2em 3em;
    width: 60%;
  }
`;

const StyledRadioButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em;
`;

const StyledItemTwoLabel = styled.label`
  margin-left: 3em;
`;

const StyledNameInput = styled.input`
  padding: 1em 3em;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const StyledSubmitButton = styled.button`
  border-radius: 8px;
  padding: 1em;
  background-color: #cb4a6f;
  font-size: 1em;
  cursor: pointer;
`;

const AddReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [reviewerName, setReviewerName] = useState<string>("");
  const [color, setColor] = useState<boolean>(false);
  const [hoverStars, setHoverStars] = useState<number>(0);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleMouseLeave = () => {
    setHoverStars(0);
    return null;
  };

  const handleMouseOver = (value: number) => {
    setHoverStars(value);
    setColor(true);
    return value;
  };

  const handleClick = (value: number) => {
    setRating(value);
    setColor(true);
    return value;
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };

  const handleRadioInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "ItemOne") {
      setItemName(e.currentTarget.value);
    } else {
      setItemName(e.currentTarget.value);
    }
  };

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewerName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const review = {
      reviewerName: reviewerName,
      itemName: itemName,
      rating: rating,
      comments: comment,
    };
    const token = localStorage.getItem("token") || "";

    console.log(token);

    dispatch(add(review));

    axios
      .post("http://localhost:9000/reviews", review, {
        headers: {
          authorization: token,
        },
      })
      .then((resp) => {
        console.log(resp);
        navigate("/reviews");
      })
      .catch((err) => console.log(err));
  };
  return (
    <StyledAddReviewWrapper>
      <StyledAddReview>
        <h2>Let us know what you think!</h2>
        <span>
          <StyledStarsWrapper>
            {[1, 2, 3, 4, 5].map((value) => {
              return (
                <div>
                  {(rating >= value || hoverStars >= value) &&
                  color === true ? (
                    <StyledFilledStar>
                      <Star
                        value={value}
                        key={value}
                        handleClick={handleClick}
                        handleMouseOver={handleMouseOver}
                        handleMouseLeave={handleMouseLeave}
                      />
                    </StyledFilledStar>
                  ) : (
                    <StyledUnfilledStar>
                      <Star
                        value={value}
                        key={value}
                        handleClick={handleClick}
                        handleMouseOver={handleMouseOver}
                        handleMouseLeave={handleMouseLeave}
                      />
                    </StyledUnfilledStar>
                  )}
                </div>
              );
            })}
          </StyledStarsWrapper>
        </span>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextBox
            placeholder="Write your review"
            value={comment}
            type="text"
            onChange={handleTextFieldChange}
            data-testid="comments"
          />
          <StyledRadioButtons>
            <label>
              Item One
              <input
                onChange={handleRadioInput}
                value="ItemOne"
                name="Product"
                type="radio"
              />
            </label>
            <StyledItemTwoLabel>
              Item Two
              <input
                onChange={handleRadioInput}
                value="ItemTwo"
                name="Product"
                type="radio"
              />
            </StyledItemTwoLabel>
          </StyledRadioButtons>
          <StyledNameInput
            name="reviewerName"
            value={reviewerName}
            placeholder="First Name"
            onChange={handleNameInputChange}
            data-testid="name"
          />
          <StyledSubmitButton>Submit Review</StyledSubmitButton>
        </StyledForm>
      </StyledAddReview>
    </StyledAddReviewWrapper>
  );
};

export default AddReview;
