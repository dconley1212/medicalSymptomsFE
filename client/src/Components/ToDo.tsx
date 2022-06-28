import React, { useState, useRef } from "react";
import { Tasks } from "./model";
import SpecificTask from "./SpecificTask";
import styled from "styled-components";

const ToDoPage = styled.div`
  background: #00bfff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 1rem 7rem; */
`;

const Title = styled.h1`
  font-family: "Oxygen", cursive;
  color: #fffafa;
  text-transform: uppercase;
`;
const FormStyled = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;
const InputStyled = styled.input`
  border-radius: 30px;
  padding: 1.2rem 3rem;
  width: 100%;
  border: none;
  font-size: 1.2rem;
  transition: 0.2s;
  box-shadow: inset 0 0 4px black;
  &:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;

const StyledButton = styled.button`
  position: relative;
  width: 2.8em;
  height: 2.8em;
  border-radius: 3em;
  left: 40px;
  border: none;
  font-size: 1em;
  background-color: #00bfff;
  color: white;
  transition: 0.2s all;
  box-shadow: 0 0 10px black;
`;

const ToDo: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

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
      inputRef.current?.blur();
      setTask("");
    }
  };
  return (
    <ToDoPage>
      <StyledWrapper>
        <Title>My Goals!</Title>
        <FormStyled onSubmit={handleSubmit}>
          <label>
            <InputStyled
              ref={inputRef}
              onChange={handleChange}
              type="input"
              placeholder="Add a Task"
              value={task}
            ></InputStyled>
          </label>
          <StyledButton type="submit">Add</StyledButton>
        </FormStyled>
        {tasks.map((eachTask) => {
          return (
            <SpecificTask
              eachTask={eachTask}
              key={eachTask.id}
              setTasks={setTasks}
              tasks={tasks}
            />
          );
        })}
      </StyledWrapper>
    </ToDoPage>
  );
};
export default ToDo;
