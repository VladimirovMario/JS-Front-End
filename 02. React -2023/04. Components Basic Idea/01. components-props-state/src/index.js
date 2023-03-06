import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Disabled <React.StrictMode> for develop mode
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

reportWebVitals();
