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
      first_name: "",
      last_name: "",
      email: "",
      validFirst: false,
      validEmail: false,
      validLast: false,
      success: false,
      errors: {
        first: "*required",
        last: "*required",
        email: "*required"
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

  handleSubmit = e => {
    let data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email
    } 
    e.preventDefault();
    if (
      this.state.validFirst &&
      this.state.validLast &&
      this.state.validEmail
    ) {
      axios.post('http://127.0.0.1:8000/contacts/new',data)
      .then(res => console.log(res))
      .catch(err => console.log(err))

      console.log("You have been signed up!");
    } else {
      let errors = this.state.errors;
      alert(`${errors.first}\n${errors.last}\n${errors.email}\n`);
    }
    console.log(this.state);
  };

  handleValidation = (value, field) => {
    let errors = { ...this.state.errors };
    if (field == "first_name") {
      if (value) {
        this.setState({ errors: errors });
        let specChar = new RegExp(/^[A-Za-z]+$/);
        if (!specChar.test(value)) {
          errors.first = "Name cannot contain special characters or numbers";
          this.setState({ validFirst: false, errors: errors });
        } else {
          errors.first = "";
          this.setState({ validFirst: true, errors: errors });
        }
      } else {
        errors.first = "*required";
        this.setState({ validFirst: false, errors: errors });
      }
    }
    if (field == "last_name") {
      if (value) {
        let errors = { ...this.state.errors };
        errors.last = "";
        this.setState({ errors: errors });
        let specChar = new RegExp(/^[A-Za-z]+$/);
        if (!specChar.test(value)) {
          errors.last = "Name cannot contain special characters or numbers";
          this.setState({ validLast: false, errors: errors });
        } else {
          errors.last = "";
          this.setState({ validLast: true, errors: errors });
        }
      } else {
        errors.last = "*required";
        this.setState({ validLast: false, errors: errors });
      }
    }
    if (field == "email") {
      if (value) {
        let errors = { ...this.state.errors };
        errors.email = "";
        this.setState({ errors: errors });
        if (!value.includes("@") || !value.includes(".")) {
          errors.email = "email must contain an '@' followed by a '.'";
          this.setState({ validEmail: false, errors: errors });
        } else {
          errors.email = "";
          this.setState({ validEmail: true, errors: errors });
        }
      } else {
        errors.email = "*required";
        this.setState({ validEmail: false, errors: errors });
      }
    }
  };

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        This is the app
        <main>
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
        </main>
      </div>
    );
  }
}

export default App;
