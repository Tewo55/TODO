import React from "react";

const PrintTodo = (props) => {
  let backgroundColor = "white";
  switch (props.priority) {
    case 1:
      backgroundColor = "#FD5D5D";
      break;
    case 2:
      backgroundColor = "orange";
      break;
    case 3:
      backgroundColor = "#343a40";
      break;
  }
  switch (props.checked) {
    case true:
      backgroundColor = "#33CA7F";
      break;
    case false:
      switch (props.priority) {
        case 1:
          backgroundColor = "#FD5D5D";
          break;
        case 2:
          backgroundColor = "orange";
          break;
        case 3:
          backgroundColor = "#343a40";
          break;
      }
      break;
  }

  function Change() {
    props.onCheck(props.index);
  }

  return (
    <div
      className="ui inverted segment"
      style={{ borderRadius: "10px", backgroundColor }}
    >
      <div
        className="ui inverted relaxed divided list"
        style={{ color: "red" }}
      >
        <div className="item" style={{ height: "auto" }}>
          <div
            className="header"
            style={{
              width: "450px",
            }}
          >
            <div
              className="ui checkbox"
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <input
                type="checkbox"
                name="example"
                onClick={Change}
                checked={props.checked}
              />
              <label style={{ color: "white", textDecoration: "none" }}>
                CHECK
              </label>
            </div>

            {props.text}
            <button
              onClick={() => props.onDelete(props.index)}
              className="negative ui button"
              style={{
                boxShadow: "1px 1px",
                display: "flex",
                alignItems: "flex-end",
                padding: "8px",
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintTodo;
