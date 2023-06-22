import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);

    fetch("https://bookie-backend.onrender.com/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./home";
        } else {
          alert("Username or Password Incorrect");
        }
      });
  }

  return (
    <div className="wrapper">
      <div className="title">Login</div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="pass-link">
            <Link to="#">Forgot password?</Link>
          </div>
        </div>
        <div className="field">
          <input type="submit" value="Login" />
        </div>
        <div className="signup-link">
          Not a member? <Link to="/register">Signup now</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
