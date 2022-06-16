import React from "react";
import { Tasks } from "./model";

interface EachTaskProps {
  eachTask: Tasks;
}

const SpecificTask = ({ eachTask }: EachTaskProps) => {
  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default SpecificTask;
