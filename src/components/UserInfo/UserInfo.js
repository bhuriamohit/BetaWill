import React from "react";
import { useLocation ,useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";

const Userinfo=()=>
{
    const navigate=useNavigate()
    const location = useLocation();
    let useremail;
    if(location.state!=null)
    {
        useremail = location.state.useremail;
    }
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
        if(location.state==null)
        {
            alert("please login first")
            navigate('/')
            
        }
        else
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

        
        
    }
    return(
        <div>
            <h2>UserInfo</h2>
            <h2>Email: {useremail}</h2>
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