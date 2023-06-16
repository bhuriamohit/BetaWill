import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Mycourses from "./Mycourses"
import './Userinfo.css'
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
  const [country, setcountry] = useState("Fetching Data......")
  const [state, setstate] = useState("Fetching Data.......")
  const [pincode, setpincode] = useState("Fetching Data..........")

  useEffect(() => {
    fetchdata()
  }, []);

  const fetchdata = async () => {
    if (location.state == null) {
      navigate('/')
    } else {
      let s = "http://localhost:8080/getinfo/" + useremail;
      let response = await fetch(s)
      let fres = await response.json();

      console.log(fres.userinfo)
      setfullname(fres.userinfo.fullname)
      setdob(fres.userinfo.dob)
      setgender(fres.userinfo.gender)
      setcountry(fres.userinfo.country)
      fres = fres.userinfo;
      setstate(fres.state);
      setpincode(fres.pincode)
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="title">User Info</h2>
        <div className="info">
          <span className="label">Email:</span>
          <span className="value">{useremail}</span>
        </div>
        <div className="info">
          <span className="label">Full Name:</span>
          <span className="value">{fullname}</span>
        </div>
        <div className="info">
          <span className="label">Date of Birth:</span>
          <span className="value">{dob}</span>
        </div>
        <div className="info">
          <span className="label">Gender:</span>
          <span className="value">{gender}</span>
        </div>
        <div className="info">
          <span className="label">Country:</span>
          <span className="value">{country}</span>
        </div>
        <div className="info">
          <span className="label">State:</span>
          <span className="value">{state}</span>
        </div>
        <div className="info">
          <span className="label">Pincode:</span>
          <span className="value">{pincode}</span>
        </div>
      </div>

      <section>
        <Mycourses email={useremail} />
      </section>
    </div>
  );
}

export default Userinfo;
