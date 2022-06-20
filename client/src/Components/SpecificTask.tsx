import React, { useState } from "react";
import { Tasks } from "./model";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

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
  const [editTask, setEditTask] = useState<string>("");
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

  const handleEdit = (id: number) => {
    const clickedTask = tasks.filter((task) => {
      return task.id === id;
    });
  };
  return (
    <StyledSpecificTaskWrapper>
      <StyledSpecificTask>
        <StyledTaskText>{eachTask.task}</StyledTaskText>
        <StyledIconDiv>
          <StyledIcon>
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
