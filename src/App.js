import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import axios from "axios";
import About from "./Components/About/About";
import SignUp from "./Components/SignUp/SignUp";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  handleChange = e => {
    let input = e.target.name;
    console.log(input);
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        This is the app
        <Route path="/" exact component={About} />
        <Route
          path="/signup"
          render={props => (
            <SignUp {...props} info={this.state} change={this.handleChange} />
          )}
        />
      </div>
    );
  }
}

export default App;
