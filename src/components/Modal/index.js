// see google docs, React notes, Compose the Modal
// modal component that zooms up the picture when the user clicks on it.
import React from 'react';

// How will we get the data for each photo to fill out the model?
// The list of photos is rendered in the PhotoList component, so this 
// is the logical place for the modal to open—and for us to access the 
// individual photo data. We'll establish the Photolist as the parent 
// component and the Modal as the child component, because the Modal is 
// located in PhotoList. PhotoList also plays a major role in activating 
// the modal, but we we'll discuss that more later.
// Destructure props received from PhotoList 
// into currentPhoto in the Modal parameter.
function Modal({ currentPhoto, onClose }) {
    // Destructure props received from PhotoList 
    // into currentPhoto in the Modal parameter.
    // Then destructure currentPhoto properties into constants to 
    // assign their values into the modal
    const {name, category, description, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                {/* use index and category provided in currentPhoto object in 
                order to make a path to the jpg image in the assets folder */}
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                {/* when the close button is clicked, it
                will trigger the onClose function defined in the PhotoList
                component. */}
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
      </div>
    );
}
  
  export default Modal;