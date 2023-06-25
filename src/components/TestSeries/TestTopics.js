import React, { useState } from "react";
import { useEffect } from "react";
import './TestTopics.css'
import { useNavigate } from "react-router-dom";
const TestTopics=()=>
{
    const [Testtopics,setTestTopics]=useState(["Fetching........"])
    const [number,setnumber]=useState(0);
    // const navigate=useNavigate()
    useEffect(()=>
    {
        fetch("http://localhost:8080/fetchtestlist")
        .then(async (resp)=>
        {
            resp=await resp.json();
            setTestTopics(resp.farr);
            setnumber(Testtopics.length)
            console.log(Testtopics)
        })
    })

    const gototest=(index)=>
    {
      let topic=Testtopics[index]
      
    }
    return(
        <div className="test-topic-container">
        {Testtopics.map((topic, index) => (
          <div className="test-topic-item" key={index}>
            {topic}
          </div>
        ))}
      </div>
    );
    
}

export default TestTopics