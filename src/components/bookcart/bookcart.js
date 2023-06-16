import React, { useEffect, useState } from 'react';
import './bookcart.css';
function Cart() {
  const [data, setData] = useState([]);
  const [email,setEmail] = useState(localStorage.getItem('emaill'))
  useEffect(() => {
    const keys = Object.keys(localStorage);
    const storedData = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = localStorage.getItem(key);
      if(key!=="token" && key!=="loggedIn" ){
      storedData.push({ key, value });
      }
    }
    setData(storedData);
  },[]);
  const addDb = () => {
    fetch('http://localhost:5000/addToCart',
    {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body:JSON.stringify({
        email,
        data
      })
    })
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    })
    window.location.href = "./pay";
  }
  return (
    <div className="local-storage-container">
      <h2>BookCart Details</h2>
      <div className="data-container">
        {data.map((item) => (
          <div className="data-item" key={item.key}>
            <p className="data-key">{item.key}:</p>
            <p className="data-value">{item.value}</p>
          </div>
        ))}
      </div>
      <button onClick={addDb} className='submit-button'>Pay</button>
    </div>
  );
}

export default Cart;
