// see google docs, React notes, Set Up the Project Using create-react-app
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// You can think of the index.js file as the main entry point for the 
// application. The ReactDOM library is rendering the App component at the 
// root element in the HTML. You can find the HTML by navigating to the 
// public folder.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
