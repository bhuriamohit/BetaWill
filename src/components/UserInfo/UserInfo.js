import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Mycourses from "./Mycourses";
import "./Userinfo.css";

const Userinfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let useremail;
  if (location.state != null) {
    useremail = location.state.useremail;
  }

  const [userinfo, setUserinfo] = useState({
    fullname: "Fetching Data.......",
    gender: "Fetching Data.........",
    dob: "Fetching Data........",
    country: "Fetching Data......",
    state: "Fetching Data.......",
    pincode: "Fetching Data..........",
  });
  const [showProfile, setShowProfile] = useState(false);
  const [editedField, setEditedField] = useState("");
  const [editedValue, setEditedValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (location.state == null) {
      navigate("/");
    } else {
      let s = "https://betawill-com.onrender.com/getinfo/" + useremail;
      let response = await fetch(s);
      let fres = await response.json();

      console.log(fres.userinfo);
      setUserinfo(fres.userinfo);
    }
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    setEditedField("");
    setEditedValue("");
  };

  const handleEdit = (field, value) => {
    setEditedField(field);
    setEditedValue(value);
  };
  
  const handleChange =async  () => {
    // Perform the necessary actions with editedField and editedValue
    // For example, update the corresponding state variable with the new value
    setUserinfo((prevUserinfo) => ({
      ...prevUserinfo,
      [editedField]: editedValue,
    }));
    let formData={
      useremail:useremail,
      field:editedField,
      value:editedValue
    }
    fetch('http://localhost:8080/changefield', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(async (response)=>
    {
        response=await response.json();
        response=response.status;
        alert(response)
    })
    
    setEditedField("");
    setEditedValue("");
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
          {Object.entries(userinfo).map(([field, value]) => (
            <div className="info" key={field}>
              <span className="label">{field[0].toUpperCase() + field.slice(1)}:</span>
              {editedField === field ? (
                <div className="edit-container">
                  <input
                    type="text"
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                  />
                  <button className="useredit" onClick={handleChange}>
                    Done
                  </button>
                </div>
              ) : (
                <span className="value">
                  {value}
                  <button className="useredit" onClick={() => handleEdit(field, value)}>
                    Edit
                  </button>
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <section>{useremail != null && <Mycourses email={useremail} />}</section>
    </div>
  );
};

export default Userinfo;
