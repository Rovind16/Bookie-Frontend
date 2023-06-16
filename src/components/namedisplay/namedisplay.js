import React, { useState } from 'react';
import { useEffect } from 'react';
import './namedisplay.css';
function Name() {
  const [email,setEmail] = useState(localStorage.getItem('emaill'))
  const [fname,setfname] = useState("");
  var x = localStorage.getItem("loggedIn");
  if(x==="true"){
  fetch("https://bookie-backend.onrender.com/name", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      email,
    })    
  })

  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setfname(data.data);
  });
  }
    return (
      <div>
        <h3 style={{ fontFamily: 'serif' }} className="animate-charcter">Welcome <b style={{ color: '#6495ED' }}>{fname}</b></h3> 
      </div>
 
    );
  }

  export default Name;
