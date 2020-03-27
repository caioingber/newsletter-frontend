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
      email: "",
      validFirst: false,
      validEmail: false,
      validLast: false,
      success: false,
      errors: {
        first: "First name is a required field",
        last: "Last name is a required field",
        email: "email is a required field"
      }
    };
  }

  handleChange = e => {
    let input = e.target.name;
    let value = e.target.value;
    this.setState({
      [input]: e.target.value
    });
    this.handleValidation(value, input);
  };

  handleSubmit = (e, x) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleValidation = (value, field) => {
    if (field == "firstName") {
      if (value) {
        let errors = { ...this.state.errors };
        errors.first = "";
        this.setState({ errors: errors });
        let specChar = new RegExp(/^[A-Za-z0-9 ]+$/);
        if (!specChar.test(value)) {
          errors.first = "Name cannot contain special characters";
          this.setState({ errors: errors });
        } else {
          errors.first = "";
          this.setState({ validFirst: true, errors: errors });
        }
      }
    }
    if (field == "lastName") {
      if (value) {
        let errors = { ...this.state.errors };
        errors.last = "";
        this.setState({ errors: errors });
        let specChar = new RegExp(/^[A-Za-z0-9 ]+$/);
        if (!specChar.test(value)) {
          errors.last = "Name cannot contain special characters";
          this.setState({ errors: errors });
        } else {
          errors.last = "";
          this.setState({ validLast: true, errors: errors });
        }
      }
    }
    if (field == "email") {
      if (value) {
        let errors = { ...this.state.errors };
        errors.email = "";
        this.setState({ errors: errors });
        let specChar = new RegExp(/^[@]+[.]$/);
        if (!value.includes("@") || !value.includes(".")) {
          errors.email = "email must contain an '@' followed by a '.'";
          this.setState({ errors: errors });
        } else {
          errors.email = "";
          this.setState({ validEmail: true, errors: errors });
        }
      }
    }
  };

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        This is the app
        <Route path="/" exact component={About} />
        <Route
          path="/signup"
          render={props => (
            <SignUp
              {...props}
              info={this.state}
              change={this.handleChange}
              submit={this.handleSubmit}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
