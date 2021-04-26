import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./debitCreditStyles.module.css";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.headers}>User Profile</h1>

        <div className={styles.credits}>Username: {this.props.userName}</div>
        <div className={styles.credits}>
          Member Since: {this.props.memberSince}
        </div>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default UserProfile;
