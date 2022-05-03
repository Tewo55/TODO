import React from "react";

const PrintTodo = (props) => {
  let backgroundColor = "white";
  switch (props.priority) {
    case 1:
      backgroundColor = "red";
      break;
    case 2:
      backgroundColor = "orange";
      break;
    case 3:
      backgroundColor = "black";
      break;
  }
  return (
    <div className="ui inverted segment">
      <div
        className="ui inverted relaxed divided list"
        style={{ color: "red" }}
      >
        <div className="item">
          <div className="header">
            <div
              className="prioritätKreis"
              style={{
                height: "15px",

                width: "15px",
                backgroundColor,
                borderColor: "white",
                border: "3px solid white",
                borderRadius: "50%",
                position: "absolute",
                left: "5px",
                top: "40%",
              }}
            ></div>
            {props.text}
            {props.priority}

            <button
              onClick={() => props.onDelete(props.index)}
              className="ui compact icon button"
              style={{ marginLeft: "10px" }}
            >
              <i className="times circle outline icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintTodo;
