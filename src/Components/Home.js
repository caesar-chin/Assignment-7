import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import styles from "./debitCreditStyles.module.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.headers}>Bank of React</h1>
        <img
          className={styles.bankimg}
          src="https://media.istockphoto.com/vectors/bank-building-isolated-on-white-background-vector-illustration-flat-vector-id900791430?k=6&m=900791430&s=612x612&w=0&h=i8p6EfGRaDb86Z5dyGgURWVi--2KFYuoVjNJUHnrChk="
          alt="bank"
        />

        <Link to="/userProfile">User Profile</Link>

        <AccountBalance accountBalance={this.props.accountBalance} />

        <div>
          <Link to={"/credits"}>Credits </Link>
        </div>

        <div>
          <Link to={"/debits"}>Debits </Link>
        </div>
      </div>
    );
  }
}

export default Home;
