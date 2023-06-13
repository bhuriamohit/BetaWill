import React, { useState ,useEffect} from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpeg';

const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [username, setusername] = useState(null)
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
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('username');
    console.log(storedUsername)
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
              setusername(fres.username);
              localStorage.setItem('username', fres.username);
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
            <button className="login-button" >
              Login
            </button>
            <button className="register-button" >
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
                <button className="register-button" >Register</button>
              </div> :
              <div >
                <h2>{username}</h2>
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
          <div className="popup">
            <div className="popup-content">
              <label>Email:</label>
              <input type="text" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button onClick={handleLogin} className='login'>Login</button>
          </div>
        )}
      </div>
    </div>

  );
};

export default Navbar;