import React, { useState, useEffect } from 'react';
import './Test.css';

function Test({ setpagestatus }) {
  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem('questions')));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(Number(localStorage.getItem('timer')) || 180);
  const [userData, setUserData] = useState(() => {
    const initialUserData = {};
    questions.forEach((question, index) => {
      initialUserData[index] = null;
    });
    return initialUserData;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const updatedTimer = prevTimer - 1;
        localStorage.setItem('timer', updatedTimer);
        return updatedTimer;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].selectedOption = selectedOption;
    setQuestions(updatedQuestions);
    const updatedUserData = { ...userData, [currentQuestionIndex]: selectedOption };
    setUserData(updatedUserData);
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleQuestionNavigation = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
  };

  const handleFormSubmit = () => {
    const updatedUserData = { ...userData, [currentQuestionIndex]: questions[currentQuestionIndex].selectedOption };
    setUserData(updatedUserData);
    setCurrentQuestionIndex(0);
    setTimer(180);

    localStorage.setItem('usertestdata', JSON.stringify(userData));
    setpagestatus("TestResult");
  };

  return (
    <div className="testpage-app">
      <div className="testpage-question-container">
        <div className="testpage-question-number-container">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`testpage-question-number ${currentQuestionIndex === index ? 'active' : ''}`}
              onClick={() => handleQuestionNavigation(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="testpage-question-content">
          <div className="testpage-timer">Timer: {timer} seconds</div>
          <div className="testpage-question-box">
            <div className="testpage-question">
              <h2>{questions[currentQuestionIndex].question}</h2>
            </div>
            <div className="testpage-options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="testpage-option">
                  <label>
                    <input
                      type="radio"
                      value={option}
                      checked={option === questions[currentQuestionIndex].selectedOption}
                      onChange={handleOptionChange}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <div className="testpage-navigation">
              <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
                Prev
              </button>
              <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
                Next
              </button>
            </div>
            <div className="testpage-submit">
              <button onClick={handleFormSubmit}>Submit</button>
              <button onClick={() => setpagestatus("DescriptionPage")}>Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
