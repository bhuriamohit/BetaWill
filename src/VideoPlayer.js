import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <video className="video-js vjs-default-skin" controls controlsList='nodownload'>
        <source src={require('./final_video.mp4')} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;