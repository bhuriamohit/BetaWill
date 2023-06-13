import React from 'react';
import { BrowserRouter as Router, Switch,Routes ,Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import VideoPlayer from './VideoPlayer';
import VideoUploader from './VideoUploader';
import Home from './components/Home/Home.js';
import Signup from './components/Logins/Signup';
import LoginPage from './components/Login';
import Courses from './components/Courses/courses.js';
import StudyMaterial from './components/StudyMaterial/StudyMaterial';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
     <Navbar/>
     <Home/>
     <Courses/>
     <StudyMaterial/>
      
    </div>
  );
};

export default App;
