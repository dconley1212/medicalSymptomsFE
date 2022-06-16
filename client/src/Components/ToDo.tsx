import React, { useState } from "react";
import { Tasks } from "./model";

const ToDo: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Tasks[]>([]);

  console.log(task);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          task,
          isDone: false,
        },
      ]);
      setTask("");
    }
  };
  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
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
      {tasks.map((task: Tasks) => {
        return <ul>{task.task}</ul>;
      })}
    </div>
  );
};
export default ToDo;
