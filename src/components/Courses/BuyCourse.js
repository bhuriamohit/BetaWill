import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faClock ,faCheckCircle,faCheck,faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import './Buycourse.css'; // Import your CSS file

const MyComponent = () => {
  return (
    <div>
      <div className="buy-course-top"></div>
      <div className="buy-course-container">
        <div className="text-box">
          <p>EMRS (Eklavya Modern Residential School)
            PGT - Computer Science | Bilingual | Video
            Course By Adda247</p>
        </div>
      </div>
      <div className='buy-course-description'>
      <div className='leftbuy'>
  <div className='smalldesci'>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book.
    </p>
  </div>
  <div className="left-side">
    <FontAwesomeIcon icon={faVideo} className="video-icon" />
    <span className="video-label">Video Lectures</span>
    <FontAwesomeIcon icon={faClock} className="clock-icon" />
    <span className="clock-label">12 Months Validity</span>
  </div>
  <div className="buy-features">
    <h4>Features:</h4>
    <div className="quality-matrix">
      <div className="quality-row">
        <FontAwesomeIcon icon={faCheckCircle} className="quality-icon-green" />
        <span className="quality-label">Quality 1</span>
        <FontAwesomeIcon icon={faCheckCircle} className="quality-icon-green" />
        <span className="quality-label">Quality 2</span>
     
      </div>
      <div className="quality-row">
        <FontAwesomeIcon icon={faCheckCircle} className="quality-icon-green" />
        <span className="quality-label">Quality 4</span>
        <FontAwesomeIcon icon={faCheckCircle} className="quality-icon-green" />
        <span className="quality-label">Quality 5</span>
    
      </div>
      <div className="quality-row">
        <FontAwesomeIcon icon={faCheckCircle} className="quality-icon-green" />
        <span className="quality-label">Quality 7</span>
        <FontAwesomeIcon icon={faCheckCircle} className="quality-icon-green" />
        <span className="quality-label">Quality 8</span>
      
      </div>
    </div>
  </div>
</div>

        <div className='rightbuy'>
            
        </div>
      </div>

      <div className='product-highlights'>
  <h2 style={{ fontSize: '48px' }}>
    Product <span style={{ color:  '#0097b2' }}>Highlights</span>
  </h2>
</div>

<div className='product-highlightsd'>
  <div className='sectionbuy'>
    <div className="icon-container">
      <FontAwesomeIcon icon={faCheck} className='quality-icon' />
    </div>
    <p>the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley
</p>
  </div>
  <div className='sectionbuy'>
    <div className="icon-container">
      <FontAwesomeIcon icon={faCheck} className='quality-icon' />
    </div>
    <p>the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley
</p>
  </div>
  <div className='sectionbuy'>
    <div className="icon-container">
      <FontAwesomeIcon icon={faCheck} className='quality-icon' />
    </div>
    <p>the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley
</p>
  </div>
  <div className='sectionbuy'>
    <div className="icon-container">
    <FontAwesomeIcon icon={faCheck} className='quality-icon' />
    </div>
    <p>the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley
</p>
  </div>
  <div className='sectionbuy'>
    <div className="icon-container">
      <FontAwesomeIcon icon={faCheck} className='quality-icon' />
    </div>
    <p>the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley
</p>
  </div>
  <div className='sectionbuy'>
    <div className="icon-container">
      <FontAwesomeIcon icon={faCheck} className='quality-icon' />
    </div>
    <p>the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley
</p>
  </div>
</div>

<div className='Aboutfaculty'>

<h2 style={{ fontSize: '48px' }}>
   About <span style={{ color:  '#0097b2' }}>Faculty</span>
  </h2>
  <div className='Facultydescription'>
  <div className='sectionx'>
    <h3>Faculty1</h3>
    <p>Lorem Ipsum is simply dummy
text of the printing and
typesetting industry. Lorem Ipsum
has been the industry's standard
dummy text ever since the 1500s,
when an unknown printer took a
galley of type and scrambled it to
make a type specimen book</p>
  </div>
  <div className='sectionx'>
    <h3>Faculty 2</h3>
    <p>Lorem Ipsum is simply dummy
text of the printing and
typesetting industry. Lorem Ipsum
has been the industry's standard
dummy text ever since the 1500s,
when an unknown printer took a
galley of type and scrambled it to
make a type specimen book</p>
  </div>
  <div className='sectionx'>
    <h3>Faculty 3</h3>
    <p>Lorem Ipsum is simply dummy
text of the printing and
typesetting industry. Lorem Ipsum
has been the industry's standard
dummy text ever since the 1500s,
when an unknown printer took a
galley of type and scrambled it to
make a type specimen book</p>
  </div>
</div>

</div>



<div className='Help'>
  <div className='help-section'>
    <h3>Need Help?</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to make
a type specimen book.
</p>
<button className='help-button'> Contact Us</button>
  </div>
  <div className='help-section help-image-section'>
    <img src="image.jpg" alt="Help Image" />
  </div>
</div>
<div className='bottom-down'></div>
    </div>
  );
};

export default MyComponent;
