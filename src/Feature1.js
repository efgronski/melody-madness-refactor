import React, { useState } from 'react';
import { Navigation, Footer } from './Navigation';
import {fabric} from 'fabric';
import _ from 'lodash';

export function Feature1(props){
    const songs = props.songs;
    const personalizedSongList = props.personalizedSongList; // Reference to personalizedSongList

    const [currentSongData, setCurrentSongData] = useState(songs)
    const [currentDisplay, setCurrentDisplay] = useState('start')
    const [playlistName, setPlaylistName] = useState('Untitled Playlist')

    let displayComponent = <IntroRank 
                                displayCallback = {changeDisplay} 
                                songs={songs} 
                                currentSongsCallback={setCurrentSongData}
                                playlistCallback={setPlaylistName} 
                            />

    function changeDisplay(displayName){
        setCurrentDisplay(displayName)
    }

    if(currentDisplay === 'start'){
        displayComponent = <IntroRank 
                                displayCallback = {changeDisplay} 
                                songs={songs} 
                                currentSongsCallback={setCurrentSongData} 
                                playlistCallback={setPlaylistName} 
                            />
    }
    else if(currentDisplay === 'cards'){
        displayComponent = <SortCards 
                                songs={currentSongData}
                                displayCallback={changeDisplay} 
                                currentSongsCallback={setCurrentSongData}
                            />
    }
    else {
        displayComponent = <SongTable 
                                songs={currentSongData}
                                displayCallback = {changeDisplay}
                                playlistName={playlistName}
                            />
    }

    return(
        <div>
            <Navigation />
            <header>
                <h1>Song Battles!</h1>
            </header>

            {displayComponent}

            <Footer />
        </div>
    )
}

function IntroRank(props){

    let changeDisplay = props.displayCallback
    let songData = props.songs
    let setCurrentSongDataCallback = props.currentSongsCallback
    let setPlaylist = props.playlistCallback

    const [selectedFilter, setSelectedFilter] = useState('Artist')
    const [alertMessageDisplay, setAlertMessageDisplay] = useState(null)
    const [inputtedText, setInputtedText] = useState('')
    const [inputtedTitle, setInputtedTitle] = useState('')

    function changeFilter(event){
        let selectFilter = event.target.value
        setSelectedFilter(selectFilter)
    }

    function handleChange(event){
        let value = event.target.value
        setInputtedText(value)
    }

    function handleTitleChange(event){
        let value = event.target.value
        setInputtedTitle(value)
    }

    function handleClick(event){
        setPlaylist(inputtedTitle)
        let filteredData = songData.filter((song) => {
            if(inputtedText === ''){
                return song
              }
              else {
                return song[selectedFilter] === inputtedText
            }
        })
        if(filteredData.length === 0){
            setAlertMessageDisplay(
                <div className="alert">
                    The {selectedFilter} you chose is not available. Try again!
                </div>
            )
            setInputtedText('')
        } else {
            setAlertMessageDisplay(null)
            setCurrentSongDataCallback(filteredData)
            setInputtedText('')
            changeDisplay('cards')
        }
    }

    let displayedFilter =   <input
                                type="text"
                                onChange={handleChange}
                                value={inputtedText}
                                placeholder={"Search for " + selectedFilter}>
                            </input>

    if(selectedFilter === "Genre"){
        displayedFilter =   <select id="filterSelect" className="form-select" value={inputtedText} onChange={handleChange}>
                                <option>Pop</option>
                                <option>Hip-Hop</option>
                                <option>Rock</option>
                                <option>Country</option>
                                <option>Rap</option>
                                <option>Alternative</option>
                                <option>Latin</option>
                                <option>Electronic</option>
                            </select>
    } else if(selectedFilter === "Year"){
        displayedFilter =   <select id="filterSelect" className="form-select" value={inputtedText} onChange={handleChange}>
                                <option>2010</option>
                                <option>2011</option>
                                <option>2012</option>
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                            </select>
    }
    else{
        displayedFilter =   <input
                                type="text"
                                onChange={handleChange}
                                value={inputtedText}
                                placeholder={"Search for " + selectedFilter}>
                            </input>
    }

    return(
        <div>
            {alertMessageDisplay}
            <p className="instructions card"> To sort songs first choose how you would like the filter our library. You can rank by artist, genre, or year! Make sure to use proper capitalization on artist's names.</p>
            <div className="start-feat1">
                <div className="start-item">
                    <p>Rank songs by</p>
                </div>
                <div className="dropdown start-item">
                    <form>
                        <select id="filterSelect" className="form-select" value={selectedFilter} onChange={changeFilter}>
                            <option>Genre</option>
                            <option>Artist</option>
                            <option>Year</option>
                        </select>
                    </form>
                </div>
                <div className="start-item">
                    <p>for</p>
                </div>
                {/* <!-- Users should be able to search for whichever object they sorted by --> */}
                <div className="search-bar-first start-item">
                    <form>
                        {displayedFilter}
                        {/* <input
                            type="text"
                            onChange={handleChange}
                            value={inputtedText}
                            placeholder={"Search for " + selectedFilter}>
                        </input> */}
                    </form>
                </div>
                <div className="start-item">
                    <p>and add to</p>
                </div>
                {/* <!-- Users can input a playlist name, and it can be referenced for later --> */}
                <div className="playlist-name start-item">
                    <form>
                        <input 
                            type="text" 
                            onChange={handleTitleChange}
                            value={inputtedTitle}
                            placeholder="Playlist Name" 
                        />
                    </form>
                </div>
            </div>
            {/* <!-- This button makes the cards appear and users can start selecting their songs --> */}
            <button className="begin" onClick={handleClick}>Begin!</button>
        </div>
    )
}

