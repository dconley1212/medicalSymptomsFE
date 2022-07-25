import React, { useState } from "react";
import { useNavigate } from "react-router";
import { add } from "./ReviewsSlice";
import { useAppDispatch } from "../../app/hooks";
import Star from "./Star";

const AddReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [reviewerName, setReviewerName] = useState<string>("");
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleClick = (value: number) => {
    setRating(value);
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
      <form onSubmit={handleSubmit}>
        <span>
          {[1, 2, 3, 4, 5].map((value) => {
            return <Star value={value} key={value} handleClick={handleClick} />;
          })}
        </span>
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
