import React, { useState } from "react";
import { add } from "./ReviewsSlice";
import { useAppDispatch } from "../../app/hooks";
import Star from "./Star";

const AddReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };

  const handleRadioInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "ItemOne") {
      setItemName(e.currentTarget.name);
    } else {
      setItemName(e.currentTarget.name);
    }
  };

  const handleClick = (value: number) => {
    setRating(value);
    return value;
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(add({ itemName: itemName, rating: rating, comments: comment }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>
          {[1, 2, 3, 4, 5].map((value) => {
            return <Star value={value} key={value} handleClick={handleClick} />;
          })}
        </span>
        <input value={comment} type="text" onChange={handleChange} />
        <label>
          {" "}
          Item One
          <input onChange={handleRadioInput} name="ItemOne" type="radio" />
        </label>
        <label>
          Item Two
          <input onChange={handleRadioInput} name="ItemTwo" type="radio" />
        </label>
      </form>
    </div>
  );
};

export default AddReview;
