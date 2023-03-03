// import React from "react";
// import renderer from 'react-test-renderer';
// import Link from '../Home/Link';
// import Thinkpiece from "./index"
// const request = require("supertest");
// import app from "./index"
// const { createPool } = require("mysql2/promise");
// const faker = require("faker");

// describe('Thinkpiece component tests', () => {

//   let connection;

//   beforeEach(async () => {
//     let createTableSQL
//   })
//   test('test root path', async () => {
//     const response = await request(app).get("/Thinkpiece")
//     expect(response.statusCode).toBe(200)
//   });
// });


import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ThinkPiece from './index';


// test if thinkpiece renders on page 
describe('ThinkPiece', () => {

  test('renders component', () => {
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

