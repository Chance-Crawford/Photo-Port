import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// Navigation header used att the top of App.js
function Nav(props) {

    // see App.js for comments on the props
    // and category state. Props is an object that
    // has all the 3 below properties added to it with values.
    // Here we are destructuring the object to get the property
    // values that we want.
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    // We just received a last second request. Lyza wants to update 
    // the tab on the browser to reflect the user's category selection. 
    // This will improve the user experience by providing the user with 
    // feedback from the website.
    //  If we simply reassign document.title = currentCategory, we'll 
    // change the value of document.title. But will this cause a 
    // re-render of the component? Judging by what we experienced 
    // earlier in this lesson—no, it won't. We must use a hook to trigger a 
    // re-render on a variable value change.
    // we will introduce a new Hook called useEffect. The main difference 
    // between useEffect and useState is that useEffect is an API that 
    // reflects the lifecycle methods of the component, such as when the 
    // component mounts, unmounts, or updates.
    // Here useEffect waits for an update to currentCategory, when it changes,
    // the function to change the document.title will trigger.
    // The second argument directs the hook to re-render the component 
    // on changes to the value of this state. In other words, if 
    // currentCategory changes now, the component will re-render so that 
    // the change in document.title will be visible to the user.
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
          <h2>
            <a data-testid="link" href="/">
              <span role="img" aria-label="camera">
                {" "}
                📸
              </span>{" "}
              Oh Snap!
            </a>
          </h2>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a
                // when About is selected, contactSelected is 
                // set to false, and the About component is rendered.
                // based on our conditional rendering logic in App.js 
                  onClick={() => setContactSelected(false)}
                  href="#about"
                >
                  About me
                </a>
              </li>
              {/* when contact is clicked it will set the contactSelected state
              to true, which will render the contact componenet and unrender the 
              about component because of our logic in App.js */}
              {/* In the class attribute, we'll add a JavaScript conditional 
              statement template literal. If the value of contactSelected is true, 
              which means 
              that the user selected Contact, we want to add the CSS class navActive, 
              which will illuminate the background. We'll use the && operator 
              as a short circuit. Note the addition of the { } to contain the 
              JavaScript expression, as well as the template literal to interpolate 
              the JavaScript statement
              */}
              <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}>Contact</span>
              </li>
              {categories.map((category) => (
                // when using map you must provide a unique key to each
                // element so that React can track it in the virtual DOM.
                // this key is usually an id value but we use the categorie's
                // name here. 
                // this code means that currentCategory.name === category.name 
                // will get evaluated, and as long as it is true, 
                // then the second bit of the short circuit, navActive, 
                // will be returned.
                // nav active is a class that changes the color of the 
                // active nav link.
                <li className={`mx-1 ${
                    // checks if each object's name is equal to the 
                    // name of the currently selected category. And that the contact tab
                    // is not selected. Once
                    // an object is, give it's element the class, 
                    // if not move on to the
                    // next object.
                    currentCategory.name === category.name && !contactSelected && 'navActive'
                    }`} key={category.name}>
                  <span
                    onClick={() => {
                      // when every li is clicked, it will use the state setter
                      // function to change currentCategory to the object
                      // that is currently being clicked, then the setter
                      // automatically re-renders the component to the page.
                      setCurrentCategory(category);
                      // Now modify the click handler for the category to ensure 
                      // that the Gallery is rendered from our conditional rendering 
                      // logic defined in App.js. Also sets contactSelected to false
                      // whenever a category link is clicked.
                      setContactSelected(false);
                    }}
                  >
                    {capitalizeFirstLetter(category.name)}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    );
}

export default Nav;