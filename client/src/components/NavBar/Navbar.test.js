import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from './index';
import { initializeApp } from 'firebase/app';


// test if thinkpiece renders on page 
describe('Navbar', () => {

    test('renders component', () => {

        const { getByTestId } = render(<NavBar />);
        const NavBarComponent = getByTestId('NavBar');
        expect(NavBarComponent).toBeInTheDocument();
    });


});



