import React, { ChangeEvent, useState } from "react";

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
    <div>
      <form>
        <label>What is your height?</label>
        <input
          name="height"
          onChange={handleInputChange}
          type="text"
          value={backInfo.height}
        />
        <label>What is your weight?</label>
        <input
          name="weight"
          onChange={handleInputChange}
          type="text"
          value={backInfo.weight}
        />
        <label>Where is the back pain located?</label>
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
      </form>
    </div>
  );
};

export default Survey;
