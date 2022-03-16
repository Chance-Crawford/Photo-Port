import React from 'react';
// import bg image
import coverImage from "../../assets/cover/cover-image.jpg";

// React components must always return a single parent JSX element. 
// However, this element may have many children elements.
// for example, adding a div below the section tag would not work.
// there can only be one parent element, in this case that is the section
// <div>
// </div>
function About() {
  return (
      // class is already a keyword in JavaScript so to add a class to
      // an element we use className
    <section className='my-5'>
      <h1 id="about">Who am I?</h1>
      {/* You can use the {} syntax in JSX to use JavaScript. */}
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;