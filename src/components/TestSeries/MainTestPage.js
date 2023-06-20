import React, { useState, useEffect } from "react";
import TestDescriptionPage from "./TestDescriptionPage";
import Test from "./Test";

const MainTestPage = () => {
  const [pageStatus, setPageStatus] = useState(localStorage.getItem("pageStatus") || "DescriptionPage");

  useEffect(() => {
    localStorage.setItem("pageStatus", pageStatus);
  }, [pageStatus]);

  const handleSetPageStatus = (newPageStatus) => {
    setPageStatus(newPageStatus);
    localStorage.setItem('timer', 180);
    localStorage.removeItem('userData');
    localStorage.removeItem('questions')
  };

  return (
    <div>
      {pageStatus === "DescriptionPage" && <TestDescriptionPage setpagestatus={handleSetPageStatus} />}
      {pageStatus === "TestPage" && <Test setpagestatus={setPageStatus} />}
    </div>
  );
};

export default MainTestPage;
