import React, { ReactEventHandler, useState } from "react";
import { add } from "./ReviewsSlice";
import { useAppDispatch } from "../../app/hooks";
import Star from "./Star";

const AddReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const handleSubmit = () => {};
  return (
    <div>
      <form>
        <span>
          {[1, 2, 3, 4, 5].map((value) => {
            return <Star key={value} />;
          })}
        </span>
        <input value={comment} type="text" onChange={handleChange}></input>
      </form>
    </div>
  );
};

export default AddReview;
