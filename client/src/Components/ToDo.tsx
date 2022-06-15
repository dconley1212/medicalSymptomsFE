import react, { useState } from "react";

const ToDo: React.FC = () => {
  const [task, setTask] = useState<string>("");
  return (
    <div>
      <h1>Todo</h1>
      <form>
        <label>
          <input type="input" placeholder="Add a Task" value={task}></input>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default ToDo;
