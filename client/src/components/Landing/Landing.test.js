import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Landing from './index';
//import { initializeApp } from 'firebase/app';


// test if thinkpiece renders on page 
describe('Landing', () => {

    test('renders component', () => {


        const { getByTestId } = render(<Landing />);
        const landingComponent = getByTestId('landing-component');
        expect(landingComponent).toBeInTheDocument();
    });



});



