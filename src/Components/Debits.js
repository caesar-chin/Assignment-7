import React, { Component } from 'react';
import styles from './debitCreditStyles.css';

export default class Debits extends Component {
  componentDidMount() {
    console.log(this.props.debits);
  }

  //use ' this.props.addCreditsArray(description, amount, date) ' to add new items to the list
  render() {
    let accountBalance = this.props.accountBalance;
    let debitTransactions = this.props.debits;
    return (
      <div>
        <h1 className='type-header'>Debits</h1>
        <div className='transactions-list'>
          {debitTransactions.map((transaction, index) => {
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
