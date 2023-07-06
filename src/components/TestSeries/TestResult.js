import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TestResult = ({ setpagestatus }) => {
  const [viewResult, setViewResult] = useState(false);
  const [resultData, setResultData] = useState(null);
  const navigate =useNavigate()
  const pagestatus = (page) => {
    setpagestatus(page);
    localStorage.removeItem('UserTestData')
    localStorage.removeItem('questions')
    localStorage.removeItem('currentquestion')
    localStorage.removeItem('pageStatus')
    localStorage.removeItem('questionscolor')
    navigate('/');
    
  };

  const getresult = async () => {
    setViewResult(true);
    const userData = JSON.parse(localStorage.getItem("UserTestData"));
    const data = {
      testid: localStorage.getItem('testtopic'),
      userdata: userData,
      useremail:localStorage.getItem('useremail')
    };

    try {
      const response = await fetch("https://betawill-com.onrender.com/checktest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setResultData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching the result:", error);
    }
  };

  return (
    <div>
      {viewResult && (
        <>
          <h2>Correct answers: {resultData?.correctanswers}</h2>
          <h2>Wrong answers: {resultData?.wronganswers}</h2>
          <h2>Unattempted Questions: {resultData?.notattempted}</h2>
        </>
      )}
      <button onClick={getresult}>View Result</button>
      <button onClick={() => pagestatus("TestPage")}>Home</button>
    </div>
  );
};

export default TestResult;
