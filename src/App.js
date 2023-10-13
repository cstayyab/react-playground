// src/App.js

import React from 'react';
import FileUpload from './components/FileUpload';
import QrCode from './components/QrCode';
import Tabs from './components/ReactTabs';


function App() {
  return (
    <Tabs tabs={[
      {
        title: 'File Upload',
        component: <FileUpload />
      },
      {
        title: 'QR Code',
        component: <QrCode value="https://www.frontendmentor.io/" title="Improve your front-end skills by building projects" description="Scan your QR code to visit Frontend Mentor and take your coding skills to the next level" />
      }
    ]}/>
  );
}

export default App;
