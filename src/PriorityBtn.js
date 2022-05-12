import React from "react";

const PriorityBtn = (props) => {
  let className = "";

  switch (props.priority) {
    case "1":
      className = "ui red basic button";
      break;
    case "2":
      className = "ui orange basic button";
      break;
    case "3":
      className = "ui black basic button";
      break;
  }
  // add class based on priority
  const text = "Priorität " + props.priority;
  return (
    <button className={className} onClick={props.onClick}>
      {text}
    </button>
  );
};

export default PriorityBtn;
