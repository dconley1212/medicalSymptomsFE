import React, { useState, useRef, useEffect } from "react";
import { Tasks } from "./model";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

//left off trying to figure out how to handle the edit task functionality with the
// helper function and if you need one to handle the changes and one to handle the new
// submission, which honestly is my guess

const StyledSpecificTaskWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  align-items: flex-start;
`;

const StyledSpecificTask = styled.form`
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  padding: 0rem 2rem;
  background-color: #faf0e6;
`;

const StyledTaskText = styled.span`
  display: flex;
  padding: 0.2rem;
  margin-right: 3rem;
  font-size: 1.2rem;
`;

const StyledIconDiv = styled.div`
  display: flex;
  margin-left: 1px;
  font-size: 1.3rem;
  cursor: pointer;
`;

const StyledIcon = styled.span`
  margin: 0px 5px;
`;

interface EachTaskProps {
  eachTask: Tasks;
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const SpecificTask = ({ eachTask, setTasks, tasks }: EachTaskProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(eachTask.task);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    const unfinishedArray = tasks.map((task) => {
      return task.id === id ? { ...task, isDone: !task.isDone } : task;
    });
    setTasks(unfinishedArray);
  };
  const handleDelete = (id: number) => {
    const newTasksArray = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasksArray);
  };

  const handleEdit = () => {
    if (edit === false) {
      setEdit(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTask(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((todo) => {
        return todo.id === id ? { ...todo, task: editTask } : todo;
      })
    );
    setEdit(false);
  };
  return (
    <StyledSpecificTaskWrapper>
      <StyledSpecificTask onSubmit={(e) => handleSubmit(e, eachTask.id)}>
        {edit === true ? (
          <input
            value={editTask}
            onChange={handleChange}
            ref={inputRef}
          ></input>
        ) : eachTask.isDone === false ? (
          <StyledTaskText>{eachTask.task}</StyledTaskText>
        ) : (
          <s>{eachTask.task}</s>
        )}
        <StyledIconDiv>
          <StyledIcon onClick={() => handleEdit()}>
            <AiFillEdit />
          </StyledIcon>
          <StyledIcon>
            <AiFillDelete onClick={() => handleDelete(eachTask.id)} />
          </StyledIcon>
          <StyledIcon>
            <MdDone onClick={() => handleDone(eachTask.id)} />
          </StyledIcon>
        </StyledIconDiv>
      </StyledSpecificTask>
    </StyledSpecificTaskWrapper>
  );
};

export default SpecificTask;
