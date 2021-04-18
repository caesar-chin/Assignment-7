import React, { Component } from "react";

export default class Credits extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.credits);
  }

  render() {
    return <div></div>;
  }
}
