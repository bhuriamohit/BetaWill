import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Userinfo.css";

const Userinfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let useremail;
  if (location.state != null) {
    useremail = location.state.useremail;
  }
  const [fullname, setFullname] = useState("Fetching Data.......");
  const [gender, setGender] = useState("Fetching Data.........");
  const [dob, setDob] = useState("Fetching Data........");
  const [country, setCountry] = useState("Fetching Data......");
  const [state, setState] = useState("Fetching Data.......");
  const [pincode, setPincode] = useState("Fetching Data..........");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (location.state == null) {
      navigate("/");
    } else {
      let s = "http://localhost:8080/getinfo/" + useremail;
      let response = await fetch(s);
      let fres = await response.json();

      console.log(fres.userinfo);
      setFullname(fres.userinfo.fullname);
      setDob(fres.userinfo.dob);
      setGender(fres.userinfo.gender);
      setCountry(fres.userinfo.country);
      fres = fres.userinfo;
      setState(fres.state);
      setPincode(fres.pincode);
    }
  };

  return (
  <div className="gbody">
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
    </div>
  );
};

export default Userinfo;
