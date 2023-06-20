import React, { useState, useEffect } from 'react';
import './Test.css';

function Test() {
  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem('questions')) || [
    {
      id: 1,
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      selectedOption: null,
    },
    {
        id: 2,
        question: 'Question 2',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        selectedOption: null,
      },
      {
        id: 3,
        question: 'Question 3',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        selectedOption: null,
      },
      {
        id: 4,
        question: 'Question 4',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        selectedOption: null,
      },
      {
        id: 5,
        question: 'Question 5',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        selectedOption: null,
      }
    
    
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(Number(localStorage.getItem('timer')) || 180);

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
    // localStorage.setItem('questions', JSON.stringify(questions)) ;
  }, [questions]);

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].selectedOption = selectedOption;
    setQuestions(updatedQuestions);
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
    localStorage.clear();
    // setQuestions([
    //   {
    //     id: 1,
    //     question: 'Question 1',
    //     options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    //     selectedOption: null,
    //   },
    //   // Add more questions here
    // ]);
    setCurrentQuestionIndex(0);
    setTimer(180);
  };

  return (
    <div className="app">
      <div className="timer">Timer: {timer} seconds</div>
      <div className="question-box">
        <div className="question">
          <h2>{questions[currentQuestionIndex].question}</h2>
        </div>
        <div className="options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index} className="option">
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
        <div className="navigation">
          <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
            Prev
          </button>
          <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
            Next
          </button>
        </div>
        <div className="submit">
          <button onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>
      <div className="question-navigation">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`question-nav-item ${currentQuestionIndex === index ? 'active' : ''}`}
            onClick={() => handleQuestionNavigation(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
