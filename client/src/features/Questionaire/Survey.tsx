import React, { ChangeEvent, useState } from "react";

interface BackObject {
  height: number;
  weight: number;
  painLocation: string;
  occurence: string;
  feverSymptoms: boolean;
  weightLoss: boolean;
  traumaEvent: boolean;
  troubleUrinating: boolean;
  legSymptoms: boolean;
}

const Survey = () => {
  const [backInfo, setBackInfo] = useState<BackObject>({
    height: 0,
    weight: 0,
    painLocation: "",
    occurence: "",
    feverSymptoms: false,
    weightLoss: false,
    traumaEvent: false,
    troubleUrinating: false,
    legSymptoms: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBackInfo({ ...backInfo, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <label>What is your height?</label>
        <input
          onChange={handleInputChange}
          type="text"
          value={backInfo.height}
        />
        <label>What is your weight?</label>
        <input
          onChange={handleInputChange}
          type="text"
          value={backInfo.weight}
        />
        <label>Where is the back pain located?</label>
        <select>
          <option>upper left region</option>
          <option> upper right region</option>
          <option>middle region</option>
          <option>lower left region</option>
          <option>lower right region</option>
        </select>
        <label>How often is the pain occuring?</label>
        <input />
        <p>Have you experienced fever or chills?</p>
        <label>
          Yes
          <input type="radio" />
        </label>
        <label>
          No
          <input type="radio" />
        </label>
        <p>Have you ever experienced serious weight loss?</p>
        <label>
          Yes
          <input type="radio" />
        </label>
        <label>
          No
          <input type="radio" />
        </label>
        <p>Have you ever experienced a traumatic physical event?</p>
        <label>
          Yes
          <input type="radio" />
        </label>
        <label>
          No
          <input type="radio" />
        </label>
        <p>Are you having trouble urinating?</p>
        <label>
          Yes
          <input type="radio" />
        </label>
        <label>
          No
          <input type="radio" />
        </label>
        <p>Do you have numbness and tingling in your legs?</p>
        <label>
          Yes
          <input type="radio" />
        </label>
        <label>
          No
          <input type="radio" />
        </label>
      </form>
    </div>
  );
};

export default Survey;
