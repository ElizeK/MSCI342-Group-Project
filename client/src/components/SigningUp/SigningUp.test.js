import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SigningUp from './index';
import { initializeApp } from 'firebase/app';


// test if thinkpiece renders on page 
describe('SignUp', () => {

    test('renders component', () => {


        const { getByTestId } = render(<SigningUp />);
        const signupComponent = getByTestId('sign-up-component');
        expect(signupComponent).toBeInTheDocument();
    });

    it("checking title input", () => {
        const { getByTestId } = render(<SigningUp />);
        //expect(screen.getByText('Title')).toBeInTheDocument(); doesnt work - function not recognized after download 
        const emailInput = getByTestId('email');
        expect(emailInput).toBeInTheDocument();
    })

    it("checking password input", () => {
        const { getByTestId } = render(<SigningUp />);
        //expect(screen.getByText('Title')).toBeInTheDocument(); doesnt work - function not recognized after download 
        const passwordInput = getByTestId('password');
        expect(passwordInput).toBeInTheDocument();
    })
    it("checking username input", () => {
        const { getByTestId } = render(<SigningUp />);
        //expect(screen.getByText('Title')).toBeInTheDocument(); doesnt work - function not recognized after download 
        const userInput = getByTestId('username');
        expect(userInput).toBeInTheDocument();
    })

    it("checking passwordconf input", () => {
        const { getByTestId } = render(<SigningUp />);
        //expect(screen.getByText('Title')).toBeInTheDocument(); doesnt work - function not recognized after download 
        const confInput = getByTestId('conf');
        expect(confInput).toBeInTheDocument();
    })




});



