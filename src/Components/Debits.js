import React, { Component } from "react";

export default class Debits extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

    console.log(this.props.debits)
  }

  
  // this.props.addCreditsArray(description, amount, date)
  //use ^^^^^ to add new items to the list
  render() {
    return (
    <div>

    </div>
    )
  }
}
