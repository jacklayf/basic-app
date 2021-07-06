import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
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
    this.setState({ count: this.state.count + 1 });
  };

  //doHandleIncrement = () => {
  //  this.handleIncrement({ id: 1 });
  //};

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

//hello there

export default Counter;
