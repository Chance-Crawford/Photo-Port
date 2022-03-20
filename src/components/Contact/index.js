import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // A feature of this Hook is the ability to initialize the values 
    // of the state.
    // In this case, we want to clear the input fields 
    // on the component loading. Thus, we'll set the initial state to 
    // empty strings. As the expression shows, formState will have three 
    // key-value pairs to represent the three user inputs: name, email, 
    // and message.
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // This is a good case where we can destructure the formState 
    // object into its named properties, name, email, and message.
    // Now we can use these constants to assign the initial state, 
    // which are empty strings, to the defaultValue
    const { name, email, message } = formState;
    // Next, we can use isValid to determine the error message. The error 
    // message must now be defined and declared so that we can use it for the 
    // different errors that occur. Let's use the useState Hook to handle the 
    // error state. Note that the initial state of the errorMessage is an 
    // empty string.
    const [errorMessage, setErrorMessage] = useState('');

    // Now let's define the handleChange function. This function will 
    // sync the internal state of the component formState with the user 
    // input from the DOM. The onChange event listener will ensure that 
    // the handleChange function fires whenever a keystroke is typed 
    // into the input fields.
    function handleChange(e) {
        // checks if the input in the email field input is a valid email before
        // syncing the user input to the formState
        if (e.target.name === 'email') {
            // returns a boolean
            const isValid = validateEmail(e.target.value);
            
            // isValid conditional statement
            // Now that we've declared the errorMessage Hook, let's assign 
            // the error message for the email input based on the isValid value.
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
            
        }
        // if the input triggered was not an email input, then it must be the 
        // message or the name input.
        else{
            // if nothing is entered in the field, set an error message state
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                // if not, errorMessage is set to empty string, meaning 
                // that there's no error.
                setErrorMessage('');
            }
        }  

        // In the function, we're using the setFormState (the name of the state
        // setter that we created).
        // function to update the formState value for the name property. 
        // We assign the value taken from the input field in the UI 
        // with e.target.value and assign this value to the property 
        // formState.name. 
        // The e.target.name gets the name of the input that was typed into.
        // (since this function only fires on the input elements).
        // The e.target.name property actually refers to the name attribute 
        // of the form element. This attribute value matches the property 
        // names of formState (name, email, and message) and 
        // allows us to use [ ] to create dynamic property names.
        // We use the spread operator, ...formState, 
        // so we can retain the other key-value pairs in this object. 
        // Without the spread operator, the formState object would be 
        // overwritten to only contain the name: value key pair.
        // Because we wrapped the state change in a conditional, the state is only updated
        // if the form data has passed the quality tests above. Because we check to make
        // sure that there is no error message state.
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value });
        }

    }
    
    // Note that console.log(formState) is located outside the 
    // handleChange function declaration—because the asynchronous 
    // nature of the setFormState function will cause the console.log 
    // placed in the function body of handleChange to appear delayed in 
    // its ability to sync. However, when we place the console.log in 
    // the scope of the ContactForm function, we can see that the state 
    // is updated properly
    console.log(formState);

    // Now let's create the function that'll handle the submission 
    // of the form data.
    function handleSubmit(e) {
        // This function should look straightforward. We'll prevent the 
        // default action of the form Submit button which is to refresh the 
        // page. and then log the formState object on the Submit button click.
        e.preventDefault();
        console.log(formState);
    }


    return (
        // Now let's add the defaultValue attribute to each of the 
        // three form elements that'll handle form data. With this 
        // attribute, we can assign the initial state values to the 
        // input fields in the DOM
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                {/* Due to keywords reserved in JavaScript, we need to 
                replace the for attribute in the <label> element to htmlFor, 
                just as class had to be changed to className previously. */}
                <label htmlFor="name">Name:</label>
                {/* In the next step, we'll create a function that will sync 
                the state of the component formState with the user inputs. 
                First, add the attribute onBlur to the <input> elements, 
                and assign a function to this attribute, aptly called 
                handleChange.  The onBlur attribute will fire the event once 
                the user has changed focus from the input field, thus allowing the 
                user to finish their entry before validating their input. There are 
                other attributes such as this aswell. For example the onChange event 
                listener will ensure that 
                the handleChange function fires whenever a keystroke is 
                typed into the input field for name.*/}
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
            </div>
            {/*  If errorMessage has a truthy value, the <div> block will render. 
            If errorMessage doesn't have an error message, the following <div> block 
            doesn't render. The && operator—known as the AND operator—is being used here 
            as a short circuit. If the first value resolves to true, the second expression 
            is evaluated. */}
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </section>
    );
}

export default ContactForm;