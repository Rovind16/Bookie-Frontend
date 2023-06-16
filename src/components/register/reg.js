import"./reg.css";
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();   
    const { fname, lname, email, password } = this.state;
    var value=[];
    value.push(fname);
    value.push(lname);
    value.push(email);
    value.push(password);
    var f=0;
    for(var i=0;i<value.length;i++){
      if(value[i]==0){
        f=1;
        alert('All field should be filled');
        break;
      }
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!(email.match(validRegex))) {
      f=1;
      alert('Email is invalid')
    }
    console.log(fname, lname, email, password);
    if(f==0){
     
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
      alert('sign up successfull')
      window.location.href = '/login'
  }
}
  render() {
    return (
      <body>
      <div className='box'>
       <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
          <h5><label>First name:</label></h5>
          <input
            type="text"
            className="user"
            placeholder="First name" 
            onChange={(e) => this.setState({ fname: e.target.value })}
            />
          <h5><label>Last name:</label></h5>
          <input
            type="text"
            className="user"
            placeholder="Last name" 
            onChange={(e) => this.setState({ lname: e.target.value })}
            />
            
         <h5><label>Email:</label></h5>
          <input
            type="text" 
            className="user"
            placeholder="Enter email"
         
           onChange={(e) => this.setState({ email: e.target.value })}
           />
           
          <h5><label>Password:</label></h5>
          <input
            type="password"
            className="user"
            placeholder="Enter password" 
            onChange={(e) => this.setState({ password: e.target.value })}
            />
           <br></br><br></br>
        <div className="d-grid">
        <button type="submit" onClick={this.validate} className='b'>Sign up</button>
        </div>
        
        <p className="p">
          Already registered <Link to="/login">Log in</Link></p>

      </form>
      </div>
      </body>
    )
  }
}