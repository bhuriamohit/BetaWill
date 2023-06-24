import React, { useState } from "react";
import "./TestUploadForm.css";

const TestUploadForm = () => {
  const [testId, setTestId] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newQuestions = [];
    for (let i = 0; i < numOfQuestions; i++) {
      newQuestions.push({
        question: "",
        options: ["", "", "", ""],
        correctOption: ""
      });
    }

    setQuestions(newQuestions);
  };

  const handleQuestionChange = (event, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].question = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectOptionChange = (event, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].correctOption = event.target.value;
    setQuestions(newQuestions);
  };


  const UploadtTest=()=>
  {

    fetch('http://localhost:8080/addtest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(questions)
      })
  }
  return (
    <form className="test-upload-form" onSubmit={handleSubmit}>
      <h2>Test Upload Form</h2>

      <div className="form-group">
        <label htmlFor="testId">Test ID:</label>
        <input
          type="text"
          id="testId"
          value={testId}
          onChange={(event) => setTestId(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="numOfQuestions">Number of Questions:</label>
        <input
          type="number"
          id="numOfQuestions"
          min="1"
          value={numOfQuestions}
          onChange={(event) => setNumOfQuestions(Number(event.target.value))}
          required
        />
      </div>

      <button type="submit">Submit</button>

      {questions.map((question, index) => (
        <div className="question-section" key={index}>
          <h3>Question {index + 1}:</h3>

          <div className="form-group">
            <label htmlFor={`question${index}`}>Question:</label>
            <input
              type="text"
              id={`question${index}`}
              value={question.question}
              onChange={(event) => handleQuestionChange(event, index)}
              required
            />
          </div>

          <div className="options-group">
            {[1, 2, 3, 4].map((optionIndex) => (
              <div className="form-group" key={optionIndex}>
                <label htmlFor={`option${index}${optionIndex}`}>Option {optionIndex}:</label>
                <input
                  type="text"
                  id={`option${index}${optionIndex}`}
                  value={question.options[optionIndex - 1]}
                  onChange={(event) => handleOptionChange(event, index, optionIndex - 1)}
                  required
                />
              </div>
            ))}
          </div>

          <div className="form-group">
            <label htmlFor={`correctOption${index}`}>Correct Option:</label>
            <input
              type="text"
              id={`correctOption${index}`}
              value={question.correctOption}
              onChange={(event) => handleCorrectOptionChange(event, index)}
              required
            />
          </div>
        </div>
      ))}

      <button type="submit" onClick={UploadtTest}>Upload Test</button>
    </form>
  );
};

export default TestUploadForm;
