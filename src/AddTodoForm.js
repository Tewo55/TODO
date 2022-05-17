import React, { useState } from "react";

const AddTodoForm = (props) => {
  const [value, setValue] = useState("");
  const getInput = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { title: value, priorität: 3 };
    props.onClick(todo);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ui input focus">
        <input
          type="text"
          value={value}
          placeholder="Eingabe"
          onChange={getInput}
          style={{ marginRight: "10%" }}
        />
      </div>
      <div style={{ padding: "5px" }}>
        <button
          style={{
            position: "relative",
            width: "auto",
          }}
          className="ui inverted primary button"
          onClick={handleSubmit}
        >
          Hinzufügen
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
