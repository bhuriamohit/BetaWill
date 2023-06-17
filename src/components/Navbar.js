import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpeg';
import Userinfo from './UserInfo/UserInfo';
import { Router, Routes, Route } from "react-router-dom"
import countries from './CountryNames.js';
import WebFont from 'webfontloader';

const Navbar = () => {



  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [username, setusername] = useState(null)
  const [useremail, setuseremail] = useState(null)


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = 60;
    const top = section.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  };



  /* Login Section */


  const [isPopupOpen, setPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to toggle the popup
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
    if (issignupPopupOpen == true) {
      setPopupOpen()
    }
    setissignupPopupOpen(false);

  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  useEffect(() => {
    // Retrieve the username from localStorage
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
    const storedUsername = localStorage.getItem('username');
    const storedemail = localStorage.getItem('useremail')
    console.log(storedUsername)
    setuseremail(storedemail)
    if (storedUsername) {
      setusername(storedUsername);
    }


  }, []);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    let formData = {
      email: email,
      password: password
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
            console.log(fres)
            if (fres.presence == true && fres.password == true) {
              console.log(fres)
              setuseremail(fres.email)
              setusername(fres.username);
              localStorage.setItem('username', fres.username);
              localStorage.setItem('useremail', fres.email);
              setPopupOpen(!isPopupOpen);
              return;
            }
            else if (fres.presence == true && fres.password == false) {
              alert("Please Enter Correct Password")
            }
            else {
              alert("User not registered")
              setPopupOpen(!isPopupOpen);

            }
          })
      })
      .catch((error) => {
        console.log('Error submitting signup form:', error);
      });

  }
  const handleLogout = () => {
    // Clear the username from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('useremail');
    navigate('/userinfo', { state: null })
    // Update the state
    setusername(null);
    setuseremail(null)
  };







  /* Sign Up section */
  const [issignupPopupOpen, setissignupPopupOpen] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setotp] = useState('')
  const [otpfilled, setotpfilled] = useState('')
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    dob: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: '',
    state: '',
    pincode: '',
    course: ''
  });
  const signupTogglePopup = () => {
    setPopupOpen(false);
    setissignupPopupOpen(!issignupPopupOpen);
    setRegisterForm({
      fullName: '',
      email: '',
      mobileNumber: '',
      dob: '',
      password: '',
      confirmPassword: '',
      gender: '',
      country: '',
      state: '',
      pincode: '',
      course: ''
    });
  };
  const handleSignup = () => {
    // Perform validation and other necessary checks

    if(registerForm.email=='' || registerForm.fullName=='' || registerForm.mobileNumber=='' || registerForm.dob=='' )
    {
      alert("Please fill all the fields")
      return
    }
    if(registerForm.password=='' || registerForm.confirmPassword=='' || registerForm.gender=='' || registerForm.country=='' )
    {
      alert("Please fill all the fields")
      return
    }
    if(registerForm.state=='' || registerForm.pincode=='')
    {
      alert("Please fill all the fields")
      return
    }
    if (registerForm.password != registerForm.confirmPassword) {
      alert("Both Password doesn;t match , please Enter same password in both fields")
      return;
    }
    if (!otpSent) {

      const randomNumber = Math.floor(Math.random() * 10000);


      const otpn = String(randomNumber).padStart(4, '0');
      setotp(otpn);

      let otpdata = {
        receiver: registerForm.email,
        otp: otpn,
        mobNo:registerForm.mobileNumber
      }

      fetch('http://localhost:8080/verifyotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(otpdata)
      })
        .then(async (response) => {
          let fres = response.json();
          console.log(fres)
        })

      setOtpSent(true);
    }
    else {

      if(otp!=otpfilled)
      {
         alert("Incorrect OTP !!!!!");
         return 
      }

      const {
        fullName,
        email,
        mobileNumber,
        dob,
        password,
        confirmPassword,
        gender,
        country,
        state,
        pincode,
        course
      } = registerForm;

      
      // Pass the form values to your signup function or API call
      const formData = {
        fullName,
        email,
        mobileNumber,
        dob,
        password,
        gender,
        country,
        state,
        pincode,
        course
      };



      // Perform further processing or API call with the form data
      console.log(formData);

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
                alert("User already present\nPlease Login to continue :)");
              }
              else {
                alert("User signed up successfully now you can login :)\n")
                setOtpSent(false)
              }
              setissignupPopupOpen(false)
              setPopupOpen(true)

            })
        })
        .catch((error) => {
          console.log('Error submitting signup form:', error);
        });
    }
    

  };



  /*User Info Section */
  const navigate = useNavigate();
  const userinfo = () => {
    navigate('/userinfo', { state: { useremail: useremail } });
    console.log(useremail);
  }














  return (
    <div>

      <div>

        <nav className="navbar">
          <div className="logo">
            {/* Add your logo here */}
            <img src={logo} alt="Logo" className="main-logo" />
          </div>
          <div className="mobile-menu-buttons">
          </div>
          {/* Mobile menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>


            <button className="menu-button" onClick={toggleMobileMenu}>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
            </button>
            {isMobileMenuOpen && (

              <div className="mobile-menu-content">
                <ul className="nav-links">
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection('home') }} >Home</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection('courses') }} >Courses</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection('StudyMaterial') }}>Study Material</a>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
                {/* <div className="auth-buttons">
              <button className="login-button"  onClick={()=>navigate('/login')}>Login</button>
              <button className="register-button" onClick={()=>navigate('/signup')}>Register</button>
            </div> */}
              </div>
            )}
          </div>

          {/* Desktop menu */}
          <ul className="nav-links">
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection('home') }} >Home</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection('courses') }}>Courses</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection('StudyMaterial') }}>Study Material</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          {
            username == null && isMobileMenuOpen == '' ?
              <div className="auth-buttons">
                <button className="register-button" onClick={togglePopup}>Login</button>
                <button className="register-button" onClick={signupTogglePopup}>Register</button>
              </div> :
              <div className='buttonu-container'>
                <button class="buttonu" onClick={userinfo}>{username}</button>
                <button class="logoutbuttonu" onClick={handleLogout}>Logout</button>
              </div>

          }
        </nav>
      </div>
      <div className='gap'>

      </div>

      <div>
        {/* Login button */}

        {/* Popup */}
        {isPopupOpen && (
          <div className="popup2">
            <button className="close-button" onClick={togglePopup}>X</button>
            <div className="popup-content">
              <label className='label'>Email or phone number:</label>
              <input type="text" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label className='label'>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <button onClick={handleLogin} className='submit'>Login</button>
          </div>

        )}
        {issignupPopupOpen && (
          <div className="popup">
            <button className="close-button" onClick={togglePopup}>X</button>
            {/* Form fields */}
            <div className="popup-content">
              <div className="form-field-pair">
                <label className="label">Full Name:</label>
                <input type="text" value={registerForm.fullName} onChange={(e) => setRegisterForm({ ...registerForm, fullName: e.target.value })}  required/>
              </div>
              <div className="form-field-pair">
                <label className="label">Email:</label>
                <input type="text" value={registerForm.email} onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}  required/>
              </div>
              <div className="form-field-pair">
                <label className="label">Mobile Number:</label>
                <input type="text" value={registerForm.mobileNumber} onChange={(e) => setRegisterForm({ ...registerForm, mobileNumber: e.target.value })}  required />
              </div>
              <div className="form-field-pair">
                <label className="label">Password:</label>
                <input type="text" value={registerForm.password} onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}  required/>
              </div>
              <div className="form-field-pair">
                <label className="label">Confirm Password:</label>
                <input type="text" value={registerForm.confirmPassword} onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}  required/>
              </div>
              <div className="form-field-pair">
                <label className="label">Date of Birth:</label>
                <input type="date" value={registerForm.dob} onChange={(e) => setRegisterForm({ ...registerForm, dob: e.target.value })}  required />
              </div>
              <div className="form-field-pair">
                <label className="label">Gender:</label>
                <input type="text" list="genderOptions" name="gender" value={registerForm.gender} onChange={(e) => setRegisterForm({ ...registerForm, gender: e.target.value })} required />
                <datalist id="genderOptions">
                  <option value="Male" />
                  <option value="Female" />
                  <option value="Other" />
                </datalist>
              </div>
              <div className="form-field-pair">
                <label className="label">Country:</label>
                <input type="text" list="countryOptions" name="country" value={registerForm.country} onChange={(e) => setRegisterForm({ ...registerForm, country: e.target.value })} required />
                <datalist id="countryOptions">
                  {countries.slice(0, 100).map((country, index) => (
                    <option key={index} value={country} />
                  ))}
                </datalist>
              </div>
              <div className="form-field-pair">
                <label className="label">State:</label>
                <select style={{
                  border: '1px solid gray',
                  borderRadius: '4px',
                  padding: '8px',
                  width: '100%'
                }} value={registerForm.state} onChange={(e) => setRegisterForm({ ...registerForm, state: e.target.value })}  required>
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  {/* Add more options for other states */}
                </select>
              </div>
              <div className="form-field-pair">
                <label className="label">Pincode:</label>
                <input type="text" value={registerForm.pincode} onChange={(e) => setRegisterForm({ ...registerForm, pincode: e.target.value })} />
              </div>
              <div className="form-field-pair">
                <label className="label">Course:</label>
                <input type="text" value={registerForm.course} onChange={(e) => setRegisterForm({ ...registerForm, course: e.target.value })} />
              </div>
            </div>

            {!otpSent ? (
              <button onClick={handleSignup} className="register-button">
                Send OTP
              </button>
            ) : (
              <>
                <div className="form-field-pair">
                  <label className="label">OTP:</label>
                  <input type="text" value={registerForm.otp} onChange={(e) => setotpfilled(e.target.value)} />
                </div>
                <button onClick={handleSignup} className="register-button">
                  Submit
                </button>
              </>
            )}
          </div>
        )}

      </div>

    </div>

  );
};

export default Navbar;