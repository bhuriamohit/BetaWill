import React, { useState } from 'react';
import './TestDescriptionPage.css'; // Import the CSS file for styling

const TestDescriptionPage = ({setpagestatus}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async () => {

    let testdata={
        testid:"Amazon"
    }
    let response=await fetch('http://localhost:8080/fetchtest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testdata)
      })

    response=await response.json();
    localStorage.setItem('questions',JSON.stringify(response.questions))
    let questions=JSON.parse(localStorage.getItem('questions'))
    console.log(questions)
    localStorage.setItem('totalquestions',questions.length);
    
    setpagestatus("TestPage")
  };

  return (
    <div className="test-description-container">
      <h1 className="test-description-title">Test Description</h1>
      <p className="test-description-description">This is a sample test description.</p>
      <label className="test-description-checkbox-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="test-description-checkmark"></span>
        <span className="test-description-checkbox-text">I agree to all terms and conditions</span>
      </label>
      <button
        onClick={handleSubmit}
        disabled={!isChecked}
        className={`test-description-submit-button ${isChecked ? 'active' : ''}`}
      >
        Submit
      </button>
    </div>
  );
};

export default TestDescriptionPage;
