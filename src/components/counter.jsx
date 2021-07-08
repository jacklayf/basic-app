import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  //styles = {
  //fontSize: 10,
  // fontWeight: "bold",
  //};

  //constructor() {
  //super();
  //this.handleIncrement = this.handleIncrement.bind(this);
  //}

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  //doHandleIncrement = () => {
  //  this.handleIncrement({ id: 1 });
  //};

  render() {
    console.log(this.props);
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

//hello there

export default Counter;
