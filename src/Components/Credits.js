import React, { Component } from 'react';
import styles from './debitCreditStyles.css';
export default class Credits extends Component {
  componentDidMount() {
    console.log(this.props.credits);
  }

  // this.props.addcreditsArray(description, amount, date)
  //use ^^^^^ to add new items to the list
  render() {
    let accountBalance = this.props.accountBalance;
    let creditTransactions = this.props.credits;
    return (
      <div>
        <h1 className='type-header'>Credits</h1>
        <div className='transactions-list'>
          {creditTransactions.map((transaction, index) => {
            return (
              <ul key={index}>
                <li>
                  <b>Name:</b> {transaction.description} <b>Cost:</b>{' '}
                  {transaction.amount} <b>Date:</b> {transaction.date}
                </li>
              </ul>
            );
          })}
        </div>
        <h4 className='account-balance-header'>
          AccountBalance:
          <p className='account-balance-text'>${accountBalance}</p>
        </h4>
      </div>
    );
  }
}
