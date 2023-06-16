import React from 'react';
import PdfViewer from './PdfViewer';

const PdfViewer2= () => {
  const accessToken = '45780798-04bd-4115-a61a-08cd14032aa1';
  const filePath = '/StudyMaterial/Google/Lecture1.pdf'; // Replace with the actual path to your PDF file

  return (
    <div>
      <h1>PDF Viewer Example</h1>
      <PdfViewer accessToken={accessToken} filePath={filePath} />
    </div>
  );
};

export default PdfViewer2;
