import React from "react";

const PriorityBtn = (props) => {
  let className = "";

  switch (props.priority) {
    case 1:
      className = "ui red basic button";
      break;
    case 2:
      className = "ui yellow basic button";
      break;
    case 3:
      className = "ui black basic button";
      break;
    default:
      break;
  }

  const handleClick = () => {
    props.onClick(props.priority);
  };
  // add class based on priority
  const text = "Priorität " + props.priority;
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

export default PriorityBtn;
