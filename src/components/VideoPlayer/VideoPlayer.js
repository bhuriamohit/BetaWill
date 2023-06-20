// VideoPlayer.jsx
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import Gap from '../../Gap';

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
  const [topic, setTopic] = useState('Gold Man');
  const [videoUrl, setVideoUrl] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentLecture, setCurrentLecture] = useState('Lecture1');
  const [lectureCount, setLectureCount] = useState(10);
  const [descriptionArr, setDescriptionArr] = useState([]);

  useEffect(() => {
    const fetchLectureData = async () => {
      const response = await fetch(`https://betawill-com.onrender.com/Lecturesrecord/${topic}`);
      const data = await response.json();
      setLectureCount(data.number);
      setDescriptionArr(data.description);
    };

    fetchLectureData();

    const videoRef = ref(storage, `/Lectures/${topic}/${currentLecture}.mp4`);

    // Replace 'YOUR_TOKEN_HERE' with the actual token provided by Firebase
    const token = '88c3d072-9109-4956-ab89-b77a2afc18a4';

    getDownloadURL(videoRef, {
      Authorization: `Bearer ${token}`
    })
      .then((url) => {
        setVideoUrl(url);
      })
      .catch((error) => {
        console.error('Error getting video URL:', error);
      });
  }, [topic, currentLecture]);

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

  const changeLecture = (toLecture) => {
    setCurrentLecture(toLecture);

    const videoRef = ref(storage, `/Lectures/${topic}/${toLecture}.mp4`);

    // Replace 'YOUR_TOKEN_HERE' with the actual token provided by Firebase
    const token = '53cf5819-b785-4989-8727-e62a6b993c42';

    getDownloadURL(videoRef, {
      Authorization: `Bearer ${token}`
    })
      .then((url) => {
        setVideoUrl(url);
      })
      .catch((error) => {
        console.error('Error getting video URL:', error);
      });
  };

  const lectureList = Array.from({ length: lectureCount }, (_, index) => `Lecture${index + 1}`);

  return (
    <div className="main-container">
      <div id="video-player-container" className="video-player-container">
        {videoUrl ? (
          <>
            <ReactPlayer
              url={videoUrl}
              controls={true}

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

      <Gap />

      <div className="lecture-list-container">
        <h2 className="course-header">{topic}</h2>
        <div className="lecture-list">
          {lectureList.map((lecture, index) => (
            <div
              className={`lecture-item ${currentLecture === lecture ? 'active' : ''}`}
              key={lecture}
              onClick={() => changeLecture(lecture)}
            >
              <h3>{`${lecture}: ${descriptionArr[index]}`}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
