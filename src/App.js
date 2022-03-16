// see google docs, React notes, Create the About Component

// You need to import React in every component file. You can 
// also import any images or CSS you want to use at the top.
import React from 'react';
import './App.css';
// import custom About component
import About from './components/About';
import Nav from './components/Nav';

// This App.js file is the center of the application. Think of App.js as 
// the root component, or the wrapper component that houses all of the other 
// components. To effect any change on the application, we need to either 
// modify the file or add components inside it.
function App() {
  // Inside the function, it seems that HTML is all that's returned. But 
  // actually, it's not HTML; it's a language called JSX that can represent 
  // HTML in JavaScript. Normally you can't add HTML to JavaScript, at least 
  // without making it a string. But it won't break the code in this case, 
  // because you're using webpack and React. Think of functions that return 
  // JSX as functions that use document.createElement(JSX). In fact, the 
  // way React uses JSX behind the scenes is very similar to 
  // document.createElement().
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
