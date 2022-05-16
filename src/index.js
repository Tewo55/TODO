import React from "react";
import PrioritySelect from "./PrioritySelect";
import ReactDOM from "react-dom";
import PrintTodo from "./PrintTodo";

class App extends React.Component {
  state = {
    value: "",
    list: [],
    priority: 3,
  };

  handleCheck = (index) => {
    const list = this.state.list;
    list[index].checked = !list[index].checked;
    this.setState({
      list: list,
    });
  };

  handleDelete = (index) => {
    var list2 = this.state.list;
    list2.splice(index, 1);
    this.setState({ list: list2 });
  };

  getInput = (event) => {
    this.setState({ value: event.target.value });
  };

  addItem = (e) => {
    e.preventDefault();
    if (this.state.value === "") {
      alert("Fehler");
    } else {
      this.setState({
        list: [
          ...this.state.list,
          {
            title: this.state.value,
            priorität: this.state.priority,
          },
        ],
        value: "",
      });
    }
  };

  handlePrioritySelected = (priority) => {
    this.setState({ priority: priority });
  };

  render() {
    return (
      <div
        className="border"
        style={{
          height: "auto",
          width: "500px",
          padding: "5px",
          display: "flex",
          justifyContent: "center",
          border: "5px solid black",
          borderRadius: "25px",
        }}
      >
        <div style={{ textAlign: "center", margin: "auto" }}>
          <h2 className="ui icon header">
            <i className="list alternate outline icon"></i>
            <div className="content">
              MY LIST
              <div className="sub header">Füge etwas deiner Liste hinzu</div>
              <PrioritySelect
                onPrioritySelected={this.handlePrioritySelected}
              />
            </div>
          </h2>

          <p></p>
          <form onSubmit={this.printValue}>
            <div className="ui input focus">
              <input
                type="text"
                value={this.state.value}
                placeholder="Eingabe"
                onChange={this.getInput}
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
                onClick={this.addItem}
              >
                Hinzufügen
              </button>
            </div>
          </form>
          {this.state.list.map((item, index) => (
            <PrintTodo
              checked={item.checked}
              onCheck={this.handleCheck}
              text={item.title}
              priority={item.priorität}
              index={index}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
