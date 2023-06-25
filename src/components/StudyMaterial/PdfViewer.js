import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// Replace './firebase' with the path to your Firebase configuration file


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
const PdfViewer = () => {
  const [downloadUrl, setDownloadUrl] = useState('');

  const generateDownloadUrl = async () => {
    try {
      const videoRef = ref(storage, `/StudyMaterial/Google/Lecture1.pdf`);

      // Replace 'YOUR_TOKEN_HERE' with the actual token provided by Firebase
      const token = '88c3d072-9109-4956-ab89-b77a2afc18a4';
      getDownloadURL(videoRef, {
        Authorization: `Bearer ${token}`
      })
        .then((url) => {
          setDownloadUrl(url);
        })
      
    } catch (error) {
      console.error('Error generating download URL:', error);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <div>
      <button onClick={generateDownloadUrl}>Generate Download URL</button>
      <br />
      <h2>{downloadUrl}</h2>
      <button onClick={handleDownload} disabled={!downloadUrl}>Download File</button>
    </div>
  );
};

export default PdfViewer;
