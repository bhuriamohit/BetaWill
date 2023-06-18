import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const CourseDescription=()=>
{

    useEffect(()=>
    {
        fetchdetails()
    })
    const [information ,setinformation]=useState({
        about:"Fetching.......",
        description:"Fetching..........",
        price:"Fetching.............."
    })
    const location=useLocation();
    const title=location.state.coursedescription;
    const fetchdetails=()=>
    {
        let s="http://localhost:8080/coursedetail/"+title;
        fetch(s).then(async (resp)=>
        {
            let fres=await resp.json()
            fres=fres.data
            setinformation(fres)
            console.log(information);
        })
    }
    return(
        <div>
            <h2>Course Name : {title}</h2>
            <p>About : {information.about}</p>
            <h2>Price: {information.price}</h2>
            
        </div>
    )
}
export default CourseDescription