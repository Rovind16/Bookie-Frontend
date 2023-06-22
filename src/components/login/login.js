// import React, { useState } from "react";
import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
import "./login.css"
function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   function handleSubmit(e) {
      e.preventDefault();

      console.log(email, password);
      fetch("https://bookie-backend.onrender.com/login-user", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("emaill", email);
            window.localStorage.setItem("loggedIn", true);

              window.location.href = "./home";
          }else{
            alert('Username or Password Incorrect')
          }
        });
    }
    return(
         <>
         {/* <div class="login"> */}
            <div className="h">
            <form onSubmit={handleSubmit}>
         <h2>LOGIN</h2>
         {/* </div> */}
            <h5><label>USERNAME:</label></h5>
            <input type="text" placeholder="enter email" class="user" onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <h5><label>PASSWORD:</label></h5>
            <input type="password" placeholder="enter password" class="password" onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <br/>
            <input type="submit" value="LOGIN" class="submit"/>
            </form>
  </div>
         </>
    );
}
export default Login;
