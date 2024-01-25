import React, { useState } from 'react';
import { Navigation, Footer } from './Navigation';

export function Feature2() {
    // consolidate similar state variables into arrays
    const [inputtedSongs, setInputtedSongs] = useState(['', '', '', '', '', '', '', '']);
    const [choices, setChoices] = useState(['Select!', 'Select!', 'Select!', 'Select!']);
    const [winners, setWinners] = useState(['Select!', 'Select!']);

    const placeholderText = "Select!"

    // created a single event handler for input changes
    const handleInputChange = (event, index) => {
        const value = event.target.value;
        const newInputtedSongs = [...inputtedSongs];
        newInputtedSongs[index] = value;
        setInputtedSongs(newInputtedSongs);
    }

    // created an event handler for submitting song pairs
    const handlePairSubmit = (index1, index2) => {
        setInputtedSongs([...inputtedSongs, inputtedSongs[index1], inputtedSongs[index2]]);
    }

    // created an event handler for Round One choices
    const handleRoundOneChoice = (event, index) => {
        const value = event.target.value;
        const newChoices = [...choices];
        newChoices[index] = value;
        setChoices(newChoices);
    }

    // event handler for Round Two winners
    const handleRoundTwoWinner = (event, index) => {
        const value = event.target.value;
        const newWinners = [...winners];
        newWinners[index] = value;
        setWinners(newWinners);
    }

    // mapped pairs of song inputs
    const songPairs = [0, 2, 4, 6].map((startIdx, idx) => (
        <div className="matchup" key={idx}>
            <div>
                <textarea
                    data-testid={`song-name-${startIdx + 1}`}
                    placeholder="Song Name"
                    onChange={(e) => handleInputChange(e, startIdx)}
                    value={inputtedSongs[startIdx]}
                />
            </div>
            <div>
                <textarea
                    data-testid={`song-name-${startIdx + 2}`}
                    placeholder="Song Name"
                    onChange={(e) => handleInputChange(e, startIdx + 1)}
                    value={inputtedSongs[startIdx + 1]}
                />
            </div>
            <div>
                <button
                    data-testid={`button-${idx + 1}`}
                    className="button-1"
                    onClick={() => handlePairSubmit(startIdx, startIdx + 1)}
                >
                    Submit!
                </button>
            </div>
        </div>
    ));

    return (
        <div>
            <Navigation />
            <header>
                <h1>Pop Playoffs</h1>
            </header>
            <main>
                <p className="instructions card">
                    To create your personalized bracket, first type in the pairs of songs you want and click submit.
                    Then, select the winner from each pair in the drop-down menus!
                </p>
                <div className="container-fluid col-sm-6 col-md-3 d-flex">
                    <div className="round">
                        <h2>Input Your Song Choices!</h2>
                        {songPairs}
                    </div>
                    <div className="col-sm-6 col-md-3 d-flex">
                        <RoundOne />
                    </div>
                    <div className="col-sm-6 col-md-3 d-flex">
                        <RoundTwo />
                    </div>
                    <div className="col-sm-6 col-md-3 d-flex">
                        <Winner />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );

    function RoundOne() {
        // mapped Round One dropdowns
        const roundOneDropdowns = [0, 2, 4, 6].map((startIdx, idx) => (
            <div className="dropdown start-item" key={idx}>
                <form>
                    <select
                        data-testid={`select-dropdown-${idx + 1}`}
                        id="filterSelect"
                        className="form-select"
                        value={choices[idx]}
                        onChange={(e) => handleRoundOneChoice(e, idx)}
                    >
                        <option data-testid={`select-option`}>{placeholderText}</option>
                        <option data-testid={`select-option`}>{inputtedSongs[startIdx]}</option>
                        <option data-testid={`select-option`}>{inputtedSongs[startIdx + 1]}</option>
                    </select>
                </form>
            </div>
        ));
        return (
            <div className="round">
                <h2>Round One</h2>
                {roundOneDropdowns}
            </div>
        );
    }
    
    function RoundTwo() {
        // mapped Round Two dropdowns
        const roundTwoDropdowns = [0, 1].map((idx) => (
            <div className="dropdown start-item" key={idx}>
                <form>
                    <select
                        data-testid={`select-dropdown-${idx + 5}`}
                        id="filterSelect"
                        className="form-select"
                        value={winners[idx]}
                        onChange={(e) => handleRoundTwoWinner(e, idx)}
                    >
                        <option data-testid={`select-option`}>{placeholderText}</option>
                        <option data-testid={`select-option`}>{choices[idx * 2]}</option>
                        <option data-testid={`select-option`}>{choices[idx * 2 + 1]}</option>
                    </select>
                </form>
            </div>
        ));
        return (
            <div className="round">
                <h2>Round Two</h2>
                {roundTwoDropdowns}
            </div>
        );
    }
    

    function Winner() {
        return (
            <div className="round">
                <h2>Winner!</h2>
                <div className="dropdown start-item">
                    <form>
                        <select id="filterSelect" className="form-select">
                            <option>{placeholderText}</option>
                            <option>{winners[0]}</option>
                            <option>{winners[1]}</option>
                        </select>
                    </form>
                </div>
            </div>
        );
    }
}
