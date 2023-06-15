import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'

const firebaseConfig = {
    apiKey: "AIzaSyClCN3-iXsY3sR_t_p723eXdz-fZr1WV-g",
    authDomain: "friend-website-45257.firebaseapp.com",
    projectId: "friend-website-45257",
    storageBucket: "friend-website-45257.appspot.com",
    messagingSenderId: "387813290760",
    appId: "1:387813290760:web:638da9a8a110d99395f2bd",
    measurementId: "G-MNSPGVSE1F"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const videoRef = ref(storage, '/videos/bhuria.mp4');

    // Replace 'YOUR_TOKEN_HERE' with the actual token provided by Firebase
    const token = '53cf5819-b785-4989-8727-e62a6b993c42';

    getDownloadURL(videoRef, {
      'Authorization': `Bearer ${token}`
    })
      .then((url) => {
        setVideoUrl(url);
      })
      .catch((error) => {
        console.error('Error getting video URL:', error);
      });
  }, []);

  const toggleFullScreen = () => {
    const videoContainer = document.getElementById('video-player-container');

    if (!isFullScreen) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen();
      } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
      } else if (videoContainer.msRequestFullscreen) {
        videoContainer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className='mainbox'>

    <div id="video-player-container" className="video-player-container">
      {videoUrl ? (
        <>
          <ReactPlayer
            url={videoUrl}
            controls={true}
            width="100%"
            height="100%"
            className="react-player"
          />
          <button className="fullscreen-button" onClick={toggleFullScreen}>
            {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
          </button>
        </>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
    <h2>List List</h2>
    <h2>List List</h2>
    <h2>List List</h2>
    <h2>List List</h2>
    <h2>List List</h2>
    <h2>List List</h2>
    <h2>List List</h2>
    <h2>List List</h2>
    <h2>List List</h2>
    </div>
  );
};


export default VideoPlayer;
