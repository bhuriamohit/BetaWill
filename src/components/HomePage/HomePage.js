import React from 'react'
import "../css/HomePage.css"
import "../css/Responsive.css"
import laptopVideo from "../images/laptop video.mp4"
import laptop from "../images/laptop.png"
import laptopIcon from "../images/laptop icon.png"
import achivementIcone from "../images/achivement icon.png"
import studentIcon from "../images/student icon.png"
import faqIcon from "../images/faq icon.png"
import tick from "../images/tick.png"
import editIcon from "../images/edit icon.png"
import teacherIcon from "../images/teacher icon.png"
import microsoft from "../images/microsoft logo.svg"
import google from "../images/google logo.svg"
import achivementColoredIcon from "../images/achivement colored icon.png"
import inforGif from "../images/infogif.gif"
import faqGif from "../images/faqgif.gif"
import greaterThan from "../images/greaterthan.png"
import mail from "../images/mail.png"
import twitter from "../images/twitter.png"
import whatsapp from "../images/whatsapp.png"
import phone from "../images/phone.png"
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.png"
import testimonial1 from "../images/testimonial1.jpeg"
import testimonial2 from "../images/testimonial2.jpeg"
import testimonial3 from "../images/testimonial3.jpeg"
import testimonial4 from "../images/testimonial4.jpeg"
import logo from "../images/logo.png"
import whyGif from "../images/whygif.gif"
import { useNavigate } from 'react-router-dom';
import { Router, Routes, Route } from "react-router-dom"
import WebFont from 'webfontloader';
import contactImg from "../images/councellingImg.png"
import { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { Element } from 'react-scroll';
import hamburgerMenu from "../images/hamburger-menu.png"
import close from "../images/close.png"

export default function HomePage({ useremailtosend }) {
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setusername] = useState(null)
    const [useremail, setuseremail] = useState('')
    const [isPopupOpen, setPopupOpen] = useState(false);


  

    
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
                        if (fres.superadmin == true) {
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
        // Update the state
        setEmail(null)
        setPassword(null)
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

        if (registerForm.email == '' || registerForm.fullName == '') {
            alert("Please fill all the fields")
            return
        }
        if (registerForm.password == '' || registerForm.confirmPassword == '') {
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
                mobNo: selectedCountry + registerForm.mobileNumber
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

            if (otp != otpfilled) {
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



    const watchlecture = (topic) => {
        navigate('/lecturepage', { state: { topic: topic } })
    }

    const gotocoursedescription = (title) => {
        navigate('/coursedescription',
            {
                state: {
                    coursedescription: title,
                    useremail: useremail
                }
            })
    }

    const closeMenu = () => {
        document.getElementById("responsiveMenu").style.right = "-90vw";
    }
    const openMenu = () => {
        document.getElementById("responsiveMenu").style.right = "0vw";
    }
    return (

        <>
    <div className="responsive-menu" id='responsiveMenu'>
                <h1>BETA<span>WILL</span></h1>
                <a href="#home-link">Home</a>
                <a href="#about-link">About</a>
                <a href="#course-link">Courses</a>
                <a href="#course-link">Test Series</a>
                <a href="#faq-link">FAQ's</a>
                <img src={close} alt="" onClick={closeMenu}/>
        </div>

            <nav id="navbar">
                <div className="nav-left">
                    <h3>BETA<span>WILL</span></h3>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><a href="#home-link">Home</a></li>
                        <li><a href="#about-link">About</a></li>
                        <li><a href="#course-link">Courses</a></li>
                        <li><a href="#test">Test Series</a></li>
                        <li><a href="#faq-link">FAQ's</a></li>
                    </ul>
                   
                    {username ?
                        <a href="#" className="btn-filled" onClick={userinfo}><p>{username}</p></a>
                        :
                        <a href="#" className="btn-filled" onClick={togglePopup}><p>Sign In</p></a>
                    }
                    {username ?
                        <a href="#" className="btn-filled" onClick={handleLogout}><p>Log Out</p></a>
                        :
                        <a href="#" className="btn-outlined" onClick={signupTogglePopup}><p>Sign Up</p></a>
                    }
                     <img src={hamburgerMenu} alt="" onClick={openMenu}/>
                    <div>
                        {isPopupOpen && (
                            <div className="popup2">
                                <button className='closeButton' onClick={togglePopup}>X</button>
                                <div >

                                    <label className='label'>Email or phone number:</label>
                                    <input type="text" value={email} onChange={handleEmailChange} style={{ width: '300px' }} />
                                </div>
                                <div>
                                    <label className='label'>Password:</label>
                                    <input type="password" value={password} onChange={handlePasswordChange} style={{ width: '300px' }} required />
                                </div>
                                <button onClick={handleLogin} className='submit'>Login</button>
                                <button onClick={() => navigate('/passwordreset')} className='forgot'>Forgot Password</button>
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
            </nav>
            
            <div className="landing-section" id='home-link'>
                <div className="landing-upper-part">
                    <div className="landing-upper-part-text">
                        <p>Welcome To</p>
                        <h1 className='bigbetawill'>
                            Beta<span>Will</span>
                        </h1>
                        <p>Unlock your potential and achieve your dreams with Betawill , Your Gateway To Success!</p>
                        <p>At betawill , we understand the importance of entrance exam in shaping your future, that's why we have designed our programs to ensure that you are well prepared and cofident to take on the challenges of these exam our experienced faculty member provides personalized coaching and online lectures ensure that you have access to the latest resources</p>
                        <a href="#course-link" className="btn-filled"><p>View Courses</p></a>
                    </div>
                    <div className="landing-upper-part-image">
                        <div className="video-part">
                            <video src={laptopVideo} loop autoPlay muted />
                        </div>
                        <img src={laptop} alt="" />
                    </div>
                </div>
                
                <div className="landing-lower-part">
                    <div className="landing-lower-part-element">
                        <img src={laptopIcon} alt="" />
                        <p>Overview</p>
                    </div>
                    <div className="landing-lower-part-element">
                        <img src={achivementIcone} alt="" />
                        <p>Courses</p>
                    </div>
                    <div className="landing-lower-part-element">
                        <img src={studentIcon} alt="" />
                        <p>Instructor</p>
                    </div>
                    <div className="landing-lower-part-element">
                        <img src={faqIcon} alt="" />
                        <p>FAQs</p>
                    </div>
                </div>
            </div>

            <div className="offer-section">
                <h4>Do not miss!</h4>
                <h1>We are just to start our new batch!!</h1>
                <h4>HURRY UP!!</h4>
                <a href="https://wa.me/9310035620" className="btn-black">I Want This Offer!</a>
            </div>

            <div className="overview-parent">

                <div className="overview-section">
                    <div className="overview-section-first-column">
                        <h3>Why Us?</h3>
                        <div className="overview-section-first-column-points">
                            <img src={tick} alt="" />
                            <p>Results Driven Approach</p>
                        </div>
                        <div className="overview-section-first-column-points">
                            <img src={tick} alt="" />
                            <p>Live/Scheduled Lectures</p>
                        </div>
                        <div className="overview-section-first-column-points">
                            <img src={tick} alt="" />
                            <p>Live Doubt Solving Sessions</p>
                        </div>
                        <div className="overview-section-first-column-points">
                            <img src={tick} alt="" />
                            <p>Structured Teaching.</p>
                        </div>
                        <div className="overview-section-first-column-points">
                            <img src={tick} alt="" />
                            <p>Study Material</p>
                        </div>
                    </div>

                    <div className="overview-section-second-column">
                        <img src={whyGif} alt="" />
                    </div>
                </div>
            </div>
      

            <div className="our-service-section">
        <h1 style={{ color: 'black', fontWeight: '200', fontsize:'1.3 rem',}}> More Information</h1>
        <div className="service-section-bottom">
            <div className="service-card" id="service-card-1">
                {/* <img src={teacherIcon} alt="" /> */}
                <h4>Lectures</h4>
                <p>400+ Video Lectures that cover all important DSA for internships/placements</p>
                <a href='#' className="btn-filled"><p>More Details</p></a>
                <a href='#' className="btn-filled"><p>Download Brochure</p></a>
            </div>
            <div className="service-card" id="service-card-2">
                 {/* <img src={teacherIcon} alt="" /> */}
                <h4>Lectures</h4>
                <p>400+ Video Lectures that cover all important DSA for internships/placements</p>
                <a href='#' className="btn-filled"><p>More Details</p></a>
                <a href='#' className="btn-filled"><p>Download Brochure</p></a>
            </div>
            <div className="service-card" id="service-card-3">
                 {/* <img src={teacherIcon} alt="" /> */}
                <h4>Lectures</h4>
                <p>400+ Video Lectures that cover all important DSA for internships/placements</p>
                <a href='#' className="btn-filled"><p>More Details</p></a>
                <a href='#' className="btn-filled"><p>Download Brochure</p></a>
            </div>
            <div className="service-card" id="service-card-4">
                 {/* <img src={teacherIcon} alt="" /> */}
                <h4>Lectures</h4>
                <p>400+ Video Lectures that cover all important DSA for internships/placements</p>
                <a href='#' className="btn-filled"><p>More Details</p></a>
                <a href='#' className="btn-filled"><p>Download Brochure</p></a>
            </div>
            <div className="service-card" id="service-card-5">
                 {/* <img src={teacherIcon} alt="" /> */}
                <h4>Lectures</h4>
                <p>400+ Video Lectures that cover all important DSA for internships/placements</p>
                <a href='#' className="btn-filled"><p>More Details</p></a>
                <a href='#' className="btn-filled"><p>Download Brochure</p></a>
            </div>
            <div className="service-card" id="service-card-6">
                 {/* <img src={teacherIcon} alt="" /> */}
                <h4>Lectures</h4>
                <p>400+ Video Lectures that cover all important DSA for internships/placements</p>
                <a href='#' className="btn-filled"><p>More Details</p></a>
                <a href='#' className="btn-filled"><p>Download Brochure</p></a>
            </div>
            <div className="service-card" id="service-card-7">
                 {/* <img src={teacherIcon} alt="" /> */}
                <h4>Lectures</h4>
                <p>400+ Video Lectures that cover all important DSA for internships/placements</p>
                <a href='#' className="btn-filled"><p>More Details</p></a>
                <a href='#' className="btn-filled"><p>Download Brochure</p></a>
            </div>
            <div className="service-card" id="service-card-8">
                 {/* <img src={teacherIcon} alt="" /> */}
                <h4>Lectures</h4>
                <p>400+ Video Lectures that cover all important DSA for internships/placements</p>
                <a href='#' className="btn-filled"><p>More Details</p></a>
                <a href='#' className="btn-filled"><p>Download Brochure</p></a>
            </div>
        </div>
    </div>
            <div className="whats-new-section" id='about-link'>
                <div className="whats-new-section-overlay">
                    <div className="blue-circle"></div>
                    <div className="orange-circle"></div>
                </div>
                <div className="whats-new-section-left">
                    <h1>Who We Are?</h1>
                 
                    <p>We, at Betawill have established through scientific teaching and assessment techniques to assist students to discover their potential and grasp the topic</p>
                    <p>Betawill provides sutdents with the advanced study material which help them outshine their competitros. Betawill is not only the most experiences institute among its competitors but it also boasts a team of leading educationsists and a panel of experiences faculty to guide the students.</p>
                    <a href="#" className="btn-filled"><p>Know More</p></a>
                </div>
                <div className="whats-new-section-right">
                    <div className="whats-new-section-right-card-col1">
                        <div className="card-col1-card col-card">
                            <h3>300+</h3>
                            <p>Successfull Students</p>
                        </div>
                        <div className="card-col1-card col-card">
                            <h3>15+</h3>
                            <p>Life Time Awards</p>
                        </div>
                    </div>
                    <div className="whats-new-section-right-card-col2">
                        <div className="card-col2-card col-card">
                            <h3>400+</h3>
                            <p>Students are currently joined with us</p>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className="our-course-section" id='course-link'>
            <h1 style={{ color: 'black', fontWeight: '900', fontsize:'3 rem',}}>Our Courses</h1>

            <p>We, At Betawill offers you the best course for your bright features. Choose the best course among the following that is suitable for you</p>
        <div className="course-section-bottom">
            <div className="course-card">
                <img src={microsoft} alt="" />
                <h5>EMRS Computers Science PGT</h5>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Daily Practice Question</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Live Lectures</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Study Material</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Subject Experts</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Recorded Videos</p>
                </div>
                <h5>Rs. 5999/-</h5>
                <a href="#" className="btn-filled"><p>Enroll Now</p></a>
            </div>
            <div className="course-card">
                <img src={google} alt="" />
                <h5>PATENT OFFICER</h5>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Daily Practice Question</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Live Lectures</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Study Material</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Subject Experts</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Recorded Videos</p>
                </div>
                <h5>Rs. 5999/-</h5>
                <a href="#" className="btn-filled"><p>Enroll Now</p></a>
            </div>
            <div className="course-card">
                <img src={microsoft} alt="" />
                <h5>COMPUTER SCIENCE PGT</h5>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Daily Practice Question</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Live Lectures</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Study Material</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Subject Experts</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Recorded Videos</p>
                </div>
                <h5>Rs. 5999/-</h5>
                <a href="#" className="btn-filled"><p>Enroll Now</p></a>
            </div>
            <div className="course-card">
                <img src={google} alt="" />
                <h5>HARYANA COMPUTER SCIENCE PGT</h5>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Daily Practice Question</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Live Lectures</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Study Material</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Subject Experts</p>
                </div>
                <div className="course-feature">
                    <img src={tick} alt="" />
                    <p>Recorded Videos</p>
                </div>
                <h5>Rs. 5999/-</h5>
                <a href="#" className="btn-filled"><p>Enroll Now</p></a>
            </div>
        </div>
            </div>

            <div className="shradha-dii-section">
                <h1 className='bigbetawill'>Meet Experts</h1>
                <div className="teacher-flex-section">
                    <div className="shradha-dii-upper-section">
                        <div className="img-portion" id="teacher-image-1"></div>
                        <h4>Computer Science</h4>
                        <h2>Faiem Malik</h2>
                    </div>
                    <div className="shradha-dii-upper-section">
                        <div className="img-portion" id="teacher-image-2"></div>
                        <h4>Reasoning & Maths</h4>
                        <h2>Ashu Malik</h2>
                    </div>
                    <div className="shradha-dii-upper-section">
                        <div className="img-portion" id="teacher-image-3"></div>
                        <h4>English</h4>
                        <h2>Vishal Kumar</h2>
                    </div>
                    <div className="shradha-dii-upper-section">
                        <div className="img-portion" id="teacher-image-4"></div>
                        <h4>Computer Science</h4>
                        <h2>Kartik Yadav</h2>
                    </div>
                </div>
            </div>

            <div className="certificate-section">
                <div className="certificate-left-section">
                    <h2>More Information</h2>
                    <div className="certificate-text-point">
                        <img src={achivementColoredIcon} alt="" />
                        <div className="certificate-text">
                            <h4>Start today</h4>
                            <p>- You are just 3 months away from cracking your dream company.</p>
                        </div>
                    </div>
                    <div className="certificate-text-point">
                        <img src={achivementColoredIcon} alt="" />
                        <div className="certificate-text">
                            <h4>Believe in yourself </h4>
                            <p>- Coding is simple. You just need the right guidance. Follow us and in just 3 months you will be Internship/Placement ready for Tech companies. </p>
                        </div>
                    </div>
                    <div className="certificate-text-point">
                        <img src={achivementColoredIcon} alt="" />
                        <div className="certificate-text">
                            <h4>Continuous Growth </h4>
                            <p>- Grow yourself daily.  </p>
                        </div>
                    </div>

                </div>
                <div className="certificate-right-section">
                    <img src={inforGif} alt="" />
                </div>
            </div>

            <div className='testimonial-section'>
                <div className="testimonial-section-top">
                    <h1 className='bigbetawill'><span>Our</span> Testimonial</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint porro fugit nisi laudantium facere ut?</p>
                </div>
                <div className="testimonial-section-bottom">
                    <div className="testimonial-card">
                        <img src={testimonial4} alt="" />
                        <div className="name-box">
                            <h5>Prateek Singh</h5>
                            <p>Student</p>
                        </div>
                        <div className="feedback">
                            <p>Betawill has reallly been a launch pad for my ambitions. It took care of all examinations that are important and provided adequate guidelines. The faculy was kind enough to clear all the doubts and make the concepts crystal clear.</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <img src={testimonial1} alt="" />
                        <div className="name-box">
                            <h5>Stuti Sharma</h5>
                            <p>Student</p>
                        </div>
                        <div className="feedback">
                            <p>Apart from the academics, teachers at Betawill have taught me how to relish the subjects. I hope I keep getting teachers like them in future. Now , I believe I am capable to do any work I wish to because of the values of dedication, hardwork and discipline that I have learnt from the teachers.</p>
                        </div>
                    </div>


                    <div className="testimonial-card">
                        <img src={testimonial2} alt="" />
                        <div className="name-box">
                            <h5>Vikas Sharma</h5>
                            <p>Student</p>
                        </div>
                        <div className="feedback">
                            <p>All the teachers at Betawill put in every possible effort. They made sure my basics were crystal clear, and patiently cleared even the silliest of doubts. they gave me valuable tactical advice regarding which topic to tstudy when, from where, and gave me only the best questions to do so that I didn;t waste my time doing basic questions repetitively</p>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <img src={testimonial3} alt="" />
                        <div className="name-box">
                            <h5>Nitin Kumar</h5>
                            <p>Student</p>
                        </div>
                        <div className="feedback">
                            <p>The entire favulty have such a stronghold on their respective subjects. Akshay Sir, a man of great knowledge, made us realize our true potential and boosted our confidence, each time he interacted with us. I would recommended all dedicated aspirants to plan out this road to success with Betawill</p>
                        </div>
                    </div>
                </div>
                {/* <p className='slide-to-scroll'>Slide To Scroll</p> */}
            </div>
       

            <div className="offer-section" >
                <h4>Get Free Counselling!</h4>
                <h1>Want to start your career in coding ?</h1>
                <h4>Book a free council session</h4>
                <a href="https://wa.me/9310035620" className="btn-black">Book Now</a>
            </div>


         
            <Element name="free-form-section" className="free-form-section" id="free-counselling">
           
        <div className="free-form-section-left">
            <h3>Get Free Counselling</h3>
            <form action="#" className="free-form">
            <h4>Book Free Counselling</h4>
            <div className="input-box">
                    <p>Your Name</p>
                    <input type="text" className="input-field"/>
                </div>
                <div className="input-box">
                    <p>Your Email</p>
                    <input type="email" className="input-field"/>
                </div>
                <div className="input-box">
                    <p>Your Phone number</p>
                    <input type="number" className="input-field"/>
                </div>
                <div className="input-box">
                    <p>Select Course</p>
                    <select name="select-course" className="input-field">
                        <option value="emrs computer science pgt">EMRS Computer Science PGT</option>
                        <option value="patent officer">Patent Officer</option>
                        <option value="computer science pgt">Computer Science PGT</option>
                        <option value="haryana science pgt">Haryana Science PGT</option>
                    </select>
                </div>
                <input type="submit" value="Book Now" className="btn-filled"/>
            </form>
        </div>
        <div className="free-form-section-right">
            <img src={contactImg} alt="" className="gif"/>
        </div>
     

      </Element>





            <div className="faq-section" id='faq-link'>
                <div className="faq-section-left">
                    <h1 className='bigbetawill'>FAQ's</h1>
                    <details className="faq-box">
                        <summary>Which is the best online platform for the teaching exam ?</summary>
                        <p className="faq-answer">According to user opinions and the features provides, Betawill is considered one of the best teaching exam online coaching</p>
                    </details>
                    <details className="faq-box">
                        <summary>How to crack teaching exam on the first attempt ?</summary>
                        <p className="faq-answer">It is important to create an effective study plan. Additionally, it is crucial to familiarize yourself with the teaching exam pattern and syllabus</p>
                    </details>
                    <details className="faq-box">
                        <summary>What time will the course be over?</summary>
                        <p className="faq-answer">Till your exam</p>
                    </details>
                    <details className="faq-box">
                        <summary>Will the classes be live or recorded?</summary>
                        <p className="faq-answer">Complete live classes in each subject (Student may view a recording of a missed live session at any time)</p>
                    </details>
                    <details className="faq-box">
                        <summary>How should I pay?</summary>
                        <p className="faq-answer">The betawill homepage has a options enroll now.</p>
                    </details>
                </div>
                <div className="faq-section-right">
                    <img src={faqGif} alt="" />
                </div>
            </div>

            <div className="fixed-bar">
             
     <div className="social-links">
                    <a href="https://twitter.com/betawill07"><img src={phone} alt="" /></a>
                    <a href="https://wa.me/9310035620"><img src={whatsapp} alt="" /></a>
                    <a href="#free-counselling" className="btn-chat"><p>JOIN NOW!</p></a>
                </div>
    
    </div>
            <div className="connect-section">
                <h1>Connect <span>With Us</span></h1>
                <p>Want to know more about us , Connect will us at our social media platform and lets open the door of success for your bright future</p>
                <div className="social-links">
                    <a href="https://twitter.com/betawill07"><img src={twitter} alt="" /></a>
                    <a href="https://wa.me/9310035620"><img src={whatsapp} alt="" /></a>
                    <a href="https://instagram.com/beta_will"><img src={instagram} alt="" /></a>
                    <a href="https://youtube.com/@gatenaps4u103"><img src={youtube} alt="" /></a>
                </div>
            </div>

            <footer id="footer">
                <div className="footer-upper-section">
                    <div className="footer-upper-section-column" id="footer-column1">
                        <img src={logo} alt="" />
                        <p>We are India's Most Loved Coding Community. Join us! </p>
                    </div>
                    <div className="footer-upper-section-column" id="footer-column2">
                        <h3>HelpFull Links</h3>
                        <div className="helpful-links-points">
                            <div className="topics-covered-points">
                                <img src={greaterThan} alt="" />
                                <a href='#home-link'>Home</a>
                            </div>
                            <div className="topics-covered-points">
                                <img src={greaterThan} alt="" />
                                <a href='#about-link'>About</a>
                            </div>
                            <div className="topics-covered-points">
                                <img src={greaterThan} alt="" />
                                <a href='#course-link'>Courses</a>
                            </div>
                            <div className="topics-covered-points">
                                <img src={greaterThan} alt="" />
                                <a href='#faq-link'>FAQs</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-upper-section-column" id="footer-column3">
                        <h3>Get In Touch</h3>
                        <div className="topics-covered-points">
                            <img src={mail} alt="" />
                            <a href="mailto:betawillonline@gmail.com">Betawillonline@gmail.com</a>
                        </div>
                    </div>
                    <div className="footer-upper-section-column" id="footer-column4">
                        <h3>Connect With Us</h3>
                        <ul>
                            <li><a href='https://twitter.com/betawill07'>TWITTER</a></li>
                            <li><a href='https://youtube.com/@gatenaps4u103'>YOUTUBE</a></li>
                            <li><a href='https://instagram.com/beta_will'>INSTAGRAM</a></li>
                            <li><a href="https://wa.me/9310035620">WhatsApp</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-lower-section">
                    <p>© BetaWill. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}
