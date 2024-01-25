import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from '@testing-library/react';
import { BrowserRouter, Link, Router } from "react-router-dom";
import React, { useEffect, useState } from 'react';


import App from "./App.js"; 
import { Feature2 } from "./Feature2.js"; 


describe("App", () => {

  test("Renders Homepage without errors", () => {
    render(<App songs={[]} />,
          {wrapper: BrowserRouter});
  })

  test("Title displays on Homepage",() => {
    render(<App songs={[]} />,
          {wrapper: BrowserRouter});
    expect(screen.getByText("Melody Madness")).toBeInTheDocument(); 
  })

})

describe("Feature 2", ()=> {

  test("Renders Feature 2 without errors", () => {
    render(<Feature2 />,
          {wrapper: BrowserRouter}); 
  });

  

  test("Title displays on Pop Playoffs Page",() =>{
    render(<Feature2 />,
          {wrapper: BrowserRouter});
    expect(screen.getByText("Pop Playoffs")).toBeInTheDocument();
  })


// trying to cover lines 68, 72, 76, 80 which are the clickPair functions, which call setInputtedSongArray. unsure what to do?
test('clickPair changes setInputtedSongArray', () => {
  const setInputtedSongArray = jest.fn();
  render(<Feature2 setInputtedSongArray={setInputtedSongArray} />, { wrapper: BrowserRouter });

  const button1 = screen.getByTestId('button-1');
  fireEvent.click(button1);

  expect(setInputtedSongArray).toBeCalled
  });
  
  test('clickPairTwo changes setInputtedSongArray', () => {
    const setInputtedSongArray = jest.fn();
    // const clickPairTwo = jest.fn()
    render(<Feature2 setInputtedSongArray={setInputtedSongArray} />, { wrapper: BrowserRouter });
  
    const buttons = document.querySelectorAll('.button-1');
    const button2 = buttons[1];
    fireEvent.click(button2);
  
    expect(setInputtedSongArray).toBeCalled
  });
  
  
  test('clickPairThree changes setInputtedSongArray', () => {
    const setInputtedSongArray = jest.fn();
    render(<Feature2 setInputtedSongArray={setInputtedSongArray} />, { wrapper: BrowserRouter });
  
    const buttons = document.querySelectorAll('.button-1');
    const button3 = buttons[2];
    fireEvent.click(button3);
  
    expect(setInputtedSongArray).toBeCalled
  });
  
  test('clickPairFour changes setInputtedSongArray', () => {
    const setInputtedSongArray = jest.fn();
    render(<Feature2 setInputtedSongArray={setInputtedSongArray} />, { wrapper: BrowserRouter });
  
    const buttons = document.querySelectorAll('.button-1');
    const button4 = buttons[3];
    fireEvent.click(button4);
  
    expect(setInputtedSongArray).toBeCalled
  });
  

  test("Inputted Text renders in song options", () => {
      render(<Feature2 />,
            {wrapper: BrowserRouter});

      // song 1
      act(() => fireEvent.change(screen.getByTestId('song-name-1'), {target: {value: 'Test Song'}}));
      expect(screen.getByTestId('song-name-1')).toHaveValue("Test Song");

      // song 2
      act(() => fireEvent.change(screen.getByTestId('song-name-2'), {target: {value: 'Test Song'}}));
      expect(screen.getByTestId('song-name-2')).toHaveValue("Test Song");

      // song 3
      act(() => fireEvent.change(screen.getByTestId('song-name-3'), {target: {value: 'Test Song'}}));
      expect(screen.getByTestId('song-name-3')).toHaveValue("Test Song");

      // song 4
      act(() => fireEvent.change(screen.getByTestId('song-name-4'), {target: {value: 'Test Song'}}));
      expect(screen.getByTestId('song-name-4')).toHaveValue("Test Song");

      // song 5
      act(() => fireEvent.change(screen.getByTestId('song-name-5'), {target: {value: 'Test Song'}}));
      expect(screen.getByTestId('song-name-5')).toHaveValue("Test Song");

      // song 6
      act(() => fireEvent.change(screen.getByTestId('song-name-6'), {target: {value: 'Test Song'}}));
      expect(screen.getByTestId('song-name-6')).toHaveValue("Test Song");

      // song 7
      act(() => fireEvent.change(screen.getByTestId('song-name-7'), {target: {value: 'Test Song'}}));
      expect(screen.getByTestId('song-name-7')).toHaveValue("Test Song");

      // song 8
      act(() => fireEvent.change(screen.getByTestId('song-name-8'), {target: {value: 'Test Song'}}));
      expect(screen.getByTestId('song-name-8')).toHaveValue("Test Song");

  });
  
  

  test("Selects option from dropdown", () => {
      const { getAllByTestId } = render(<Feature2 />,
                                        {wrapper: BrowserRouter});

      // dropdown 1
      fireEvent.change(screen.getByTestId('select-dropdown-1'), { target: {value: 2} })
      let options1 = getAllByTestId('select-option')
      expect(options1[0].selected).toBeFalsy();
      expect(options1[1].selected).toBeTruthy();
      expect(options1[2].selected).toBeFalsy();

      // dropdown 2
      fireEvent.change(screen.getByTestId('select-dropdown-2'), { target: {value: 2} })
      let options2 = getAllByTestId('select-option')
      expect(options2[0].selected).toBeFalsy();
      expect(options2[1].selected).toBeTruthy();
      expect(options2[2].selected).toBeFalsy();

      // dropdown 3
      fireEvent.change(screen.getByTestId('select-dropdown-3'), { target: {value: 2} })
      let options3 = getAllByTestId('select-option')
      expect(options3[0].selected).toBeFalsy();
      expect(options3[1].selected).toBeTruthy();
      expect(options3[2].selected).toBeFalsy();

      // dropdown 4
      fireEvent.change(screen.getByTestId('select-dropdown-4'), { target: {value: 2} })
      let options4 = getAllByTestId('select-option')
      expect(options4[0].selected).toBeFalsy();
      expect(options4[1].selected).toBeTruthy();
      expect(options4[2].selected).toBeFalsy();

      // dropdown 5
      fireEvent.change(screen.getByTestId('select-dropdown-5'), { target: {value: 2} })
      let options5 = getAllByTestId('select-option')
      expect(options5[0].selected).toBeFalsy();
      expect(options5[1].selected).toBeTruthy();
      expect(options5[2].selected).toBeFalsy();

      // dropdown 6
      fireEvent.change(screen.getByTestId('select-dropdown-6'), { target: {value: 2} })
      let options6 = getAllByTestId('select-option')
      expect(options6[0].selected).toBeFalsy();
      expect(options6[1].selected).toBeTruthy();
      expect(options6[2].selected).toBeFalsy();
  });

  test('Test what goes into the state', () => {
    const setState = jest.fn()
    
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(initState => [initState, setState]);
    render(<Feature2 />,
          {wrapper: BrowserRouter});
  })

  test('When changed, called onChange with handleChangeOne', async() => {
    const handleChangeOne = jest.fn()
    const inputtedSongOne = "Test"

    render(<textarea data-testid="song-name-1" placeholder="Song Name" onChange={handleChangeOne} value={inputtedSongOne}>
    </textarea>)

    fireEvent.change(screen.getByTestId('song-name-1'), {target: {value: 'Love this test!'}})

    expect(handleChangeOne).toBeCalledTimes(1);
  })

  test('When pair clicked, called clickPair', () => {
    const clickPairOne = jest.fn();

    render(<button data-testid="button-1" className="button-1" onClick={clickPairOne}>Submit!</button>);

    fireEvent.click(screen.getByTestId('button-1'))

    expect(clickPairOne).toBeCalledTimes(1);
  })

});
