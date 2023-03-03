import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ButtonAppBar from './index';;



describe('ButtonAppBar', () => {

    test('renders component', () => {
        const { getByTestId } = render(<ButtonAppBar />);
        const appbar = getByTestId('appbar');
        expect(appbar).toBeInTheDocument();
    });

});

//test fails 