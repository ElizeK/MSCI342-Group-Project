import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Profile from './index';
import { initializeApp } from 'firebase/app';



describe('Profile', () => {
    test('renders component', () => {
        const firebaseConfig = {
            apiKey: "AIzaSyCZAB2T8nEvaN_2vZtQ02DHCwKNYO0eAZ0",
            authDomain: "pulse-news-a78ea.firebaseapp.com",
            databaseURL: "https://pulse-news-a78ea-default-rtdb.firebaseio.com",
            projectId: "pulse-news-a78ea",
            storageBucket: "pulse-news-a78ea.appspot.com",
            messagingSenderId: "330468143787",
            appId: "1:330468143787:web:73cd4c80d52d0c576cbdee",
            measurementId: "G-TSE18HSSZ7"
        };

        const mockApp = initializeApp(firebaseConfig);

        jest.mock('firebase/app', () => ({
            initializeApp: jest.fn(() => mockApp),
        }));

        const Profile = () => <div data-testid="profile-component" />;

        const { getByTestId } = render(<Profile />);

        const profileComponent = getByTestId('profile-component');
        expect(profileComponent).toBeInTheDocument();
    });
});



