import React from "react";
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
}

const SpecificTask = ({ eachTask }: EachTaskProps) => {
  return (
    <StyledSpecificTaskWrapper>
      <StyledSpecificTask>
        <StyledTaskText>{eachTask.task}</StyledTaskText>
        <StyledIconDiv>
          <StyledIcon>
            <AiFillEdit />
          </StyledIcon>
          <StyledIcon>
            <AiFillDelete />
          </StyledIcon>
          <StyledIcon>
            <MdDone />
          </StyledIcon>
        </StyledIconDiv>
      </StyledSpecificTask>
    </StyledSpecificTaskWrapper>
  );
};

export default SpecificTask;
