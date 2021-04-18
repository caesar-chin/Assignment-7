import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import Credits from "./Credits";
import Debits from "./Debits";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          src="https://media.istockphoto.com/vectors/bank-building-isolated-on-white-background-vector-illustration-flat-vector-id900791430?k=6&m=900791430&s=612x612&w=0&h=i8p6EfGRaDb86Z5dyGgURWVi--2KFYuoVjNJUHnrChk="
          alt="bank"
        />
        <h1>Bank of React</h1>

        <Link to="/userProfile">User Profile</Link>

        <AccountBalance accountBalance={this.props.accountBalance} />

        <div>
          {" "}
          <Link to={"/credits"}>Credits </Link>
        </div>

        <div>
          {" "}
          <Link to={"/debits"}>Debits </Link>
        </div>
      </div>
    );
  }
}

export default Home;
