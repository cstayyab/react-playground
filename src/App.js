// src/App.js

import React from 'react';
import styles from './App.css';
import DragDropUpload from './components/DragDropUpload';
import FileUpload from './components/FileUpload';
import QrCode from './components/QrCode';


function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <QrCode value="https://www.frontendmentor.io/" title="Improve your front-end skills by building projects" description="Scan your QR code to visit Frontend Mentor and take your coding skills to the next level"/>
    </div>
  );
}

export default App;
