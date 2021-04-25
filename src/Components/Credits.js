import React, { Component } from 'react';

export default class Credits extends Component {
  componentDidMount() {
    console.log(this.props.credits);
  }

  // this.props.addDebitsArray(description, amount, date)
  //use ^^^^^ to add new items to the list
  render() {
    return (
      <div>
        <h1>Credits</h1>
      </div>
    );
  }
}
