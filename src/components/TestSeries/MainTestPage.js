import React, { useState, useEffect } from "react";
import TestDescriptionPage from "./TestDescriptionPage";
import Test from "./Test";
import TestResult from "./TestResult";
import Test1 from "./Test1";
import { useLocation } from "react-router-dom";
const MainTestPage = () => {
  const [pageStatus, setPageStatus] = useState(localStorage.getItem("pageStatus") || "DescriptionPage");
  // const [pageStatus, setPageStatus] = useState("DescriptionPage");
  const location =useLocation()
  const topic=location.state.testtopic;
  useEffect(() => {
    localStorage.setItem("pageStatus", pageStatus);
    localStorage.setItem("testtopic",topic)
    
  }, [pageStatus]);

  const handleSetPageStatus = (newPageStatus) => {
    setPageStatus(newPageStatus);
    localStorage.setItem('timer', 180);
    // localStorage.removeItem('userData');
    // localStorage.removeItem('questions');
  };

  return (
    <div>
      {pageStatus === "DescriptionPage" && <TestDescriptionPage setpagestatus={handleSetPageStatus} />}
      {pageStatus === "TestPage" && <Test1 setpagestatus={setPageStatus} />}
      {pageStatus=="TestResult" && <TestResult setpagestatus={setPageStatus}/>}
    </div>
  );
};

export default MainTestPage;
