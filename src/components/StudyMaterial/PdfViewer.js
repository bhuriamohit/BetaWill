import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pdfUrl = 'https://example.com/path-to-pdf.pdf';

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pdf-viewer">
      <div className="pdf-container">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document"
        >
          <Page pageNumber={currentPage} className="pdf-page" />
        </Document>
      </div>
      <div className="pdf-controls">
        <button onClick={goToPreviousPage} disabled={currentPage <= 1}>
          Previous
        </button>
        <p>
          Page {currentPage} of {numPages}
        </p>
        <button onClick={goToNextPage} disabled={currentPage >= numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
