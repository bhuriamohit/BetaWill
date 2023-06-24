import React, { useState, useEffect, useRef } from 'react';
import './Featuredcourses.css';
import imoImage from './imo.png';
import { FaPlay } from 'react-icons/fa';
import visionlmg from './VisionImage.png'; 
import success from './success copy.png'
const Featuredcourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleTiles, setNumVisibleTiles] = useState(3);
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description 1', time: '2h 30m' },
    { id: 2, title: 'Course 2', description: 'Description 2', time: '1h 45m' },
    { id: 3, title: 'Course 3', description: 'Description 3', time: '3h 15m' },
    { id: 4, title: 'Course 4', description: 'Description 4', time: '2h 0m' },
    { id: 5, title: 'Course 5', description: 'Description 5', time: '1h 30m' },
    { id: 6, title: 'Course 6', description: 'Description 6', time: '2h 45m' }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
    clearInterval(interval.current); // Clear the previous interval
    interval.current = setInterval(handleNext, 4000); // Start a new interval
  };

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    setNumVisibleTiles(isMobile ? 1 : 3);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(handleNext, 4000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const getVisibleCourses = () => {
    const visibleCourses = [];
    for (let i = currentIndex; i < currentIndex + numVisibleTiles; i++) {
      visibleCourses.push(courses[i % courses.length]);
    }
    return visibleCourses;
  };

  return (
    <div>
          <div className="column">
      <img className="full-width-img" src={visionlmg} alt="Your Image" />
    </div>
      <h1 className="fc-heading">Featured Courses</h1>

      <div className="fc-container">
        <button className="fc-arrow-button" onClick={handlePrev}>{'<'}</button>

        {getVisibleCourses().map((course, index) => (
          <div
            key={course.id}
            className={`fc-course-tile ${index === 0 ? 'left-animation' : 'right-animation'}`}
          >
            <div className="fc-course-image">
              <img src={imoImage} alt="Course" />
            </div>
            <h3 className="fc-course-title">{course.title}</h3>
            <p className="fc-course-description">{course.description}</p>
            <div className="fc-course-details">
              <span className="fc-course-icon">
                <FaPlay />
              </span>
              <span className="fc-course-time">{course.time}</span>
            </div>
          </div>
        ))}

        <button className="fc-arrow-button" onClick={handleNext}>{'>'}</button>
    
      </div>
      <div className="column">
      <img className="full-width-img" src={success} alt="Your Image" />
      <button className='enquiry'>enquiry</button>
    </div>

    </div>
    
  );
};

export default Featuredcourses;
