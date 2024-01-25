import React, { useState } from 'react';
import { Navigation, Footer } from './Navigation';
import Playlist1 from './img/bruno-mars.jpg';
import Playlist2 from './img/songs-2003.jpg';
import Playlist3 from './img/hip-hop.avif';
import SpotifyPlayer from 'react-spotify-player';


export function HomePage(props){

    const [displayedArticle, setDisplayedArticle] = useState(null)

    function handleClick(event){
        if(event.target.value === "Bruno"){
            setDisplayedArticle(<BrunoSongList close={handleClick}/>)
        } else if(event.target.value === "2013"){
            setDisplayedArticle(<SongList2013 close={handleClick}/>)
        } else if(event.target.value === "Hip-Hop"){
            setDisplayedArticle(<HipHopSongList close={handleClick}/>)
        } else {
            setDisplayedArticle(null)
        } 
    }

    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
        width: '100%',
        height: 200,
        };
    const view = 'coverart'; // or 'coverart'
    const theme = 'black'; // or 'white'

    return(

        
        <div>

            <div className="navbar">
                <Navigation />
                <div className='spotify-player'>
                    <SpotifyPlayer
                        uri="https://open.spotify.com/album/4Q7i447BAaBGqarx3R18zP?si=PqTUKNihSD-eUDoJlXOBkg"
                        size={size}
                        view={view}
                        theme={theme}
                    />  
                </div>
            </div>
            <header>
                <h1>Melody Madness</h1>
            </header>
            <div>
                <h2 className="homepage-title">Most Recent Rankings</h2>

                <div className="container-fluid">
                    <div className="row">
                            <div className="col-md-4 col-4">
                                <div className="card">
                                    <img className="card-img-top" src={Playlist1} alt="Bruno Mars Album Cover" width = "400" height = "400"/>
                                    <div className="card-block">
                                        <h4 className="card-title">Favorite Bruno Mars Songs</h4>
                                        <div className="card-body">
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            <button className="topPlaylists button-1" onClick={handleClick} value="Bruno">show me!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-8">
                                <div className="card">
                                    <img className="card-img-top" src={Playlist2} alt="2013 Artists in Colorful Background" width = "400" height = "400"/>
                                    <div className="card-block">
                                        <h4 className="card-title">2013 Best Songs</h4>
                                        <div className="card-body">
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            <button className="topPlaylists button-1" onClick={handleClick} value="2013">show me!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="card">
                                    <img className="card-img-top" src={Playlist3} alt="Hip-Hop Album Covers" width = "400" height = "400"/>
                                    <div className="card-block">
                                        <h4 className="card-title">Best Hip-Hop Music!</h4>
                                        <div className="card-body">
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            <button className="topPlaylists button-1" onClick={handleClick} value="Hip-Hop">show me!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            {/* add homepage elements here and make them appear when link clicked */}
            {displayedArticle}
            <Footer />
        </div>
    );
}

function BrunoSongList(props){

    let handleClickCallback = props.close

    return(
        <div className="playlist-info">
            <div class="playlist-alert">
                <span class="closebtn" onClick={handleClickCallback} value="close">&times;</span>
                <h2>Favorite Bruno Mars Songs</h2>
            </div>
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
                    <tr>
                        <td>1</td>
                        <td>Bruno Mars</td>
                        <td>Young Girls</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bruno Mars</td>
                        <td>Just The Way You Are</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Bruno Mars</td>
                        <td>Grenade</td>
                        <td>2011</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Bruno Mars</td>
                        <td>That's What I Like</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Bruno Mars</td>
                        <td>Marry You</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Bruno Mars</td>
                        <td>24K Magic</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Bruno Mars</td>
                        <td>Locked Out Of Heaven</td>
                        <td>2012</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Bruno Mars</td>
                        <td>Treasure</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Bruno Mars</td>
                        <td>It Will Rain</td>
                        <td>2012</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Bruno Mars</td>
                        <td>Finesse - Remix; feat. Cardi B</td>
                        <td>2018</td>
                    </tr>
                </tbody>
            </table>
        </div>
)
}

function SongList2013(props){

    let handleClickCallback = props.close

    return(
        <div className="playlist-info">
            <div class="playlist-alert">
                <span class="closebtn" onClick={handleClickCallback} value="close">&times;</span>
                <h2>2013 Best Songs!</h2>
            </div>
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
                    <tr>
                        <td>1</td>
                        <td>Kelly Clarkson</td>
                        <td>People Like Us</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Justin Timberlake</td>
                        <td>Suit & Tie</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Kelly Clarkson</td>
                        <td>Underneath the Tree</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Avicii</td>
                        <td>Wake Me Up</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>One Direction</td>
                        <td>Story of My Life</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>P!nk</td>
                        <td>Just Give Me a Reason (feat. Nate Ruess)</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Daft Punk</td>
                        <td>Get Lucky (feat. Pharrell Williams & Nile Rodgers) - Radio Edit</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Miley Cyrus</td>
                        <td>Wrecking Ball</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Demi Lovato</td>
                        <td>Heart Attack</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Lana Del Rey</td>
                        <td>Summertime Sadness (Lana Del Rey Vs. Cedric Gervais) - Cedric Gervais Remix</td>
                        <td>2013</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function HipHopSongList(props){

    let handleClickCallback = props.close

    return(
        <div className="playlist-info">
            <div class="playlist-alert">
                <span class="closebtn" onClick={handleClickCallback} value="close">&times;</span>
                <h2>Best Hip-Hop Music!</h2>
            </div>
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
                    <tr>
                        <td>1</td>
                        <td>Kelly Rowland</td>
                        <td>Freak</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Drake</td>
                        <td>Hold On, We're Going Home</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Usher</td>
                        <td>DJ Got Us Fallin' In Love (feat. Pitbull)</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>G-Easy</td>
                        <td>Me, Myself & I</td>
                        <td>2016</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>T.I.</td>
                        <td>Castle Walls (feat. Christina Aguilera)</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Usher</td>
                        <td>OMG (feat. will.i.am)</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Wiz Khalifa</td>
                        <td>See You Again (feat. Charlie Puth)</td>
                        <td>2015</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Iggy Azalea</td>
                        <td>Fancy</td>
                        <td>2014</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
