import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import LogIn from "./Components/LogIn";
import Debits from "./Components/Debits";
import Credits from "./Components/Credits";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: "joe_shmo",
        memberSince: "07/23/96",
      },
      credits: null,
      debits: null,
    };
  }

  componentDidMount() {
    this.handleGetCredits();
    this.handleGetDebits();
  }

  handleGetCredits = async () => {
    await fetch(`https://moj-api.herokuapp.com/credits`)
      .then((res) => res.json())
      .then((json) => {
        console.log("credits run good");
        this.setState({ credits: json });
      })
      .catch((err) => {
        console.log(err);
        return 0;
      });
  };

  handleGetDebits = async () => {
    await fetch(`https://moj-api.herokuapp.com/debits`)
      .then((res) => res.json())
      .then((json) => {
        console.log("debits run good");
        this.setState({ debits: json });
      })
      .catch((err) => {
        console.log(err);
        return 0;
      });
  };

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  render() {
    const HomeComponent = () => <Home />;

    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );

    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );

    const DebitsComponent = () => (
      <Debits
        accountBalance={this.state.accountBalance}
        debits={this.state.debits}
      />
    );

    const CreditsComponent = () => (
      <Credits
        accountBalance={this.state.accountBalance}
        credits={this.state.credits}
      />
    );

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