function SortCards(props){

    let songData = props.songs
    let songDataLength = songData.length - 1;
    let changeDisplay = props.displayCallback
    let keepSongCount = songData
    let setCurrentSongDataCallback = props.currentSongsCallback

    const [leftSong, setLeftSong] = useState(songData[0])
    const [rightSong, setRightSong] = useState(songData[1])

    if(songDataLength === 0){

        function submitNothing(event){
            changeDisplay('table')
        }

        return(
            <div>
                <button onClick={submitNothing} >Not enough songs to sort! :(</button>
            </div>
        )
    } else {
    
        function changeRightCard(event){
            rightSong.Rank++
            let newSong = fabric.util.getRandomInt(0,songDataLength)
            setRightSong(songData[newSong])
        }

        function changeLeftCard(event){
            leftSong.Rank++
            let newSong = fabric.util.getRandomInt(0,songDataLength)
            setLeftSong(songData[newSong])
        }

        function FirstCard(props){
            const song = props.song
            return(
                <button className="card-selection first-card" onClick={changeLeftCard}>
                    <div className="card1 song-card">
                        <h2>{song.Song}</h2>
                        <p>{song.Artist}</p>
                    </div>
                </button>
            )
        }

        function SecondCard(props){
            const song = props.song
            return(
                <button className="card-selection second-card" onClick={changeRightCard}>
                    <div className="card2 song-card">
                        <h2>{song.Song}</h2>
                        <p>{song.Artist}</p>
                    </div>
                </button>)
        }

        function Cards(props){
            return(
                    <div className="cards">
                        <FirstCard song={leftSong}/>
                        <p className="vs">Vs.</p>
                        <SecondCard song={rightSong}/>
                    </div>
            )
        }

        function submitRankings(event){
            console.log("sorting...")
            keepSongCount = keepSongCount.sort((a, b) => (a.Rank > b.Rank) ? 1 : -1)
            keepSongCount = _.reverse(keepSongCount)
            setCurrentSongDataCallback(keepSongCount)
            changeDisplay('table')
        }

        return(
            <div>
                <p className="instructions card"> Now that you have selected your filtered library, it is time to rank! Click on the song you like best out of the two. Once you are done ranking hit the submit button.</p>
                <Cards />
                <button className="submitRanks" onClick={submitRankings} >Submit!</button>
            </div>
        )
    }
}

function SongTable(props){

    let keepSongCount = props.songs
    let changeDisplay = props.displayCallback
    let callingPlaylist = props.playlistName

    function handleRestart(event){
        changeDisplay('start')
    }

    for(let i = 0; i < keepSongCount.length; i++){
        let songObj = keepSongCount[i];
        songObj.Rank = i + 1
    }
    
    let songsArray = keepSongCount.map((songData) => {
        const elem = <SongRow
                      songs={songData}
                      key={songData.Song}
                     />
        return elem;})

    function SongTable(props){
        return(
            <div className="final-playlist">
                <h2>{callingPlaylist}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Artist</th>
                            <th>Title</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songsArray}
                    </tbody>
                </table>
            </div>
            )
        }
        
        function SongRow(props){
            const {Song, Artist, Year, Rank} = props.songs
            return(
            <tr>
                <td>{Rank}</td>
                <td>{Artist}</td>
                <td>{Song}</td>
                <td>{Year}</td>
            </tr>
        )}
        
    
    return(
        <div>
            <SongTable songsArray = {songsArray}/>
            <button className="profile restart" onClick={handleRestart}>Restart</button>
        </div>
    )
}
    