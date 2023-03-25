import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ThinkPiece from './index';
import { initializeApp } from 'firebase/app';


// test if thinkpiece renders on page 
describe('ThinkPiece', () => {

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

    // Mocking the Firebase SDK
    jest.mock('firebase/app', () => ({
      initializeApp: jest.fn(() => mockApp),
    }));

    const { getByTestId } = render(<ThinkPiece />);
    const thinkPieceComponent = getByTestId('think-piece-component');
    expect(thinkPieceComponent).toBeInTheDocument();
  });

  it("checking title input", () => {
    const { getByTestId } = render(<ThinkPiece />);
    //expect(screen.getByText('Title')).toBeInTheDocument(); doesnt work - function not recognized after download 
    const titleInput = getByTestId('Title');
    expect(titleInput).toBeInTheDocument();
  })

  it("checking content input", () => {
    const { getByTestId } = render(<ThinkPiece />);
    const contentInput = getByTestId('Content');
    expect(contentInput).toBeInTheDocument();
  })

  it("checking URL input", () => {
    const { getByTestId } = render(<ThinkPiece />);
    const urlInput = getByTestId('URL');
    expect(urlInput).toBeInTheDocument();
  })

  it("checking Topic input", () => {
    const { getByTestId } = render(<ThinkPiece />);
    const topicInput = getByTestId('Topic');
    expect(topicInput).toBeInTheDocument();
  })


});



