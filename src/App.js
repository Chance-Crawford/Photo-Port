// see google docs, React notes, Create the About Component

// You need to import React in every component file. You can 
// also import any images or CSS you want to use at the top.
import React, {useState} from 'react';
import './App.css';
// import custom About component
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";
import ContactForm from './components/Contact';

// This App.js file is the center of the application. Think of App.js as 
// the root component, or the wrapper component that houses all of the other 
// components. To effect any change on the application, we need to either 
// modify the file or add components inside it.
function App() {

  // see google docs, React notes, Using React Hooks and states AND
  // Add Conditional Rendering to the Nav Component
  // Originally the categories and state was put into the Nav component,
  // but we still had one problem. Gallery is not a child of Nav, so we 
  // can't pass props from Nav to the Gallery. Props are attributes that
  // you can add to a component to change its behavior in that components 
  // function. For example <Car model="Honda" />. in the Car component
  // we could access props.model to get the value "Honda". Gallery needs
  // access to the currentCategory of the Nav so that it can display the
  // correct pictures based off of which category is currently selected.
  // In order to give Gallery access to the currentCategory, 
  // we’re going to “lift” the state up one level. Whenever you think 
  // state needs to be used in multiple sibling components, 
  // it's normally a good idea to lift the state up until it can be 
  // passed as props to any child components that need it.
  // First we'll define the categories in an array above the return 
  // statement. Instead of just listing each category's name, we'll 
  // create objects that contain each category's name and a short 
  // description. That way, we can use that same data elsewhere in the app.
  // Okay, so we start by initializing the category state as an array of a 
  // few objects. This could be just a regular array, rather than an array 
  // inside useState, but we chose to use the useState hook here so that 
  // we can have the option to change the categories at some point in the 
  // future. It is completely fine to use useState without a setter, but 
  // keep in mind that it offers no advantages over just creating a 
  // variable within the component.
  // we are using useState to set the default values for the array of photos
  // in case we want to add a setter or different state later.
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  // see google docs, React notes, Using React Hooks and states AND
  // Add Conditional Rendering to the Nav Component
  // Lift state to App.js and pass the currentCategory 
  // and its setter through to Nav.
  // useState() is a function that will always return an array. 
  // The first item is the value of your state, and 
  // the second item is a setter, which allows you to set the state to 
  // something else. Because we're destructuring from an array, 
  // we could name these two things whatever we want, but it's best to 
  // stick to variable names that make sense.
  // here the default or starting state (currentCategory) is set to the 
  // first object in the categories array.
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // We need to condition what renders based on which menu item the user 
  // selects from the navigation bar. If the user selects the contact me link,
  // we will use this state to dynamically render part of the page to be different,
  // this is called conditional rendering a SPA (single page application). 
  // A single-page application, or SPA, is a web application or website that 
  // interacts with the web browser by dynamically rewriting the current webpage, 
  // in place of the default method of the browser loading entirely new pages. 
  // This approach allows for a more fluid UI because the page doesn't have to be 
  // reloaded each time. React allows for conditional rendering and can replace 
  // a portion of the webpage based on the user's selection.
  // we can establish a conditional statement to render the Gallery and About 
  // components when this value is false and the ContactForm component when true. 
  const [contactSelected, setContactSelected] = useState(false);

  // Inside the function, it seems that HTML is all that's returned. But 
  // actually, it's not HTML; it's a language called JSX that can represent 
  // HTML in JavaScript. Normally you can't add HTML to JavaScript, at least 
  // without making it a string. But it won't break the code in this case, 
  // because you're using webpack and React. Think of functions that return 
  // JSX as functions that use document.createElement(JSX). In fact, the 
  // way React uses JSX behind the scenes is very similar to 
  // document.createElement().
  return (
    // Pass the categories, currentCategory and its setter through to Nav
    // using props, see above comments.
    // adding these attributes creates the props object with properties
    // that have the given values. This can now be accessed and changed by 
    // the Nav component.
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        // The last step is to update the contactSelected value whenever a user 
        // selects Contact in the navigation bar. This can be accomplished in 
        // the Nav component, where the Contact menu item resides.
        // Passing the getter and setter functions into the Nav component will 
        // allow this component to modify the state in the App component, which 
        // will conditionally render based on the user's selection.
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* With contactSelected, we can establish a conditional statement to render 
        the Gallery and About components when this value is false and the ContactForm 
        component when true.
        This expression is the same as:
        if(!contactSelected) {
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </> 
        } else {
            <ContactForm></ContactForm>
        } 
        
        This is a shorthand condition, called a ternary operator. It is popular in react.*/}
        {!contactSelected ? (
          // Notice the <> and </> that wrap the Gallery and About components. Can you 
          // imagine what these are and what they might be for? They are called React 
          // fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>.
          // They're a useful tool in React to allow multiple elements to be grouped together. 
          // Although in JSX you can only return a single parent element, this rule can be 
          // satisfied by wrapping the children components in a React fragment. This also 
          // allows you to wrap elements without creating extra DOM nodes, like wrapping 
          // with a <div> would do.
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
