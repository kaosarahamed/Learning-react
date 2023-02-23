import React, { Component, createRef } from "react";

export default class RefClass extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();
    this.state = {};
  }

  handleClick = () => {
    console.log((this.userNameRef.current.style.color = "red"));
  };

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick} ref={this.userNameRef}>
          Hello
        </h2>
      </div>
    );
  }
}
