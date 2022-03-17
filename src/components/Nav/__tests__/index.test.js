import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
      render(<Nav />);
    });
  
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
      
        expect(asFragment()).toMatchSnapshot();
    });
})

// the test will check if the emoji has been inserted 
// into the <h2> element in the Nav component.
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);
        // We can also test the emoji's accessibility 
        // features by querying the element by its aria-label. 
        // In the next evaluation, or assert, part of our test, we can 
        // use the getByLabelText method and query by the aria-label value
        // which was defined as "camera" in the html. The span element that
        // encapsulates the camera emoji has an aria-label value of camera.
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})  

// Nice work! For the final test of the Nav, we'll check to see if some of
// our links are visible. This way, we can ensure that the users can 
// navigate properly to different parts of the application.
describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      // finds the elements by the data-testid value in the Nav 
      // component.
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
})