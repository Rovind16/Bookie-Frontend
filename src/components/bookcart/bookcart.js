import React, { useEffect, useState } from 'react';

import './bookcart.css';
function Cart() {
  const [data, setData] = useState([]);
  const [email,setEmail] = useState(localStorage.getItem('emaill'))
  const [cartval,setCart]=useState([]);
  const [data1, setData1] = useState([]);
 
  var x = localStorage.getItem("loggedIn");
  var k=0;
  if(x==="true"){
    fetch("http://localhost:5000/cartretrive", {
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
      //console.log(data);
      setCart(data.data);
      if(data.error=="error"){
        const temp = [
          "null"
        ];
       
      }else{
        setData1(cartval);
        
      }
    });    
  }
  

  
 
  useEffect(() => {
     const temp=[];
      let temp1=cartval
      for(let i=0;i<temp1.length;i++){
      const obj = temp1[i];
      const key = obj.key;
      const value = obj.value;
      if(key=="emaill"){
        continue;
      }
      else if(key=="TotalAmount"){
       continue;
      }
      
      else{
      temp.push({ key, value });
      }
    }
    
    for(let i=0;i<cartval.length;i++){
      const obj = cartval[i];
      const key = obj.key;
      const value = obj.value;
     // console.log(key);
      if(key=="emaill"){
        continue;
      }
      else if(key=="TotalAmount"){
        //localStorage.setItem("TotalAmount", value);
         var l=value
      }
      else{
      temp.push({ key, value });
      } 
    }
    setData1(temp)
    const st=[];
    const keys = Object.keys(localStorage); 
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = localStorage.getItem(key);
      if(key!=="token" && key!=="loggedIn" && key!=='emaill'){
      st.push({ key, value });
      //console.log(key);
     }
    }
    setData(st);
    
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
        data,
        data1
      })
    })
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    })

//     const amt=[];
//     var sum=0;
    
//     for(let i=0;i<data1.length;i++){
//       const obj=data1[i];
//       var f=obj.value;
//       sum=sum+parseInt(f.substring(f.length-3,f.length));
//  }
    //navigate('/pay');
    window.location.href = "./pay";
  }
 
  return (
    <div>
      <h1>Book Cart</h1>
     
      {data1
  .filter(obj => obj.key !== 'TotalAmount')
  .map(obj => (
    <div className="data-item" key={obj.key}>
      <p className='data-key'> {obj.key}</p>
      <p className='data-value'>{obj.value}</p>
    </div>
  ))
}

{data.filter(item => item.key !== "TotalAmount").map(item => (
  <div className="data-item" key={item.key}>
    <p className="data-key">{item.key}:</p>
    <p className="data-value">{item.value}</p>
  </div>
))}

        <button onClick={addDb} className='submit-button'>Pay</button>
    </div>
    
  );
}

export default Cart;
