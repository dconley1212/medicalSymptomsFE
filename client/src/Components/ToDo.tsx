import React, { useState } from "react";

const ToDo: React.FC = () => {
  const [task, setTask] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTask(e.currentTarget.value);
  };
  return (
    <div>
      <h1>Todo</h1>
      <form>
        <label>
          <input
            onChange={handleChange}
            type="input"
            placeholder="Add a Task"
            value={task}
          ></input>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default ToDo;
