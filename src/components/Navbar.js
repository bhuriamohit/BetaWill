import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import logo from '../logo.jpeg';
import Userinfo from './UserInfo/UserInfo';
import { Router, Routes, Route } from "react-router-dom"
import countries from './CountryNames.js';
import WebFont from 'webfontloader';
const Navbar = ({useremailtosend}) => {
  const countries = [
    { name: 'India', code: '+91' },
    // ...other countries
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Germany', code: '+49' },
    { name: 'Australia', code: '+61' },
    { name: 'France', code: '+33' },
    { name: 'Canada', code: '+1' },
    { name: 'Japan', code: '+81' },
    { name: 'China', code: '+86' },
    { name: 'South Korea', code: '+82' },
    { name: 'Spain', code: '+34' },
    { name: 'Italy', code: '+39' },
    { name: 'Netherlands', code: '+31' },
    { name: 'Sweden', code: '+46' },
    { name: 'Switzerland', code: '+41' },
    { name: 'Denmark', code: '+45' },
    { name: 'Norway', code: '+47' },
    { name: 'Finland', code: '+358' },
    { name: 'Belgium', code: '+32' },
    { name: 'Russia', code: '+7' },
    { name: 'India', code: '+91' },
    { name: 'Brazil', code: '+55' },
    { name: 'Mexico', code: '+52' },
    { name: 'Argentina', code: '+54' },
    { name: 'South Africa', code: '+27' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Singapore', code: '+65' },
    { name: 'Israel', code: '+972' },
    { name: 'Turkey', code: '+90' },
    { name: 'Poland', code: '+48' },
    { name: 'Austria', code: '+43' },
    { name: 'Ireland', code: '+353' },
    { name: 'Czech Republic', code: '+420' },
    { name: 'Portugal', code: '+351' },
    { name: 'Greece', code: '+30' },
    { name: 'Hungary', code: '+36' },
    { name: 'Chile', code: '+56' },
    { name: 'Colombia', code: '+57' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Thailand', code: '+66' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Egypt', code: '+20' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'Vietnam', code: '+84' },
    { name: 'Philippines', code: '+63' },
    { name: 'Ukraine', code: '+380' },
    { name: 'Romania', code: '+40' },
    { name: 'Bulgaria', code: '+359' },
    { name: 'Kenya', code: '+254' },
    { name: 'Nigeria', code: '+234' },
    { name: 'Pakistan', code: '+92' },
    { name: 'Iran', code: '+98' },
    { name: 'Malta', code: '+356' },
    { name: 'Croatia', code: '+385' },
    { name: 'Serbia', code: '+381' },
    { name: 'Slovakia', code: '+421' },
    { name: 'Slovenia', code: '+386' },
    { name: 'Estonia', code: '+372' },
    { name: 'Lithuania', code: '+370' },
    { name: 'Latvia', code: '+371' },
    { name: 'Cyprus', code: '+357' },
    { name: 'Luxembourg', code: '+352' },
    { name: 'Iceland', code: '+354' },
    { name: 'Georgia', code: '+995' },
    { name: 'Bahrain', code: '+973' },
    { name: 'Qatar', code: '+974' },
    { name: 'Oman', code: '+968' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Lebanon', code: '+961' },
    { name: 'Jordan', code: '+962' },
    { name: 'Morocco', code: '+212' },
    { name: 'Tunisia', code: '+216' },
    { name: 'Algeria', code: '+213' },
    { name: 'Peru', code: '+51' },
    { name: 'Ecuador', code: '+593' },
    { name: 'Costa Rica', code: '+506' },
    { name: 'Panama', code: '+507' },
    { name: 'Venezuela', code: '+58' },
    { name: 'Uruguay', code: '+598' },
    { name: 'Bolivia', code: '+591' },
    { name: 'Paraguay', code: '+595' },
    { name: 'Guatemala', code: '+502' },
    { name: 'Honduras', code: '+504' },
    { name: 'El Salvador', code: '+503' },
    { name: 'Nicaragua', code: '+505' },
    { name: 'Dominican Republic', code: '+1' },
    { name: 'Puerto Rico', code: '+1' },
    { name: 'Jamaica', code: '+1' },
    { name: 'Trinidad and Tobago', code: '+1' },
    { name: 'Barbados', code: '+1' },
    { name: 'Bahamas', code: '+1' },
    { name: 'Guyana', code: '+592' },
    { name: 'Suriname', code: '+597' },
    { name: 'Fiji', code: '+679' },
    { name: 'Tanzania', code: '+255' },
    { name: 'Ghana', code: '+233' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Uganda', code: '+256' },
    { name: 'Cameroon', code: '+237' },
    { name: 'Mauritius', code: '+230' },
    { name: 'Zimbabwe', code: '+263' },
    { name: 'Botswana', code: '+267' },
    { name: 'Namibia', code: '+264' },
    { name: 'Malawi', code: '+265' },
    { name: 'Zambia', code: '+260' },
    { name: 'Mozambique', code: '+258' },
    { name: 'Angola', code: '+244' },
    { name: 'Madagascar', code: '+261' },
    { name: 'Myanmar', code: '+95' },
    { name: 'Laos', code: '+856' },
    { name: 'Cambodia', code: '+855' },
  ];
  const [selectedCountry, setSelectedCountry] = useState('');

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [username, setusername] = useState(null)
  const [useremail, setuseremail] = useState(null)


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setRegisterForm({ ...registerForm, mobileNumber: e.target.value });
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
    useremailtosend(storedemail)
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
    useremailtosend(email)
    let formData = {
      email: email,
      password: password
    }
    console.log(formData);
    fetch('https://betawill-com.onrender.com/students/login', {
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
            if(fres.superadmin==true)
            {
              navigate('/superadmin')
              return
            }
            if (fres.presence == true && fres.password == true) {
              console.log(fres)
              setuseremail(fres.email)
              setusername(fres.username);
              useremailtosend(fres.email)
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
    mobileNumber: 'Notfilled',
    dob: 'Notfilled',
    password: '',
    confirmPassword: '',
    gender: 'Notfilled',
    country: 'Notfilled',
    state: 'Notfilled',
    pincode: 'Notfilled',
    course: 'Notfilled'
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

    if(registerForm.email=='' || registerForm.fullName==''  )
    {
      alert("Please fill all the fields")
      return
    }
    if(registerForm.password=='' || registerForm.confirmPassword=='' )
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
        mobNo:selectedCountry+registerForm.mobileNumber
      }

      fetch('https://betawill-com.onrender.com/verifyotp', {
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

      fetch('https://betawill-com.onrender.com/students/signup', {
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
          <div>
            

          </div>
          <div className="mobile-menu-buttons">
          </div>
          {/* Mobile menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>

         {/* { username == null ?
              <div className="autho-buttons">
                <button className="register-button" onClick={togglePopup}>Login</button>
                <button className="register-button" onClick={signupTogglePopup}>Register</button>
              </div> :
              <div className='buttonu-container'>
                <button class="buttonu" onClick={userinfo}>{username}</button>
                <button class="logoutbuttonu" onClick={handleLogout}>Logout</button>
              </div>} */
              
              
              }

            <button className="menu-button" onClick={toggleMobileMenu}>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
            </button>
            {isMobileMenuOpen && (

              <div className="mobile-menu-content">
                <button className="closeButton" onClick={toggleMobileMenu}>X</button>
                <ul className="nav-links">
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection('home') }} >Home</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection('courses') }} >Courses</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('/studymaterial') }}>Study Material</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('/testtopics') }}>Test Series</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
               
              </div>
            )}
          </div>

          {/* Desktop menu */}
          <ul className="nav-links">
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection('home') }} >HOME</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToSection('courses') }}>COURSES</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/studymaterial') }}>STUDY MATERIAL</a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/testtopics') }}>Test Series</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          {
            username == null  ?
              <div className="strua">
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
            <button className='closeButton' onClick={togglePopup}>X</button> 
            <div >
            
               <label className='label'>Email or phone number:</label>
              <input type="text" value={email} onChange={handleEmailChange} style={{ width: '300px' }} />
            </div>
            <div>
              <label className='label'>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange}  style={{ width: '300px' }} required />
            </div>
            <button onClick={handleLogin} className='submit'>Login</button>
            <button onClick={()=>navigate('/passwordreset')}   className='forgot'>Forgot Password</button>
          </div>

        )}
        {issignupPopupOpen && (
          <div className="popup2">
            <button className='closeButton' onClick={togglePopup}>X</button>
            {/* Form fields */}
            <div >
              <div >
                <label className="label">Full Name:</label>
                <input type="text" value={registerForm.fullName} onChange={(e) => setRegisterForm({ ...registerForm, fullName: e.target.value })}  style={{ width: '300px' }} required/>
              </div>
              <div >
                <label className="label">Email:</label>
                <input type="email" value={registerForm.email} onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}  style={{ width: '300px' }} required/>
              </div>
              {/* <div className="form-field-pair">
  <label className="label">Mobile Number:</label>
  <div className="mobile-number-container">
    <select
      className="country-dropdown"
      value={selectedCountry}
      onChange={handleCountryChange}
      required
    >
      <option value="">Select a country</option>
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name} ({country.code})
        </option>
      ))}
    </select>
    <input
      type="tel"
      className="mobile-number-input"
      value={registerForm.mobileNumber}
      onChange={handleMobileNumberChange}
      required
    />
  </div>
</div> */}

   
  <label className="label">Password:</label>
  <input
    type="password"
    value={registerForm.password}
    onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
    style={{ width: '300px' }}
    required
  />


  <label className="label">Confirm Password:</label>
  <input
    type="password"
    value={registerForm.confirmPassword}
    onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
    style={{ width: '300px' }}
    required
  />

{/* 
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
    {countries.map((country) => (
      <option key={country.name} value={country.name} />
    ))}
  </datalist>
</div> */}

              {/* <div className="form-field-pair">
      <label className="label">State:</label>
      <input
        type="text"
        value={registerForm.state}
        onChange={(e) => setRegisterForm({ ...registerForm, state:e.target.value })}
        required
    
      />
    </div> */}
              {/* <div className="form-field-pair">
                <label className="label">Pincode:</label>
                <input type="text" value={registerForm.pincode} onChange={(e) => setRegisterForm({ ...registerForm, pincode: e.target.value })} />
              </div>
              <div className="form-field-pair">
                <label className="label">Course:</label>
                <input type="text" value={registerForm.course} onChange={(e) => setRegisterForm({ ...registerForm, course: e.target.value })} />
              </div> */}
            </div>

            {!otpSent ? (
              <button onClick={handleSignup} className="register-button">
                Send OTP
              </button>
            ) : (
              <>
               
                  <label className="label">OTP:</label>
                  <input type="text" value={registerForm.otp} onChange={(e) => setotpfilled(e.target.value)}  style={{ width: '300px' }}/>
             
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