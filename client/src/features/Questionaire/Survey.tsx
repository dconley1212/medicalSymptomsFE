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
          Where is the back pain located?
          <select>
            <option>upper left region</option>
            <option> upper right region</option>
            <option>middle region</option>
            <option>lower left region</option>
            <option>lower right region</option>
          </select>
        </label>
        <label>
          How often is the pain occuring?
          <input />
        </label>
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
