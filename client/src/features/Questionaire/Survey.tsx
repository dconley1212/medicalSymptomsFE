import React from "react";

const Survey = () => {
  return (
    <div>
      <form>
        <label>
          What is your height?
          <input />
        </label>
        <label>
          What is your weight?
          <input />
        </label>
        <label>
          Where is the pain located?
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </label>
        <label>
          Have you experience fever or chills?
          <input />
        </label>
        <label>
          Have you ever experience serious weight loss?
          <input />
        </label>
        <label>
          Have you ever experienced a traumatic physical event?
          <input />
        </label>
        <label>
          How often is the pain occuring?
          <input />
        </label>
        <label>
          Are you having trouble urinating?
          <input />
        </label>
        <label>
          Do you have numbness and tingling in you legs?
          <input />
        </label>
      </form>
    </div>
  );
};

export default Survey;
