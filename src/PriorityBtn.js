import React from "react";

const PriorityBtn = (props) => {
  return (
    <button className={props.name} onClick={props.onClick}>
      {props.Priority123}
    </button>
  );
};

export default PriorityBtn;
