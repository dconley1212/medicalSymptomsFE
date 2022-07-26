import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { add } from "./ReviewsSlice";
import { useAppDispatch } from "../../app/hooks";
import Star from "./Star";
import Header from "../../Components/Header";
import styled from "styled-components";

const StyledFilledStar = styled.div`
  color: blue;
`;
const StyledUnfilledStar = styled.div`
  color: grey;
`;

const StyledStarsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const AddReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [reviewerName, setReviewerName] = useState<string>("");
  const [color, setColor] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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
      <span>
        <StyledStarsWrapper>
          {[1, 2, 3, 4, 5].map((value) => {
            return (
              <div>
                {rating >= value && color === true ? (
                  <StyledFilledStar>
                    <Star value={value} key={value} handleClick={handleClick} />
                  </StyledFilledStar>
                ) : (
                  <StyledUnfilledStar>
                    <Star value={value} key={value} handleClick={handleClick} />
                  </StyledUnfilledStar>
                )}
              </div>
            );
          })}
        </StyledStarsWrapper>
      </span>
      <form onSubmit={handleSubmit}>
        <input value={comment} type="text" onChange={handleTextFieldChange} />
        <label>
          {" "}
          Item One
          <input onChange={handleRadioInput} name="ItemOne" type="radio" />
        </label>
        <label>
          Item Two
          <input onChange={handleRadioInput} name="ItemTwo" type="radio" />
        </label>
        <input
          name="reviewerName"
          value={reviewerName}
          placeholder="First Name"
          onChange={handleNameInputChange}
        />
        <button>Submit Review</button>
      </form>
    </div>
  );
};

export default AddReview;
