import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { add } from "./ReviewsSlice";
import { useAppDispatch } from "../../app/hooks";
import Star from "./Star";
import Header from "../../Components/Header";
import styled from "styled-components";

const StyledAddReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem;
`;

const StyledFilledStar = styled.div`
  color: blue;
  padding: 1.5rem;
`;
const StyledUnfilledStar = styled.div`
  color: grey;
  padding: 1.5rem;
  &:hover {
    color: blue;
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
  padding: 4em 8em;
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
  padding: 1em 5em;
  margin-bottom: 1rem;
`;

const StyledSubmitButton = styled.button`
  border-radius: 8px;
  padding: 1em;
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
    if (e.currentTarget.name === "ItemOne") {
      setItemName(e.currentTarget.name);
    } else {
      setItemName(e.currentTarget.name);
    }
  };

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewerName(e.currentTarget.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      add({
        reviewerName: reviewerName,
        itemName: itemName,
        rating: rating,
        comments: comment,
      })
    );
    navigate("/reviews");
  };
  return (
    <div>
      <Header />
      <StyledAddReview>
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
          />
          <StyledRadioButtons>
            <label>
              Item One
              <input onChange={handleRadioInput} name="ItemOne" type="radio" />
            </label>
            <StyledItemTwoLabel>
              Item Two
              <input onChange={handleRadioInput} name="ItemTwo" type="radio" />
            </StyledItemTwoLabel>
          </StyledRadioButtons>
          <StyledNameInput
            name="reviewerName"
            value={reviewerName}
            placeholder="First Name"
            onChange={handleNameInputChange}
          />
          <StyledSubmitButton>Submit Review</StyledSubmitButton>
        </StyledForm>
      </StyledAddReview>
    </div>
  );
};

export default AddReview;
