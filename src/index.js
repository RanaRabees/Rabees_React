import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './Index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import Appa from './Native';

const tree = ReactDOM.createRoot(document.getElementById('tree'));
tree.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



const rana1 = ReactDOM.createRoot(document.getElementById('rana1'));
rana1.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

const rana2 = ReactDOM.createRoot(document.getElementById('rana2'));
rana2.render(
  <React.StrictMode>
    <Appa />
  </React.StrictMode>
);








