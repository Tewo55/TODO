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
  let styleChange = true;
  function Change() {
    if (styleChange == true) {
      styleChange = false;
    } else {
      styleChange = true;
    }
  }
  let lineThorugh = "none";
  function throughLine() {
    if (styleChange == true) {
      {
        lineThorugh = "line-through";
      }
    } else {
      lineThorugh = "none";
    }
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
              throughLine,
              lineThorugh,
            }}
          >
            <div
              class="ui checkbox"
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <input type="checkbox" name="example" onClick={Change} />
              <label style={{ color: "white", textDecoration: "none" }}>
                CHECK
              </label>
            </div>

            {props.text}
            <button
              onClick={() => props.onDelete(props.index)}
              className="negative ui button"
              style={{
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
