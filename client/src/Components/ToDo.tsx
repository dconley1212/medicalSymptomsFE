import React, { useState } from "react";
import { Tasks } from "./model";
import SpecificTask from "./SpecificTask";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Oxygen", sans-serif;
`;
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
      <Title>Todo's</Title>
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
      {tasks.map((eachTask) => {
        return <SpecificTask eachTask={eachTask} />;
      })}
    </div>
  );
};
export default ToDo;
