import React, { useState, useRef } from 'react';
import { set, get } from 'idb-keyval';

function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0); // Upload progress
  const [fileLink, setFileLink] = useState(null); // Link for downloading file
  const [fileName, setFileName] = useState(null); // Name of the uploaded file
  const fileInputRef = useRef(null); // Reference to the file input element

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    let file = e.dataTransfer.files[0];
    await handleFileUpload(file);
  };

  const handleFileInputChange = async (e) => {
    let file = e.target.files[0];
    await handleFileUpload(file);
  };

  const handleRectangleClick = () => {
    fileInputRef.current.click(); // Trigger the file input dialog
  };

  const handleFileUpload = async (file) => {
    setFileLink(null); // Reset the fileLink when a new upload starts
    setFileName(file.name); // Set the name of the uploaded file

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(r => setTimeout(r, 50)); // simulate delay
    }

    await storeFile(file);

    const blob = await retrieveFile(file.name);
    const url = window.URL.createObjectURL(blob);

    setFileLink(url);
    setProgress(0); // Reset progress after completion
  };

  async function storeFile(file) {
    try {
      await set(file.name, file);
      console.log("File stored successfully!");
    } catch (error) {
      console.error("Error storing file:", error);
    }
  }

  async function retrieveFile(filename) {
    try {
      const file = await get(filename);
      return file;
    } catch (error) {
      console.error("Error retrieving file:", error);
    }
  }

  return (
    <div>
      <div
        onClick={handleRectangleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          width: '300px',
          height: '200px',
          border: isDragging ? '2px dashed green' : '2px dashed gray',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        {progress > 0 && progress < 100 ? (
          <div style={{
            position: 'absolute',
            left: '0',
            top: '50%',
            width: `${progress}%`,
            height: '30px',
            backgroundColor: 'green',
            transform: 'translateY(-50%)'
          }} />
        ) : (
          "Drop your files here!"
        )}
        <input 
          type="file" 
          style={{ display: 'none' }} 
          ref={fileInputRef}
          onChange={handleFileInputChange}
        />
      </div>

      {fileLink && (
        <div style={{ marginTop: '20px' }}>
          <a href={fileLink} download>{`Download ${fileName}`}</a>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
