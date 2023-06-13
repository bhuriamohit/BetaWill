import React, { useState } from 'react';

function VideoUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('video', selectedFile);
    console.log("Form data"+formData);
    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default VideoUploader;