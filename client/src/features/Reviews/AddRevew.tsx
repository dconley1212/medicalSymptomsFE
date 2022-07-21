import React, { ReactEventHandler, useState } from "react";
import { add } from "./ReviewsSlice";
import { useAppDispatch } from "../../app/hooks";
import Star from "./Star";

// left off thinking I might be able to pass a function as a type into the Star Component
// and have it allow me to use the event handler to update the rating state when the icon
// is clicked

const AddReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };

  const handleClick = (value: number) => {
    setRating(value);
    return value;
  };

  const handleSubmit = () => {};
  return (
    <div>
      <form>
        <span>
          {[1, 2, 3, 4, 5].map((value) => {
            return <Star value={value} key={value} handleClick={handleClick} />;
          })}
        </span>
        <input value={comment} type="text" onChange={handleChange}></input>
      </form>
    </div>
  );
};

export default AddReview;
