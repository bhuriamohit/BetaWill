import React, { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import './PdfList.css'

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
  const PdfList = () => {
      
      const topic = "Google";
      const [number, setNumber] = useState(0);
    useEffect(()=>
    {
        fetch("http://localhost:8080/lecturesrecord/"+topic)
        .then(async (response)=>
        {
            response=await response.json();
            setNumber(response.number)

        })
    })

  const handlePdfClick = (pdfIndex) => {
    try {
        const videoRef = ref(storage, `/StudyMaterial/${topic}/Lecture${pdfIndex}.pdf`);
  
        // Replace 'YOUR_TOKEN_HERE' with the actual token provided by Firebase
        const token = '88c3d072-9109-4956-ab89-b77a2afc18a4';
        getDownloadURL(videoRef, {
          Authorization: `Bearer ${token}`
        })
          .then((url) => {
            window.open(url, '_blank');
          })
        
      } catch (error) {
        console.error('Error generating download URL:', error);
      }
    
  };

  return (
    <div>
      <h2>Pdf List</h2>
      <div className="pdf-list">
        {Array.from({ length: number }, (_, index) => (
          <div key={index}>
            <button className="pdf-button" onClick={() => handlePdfClick(index + 1)}>
              PDF {index + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfList;
