import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleinc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handledec = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleinc}>+</button>
        <button
          onClick={this.handledec}
          disabled={this.state.count === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}

export default ClassComponent;
