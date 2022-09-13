import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const SurveyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #db7093;
`;

const SurveyForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 2rem auto;
  border: 2px solid black;
  border-radius: 10px;
  padding: 3rem 2rem;
  background-color: #f5f5f5;
`;

const StyledUpperFormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputLabel = styled.label`
  margin: 0.7rem 0rem;
`;

const StyledInputs = styled.input`
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 8px;
  width: 75%;
`;

const StyledSelectorLabel = styled.label`
  margin: 0.8rem 0rem;
`;

const StyledRadioButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
`;

const StyledUpperRadioButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledLowerRadioButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledRadioButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 1rem;
`;
interface BackObject {
  height: number;
  weight: number;
  painLocation: string;
  occurence: string;
  feverSymptoms: string;
  weightLoss: string;
  traumaEvent: string;
  troubleUrinating: string;
  legSymptoms: string;
}

const Survey = () => {
  const [backInfo, setBackInfo] = useState<BackObject>({
    height: 0,
    weight: 0,
    painLocation: "",
    occurence: "",
    feverSymptoms: "",
    weightLoss: "",
    traumaEvent: "",
    troubleUrinating: "",
    legSymptoms: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBackInfo({ ...backInfo, [e.target.name]: e.target.value });
  };

  const handleDropDownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBackInfo({
      ...backInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <SurveyWrapper>
      <SurveyForm>
        <StyledUpperFormDiv>
          <StyledInputLabel>What is your height?</StyledInputLabel>
          <StyledInputs
            name="height"
            onChange={handleInputChange}
            type="text"
            value={backInfo.height}
          />
          <StyledInputLabel>What is your weight?</StyledInputLabel>
          <StyledInputs
            name="weight"
            onChange={handleInputChange}
            type="text"
            value={backInfo.weight}
          />
          <StyledSelectorLabel>
            Where is the back pain located?
          </StyledSelectorLabel>
          <select
            name="painLocation"
            onChange={handleDropDownChange}
            value={backInfo.painLocation}
          >
            <option value="select a region on your back">
              Select a region on your back
            </option>
            <option value="upper left region">upper left region</option>
            <option value="upper right region"> upper right region</option>
            <option value="middle region">middle region</option>
            <option value="lower left region">lower left region</option>
            <option value="lower right region">lower right region</option>
          </select>
          <StyledSelectorLabel>
            How often is the pain occuring?
          </StyledSelectorLabel>
          <select
            name="occurence"
            onChange={handleDropDownChange}
            value={backInfo.occurence}
          >
            <option value="Make a selection">Make a selection</option>
            <option value="Daily">Daily</option>
            <option value="Two to Three times a week">
              Two to Three times a week
            </option>
            <option value="Once a week">Once a week</option>
            <option value="A couple instances a month">
              A couple instances a month
            </option>
          </select>
        </StyledUpperFormDiv>
        <StyledRadioButtonsDiv>
          <StyledUpperRadioButtonDiv>
            <StyledRadioButtonDiv>
              <p>Have you experienced fever or chills?</p>
              <label>
                Yes
                <input
                  onChange={handleInputChange}
                  value="Yes"
                  type="radio"
                  name="feverSymptoms"
                />
              </label>
              <label>
                No
                <input
                  onChange={handleInputChange}
                  value="No"
                  type="radio"
                  name="feverSymptoms"
                />
              </label>
            </StyledRadioButtonDiv>
            <StyledRadioButtonDiv>
              <p>Have you ever experienced serious weight loss?</p>
              <label>
                Yes
                <input
                  onChange={handleInputChange}
                  value="Yes"
                  type="radio"
                  name="weightLoss"
                />
              </label>
              <label>
                No
                <input
                  onChange={handleInputChange}
                  value="No"
                  type="radio"
                  name="weightLoss"
                />
              </label>
            </StyledRadioButtonDiv>
            <StyledRadioButtonDiv>
              <p>Have you ever experienced a traumatic physical event?</p>
              <label>
                Yes
                <input
                  onChange={handleInputChange}
                  value="Yes"
                  type="radio"
                  name="traumaEvent"
                />
              </label>
              <label>
                No
                <input
                  onChange={handleInputChange}
                  value="No"
                  type="radio"
                  name="traumaEvent"
                />
              </label>
            </StyledRadioButtonDiv>
          </StyledUpperRadioButtonDiv>
          <StyledLowerRadioButtonDiv>
            <StyledRadioButtonDiv>
              <p>Are you having trouble urinating?</p>
              <label>
                Yes
                <input
                  onChange={handleInputChange}
                  value="Yes"
                  type="radio"
                  name="troubleUrinating"
                />
              </label>
              <label>
                No
                <input
                  onChange={handleInputChange}
                  value="No"
                  type="radio"
                  name="troubleUrinating"
                />
              </label>
            </StyledRadioButtonDiv>
            <StyledRadioButtonDiv>
              <p>Do you have numbness and tingling in your legs?</p>
              <label>
                Yes
                <input
                  onChange={handleInputChange}
                  value="Yes"
                  type="radio"
                  name="legSymptoms"
                />
              </label>
              <label>
                No
                <input
                  onChange={handleInputChange}
                  value="No"
                  type="radio"
                  name="legSymptoms"
                />
              </label>
            </StyledRadioButtonDiv>
          </StyledLowerRadioButtonDiv>
        </StyledRadioButtonsDiv>
      </SurveyForm>
    </SurveyWrapper>
  );
};

export default Survey;
