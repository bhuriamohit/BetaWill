import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch,Routes ,Route} from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import { FaPlay } from 'react-icons/fa';


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
import PasswordReset from './components/PasswordReset.js';
import PaymentPage from './components/Payments/PaymentPage.js';
import CourseDescription from './components/Courses/CourseDescription.js';
import PaymentReceipt from './components/Payments/PaymentReceipt.js';
import Test from './components/TestSeries/Test1.js';
import MainTestPage from './components/TestSeries/MainTestPage.js';
import Featuredcourses from './components/Home/Featuredcourses.js';
import Superadmin from './components/Superadmin/Superadmin.js';
import PdfList from './components/StudyMaterial/PdfList.js';
import TestTopics from './components/TestSeries/TestTopics.js';
import Footer from './components/Home/Footer.js';
import Testimonial from './components/Home/Testimonial.js';
import HomePage from './components/HomePage/HomePage.js';
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
              {/* <Navbar useremailtosend={setuseremail}/> */}
              <HomePage useremailtosend={setuseremail}/>
              {/* <Home/> */}
              {/* <Courses data={useremail}/> */}
              {/* <Featuredcourses/>  */}
               {/* <Testimonial/> */}
                {/* <Footer/> */}

            </div>
            
          }/> 
          <Route exact path='/userinfo' element={<Userinfo/>}/>
          <Route exact path="/lecturepage" element={<LecturePage/>}/>
          <Route exact path='/coursedescription' element={<CourseDescription/>}/>
          <Route exact path='/passwordreset' element={<PasswordReset/>}/>
          <Route exact path='/paymentreceipt' element={<PaymentReceipt/>}/>
          <Route exact path='/studymaterial' element={<StudyMaterial/>}/>
          <Route exact path='/superadmin' element={<Superadmin/>}/>
          <Route exact path="/pdflist" element={<PdfList/>}/>
          <Route exact path="/testtopics" element={<TestTopics/>}/>
          <Route exact path='/testpage' element={<MainTestPage/>}/>
        </Routes>
      </Router> 

      {/* <TestTopics/> */}
      {/* <PdfList/> */}
      
    </div>
  );
};

export default App;

