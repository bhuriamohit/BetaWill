import React, { useState } from "react";
import { useEffect } from "react";
import './TestTopics.css'
import { useNavigate } from "react-router-dom";
const TestTopics=()=>
{
    // const [Testtopics,setTestTopics]=useState(async ()=>
    // {
    //   let farr=[]
    //   await fetch("http://localhost:8080/fetchtestlist")
    //   .then(async (resp)=>
    //   {
    //       resp=await resp.json();
    //       farr=resp
    //       setnumber(farr.length)
    //       console.log("FinalArray")
    //   })
    //   return farr;
    // })

    const [Testtopics,setTestTopics]=useState([])
    const [number,setnumber]=useState(0);
    const navigate=useNavigate()
    useEffect(()=>
    {
        fetch("http://localhost:8080/fetchtestlist")
        .then(async (resp)=>
        {
            resp=await resp.json();
            setTestTopics(resp.farr);
            setnumber(Testtopics.length)
            console.log(resp.farr)
        })
    })

    const gototest=(index)=>
    {
      let topic=Testtopics[index];
      localStorage.removeItem('UserTestData')
      localStorage.removeItem('questions')
      localStorage.removeItem('currentquestion')
      localStorage.removeItem('pageStatus')
      localStorage.removeItem('questionscolor')
      navigate('/testpage',{state:{testtopic:topic}})

      
    }
    return(
        <div className="test-topic-container">
        {Testtopics.map((topic, index) => (
          <div onClick ={()=>gototest(index)} className="test-topic-item" key={index}>
            {topic}
          </div>
        ))}
      </div>
    );
    
}

export default TestTopics