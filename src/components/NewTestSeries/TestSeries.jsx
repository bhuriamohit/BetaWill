import React from 'react'
import "./TestSeries.css"
import hamburgerMenu from "../images/hamburger-menu.png"
import close from "../images/close.png"
import whyTestSeries from "./test-series-images/why-test-series.png"
import keyFeatures from "./test-series-images/key features.png"
import keyFeaturesPurple from "./test-series-images/key-feature-purple.png"
import quiz from "./test-series-images/quiz.jpg"
import test from "./test-series-images/test.jpg"
import journey1 from "./test-series-images/journey1.jpg"
import journey2 from "./test-series-images/journey2.jpg"
import journey3 from "./test-series-images/journey3.jpg"
import journey4 from "./test-series-images/journey4.png"
import testimonial1 from "../images/testimonial1.jpeg"
import testimonial2 from "../images/testimonial2.jpeg"
import testimonial3 from "../images/testimonial3.jpeg"
import testimonial4 from "../images/testimonial4.jpeg"
import contactImg from "../images/councellingImg.png"
import whyTest from "./test-series-gif/why-test.gif"
import rocket from "./test-series-images/rocket.webp"
import testSeriesForm from "./test-series-images/test-series-form.png"
import greaterThan from "../images/greaterthan.png"
import mail from "../images/mail.png"
import logo from "../images/logo.png"
import { useNavigate } from 'react-router-dom'
export default function TestSeries() {

    const navigate=useNavigate()
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
                <li><a href="#course-link">Test Series</a></li>
                <li><a href="#faq-link">FAQ's</a></li>
            </ul>
            <a href="#" className="btn-filled"><p>Sign In</p></a>
            <a href="#" className="btn-outlined"><p>Sign Up</p></a>
            <img src={hamburgerMenu} alt="" onClick={openMenu}/>
        </div>
    </nav>

    <div className="test-series-landing-section">
        <h1>Test Series</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veniam delectus. Odit aut repellendus eveniet suscipit eos nihil dolore magnam eius doloribus quisquam, quia velit quo nemo perspiciatis reprehenderit quibusdam.</p>
        <h3>Practice More | Score More</h3>
        <button className="purple-btn" onClick={()=>navigate("/testtopics")}>Explore</button>
    </div>

    <div className="why-test-series">
        <div className="why-test-series-left">
            <h2>Why <span> Test Series </span>Is Important ?</h2>
            <p>Test series really help you to imporve your accuracy. It can help you significiantly to attain good marks and to revise the syllabus. It prepare you mentally for an exam like environment. Test series helps a lot in managing your given time, you can check your question solving speed and work accordingly on your weakness. This helps to strategize well. It is like a training to interconnect different aspects.</p>
        </div>
        <div className="why-test-series-right">
            <img src={whyTest} alt="" />
        </div>
    </div>

    <div className="key-features">
        <div className="key-features-left">
            <img src={keyFeaturesPurple} alt="" />
        </div>
        <div className="key-features-right">
            <h2>Key<span> Features </span>!</h2>
            <div className="key-features-grid">
                <li>Better Time Management</li>
                <li>Progress Tracking</li>
                <li>Flexibility and convenience</li>
                <li>Easiest way to revise the syllabus</li>
                <li>Feel or real examination</li>
                <li>Improve Speed</li>
                <li>Boost Confidence</li>
                <li>Time assessments</li>
                <li>Accurace</li>
                <li>Varied difficulty levels</li>
                <li>Comprehensive Coverage</li>
                <li>Quality Questions</li>
                <li>Topic Tests</li>
            </div>
        </div>
    </div>

    <div className="our-test-series">
        <h2>Our <span> Test </span>Series</h2>
        <div className="our-test-series-bottom">
            <div className="test-card">
                <h3>QUIZEES</h3>
                <p>Chapter Wise</p>
                <h4>Rs. 599/-</h4>
                <img src={quiz} alt="" />
                <button className="purple-btn">Enroll Now</button>
            </div>
            <div className="test-card">
                <h3>FULL LENGTH</h3>
                <p>Mock Test</p>
                <h4>Rs. 499/-</h4>
                <img src={test} alt="" />
                <button className="purple-btn">Enroll Now</button>
            </div>
        </div>
    </div>

    <div className="talk-to-mentor">
        <h2>Don't Know Hot To Start Your Prepration?</h2>
        <h3>Talk To A Mentor</h3>
        <button className="purple-btn">
            Contact Now
        </button>
    </div>

    <div className="beta-will-journey">
        <h2><span>BetaWill </span>Journey So Far</h2>
        <div className="beta-will-journey-bottom">
            <div className="journey-card">
                <img src={journey1} alt="" />
                <h3>15 Selection In Top 100</h3>
            </div>
            <div className="journey-card">
                <img src={journey2} alt="" />
                <h3>50000+ Students Mentored</h3>
            </div>
            <div className="journey-card">
                <img src={journey3} alt="" />
                <h3>105+ selection last year</h3>
            </div>
            <div className="journey-card">
                <img src={journey4} alt="" />
                <h3>course rating 4.7🌟</h3>
            </div>
        </div>
    </div>

    <div className="rocket-section">
        <img src={rocket} alt="" />
    </div>

    <div className='testimonial-section'>
        <div className="testimonial-section-top">
            <h1><span>Our</span> Students Love us</h1>
            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint porro fugit nisi laudantium facere ut?</p> */}
        </div>
        <div className="testimonial-section-bottom">
        <div className="testimonial-card">
            <img src={testimonial4} alt="" />
                <div className="name-box">
                    <h5>Vikas Kumar</h5>
                </div>
                <div className="feedback">
                    <p>By this test series I had gained confidence before going to the main examination, and this confidence is must before going to this type of examinations. Thank You so much for helping in this journey.</p>
                </div>
            </div>
            <div className="testimonial-card">
                <img src={testimonial1} alt="" />
                <div className="name-box">
                    <h5>Amit Singht</h5>
                </div>
                <div className="feedback">
                    <p>The level of these test series is as high as you will see in real exa. You can cmpare your score with the thousands of other competitors and can decide your strategy accordingly.</p>
                </div>
            </div>


            <div className="testimonial-card">
                <img src={testimonial2} alt="" />
                <div className="name-box">
                    <h5>Ankit Rathi</h5>
                </div>
                <div className="feedback">
                    <p>This test series provides detailed solutions of all the questions which you can refer after completing the test.</p>
                </div>
            </div>

            <div className="testimonial-card">
                <img src={testimonial3} alt="" />
                <div className="name-box">
                    <h5>Sudhakar Tiwari</h5>
                </div>
                <div className="feedback">
                    <p>The content is good. The loading time is negligible and the webpage in kb is very low which really helps it to load wuich and without any error.</p>
                </div>
            </div>

            <div className="testimonial-card">
            <img src={testimonial4} alt="" />
                <div className="name-box">
                    <h5>Koushal Nath</h5>
                </div>
                <div className="feedback">
                    <p>The best ever platform for the candidates and beginners. You can find best and special content for the choosen topic. It has very good description for the topic </p>
                </div>
            </div>
            <div className="testimonial-card">
                <img src={testimonial1} alt="" />
                <div className="name-box">
                    <h5>Umang Bisht</h5>
                </div>
                <div className="feedback">
                    <p>I am able to access the chapter based tests multiple times. I am able to see my accuracy in particulat subject. Thank you for helping me in my exam.</p>
                </div>
            </div>


            <div className="testimonial-card">
                <img src={testimonial2} alt="" />
                <div className="name-box">
                    <h5>Ashwani Chaudhary</h5>
                </div>
                <div className="feedback">
                    <p>Result analysis is very detailed. The performance analysis is shown chapter wise. it helped me to focus on my weak chapter.</p>
                </div>
            </div>

            <div className="testimonial-card">
                <img src={testimonial3} alt="" />
                <div className="name-box">
                    <h5>Muskan Kapoor</h5>
                </div>
                <div className="feedback">
                    <p>Every time I attempt a test I feet the imporvement in myself. It helps me test my knowledge and then analyze the results to improve myself</p>
                </div>
            </div>
        </div>
            <p className='slide-to-scroll'>Slide To Scroll</p>
    </div>


    <div className="free-form-section test-series-form">
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
            <img src={testSeriesForm} alt="" className="gif"/>
        </div>
      </div>


      <div className="test-series-faq-section">
        <h2>FAQ's</h2>
        <div className="test-series-faq-section-bottom">
            <details className="faq-box">
                <summary>What is a Test Series ?</summary>
                <p className="faq-answer">A test series refers to a collection of practice tests or examination designed to help individuals prepare for a specifi assessment or examination. These series are created to stimulate the actual exam conditions and provide candidates with an opportunity to assess their knowledge</p>
            </details>
            <details className="faq-box">
                <summary>Why should I join a Test Series ?</summary>
                <p className="faq-answer">It allows you to become familiar with exam format, time management and question designed to help individuals prepare for a specific assessment or examinatin. These series are created to stimulate the actual exam conditions and provide candidates with an opportunity to assess their knowledge</p>
            </details>
            <details className="faq-box">
                <summary>What should I consider when selecting a test series ?</summary>
                <p className="faq-answer">When selecting a test series, consider the following factors.
                    <li>Relevance</li>
                    <li>Quality of questions</li>
                    <li>Feedback and analysis</li>
                    <li>Cost</li>
                </p>
            </details>
            <details className="faq-box">
                <summary>When will my pass expire ?</summary>
                <p className="faq-answer">It depends on which pass candidates have purchased. Validity of the pass is mentiond on the pass</p>
            </details>
            <details className="faq-box">
                <summary>Test series helps me clear the exam ?</summary>
                <p className="faq-answer">Yes, tests are prepared by experts and toppers. They are based on the latest exam pattern. After each mock test helps you understand your performance in the most comprehensive manner.</p>
            </details>
            <details className="faq-box">
                <summary>Do I need a special software to access tests ?</summary>
                <p className="faq-answer">No, Only need a web browser</p>
            </details>
            <details className="faq-box">
                <summary>Does it support both (HINDI & ENGLISH) language ?</summary>
                <p className="faq-answer">Yes, It supports both</p>
            </details>
            <details className="faq-box">
                <summary>When will I get result of my test ?</summary>
                <p className="faq-answer">You will get your result, current ranking and performance analysis instantly as you submit your online test</p>
            </details>
            <details className="faq-box">
                <summary>Are you providing solutions of the questions ?</summary>
                <p className="faq-answer">You are provided with answers instantly after submitting the test.</p>
            </details>
            <details className="faq-box">
                <summary>Is there any performance report which student can download for future reference ?</summary>
                <p className="faq-answer">Yes! A compact report is generated after every test which the student can download in pdf Format.</p>
            </details>
            <details className="faq-box">
                <summary>How to start online exam ?</summary>
                <p className="faq-answer">Login with your username and password. On login you will be able to see all the available online exams</p>
            </details>
            <details className="faq-box">
                <summary>Will I be able to access my tests after my pass expires ?</summary>
                <p className="faq-answer">No candidates hsould attempt all their tests before their pass expires.</p>
            </details>
            <details className="faq-box">
                <summary>How will I know which areas requires more attendtino ?</summary>
                <p className="faq-answer">You can find this out easily with an overall analysis report</p>
            </details>
        </div>
      </div>

      <div className="have-query">
         <h2>Have Any Query?</h2>
         <p>Contact us and we'll help you take the right decision</p>
         <div className="row-button">
            <button className="purple-btn">Call us</button>
            <button className="purple-btn orange-btn">Request A Call</button>
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
            <p>Developed By Sachin Jha</p>
        </div>
        </footer>

    </>
  )
}
