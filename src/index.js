import React from "react";
import ReactDOM from "react-dom";
import PrintTodo from "./PrintTodo";

class App extends React.Component {
  state = {
    value: "",
    list: [],
  };

  getInput = (event) => {
    this.setState({ value: event.target.value });
  };

  printValue = () => {
    this.setState({
      list: [...this.state.list, this.state.value],
      value: "",
    });
  };

  render() {
    return (
      <div
        style={{
          padding: 30,
          height: "auto",
          textAlign: "left",
          maxWidth: 500,
          marginTop: "10px",
          marginBottom: "auto",
          marginLeft: "30%",
          border: "5px solid black",
          borderRadius: "25px",
        }}
      >
        <div style={{ textAlign: "center", margin: "0 auto" }}>
          <h2 className="ui icon header">
            <i className="list alternate outline icon"></i>
            <div className="content">
              MY LIST
              <div className="sub header">Füge etwas deiner Liste hinzu</div>
            </div>
          </h2>

          <p></p>
          <div className="ui input focus">
            <input
              type="text"
              value={this.state.value}
              placeholder="Eingabe"
              onChange={this.getInput}
              style={{ marginRight: "10%" }}
            />
            <button
              className="ui inverted primary button"
              onClick={this.printValue}
            >
              Hinzufügen
            </button>
          </div>
          {this.state.list.map((item) => (
            <PrintTodo text={item} />
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
