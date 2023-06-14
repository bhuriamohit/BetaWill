import React from 'react';
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

import Userinfo from './components/UserInfo/UserInfo.js';
const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={

            <div>
              <Navbar/>
              <Home/>
              <Courses/>
              <StudyMaterial/>

            </div>
            
          }/> 
          <Route exact path='/userinfo' element={<Userinfo/>}/>
        </Routes>
      </Router>

      

    
      
    </div>
  );
};

export default App;

/* Testing push */