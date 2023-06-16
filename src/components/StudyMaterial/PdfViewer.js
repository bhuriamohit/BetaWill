import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

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
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const accessToken = '88c3d072-9109-4956-ab89-b77a2afc18a4'; // Replace with your Firebase access token
    const filePath = '/StudyMaterial/Google/Lecture1.pdf'; // Replace with the path to your PDF file in Firebase Storage

    const fetchPdfUrl = async () => {
      try {
        const pdfRef = ref(storage, filePath);
        const downloadUrl = await getDownloadURL(pdfRef, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setPdfUrl(downloadUrl);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdfUrl();
  }, []);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="pdf-viewer">
      {pdfUrl ? (
        <div className="pdf-container">
          <div className="pdf-box">
            <Document file={pdfUrl} onLoadSuccess={handleDocumentLoadSuccess}>
              <Page pageNumber={currentPage} width={500} />
            </Document>
          </div>
          <div className="pdf-navigation">
            <button
              className="pdf-button"
              disabled={currentPage <= 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous Page
            </button>
            <p>
              Page {currentPage} of {numPages}
            </p>
            <button
              className="pdf-button"
              disabled={currentPage >= numPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next Page
            </button>
          </div>
        </div>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};

export default PdfViewer;
