import React, { useState } from "react";
import { BrowserRouter as Router, Switch,Routes ,Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import WhyUs from './WhyUs'
import MostAffordable from "./MostAffordable";
import VideoBackground from "./VideoBackground";
import './Home.css'
import Home_head from "./Home_head";

const Home=()=>
{
    const [pagestatus,setpagestatus]=useState('home');
   
    
    return(
        
        <section id="home" className="section">
            <Home_head/>
            <WhyUs/>
            
        </section>
    )
}
export default Home;