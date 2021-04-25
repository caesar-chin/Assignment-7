import React, { Component } from "react";
import styles from "./debitCreditStyles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: this.props.accountBalance,
      debitTransactions: this.props.debits,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      accountBalance: this.props.accountBalance,
      debitTransactions: this.props.debits,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var number = parseFloat(event.target.amount.value);
    this.props.addDebitsArray(
      event.target.description.value,
      number,
      event.target.date.value
    );

    this.props.handleCalculateNewBalance();
    
    this.setState({
      accountBalance: this.props.accountBalance,
      debitTransactions: this.props.debits,
    });
  }

  //use ' this.props.addDeditsArray(description, amount, date) ' to add new items to the list
  render() {
    let accountBalance = this.state.accountBalance;
    let debitTransactions = this.state.debitTransactions;
    return (
      <div>
        <h1 className="type-header">Debits</h1>
        <div className="transactions-list">
          {debitTransactions.map((transaction, index) => {
            return (
              <ul key={index}>
                <li>
                  <b>Name:</b> {transaction.description} <b>Cost:</b>{" "}
                  {transaction.amount} <b>Date:</b> {transaction.date}
                </li>
              </ul>
            );
          })}
        </div>
        <h4 className="account-balance-header">
          AccountBalance:
          <p className="account-balance-text">${accountBalance}</p>
        </h4>

        <div className={styles.inputs}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" />
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" />
            <label htmlFor="date">Date:</label>
            <input type="text" id="date" name="date" />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          <Link to={"/login"}>Login</Link>
        </div>

        <div>
          <Link to={"/userProfile"}>User Profile</Link>
        </div>

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
