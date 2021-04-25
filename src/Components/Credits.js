import React, {Component } from 'react';
import styles from './debitCreditStyles.css';
export default class Credits extends Component {
  componentDidMount() {
    console.log(this.props.credits);
  }


  // this.props.addcreditsArray(description, amount, date)
  //use ^^^^^ to add new items to the list

handleSubmit = (event) => {
  event.preventDefault();
  let input = event.target;
  let amountInput = input.input.value;
  let descriptionInput = input.description.value;

  const currentMonth1 = new Date().getMonth() + 1;
  const currentMonth = currentMonth1.toString();
  const currentDay = new Date().getDate().toString();
  const currentYear = new Date().getFullYear().toString();

  const currentDate = currentMonth + '/' +  currentDay + '/' + currentYear;

  this.props.addCreditsArray(descriptionInput, amountInput, currentDate);
}
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
          <form onSubmit={this.handleSubmit}>
            <label>
               New Credit:
          <input type="text" name="input" placeholder="amount $"/>
          </label>

            <input type="text" name="description" placeholder="description"/>
          
            <input type="submit" value="Submit" />
      
          </form>

 
        </div>
        <h4 className='account-balance-header'>
          AccountBalance:
          <p className='account-balance-text'>${accountBalance}</p>
        </h4>
      </div>
    );
  }
}
