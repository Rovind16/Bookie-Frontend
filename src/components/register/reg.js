import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    var value = [];
    value.push(fname);
    value.push(lname);
    value.push(email);
    value.push(password);
    var f = 0;
    for (var i = 0; i < value.length; i++) {
      if (value[i] === "") {
        f = 1;
        alert("All fields should be filled");
        break;
      }
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
      f = 1;
      alert("Email is invalid");
    }
    console.log(fname, lname, email, password);
    if (f === 0) {
      fetch("https://bookie-backend.onrender.com/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password
        })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
        });
      alert("Sign up successful");
      window.location.href = "/login";
    }
  }

  render() {
    return (
      <body>
        <div className="wrapper">
          <div className="title">Registration</div>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <input
                type="text"
                value={this.state.fname}
                onChange={(e) => this.setState({ fname: e.target.value })}
                required
              />
              <label>First Name</label>
            </div>
            <div className="field">
              <input
                type="text"
                value={this.state.lname}
                onChange={(e) => this.setState({ lname: e.target.value })}
                required
              />
              <label>Last Name</label>
            </div>
            <div className="field">
              <input
                type="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input
                type="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                required
              />
              <label>Password</label>
            </div>
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" id="agree-terms" />
                <label htmlFor="agree-terms">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
            <div className="field">
              <input type="submit" value="Register" />
            </div>
           
          </form>
        </div>
      </body>
    );
  }
}
