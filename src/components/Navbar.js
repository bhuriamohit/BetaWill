import React, { useState ,useEffect } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpeg';
import Userinfo from './UserInfo/UserInfo';
import {Router,Routes,Route} from"react-router-dom"

const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [username, setusername] = useState(null)
  const [useremail,setuseremail]=useState(null)

  
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
    if(issignupPopupOpen==true)
    {
      setPopupOpen(false)
    }
    setissignupPopupOpen(false);
    
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedemail=localStorage.getItem('useremail')
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
    
    // Update the state
    setusername(null);
  };







  /* Sign Up section */
  const[issignupPopupOpen,setissignupPopupOpen]=useState(false);
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
    
    if(password!=confirmPassword)
    {
      alert("Both Password doesn;t match , please Enter same password in both fields")
      return ;
    }
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
            if(fres.status=="present")
            {
              alert("User already present\nPlease Login to continue :)");
            }
            else
            {
              alert("User signed up successfully now you can login :)\n")
            }
            setissignupPopupOpen(false)
            setPopupOpen(true)
            
          })
      })
      .catch((error) => {
        console.log('Error submitting signup form:', error);
      });
  };
  


  /*User Info Section */
  const navigate=useNavigate();
  const userinfo=()=>
  {
    navigate('/userinfo', { state: { useremail: useremail} });
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
            <button className="login-button" onClick={togglePopup}>
              Login
            </button>
            <button className="register-button" onClick={signupTogglePopup}>
              Register
            </button>
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
            username == null ?
              <div className="auth-buttons">
                <button className="register-button" onClick={togglePopup}>Login</button>
                <button className="register-button" onClick={signupTogglePopup}>Register</button>
              </div> :
              <div >
                <button onClick={userinfo}>{username}</button>
                <button onClick={handleLogout} >Logout</button>
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
            <input type="password" value={password} onChange={handlePasswordChange} />
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
      <input type="text" value={registerForm.fullName} onChange={(e) => setRegisterForm({ ...registerForm, fullName: e.target.value })} />
    </div>
    <div className="form-field-pair">
      <label className="label">Email:</label>
      <input type="text" value={registerForm.email} onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })} />
    </div>
    <div className="form-field-pair">
      <label className="label">Mobile Number:</label>
      <input type="text" value={registerForm.mobileNumber} onChange={(e) => setRegisterForm({ ...registerForm, mobileNumber: e.target.value })} />
    </div>
    <div className="form-field-pair">
      <label className="label">Password:</label>
      <input type="text" value={registerForm.password} onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })} />
    </div>
    <div className="form-field-pair">
      <label className="label">Confirm Password:</label>
      <input type="text" value={registerForm.confirmPassword} onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })} />
    </div>
    <div className="form-field-pair">
      <label className="label">Date of Birth:</label>
      <input type="text" value={registerForm.dob} onChange={(e) => setRegisterForm({ ...registerForm, dob: e.target.value })} />
    </div>
    <div className="form-field-pair">
      <label className="label">Gender:</label>
      <input type="text" value={registerForm.gender} onChange={(e) => setRegisterForm({ ...registerForm, gender: e.target.value })} />
    </div>
    <div className="form-field-pair">
      <label className="label">Country:</label>
      <input type="text" value={registerForm.country} onChange={(e) => setRegisterForm({ ...registerForm, country: e.target.value })} />
    </div>
    <div className="form-field-pair">
      <label className="label">State:</label>
      <input type="text" value={registerForm.state} onChange={(e) => setRegisterForm({ ...registerForm, state: e.target.value })} />
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

    {/* Other form fields */}
    
    {/* Button */}
    <button onClick={handleSignup} className="register-button">Register</button>
  </div>
)}

      </div>
      
    </div>

  );
};

export default Navbar;