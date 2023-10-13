# React Playground - A React playground for learning and experimenting with React.
> Author: [**@cstayyab**](https://github.com/cstayyab)

## Table of Contents
- [React Playground](#react-playground)
  - [Usage](#usage)
  - [Components](#components)
    - [File Upload](#file-upload)
    - [QR Code Generator](#qr-code-generator)


## Usage
1. Clone the repository
```bash
git clone https://github.com/cstayyab/react-playground
```
2. Install dependencies
```bash
npm install
```
3. Run the project
```bash
npm start
```
4. Use Components in `src/App.js` to experiment with them. Just replace the content of `src/App.js` to the example code given for each component in the [Components](#components) section.

## Components
Here's the list of components that are available in this project with thier respective documentation.
### File Upload
Creates a File Drag and Drop component and stores it in IndexedDB as downloadable file
```jsx
// src/App.js

import React from 'react';
import styles from './App.css';
import FileUpload from './components/FileUpload';


function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <FileUpload />
    </div>
  );
}

export default App;

```

### QR Code Generator
Generates a QR Code for the given text and display it as a Card with its title and description. This component was created as a solution to problem given on [Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H/hub).

```jsx
// src/App.js

import React from 'react';
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
```
