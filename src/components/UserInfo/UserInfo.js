import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Mycourses from "./Mycourses";
import './Userinfo.css';

const Userinfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let useremail;
  if (location.state != null) {
    useremail = location.state.useremail;
  }

  const [fullname, setfullname] = useState("Fetching Data.......");
  const [gender, setgender] = useState("Fetching Data.........");
  const [dob, setdob] = useState("Fetching Data........");
  const [country, setcountry] = useState("Fetching Data......");
  const [state, setstate] = useState("Fetching Data.......");
  const [pincode, setpincode] = useState("Fetching Data..........");
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (location.state == null) {
      navigate('/');
    } else {
      let s = "https://betawill-com.onrender.com/getinfo/" + useremail;
      let response = await fetch(s);
      let fres = await response.json();

      console.log(fres.userinfo);
      setfullname(fres.userinfo.fullname);
      setdob(fres.userinfo.dob);
      setgender(fres.userinfo.gender);
      setcountry(fres.userinfo.country);
      fres = fres.userinfo;
      setstate(fres.state);
      setpincode(fres.pincode);
    }
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <div className="button-container">
        <button className="toggle-button" onClick={toggleProfile}>
          Profile
        </button>
      </div>

      {showProfile && (
        <div className="container">
          <h2 className="title">User Info</h2>
          <div className="info">
            <span className="label">Email:</span>
            <span className="value">{useremail}</span>
          </div>
          <div className="info">
            <span className="label">Full Name:</span>
            <span className="value">
              {fullname}
              <button className="useredit">Edit</button>
            </span>
          </div>
          <div className="info">
            <span className="label">Date of Birth:</span>
            <span className="value">
              {dob}
              <button className="useredit">Edit</button>
            </span>
          </div>
          <div className="info">
            <span className="label">Gender:</span>
            <span className="value">
              {gender}
              <button className="useredit">Edit</button>
            </span>
          </div>
          <div className="info">
            <span className="label">Country:</span>
            <span className="value">
              {country}
              <button className="useredit">Edit</button>
            </span>
          </div>
          <div className="info">
            <span className="label">State:</span>
            <span className="value">
              {state}
              <button className="useredit">Edit</button>
            </span>
          </div>
          <div className="info">
            <span className="label">Pincode:</span>
            <span className="value">{pincode}
            <button className="useredit">Edit</button></span>
            
          </div>
        </div>
      )}

      <section>
        {useremail != null && <Mycourses email={useremail} />}
      </section>
    </div>
  );
};

export default Userinfo;
