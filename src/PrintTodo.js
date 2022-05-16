import React from "react";

const colors = { 1: "red", 2: "yellow", 3: "black" };
const checkedColors = { 1: "green", 2: "green", 3: "green" };

const PrintTodo = (props) => {
  let className = "priority ui inverted segment " + colors[props.priority];
  if (props.checked) {
    className = "priority ui inverted segment checked ";
    className = className + checkedColors[props.priority];
  }

  function Change() {
    props.onCheck(props.index);
  }

  return (
    <div className={className} style={{ borderRadius: "10px" }}>
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
              <label
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                CHECK
              </label>
            </div>

            {props.text}

            <button
              onClick={() => props.onDelete(props.index)}
              className="negative ui button "
              style={{
                color: "red",
                boxShadow: "1.5px 1.5px",
                backgroundColor: "white",
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
