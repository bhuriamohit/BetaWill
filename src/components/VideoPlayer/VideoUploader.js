import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

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

const VideoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const storageRef = ref(storage, 'videos/' + selectedFile.name);

      try {
        setUploadProgress(0);
        setUploadError(null);

        const uploadTask = uploadBytesResumable(storageRef, selectedFile);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setUploadProgress(progress);
          },
          (error) => {
            setUploadError(error.message);
          },
          async () => {
            console.log('Video uploaded successfully!');
            setUploadProgress(100);
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            setDownloadURL(url);
          }
        );
      } catch (error) {
        console.error('Error uploading video:', error);
        setUploadError(error.message);
      }
    }
  };

  return (
    <div>
      <h2>File Uploader</h2>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      {uploadProgress > 0 && <p>Upload progress: {uploadProgress}%</p>}
      {uploadError && <p>Error: {uploadError}</p>}
      {downloadURL && (
        <div>
          <p>Download URL:</p>
          <a href={downloadURL} target="_blank" rel="noopener noreferrer">
            {downloadURL}
          </a>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
