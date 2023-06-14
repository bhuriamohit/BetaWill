import React from "react";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";

const Userinfo=()=>
{
    const location = useLocation();
    const useremail = location.state.useremail;
    const [fullname,setfullname]=useState("Fetching Data.......");
    const [gender,setgender]=useState("Fetching Data.........");
    const [dob,setdob]=useState("Fetching Data........");
    const [country,setcountry]=useState("Fetching Data......")
    const [state,setstate]=useState("Fetching Data.......")
    const [pincode ,setpincode]=useState("Fetching Data..........")
    
    useEffect(()=>
    {
        fetchdata()
    })
    const fetchdata= async ()=>
    {
        let s="http://localhost:8080/getinfo/"+useremail;
        let response = await fetch(s)
        let fres=await response.json();
        
        console.log(fres.userinfo)
        setfullname(fres.userinfo.fullname)
        setdob(fres.userinfo.dob)
        setgender(fres.userinfo.gender)
        setcountry(fres.userinfo.country)
        fres=fres.userinfo;
        setstate(fres.state);
        setpincode(fres.pincode)

        
        
    }
    return(
        <div>
            <h2>UserInfo</h2>
            <h2>Email: {useremail}</h2>
            <button onClick={fetchdata}>Fetch Data</button>
            <h2>FullName: {fullname}</h2>
            <h2>DOB : {dob}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Country: {country}</h2>
            <h2>State: {state}</h2>
            <h2>Pincode :{pincode}</h2>
           
            
            
        </div>
    )
}

export default Userinfo;