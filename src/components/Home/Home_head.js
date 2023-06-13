import React from "react";
import VideoBackground from "./VideoBackground";
import './Home_head.css'

const Home_head = () => {
    return (
        <div>
        
           
        <div className="headingcontainer">
            <VideoBackground/>
            <p1 className="welcome">Welcome to</p1>
            <div class="betawill">
            <h1 className="beta">Beta</h1>
            <h1 className="will">Will</h1>
            </div>
            <p className="para">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed blandit odio et tellus maximus, auctor sagittis augue
                dignissim. Donec in nunc sollicitudin, fringilla neque at, tincidunt enim. Nullam id augue in massa euismod
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit odio et tellus maximus, auctor sagittis augue
                dignissim. Donec in nunc sollicitudin,     fringilla neque at, tincidunt enim. Nullam id augue in massa euismod
               
            </p>
        </div>
        </div>
    )
}

export default Home_head;