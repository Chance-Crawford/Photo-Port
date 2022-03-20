import React, { useState } from 'react';
import Modal from '../Modal';

// get the name of the current category from the props
// object that was passed down from Gallery.
// PhotoList is a child of Gallery.
function PhotoList({ category }) {

    // we are using useState to set the default values for the array of photos
    const [photos] = useState([
        {
          name: 'Grocery aisle',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Grocery booth',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Building exterior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Restaurant table',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cafe interior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cat green eyes',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Green parrot',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Yellow macaw',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Pug smile',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Pancakes',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Burrito',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Scallop pasta',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Burger',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Fruit bowl',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Green river',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Docks',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Panoramic village by sea',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Domestic landscape',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Park bench',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    //  We need to make it so that only photos with the selected category 
    // appear. We can do this by filtering the array above to only have
    // the details 
    const currentPhotos = photos.filter((photo) => photo.category === category);

    // Consider the type of data in the PhotoList component that allows 
    // the modal to work properly. The two critical data points needed for 
    // the modal to render are the image and the index, i. Let's pass the 
    // image and index data as props—to allow the modal to render the image.
    // We'll use the useState Hook in the PhotoList component to manage 
    // the current photo state and make this data accessible to the Modal 
    // component through props
    const [currentPhoto, setCurrentPhoto] = useState();

    // In React, we'll use the onClick attribute and assign a click 
    // handler function to capture the individual photo data and we 
    // will be able to send that to the Modal component. Let's call 
    // the click handler toggleModal.
    // The image object represents the element in the currentPhotos 
    // array, and the i will render the image as we did previously 
    // in the src attribute with the require function.
    const toggleModal = (image, i) => {
      // uses the state above to change the current photo whenever an 
      // image is clicked by using the data retrieved through the click 
      // event. We will be passing this object as a 
      // props object to the modal component.
      // we use the spread operator to get all the properties from the 
      // image object and then put it in a NEW object with the index property
      // added.
      setCurrentPhoto({...image, index: i});
      // when the picture is clicked it toggles the isModelOpen state.
      // so whenever this function is triggered, the isModelOpen state becomes the
      // opposiite of itself. This is because we are using toggleModal() to open
      // and close the modal.
      // this triggers the Modal component to receive the currentPhoto data
      // and then render the modal
      setIsModalOpen(!isModalOpen);
    }

    // state that decides whether the model should show or not.
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
          <div className="flex-row">
            {/* if modal has been activated from toggleModal() above,
            then activate the modal and pass the currentPhoto data 
            down to the Modal component as a props
            object, which the Modal will use to render.
            The props object contains the currentPhoto and the onClose function.
            onClose identifies the function to run whenever the
            onClose action is triggered within the Modal. */}
            {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
            {currentPhotos.map((image, i) => (
                // for every object in the currentPhotos filtered 
                // array above, find
                // its picture and render an img element by using the
                // details of the object
              <img
                src={require(`../../assets/small/${category}/${i}.jpg`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                // In React, we'll use the onClick attribute and assign a click 
                // handler function to capture the individual photo data and we 
                // will be able to send that to the Modal component. Let's call 
                // the click handler toggleModal.
                // The image object represents the element in the currentPhotos 
                // array, and the i will render the image as we did previously 
                // in the src attribute with the require function.
                onClick={() => toggleModal(image, i)}
                // The absence of this unique key value will cause an 
                // error message. Used for react to identify new elements from a 
                // map function.
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
}

export default PhotoList;