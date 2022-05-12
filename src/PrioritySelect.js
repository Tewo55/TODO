import React from "react";
import PriorityBtn from "./PriorityBtn";

const PrioritySelect = (props) => {
  return (
    <div>
      <PriorityBtn priority={1} onClick={props.onPrioritySelected} />
      <PriorityBtn priority={2} onClick={props.onPrioritySelected} />
      <PriorityBtn priority={3} onClick={props.onPrioritySelected} />
    </div>
  );
};

export default PrioritySelect;
