import React, { Component } from "react";
import BootstrapCard from "./BootstrapCard";
import ClassComponent from "./ClassComponent";

export default class ConditionalRendaring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    return (
      <div>{this.state.isLogin ? <ClassComponent /> : <BootstrapCard />}</div>
    );
  }
}
