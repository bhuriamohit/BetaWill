import React, { useState } from "react";
import { BrowserRouter as Router, Switch,Routes ,Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import WhyUs from './WhyUs'
import MostAffordable from "./MostAffordable";

import './Home.css'
const Home=()=>
{
    const [pagestatus,setpagestatus]=useState('home');
   
    
    return(
        
        <section id="home" className="section">
            
            <MostAffordable/>
            <WhyUs/>
            
        </section>
    )
}
export default Home;