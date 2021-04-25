import React, { Component } from "react";
import styles from "./debitCreditStyles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: this.props.accountBalance,
      creditTransactions: this.props.credits,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      accountBalance: this.props.accountBalance,
      creditTransactions: this.props.credits,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    var number = parseFloat(event.target.amount.value);
    this.props.addCreditsArray(
      event.target.description.value,
      number,
      event.target.date.value
    );
    await this.props.handleCalculateNewBalance();

    this.setState({
      accountBalance: this.props.accountBalance,
      creditTransactions: this.props.credits,
    });
  }

  // this.props.addCreditsArray(description, amount, date)
  //use ^^^^^ to add new items to the list
  render() {
    let accountBalance = this.state.accountBalance;
    let creditTransactions = this.state.creditTransactions;
    return (
      <div>
        <h1 className="type-header">Credits</h1>
        <div className="transactions-list">
          {creditTransactions.map((transaction, index) => {
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
            <input type="text" id="amount" name="amount" />
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
