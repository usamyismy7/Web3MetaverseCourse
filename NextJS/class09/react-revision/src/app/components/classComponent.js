"use client";
import React from "react";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      this.setState({ count: 0 });
    }
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>Class Component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
