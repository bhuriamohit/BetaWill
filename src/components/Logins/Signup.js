import React, { useState } from 'react';
import '../Signup.css';
import HomePage from '../Home/HomePage';
import { useNavigate } from 'react-router-dom';
function Signup() {

  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [state, setState] = useState('');
  const [classValue, setClassValue] = useState('');
  const [stream, setStream] = useState('');
  const [homepage,sethomepage]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Both passwords don't match");
      return;
    }
    let formData = {
      email: email,
      password: password,
      fullname: username,
      contact_number: contactNumber,
      class: classValue,
      stream: stream,
      state: state,
      designation: 'CSE'
    };

    fetch('http://localhost:8080/students/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        response.json()
          .then((fres) => {
            if (fres.status == "present") {
              alert("User already exists\nPlease Login")
              navigate('/login')
              return;
            }
            else {
              sethomepage(true);
              alert("Signed up successfully!!")
            }
          })
      })
      .catch((error) => {
        console.log('Error submitting signup form:', error);
      });
  };

  return (
    
    <div className="container">
      {homepage === true && <HomePage />}
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <label htmlFor="contact-number">Contact Number:</label>
        <input
          type="tel"
          id="contact-number"
          name="contact-number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />

        <label htmlFor="class">Class:</label>
        <input
          type="text"
          id="class"
          name="class"
          value={classValue}
          onChange={(e) => setClassValue(e.target.value)}
          required
        />

        <label htmlFor="stream">Stream:</label>
        <input
          type="text"
          id="stream"
          name="stream"
          value={stream}
          onChange={(e) => setStream(e.target.value)}
          required
        />

        <input type="submit" value="Sign Up" className="signup-button" />
      </form>

      <div className="button-group">
        <button onClick={()=>navigate('/login')} className="login-button1">
          Login
        </button>

        <button onClick={()=>navigate('/')} className="home-button">
          Home Page
        </button>
      </div>
    </div>
  );
}

export default Signup;
