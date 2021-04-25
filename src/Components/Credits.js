import React, { Component } from "react";

export default class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: null,
    }
  }

  componentDidMount() {
 
    console.log(this.props.credits)
  }

    // this.props.addDebitsArray(description, amount, date)
  //use ^^^^^ to add new items to the list
  render() {
    return (
      <div>


        
      </div>
    );
  }
}
