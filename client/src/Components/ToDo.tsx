import React, { useState } from "react";
import { Tasks } from "./model";
import SpecificTask from "./SpecificTask";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-family: "Oxygen", cursive;
  color: #fffafa;
  text-transform: uppercase;
`;
const FormStyled = styled.form``;
const InputStyled = styled.input`
  border-radius: 9px;
  padding: 0.8rem;
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
    <StyledWrapper>
      <Title>My Goals!</Title>
      <FormStyled onSubmit={handleSubmit}>
        <label>
          <InputStyled
            onChange={handleChange}
            type="input"
            placeholder="Add a Task"
            value={task}
          ></InputStyled>
        </label>
        <button type="submit">Add</button>
      </FormStyled>
      {tasks.map((eachTask) => {
        return <SpecificTask eachTask={eachTask} />;
      })}
    </StyledWrapper>
  );
};
export default ToDo;
