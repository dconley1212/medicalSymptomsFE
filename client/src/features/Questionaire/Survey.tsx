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
        <label>Have you experienced fever or chills?</label>
        <label>
          Yes
          <input type="radio" />
        </label>
        <label>
          No
          <input type="radio" />
        </label>
        <label>
          Have you ever experienced serious weight loss?
          <label>
            Yes
            <input type="radio" />
          </label>
          <label>
            No
            <input type="radio" />
          </label>
        </label>
        <label>
          Have you ever experienced a traumatic physical event?
          <label>
            Yes
            <input type="radio" />
          </label>
          <label>
            No
            <input type="radio" />
          </label>
        </label>
        <label>
          Are you having trouble urinating?
          <label>
            Yes
            <input type="radio" />
          </label>
          <label>
            No
            <input type="radio" />
          </label>
        </label>
        <label>
          Do you have numbness and tingling in you legs?
          <label>
            Yes
            <input type="radio" />
          </label>
          <label>
            No
            <input type="radio" />
          </label>
        </label>
      </form>
    </div>
  );
};

export default Survey;
