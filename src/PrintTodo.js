import React from "react";
import ReactDOM from "react-dom";

const PrintTodo = (props) => {
  return (
    <div class="ui inverted segment">
      <div class="ui inverted relaxed divided list">
        <div class="item">
          <div class="header">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default PrintTodo;
