import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    let formData={
        email:email,
        password:password
    }
    console.log(formData);
    fetch('http://localhost:8080/students/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        response.json()
          .then((fres) => {
            if (fres.presence == true && fres.password==true) {
              navigate('/')
              return;
            }
            else if(fres.presence== true     && fres.password==false)
            {
              alert("Please Enter Correct Password")
            }
            else
            {
                alert("User not registered")
                navigate('/signup')
            }
          })
      })
      .catch((error) => {
        console.log('Error submitting signup form:', error);
      });
    
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin} className='login'>Login</button>
      <div className="button-container">
        <button onClick={()=>navigate('/signup')} className="small-button">
          Signup
        </button>
        <button onClick={()=>navigate('/')} className="small-button">
          Home
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
