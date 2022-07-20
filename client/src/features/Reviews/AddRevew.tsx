import React, { ReactEventHandler, useState } from "react";
import { add } from "./ReviewsSlice";
import { useAppDispatch } from "../../app/hooks";

const AddReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };

  const handleSubmit = () => {};
  return (
    <div>
      <form>
        <input value={comment} type="text" onChange={handleChange}></input>
      </form>
    </div>
  );
};

export default AddReview;
