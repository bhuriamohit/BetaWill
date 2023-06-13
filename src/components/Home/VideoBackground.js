import React from 'react';
import video from './video.mp4';
import './Home_head.css';

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video
        className="video-background"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
      </video>
    </div>
  );
};

export default VideoBackground;
