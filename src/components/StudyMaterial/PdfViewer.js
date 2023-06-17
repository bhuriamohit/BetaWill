import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = () => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <h1>PDF Viewer</h1>
      <Viewer
        fileUrl="/assets/pdf-open-parameters.pdf"
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
          // Add more plugins if needed
        ]}
      />
    </div>
  );
};

export default PdfViewer;
