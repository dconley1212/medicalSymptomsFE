import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const SurveyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SurveyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 2rem auto;
  border: 2px solid black;
  border-radius: 10px;
  padding: 2rem;
`;

const StyledInputLabel = styled.label`
  margin: 0.5rem 0rem;
`;

const StyledRadioButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 5rem;
`;

const StyledRadioButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
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
        <StyledInputLabel>What is your height?</StyledInputLabel>
        <input
          name="height"
          onChange={handleInputChange}
          type="text"
          value={backInfo.height}
        />
        <StyledInputLabel>What is your weight?</StyledInputLabel>
        <input
          name="weight"
          onChange={handleInputChange}
          type="text"
          value={backInfo.weight}
        />
        <StyledInputLabel>Where is the back pain located?</StyledInputLabel>
        <select
          name="painLocation"
          onChange={handleDropDownChange}
          value={backInfo.painLocation}
        >
          <option value="upper left region">upper left region</option>
          <option value="upper right region"> upper right region</option>
          <option value="middle region">middle region</option>
          <option value="lower left region">lower left region</option>
          <option value="lower right region">lower right region</option>
        </select>
        <label>How often is the pain occuring?</label>
        <input
          type="text"
          onChange={handleInputChange}
          value={backInfo.occurence}
          name="occurence"
        />
        <StyledRadioButtonsDiv>
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
        </StyledRadioButtonsDiv>
      </SurveyForm>
    </SurveyWrapper>
  );
};

export default Survey;
