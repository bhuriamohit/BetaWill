import React, { useState, useEffect } from "react";
import TestDescriptionPage from "./TestDescriptionPage";

import TestResult from "./TestResult";
import Test1 from "./Test1";
const MainTestPage = () => {
  const [pageStatus, setPageStatus] = useState(localStorage.getItem("pageStatus") || "DescriptionPage");
  // const [pageStatus, setPageStatus] = useState("DescriptionPage");

  useEffect(() => {
    localStorage.setItem("pageStatus", pageStatus);
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
