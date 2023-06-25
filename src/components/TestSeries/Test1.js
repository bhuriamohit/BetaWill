import React, { useEffect, useState } from "react";
import './Test1.css';

const Test1 = ({ setpagestatus }) => {
  const [isQuestionNumberVisible, setQuestionNumberVisible] = useState(window.innerWidth > 768);


  const toggleQuestionNumber = () => {
    setQuestionNumberVisible(!isQuestionNumberVisible);
  };

  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem('questions')) || []);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(parseInt(localStorage.getItem('currentquestion')) || 0);
  const [timer, setTimer] = useState(Number(localStorage.getItem('timer')) || 180);
  const [userData, setUserData] = useState(() => {
    const initialUserData = JSON.parse(localStorage.getItem('UserTestData')) || {};
    return initialUserData;
  });
  const [totalquestion, setTotalQuestion] = useState(localStorage.getItem('totalquestions'));
  const [questioncolor, setquestioncolor] = useState(() => {
    let initialquestioncolor = [];
    for (let i = 0; i < totalquestion; i++) {
      if (i == currentQuestionIndex) {
        initialquestioncolor.push({ [i]: "yellow" })
      }
      else {
        initialquestioncolor.push({ [i]: "white" })

      }
    }
    return JSON.parse(localStorage.getItem('questionscolor')) || initialquestioncolor
  })

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
    localStorage.setItem('UserTestData', JSON.stringify(userData));
  }, [userData]);

  useEffect(()=>
  {
   
   
    console.log(questions)
    // console.log(questioncolor)
    // console.log(currentQuestion)
    // console.log(currentQuestionIndex)
    // // console.log(totalquestion)
    // console.log(userData)

  })
  useEffect(() => {
    localStorage.setItem('currentquestion', currentQuestionIndex)
  }, [currentQuestionIndex])
  useEffect(() => {
    localStorage.setItem('totalquestion', totalquestion)
  }, [totalquestion])

  useEffect(() => {
    localStorage.setItem('questionscolor', JSON.stringify(questioncolor));
  }, [questioncolor]);


  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    const updatedQuestions = [...questions];

    updatedQuestions[currentQuestionIndex].selectedOption = selectedOption;
    setQuestions(updatedQuestions);
    const updatedUserData = { ...userData, [currentQuestionIndex]: selectedOption };
    setUserData(updatedUserData);
    localStorage.setItem('UserTestData', JSON.stringify(userData));
    localStorage.setItem('currentquestion', currentQuestionIndex)

  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextQuestion =async  () => {
    setCurrentQuestionIndex(currentQuestionIndex)
    // if(currentQuestionIndex==null)
    // {
    //   setCurrentQuestionIndex(localStorage.getItem('currentquestion'))
    // }
    if (questions[currentQuestionIndex].selectedOption != null) {
      const updatedcolor = { ...questioncolor, [currentQuestionIndex]: "green", [currentQuestionIndex + 1]: "yellow" }
      setquestioncolor(updatedcolor)

    }
    else {
      const updatedcolor = { ...questioncolor, [currentQuestionIndex]: "red", [currentQuestionIndex + 1]: "yellow" }
      setquestioncolor(updatedcolor)
    }
    let userdata = JSON.parse(localStorage.getItem('UserTestData'));
    setUserData(userdata)
    const updatedQuestions = [...questions];
    // updatedQuestions[currentQuestionIndex].selectedOption = null; // Clear selected option
    // setQuestions(updatedQuestions);

    localStorage.setItem('UserTestData', JSON.stringify(userData));
    if (currentQuestionIndex < questions.length - 1) {
      // setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCurrentQuestionIndex(currentQuestionIndex+1)
    }
    console.log(currentQuestionIndex)



  };

  const handleQuestionNavigation = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
  };

  const handleFormSubmit = () => {
    const updatedUserData = { ...userData, [currentQuestionIndex]: questions[currentQuestionIndex].selectedOption };
    setUserData(updatedUserData);
    setCurrentQuestionIndex(0);
    setTimer(180);

    localStorage.setItem('UserTestData', JSON.stringify(userData));
    setpagestatus("TestResult");
  };

  const cleareverything = () => {
    setpagestatus("DescriptionPage")
    localStorage.removeItem('questions')
    localStorage.removeItem('UserTestData')
    localStorage.removeItem('questionscolor')
    localStorage.removeItem('totalquestions')
    localStorage.removeItem('currentquestion')
  }

  const setcolorforindex = (index) => {

      console.log(currentQuestionIndex)
     
        if(questions[currentQuestionIndex].selectedOption==null)
        {
          const updatedcolor = { ...questioncolor, [currentQuestionIndex]: "red", [index]: "yellow" }
          setquestioncolor(updatedcolor)
  
        }
        else
        {
          const updatedcolor = { ...questioncolor, [currentQuestionIndex]: "green" , [index]: "yellow"}
          setquestioncolor(updatedcolor)
        }
  
      
      
    
    
    

    setCurrentQuestionIndex(index)
    // const updatedcolor = { ...questioncolor, [index]: "yellow" }
    // setquestioncolor(updatedcolor)
    console.log(index)

  }
  const clearoption = () => {
    questions[currentQuestionIndex].selectedOption=null;
    let data={...userData,[currentQuestionIndex]:null}
    setUserData(data)
  }
  const currentQuestion = questions[currentQuestionIndex];





  /* Submit Pop-up */

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [ attemptedquestions, setattemptedquestions ] = useState("Fetching...")
  const [ nonattemptedquestions, setnonattemptedquestions ] = useState("Fetching...")
  const [ visitedquestions, setvisitedquestions ] = useState("Fetching...")
  const [ nonvisitedquestions, setnonvisitedquestions ] = useState("Fetching...")
  const submitpopup = () => {
    let attempted = 0;
    let na = 0;
    let vis = 0;
    let nvis = 0;
    for (let i = 0; i < totalquestion; i++) {
      if (questions[i].selectedOption != null) {
        attempted++;
      }
      else {
        na++;
      }
    }
    for (let i = 0; i < totalquestion; i++) {
      if (questioncolor[i] == "green" || questioncolor[i] == 'red' || questioncolor[i] == 'yellow') {
        vis++;
      }
      else {
        nvis++;
      }
    }
    setattemptedquestions(attempted)
    setnonattemptedquestions(na)
    setvisitedquestions(vis)
    setnonvisitedquestions(nvis)
    console.log(attempted);
    console.log(na);
    console.log(vis);
    console.log(nvis)
    setPopupVisible(true)
  }

  const SubmitTest=()=>
  {
      setpagestatus("TestResult")
      
  }

  const Userdata=()=>
  {
      console.log(userData);
  }



  return (
    <div className="testmainbox">

    <div className="testquestionbox">
    
      <button className="menu-button" onClick={toggleQuestionNumber}>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </button>
      
      <h2 className="question-heading">Question {questions[currentQuestionIndex].id}</h2>
      <p className="question-text">{currentQuestion.question}</p>
      
      {currentQuestion.options.map((option, index) => (
        <div key={index} className="option">
          <label className="option-label">
            <input
              type="radio"
              value={option}
              checked={option === currentQuestion.selectedOption}
              onChange={handleOptionChange}
              className="option-input"
            />
            <span className="option-text">{option}</span>
          </label>
        </div>
      ))}
      
      <button className="next-button" onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
        Save and Next
      </button>
      <button className="clear-button" onClick={cleareverything}>Clear All</button>
      <button className="clear-option-button" onClick={() => clearoption()}>Clear</button>
      <button className="submit-button" onClick={() => submitpopup()}>Submit</button>
      <button className="userdata-button" onClick={() => Userdata()}>Userdata</button>
    
    </div>
    
    {isQuestionNumberVisible && (
      <div className="questionnumberbox">
        {Array.from({ length: totalquestion }, (_, index) => (
          <div
            key={index}
            className={`questionnumber ${questioncolor[index]}`}
            onClick={() => setcolorforindex(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    )}
    
    {isPopupVisible && (
      <div className="popup">
        <h3>Pop-up Title</h3>
        <p>Attempted Questions: {attemptedquestions}</p>
        <p>Visited Questions: {visitedquestions}</p>
        <p>Non-Visited Questions: {nonvisitedquestions}</p>
        <p>Non-Attempted Questions: {nonattemptedquestions}</p>
        <button className="submit-test-button" onClick={SubmitTest}>Submit Test</button>
        <button className="close-button" onClick={() => setPopupVisible(false)}>Close</button>
      </div>
    )}
    
  </div>
  
  );
}

export default Test1;
