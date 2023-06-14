import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import ReactPlayer from 'react-player';

// Initialize Firebase app
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

  return (
    <div>
      {videoUrl ? (
        <ReactPlayer url={videoUrl} controls={true} width="100%" height="auto" />
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoPlayer;
