import React, { useState } from 'react';

const PaymentPage = () => {
  const [price, setPrice] = useState('');

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handlePayment = () => {
    fetch('https://betawill-com.onrender.com/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({price: price }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.link) {
          window.location.href = data.link;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" value={price} onChange={handlePriceChange} />
      </div>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default PaymentPage;
