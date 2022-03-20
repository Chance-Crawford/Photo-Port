import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

// destructure the props object to get currentCategory object.
function Gallery({ currentCategory }){
    // Let's update the Gallery component so that it gets the name and 
    // description of each category from an object, rather than  
    // from hardcoded placeholder values.
    const { name, description } = currentCategory;

    return (
        // pass down the name of the current category down to the
        // PhotoList component.
        <section>
          <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
          <p>{description}</p>
          <PhotoList category={currentCategory.name} />
        </section>
      );
}

export default Gallery;