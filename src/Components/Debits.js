import React, { Component } from 'react';

export default class Debits extends Component {
  componentDidMount() {
    console.log(this.props.debits);
  }

  //use ' this.props.addCreditsArray(description, amount, date) ' to add new items to the list
  render() {
    let accountBalance = this.props.accountBalance;
    let debitTransactions = this.props.debits;
    this.props.addDebitsArray('high', 4230, 1 / 1 / 2021);
    return (
      <div>
        <h1>Debits</h1>
        <div>
          {debitTransactions.map((transaction, index) => {
            return (
              <ul key={index}>
                <li>
                  {transaction.description} - {transaction.amount} -
                  {transaction.date}
                </li>
              </ul>
            );
          })}
        </div>
        <h4>
          AccountBalance: <p>{accountBalance}</p>
        </h4>
      </div>
    );
  }
}
