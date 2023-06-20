import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './bookcart.css';

const CartDisplay = ({ k }) => {
  return (
    <div className="cart-display">
      {k.map((item, index) => (
        <div key={index} className="cart-item">
          <p className="description">Description: {item.description}</p>
          <img className="image" src={item.link} alt="Product Image" />
        </div>
      ))}
    </div>
  );
};

function Cart() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem('emaill'));
  const [cart, setCart] = useState([]);
  const [data1, setData1] = useState([]);
  const [k, setK] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bookie-backend.onrender.com/cartretrive', {
          method: 'POST',
          crossDomain: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({
            email,
          }),
        });
        const data = await response.json();

        if (data.status === 'ok') {
          setCart(data.data);
          setData1(data.data1);
          cartdisplay(data.data, data.data1);
        } else {
          const temp = ['null'];
          setCart(temp);
        }
      } catch (error) {
        console.error('Error retrieving cart data:', error);
      }
    };

    fetchData();
  }, []);

  const cartdisplay = (data, data1) => {
    const tempK = [];
    for (var i = 0; i < data1.length; i++) {
      tempK.push({  link: data1[i],description: data[i] });
    }
    setK(tempK);
  };

  const addDb = () => {
    navigate('/pay');
  };

  return (
    <div className="cart-display">
    <h2>Book Cart</h2>
    {k.map((item, index) => (
      <div key={index} className="cart-item">
        <div className="image-container">
          <img className="image" src={item.link} alt="Product Image" />
        </div>
        <p className="description">{item.description}</p>
      </div>
    ))}
  </div>
   
);
};

export default Cart;
