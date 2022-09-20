import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import sprayImg from "../../Assets/nati-melnychuk-SGmgCPxv8OI-unsplash.jpg";
import products from "../../data/items.json";
import pills from "../../Assets/kateryna-hliznitsova-hEX5R8u7gCI-unsplash.jpg";
import { formatCurrency } from "../../utilities/formatCurrency";

const SurveyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #db7093;
`;

const SurveyForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: 3rem auto;
  border: 2px solid black;
  border-radius: 10px;
  padding: 1.5rem 2rem;
  background-color: #e6e6fa;
`;

const StyledUpperFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const StyledInputLabel = styled.label`
  margin: 0.9rem 0rem;
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

const StyledLowerFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
`;

const StyledRadioButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSprayDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin-bottom: 3rem;
`;
const StyledSprayRecommendation = styled.p`
  width: 30%;
`;

const StyledImg = styled.img`
  width: 20%;
`;

const StyledSprayButton = styled.button`
  padding: 1em;
  border-radius: 8px;
  background-color: #4682b4;
`;
interface BackObject {
  heightFeet: string;
  inches: string;
  weight: string;
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
    heightFeet: "",
    inches: "",
    weight: "",
    painLocation: "",
    occurence: "",
    feverSymptoms: "",
    weightLoss: "",
    traumaEvent: "",
    troubleUrinating: "",
    legSymptoms: "",
  });
  const [seeDoctor, setSeeDocter] = useState<boolean>(false);
  const [recommendPills, setRecommendPills] = useState<boolean>(false);
  const [recommendSpray, setRecommendSpray] = useState<boolean>(false);

  const sprayProduct = products[0];
  const pillsProduct = products[1];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBackInfo({ ...backInfo, [e.target.name]: e.target.value });
  };

  const handleDropDownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBackInfo({
      ...backInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const heightInInches: number =
      parseInt(backInfo.heightFeet) * 12 + parseInt(backInfo.inches);

    const BMI: number =
      (parseInt(backInfo.weight) / Math.pow(heightInInches, 2)) * 703;

    if (
      backInfo.feverSymptoms === "Yes" ||
      backInfo.legSymptoms === "Yes" ||
      backInfo.troubleUrinating === "Yes" ||
      backInfo.traumaEvent === "Yes" ||
      backInfo.weightLoss === "Yes"
    ) {
      setSeeDocter(true);
    } else if (BMI > 26) {
      setRecommendPills(true);
    } else {
      setRecommendSpray(true);
    }
  };

  return (
    <SurveyWrapper>
      <SurveyForm onSubmit={handleSubmit}>
        <StyledUpperFormDiv>
          <StyledInputLabel>What is your height?</StyledInputLabel>
          <StyledInputs
            name="heightFeet"
            onChange={handleInputChange}
            type="text"
            value={backInfo.heightFeet}
            placeholder="feet"
          />
          <StyledInputs
            name="inches"
            onChange={handleInputChange}
            type="text"
            value={backInfo.inches}
            placeholder="inches"
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
            data-testid="Back Pain"
            name="painLocation"
            onChange={handleDropDownChange}
            value={backInfo.painLocation}
          >
            <option
              data-testid="Back Options"
              value="select a region on your back"
            >
              Select a region on your back
            </option>
            <option data-testid="Back Options" value="upper left region">
              upper left region
            </option>
            <option data-testid="Back Options" value="upper right region">
              {" "}
              upper right region
            </option>
            <option data-testid="Back Options" value="middle region">
              middle region
            </option>
            <option data-testid="Back Options" value="lower left region">
              lower left region
            </option>
            <option data-testid="Back Options" value="lower right region">
              lower right region
            </option>
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
          <StyledRadioButtonDiv>
            <p>Have you experienced fever or chills?</p>
            <label>
              Yes
              <input
                onChange={handleInputChange}
                value="Yes"
                type="radio"
                name="feverSymptoms"
                data-testid="feverSymptoms-Yes"
              />
            </label>
            <label>
              No
              <input
                onChange={handleInputChange}
                value="No"
                type="radio"
                name="feverSymptoms"
                data-testid="feverSymptoms-No"
              />
            </label>
          </StyledRadioButtonDiv>
        </StyledUpperFormDiv>
        <StyledLowerFormDiv>
          <StyledRadioButtonDiv>
            <p>Have you ever experienced serious weight loss?</p>
            <label>
              Yes
              <input
                onChange={handleInputChange}
                value="Yes"
                type="radio"
                name="weightLoss"
                data-testid="weightLoss-Yes"
              />
            </label>
            <label>
              No
              <input
                onChange={handleInputChange}
                value="No"
                type="radio"
                name="weightLoss"
                data-testid="weightLoss-No"
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
                data-testid="traumaEvent-Yes"
              />
            </label>
            <label>
              No
              <input
                onChange={handleInputChange}
                value="No"
                type="radio"
                name="traumaEvent"
                data-testid="traumaEvent-No"
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
                data-testid="troubleUrinating-Yes"
              />
            </label>
            <label>
              No
              <input
                onChange={handleInputChange}
                value="No"
                type="radio"
                name="troubleUrinating"
                data-testid="troubleUrinating-No"
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
                data-testid="legSymptoms-Yes"
              />
            </label>
            <label>
              No
              <input
                onChange={handleInputChange}
                value="No"
                type="radio"
                name="legSymptoms"
                data-testid="legSymptoms-No"
              />
            </label>
          </StyledRadioButtonDiv>
          <button>Submit</button>
        </StyledLowerFormDiv>
      </SurveyForm>
      {seeDoctor === true ? (
        <div>
          <p>We recommend seeing your Doctor based on your symptoms.</p>
        </div>
      ) : null}
      {recommendSpray === true ? (
        <StyledSprayDiv>
          <StyledSprayRecommendation>
            Based on your response, we recommend spraying your back with our
            product below. This spray works best for acute pain, which based on
            your symptoms seems like the best route to take.
          </StyledSprayRecommendation>
          <StyledImg src={sprayImg} alt="spray bottle" />
          <p>{`Price: ${formatCurrency(sprayProduct.price)}`}</p>
          <StyledSprayButton>Add to Cart</StyledSprayButton>
        </StyledSprayDiv>
      ) : null}
      {recommendPills === true ? (
        <div>
          <p>
            Based on your response, we recommend taking these pills to help you
            lose weight because your body mass index is too high. These pills
            will help you curb your apetite and make it easier to loose weight.
          </p>
          <StyledImg src={pills} alt="pills products"></StyledImg>
          <p>{pillsProduct.price}</p>
          <button>Add to Cart</button>
        </div>
      ) : null}
    </SurveyWrapper>
  );
};

export default Survey;
