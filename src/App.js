import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch,Routes ,Route} from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";


import Home from './components/Home/Home.js';
import Signup from './components/Logins/Signup';
import LoginPage from './components/Login';
import Courses from './components/Courses/courses.js';
import StudyMaterial from './components/StudyMaterial/StudyMaterial';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoUploader from './components/VideoPlayer/VideoUploader.js';
import LecturePage from './components/Lectures/LecturePage.js';
import Userinfo from './components/UserInfo/UserInfo.js';
import PdfUploader from './components/StudyMaterial/PdfUploader.js';
import PdfViewer from './components/StudyMaterial/PdfViewer.js';

import CourseDescription from './components/Courses/CourseDescription.js';

const App = () => {
    const [useremail,setuseremail]=useState(null)
    useEffect(()=>
    {
      
      console.log(useremail)
    })
    
    
  return (
    <div> 
      
      <Router>
        <Routes>
          <Route exact path="/" element={

            <div>
              <Navbar useremailtosend={setuseremail}/>
              <Home/>
              <Courses data={useremail}/>
              
              <StudyMaterial/>

            </div>
            
          }/> 
          <Route exact path='/userinfo' element={<Userinfo/>}/>
          <Route exact path="/lecturepage" element={<LecturePage/>}/>
          <Route exact path='/coursedescription' element={<CourseDescription/>}/>
        </Routes>
      </Router>

      
      

     

      

    
      
    </div>
  );
};

export default App;

/* Testing push */