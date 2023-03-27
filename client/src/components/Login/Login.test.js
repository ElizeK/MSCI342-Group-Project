import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from './index';




// test if thinkpiece renders on page 
describe('Login', () => {

    test('renders component', () => {


        const { getByTestId } = render(<Login />);
        const loginComponent = getByTestId('login-component');
        expect(loginComponent).toBeInTheDocument();
    });

    it("checking email input", () => {
        const { getByTestId } = render(<Login />);
        //expect(screen.getByText('Title')).toBeInTheDocument(); doesnt work - function not recognized after download 
        const emailInput = getByTestId('Email');
        expect(emailInput).toBeInTheDocument();
    })

    it("checking password input", () => {
        const { getByTestId } = render(<Login />);
        //expect(screen.getByText('Title')).toBeInTheDocument(); doesnt work - function not recognized after download 
        const passwordInput = getByTestId('Password');
        expect(passwordInput).toBeInTheDocument();
    })


});








