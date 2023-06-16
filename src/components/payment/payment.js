import React, { useState } from 'react';
import './payment.css';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [pay, setPay] = useState([]);
  const [rate,setRate] = useState(localStorage.getItem('TotalAmount'))
  const [email,setEmail]=useState(localStorage.getItem("emaill"))

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cardNumber.trim() === '') {
      alert('Please enter a valid card number.');
      return;
    }

    if (cardName.trim() === '') {
      alert('Please enter a valid cardholder name.');
      return;
    }

    if (expiryDate.trim() === '' || expiryDate.length !== 5) {
      alert('Please enter a valid expiry date in the format MM/YY.');
      return;
    }

    if (cvv.trim() === '' || cvv.length !== 3) {
      alert('Please enter a valid CVV.');
      return;
    }
     var pay=[];
     pay.push("Card Name: "+cardName);
     pay.push("Card Number: "+cardNumber);
     pay.push("Expiry Date: "+expiryDate);
     pay.push("CCV: "+cvv);
     setPay(pay);

    alert('Payment submitted successfully!');
  };
  const onPay = ()=>{
    fetch('https://bookie-backend.onrender.com/paymentdetais',
    {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body:JSON.stringify({
        email,
        pay
      })
    })
    .then((res) => res.json())
    .then((pay) => {
    console.log(pay);
    if (pay.status == "ok") {
      alert("payment successfully completed!!");
    }
    })
  }
  return (
    <div className="container">
      <h1 className="title">Payment Page </h1>
      <p>Amount to be paid: {rate}</p>
      <form className="payment-form">
        <div className="card-container"> 
          <label htmlFor="card-number" className="label">Card Number:</label>
          <input id="card-number" type="text" className="input" value={cardNumber} onChange={handleCardNumberChange} />
        </div>

        <label htmlFor="card-name" className="label">Cardholder Name:</label>
        <input id="card-name" type="text" className="input" value={cardName} onChange={handleCardNameChange} />

        <div className="inline-inputs">
          <div className="input-container">
            <label htmlFor="expiry-date" className="label">Expiry Date:</label>
            <input id="expiry-date" type="text" className="input" value={expiryDate} onChange={handleExpiryDateChange} placeholder="MM/YY" />
          </div>

          <div className="input-container">
            <label htmlFor="cvv" className="label">CVV:</label>
            <input id="cvv" type="text" className="input" value={cvv} onChange={handleCvvChange} />
          </div>
        </div>
        <div className='btr'>
        <button className="submit-button" onClick={handleSubmit}>Submit Payment</button>
        <button className="submit-button" onClick={onPay}>Confirm Payment</button>
        </div>
      </form>
    </div>
  );
}

export default PaymentPage;
