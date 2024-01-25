import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Footer } from './Navigation';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import BlankProfile from './img/blank-profile-circle.png';


// Initialize Firebase
// Replace the Firebase configuration with our own
// const firebaseConfig = {
//   apiKey: "AIzaSyCVjq63-BoqsxPgzaLSr2Vx42ybVc_7Gd8",
//   authDomain: "melody-madness.firebaseapp.com",
//   projectId: "melody-madness",
//   storageBucket: "melody-madness.appspot.com",
//   messagingSenderId: "848255905927",
//   appId: "1:848255905927:web:16b0be3d6f7e3d8d57c822"
// };

//firebase.initializeApp(firebaseConfig);
//const ui = new firebaseui.auth.AuthUI(firebase.auth());

export function Profile(props) {
  const [txtName, setTxtName] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedPronoun, setSelectedPronoun] = useState("");
  const [isBrunoMarsVisible, setIsBrunoMarsVisible] = useState(false);
  const [isHipHopVisible, setIsHipHopVisible] = useState(false);
  const [isSelenaGomezVisible, setIsSelenaGomezVisible] = useState(false);
  const [isHitRewindVisible, setIsHitRewindVisible] = useState(false);
  const [isPopStudyVisible, setIsPopStudyVisible] = useState(false);
  const [isLifesAMovieVisible, setIsLifesAMovieVisible] = useState(false);
  const [isTheWeekndVisible, setIsTheWeekndVisible] = useState(false);
  const [isSGVisible, setIsSGVisible] = useState(false);
  const [isCamilaVisible, setIsCamilaVisible] = useState(false);

  useEffect(() => {
    initFirebaseUI();
  }, []);

  const handleGenderChange = (e) => {
    if (e.target.value === "Prefer not to say") {
      setSelectedGender("");
    } else {
      setSelectedGender(e.target.value);
    }
  };

  const handlePronounChange = (e) => {
    if (e.target.value === "Prefer not to say") {
      setSelectedPronoun("");
    } else {
      setSelectedPronoun(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ txtName, selectedGender, selectedPronoun });

    const profileData = {
      txtName,
      selectedGender,
      selectedPronoun,
    };

    // Save the profile data to Firebase
    const db = firebase.firestore();
    db.collection('profiles')
      .doc('user_id')
      .set(profileData)
      .then(() => {
        console.log('Profile data saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving profile data:', error);
      });
  };

  

  const initFirebaseUI = () => {
    const uiConfig = {
      signInOptions: [
        // Added the sign-in options we want to support
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],

      signInSuccessUrl: '/profile',
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    };

    //ui.start('#firebaseui-auth-container', uiConfig);
  };
  

  const handleBrunoMarsClick = () => {
    setIsBrunoMarsVisible(!isBrunoMarsVisible);
    setIsHipHopVisible(false);
  };

  const handleHipHopClick = () => {
    setIsHipHopVisible(!isHipHopVisible);
    setIsBrunoMarsVisible(false);
  };

  const handleSelenaGomezClick = () => {
    setIsSelenaGomezVisible(!isSelenaGomezVisible);
    setIsHitRewindVisible(false);
  };

  const handleHitRewindClick = () => {
    setIsHitRewindVisible(!isHitRewindVisible);
    setIsSelenaGomezVisible(false);
  };

  const handlePopStudyClick = () => {
    setIsPopStudyVisible(!isPopStudyVisible);
    setIsHipHopVisible(false);
  };


  const handleLifesAMovieClick = () => {
    setIsLifesAMovieVisible(!isLifesAMovieVisible);
    setIsHipHopVisible(false);
  };

  const handleTheWeekndClick = () => {
    setIsTheWeekndVisible(!isTheWeekndVisible);
    setIsSGVisible(false);
  };

  const handleSGClick = () => {
    setIsSGVisible(!isSGVisible);
    setIsTheWeekndVisible(false);
  };

  const handleCamilaClick = () => {
    setIsCamilaVisible(!isCamilaVisible);
    setIsTheWeekndVisible(false);
 
  };



  return (

    
    <div>
      
      <Navigation />
      <header>
        <h1>Profile</h1>
      </header>

      <div>
      <p className="instructions card"> Welcome to your profile! Provide your name, gender, and preferred pronouns to personalize your experience. Click 'Save Changes' to save your profile.</p>
            

        <section className="About">
          <div id="firebaseui-auth-container"></div>
          <h2>About Me</h2>
          <p>{txtName}</p>
          <p>{selectedGender}</p>
          <p>{selectedPronoun}</p>
          <p>
            <img src={BlankProfile} width="200" alt="blank profile circle" />
          </p>

          

          <form onSubmit={handleSubmit}>
            <h4>Name:</h4>
            <input type="text" id="txtName" name="txtName" onChange={(e) => setTxtName(e.target.value)} value={txtName} />

            <h4>Gender:</h4>
            <select onChange={handleGenderChange} value={selectedGender}>
              <option>Female</option>
              <option>Male</option>
              <option>Prefer not to say</option>
            </select>

            <h4>Preferred Pronouns:</h4>
            <select onChange={handlePronounChange} value={selectedPronoun}>
              <option>She/Her</option>
              <option>He/Him</option>
              <option>They/Them</option>
              <option>Prefer not to say</option>
            </select>

            <button type="submit" class="my-button">Save Changes</button>



          </form>
        </section>
        <p className="instructions card"> Here, you can access and manage your saved personalized playlists and explore a wide range of curated playlists.</p>
            
        <section className="listContainer">
  <section className="Ranking List">
    <h3>My Personalized Lists</h3>

    <ol>
    
    <li>
                <button onClick={handleBrunoMarsClick} className="playlist-tab">
            
                 
                  Favorite Bruno Mars Songs
                </button>
                {isBrunoMarsVisible && (
                   <div className="playlist-info">
    <span className="closebtn" onClick={handleBrunoMarsClick}>&times;</span>
    <h3>Favorite Bruno Songs</h3>
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
          <td>Just the Way You Are</td>
          <td>2010</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bruno Mars</td>
          <td>Locked Out of Heaven</td>
          <td>2012</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bruno Mars</td>
          <td>24K Magic</td>
          <td>2016</td>
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
)} 
                  
</li>

      <li>
                <button onClick={handleHitRewindClick} className="playlist-tab">
                  Hit Rewind
                </button>
                {isHitRewindVisible && (
                  <div className="playlist-info">
                    <span className="closebtn" onClick={handleHitRewindClick} value="close">&times;</span>
                    <h3>Hit Rewind</h3>
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
          <td>Ed Sheeran</td>
          <td>Photograph</td>
          <td>2014</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bruno Mars</td>
          <td>Just the Way You Are</td>
          <td>2010</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Style</td>
          <td>Taylor Swift</td>
          <td>2014</td>
        </tr>

                            <tr>
                        <td>4</td>
                        <td>Adele</td>
                        <td>Someone Like You</td>
                        <td>2011</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Justin Bieber</td>
                        <td>Beauty and A Beat</td>
                        <td>2012</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Sam Smith</td>
                        <td>I'm Not The Only One</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Meghan Trainor</td>
                        <td>Dear Future Husband</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Lady Gaga</td>
                        <td>Million Reasons</td>
                        <td>2016</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Carly Rae Jepsen</td>
                        <td>Call Me Maybe</td>
                        <td>2012</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Selena Gomez</td>
                        <td>Same Old Love</td>
                        <td>2015</td>
                    </tr>
      </tbody>
    </table>
                  </div>
                )}
              </li>




              <li>
                <button onClick={handleLifesAMovieClick} className="playlist-tab">
                  Life's a Movie
                </button>
                {isLifesAMovieVisible && (
                  <div className="playlist-info">
                    <span className="closebtn" onClick={handleLifesAMovieClick} value="close">&times;</span>
                    <h3>Life's A Movie</h3>
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
                          <td>The Lumineers</td>
                          <td>Sleep On The Floor</td>
                          <td>2016</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Tal Bachman</td>
                          <td>She's Too High</td>
                          <td>1999</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Seafret</td>
                          <td>Atlantis</td>
                          <td>2016</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Coldplay</td>
                          <td>Fix You</td>
                          <td>2005</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>U2</td>
                          <td>With Or Without You</td>
                          <td>2017</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>ILLENIUM, Jon Bellion</td>
                          <td>Good Things Fall Apart (with Jon Bellion)</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Billy Joel</td>
                          <td>Vienna</td>
                          <td>1977</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Nicki Minaj</td>
                          <td>The Night Is Still Young</td>
                          <td>2014</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </li>
    
    </ol>
  </section>

          <section className="My Playlists">
            <h3>Playlists</h3>
            <ol>
             


            <li>
        <button onClick={handleSelenaGomezClick} className="playlist-tab">
          Selena Gomez Oldies
        </button>
        {isSelenaGomezVisible && (
          <div className="playlist-info">
            <span className="closebtn" onClick={handleSelenaGomezClick}>&times;</span>
            <h3>Selena Gomez Oldies</h3>
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
          <td>Selena Gomez</td>
          <td>Love Will Remember</td>
          <td>2013</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Selena Gomez</td>
          <td>Me & My Girls</td>
          <td>2015</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Selena Gomez</td>
          <td>Hit the Lights</td>
          <td>2011</td>
        </tr>

                            <tr>
                        <td>4</td>
                        <td>Selena Gomez</td>
                        <td>I Don't Miss You at All</td>
                        <td>2009</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Selena Gomez</td>
                        <td>I Got U</td>
                        <td>2009</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Selena Gomez</td>
                        <td>I Like It Like Way</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Selena Gomez</td>
                        <td>Intuition</td>
                        <td>2010</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Selena Gomez</td>
                        <td>I Promise You</td>
                        <td>2009</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Selena Gomez</td>
                        <td>Kiss & Tell</td>
                        <td>2009</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Selena Gomez</td>
                        <td>Live Like There's No Tomorrow</td>
                        <td>2010</td>
                    </tr>
      </tbody>
    </table>
          </div>
        )}
      </li>












              <li>
                <button onClick={handleHipHopClick} className="playlist-tab">
                  Best Hip-Hop Music
                </button>
                {isHipHopVisible && (
                  <div className="playlist-info">
                    <span className="closebtn" onClick={handleHipHopClick} value="close">&times;</span>
                    <h3>Best Hip-Hop Music</h3>
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
                )}
              </li>


              <li>
                <button onClick={handlePopStudyClick} className="playlist-tab">
                  Pop Study
                </button>
                {isPopStudyVisible && (
                  <div className="playlist-info">
                    <span className="closebtn" onClick={handlePopStudyClick} value="close">&times;</span>
                    <h3>Pop Study</h3>
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
                          <td>James Arthur</td>
                          <td>Rewrite The Stars</td>
                          <td>2017</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Dean Lewis</td>
                          <td>Be Alright</td>
                          <td>2018</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Usher</td>
                          <td>If the World Was Ending (feat. Julia Michaels)</td>
                          <td>2019</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Lady Gaga</td>
                          <td>Always Remember Us This Way</td>
                          <td>2018</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Calum Scott</td>
                          <td>Dancing On My Own</td>
                          <td>2016</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Rihanna, Mikkey Ekko</td>
                          <td>Stay</td>
                          <td>2012</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Kacey Musgraves</td>
                          <td>Rainbow</td>
                          <td>2018</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Clean Bandit, Julia Michaels</td>
                          <td>I Miss You (feat. Julia Michaels)</td>
                          <td>2018</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </li>


              
            </ol>

            
          </section>



          <section className="Artists">
  <h3>Artists</h3>
  <ol>



    <li>
      <button onClick={handleTheWeekndClick} className="playlist-tab">
        The Weeknd
      </button>
      {isTheWeekndVisible && (
        <div className="playlist-info">
          <span className="closebtn" onClick={handleTheWeekndClick}>&times;</span>
          <h3>The Weeknd</h3>
          <div>
            <h3>Biography:</h3>
            <p>The Weeknd is a Canadian singer, songwriter, and record producer known for his falsetto vocals and dark R&B sound. He gained popularity through his mixtapes and achieved international success with albums like "Kiss Land," "Beauty Behind the Madness," and "Starboy.</p>
          </div>
          <div>
            
            <h3>Social Media Links:</h3>
            <ul>
              <li><a href="https://www.instagram.com/theweeknd/">Instagram</a></li>
              <li><a href="https://twitter.com/theweeknd">Twitter</a></li>
              <li><a href="https://www.facebook.com/theweeknd">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h3>My Favorite Songs:</h3>
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Title</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Blinding Lights</td>
                  <td>2019</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Starboy</td>
                  <td>2016</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Can't Feel My Face</td>
                  <td>2015</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>The Hills</td>
                  <td>2015</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Earned It</td>
                  <td>2014</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </li>






    <li>
      <button onClick={handleSGClick} className="playlist-tab">
        Selena Gomez
      </button>
      {isSGVisible && (
        <div className="playlist-info">
          <span className="closebtn" onClick={handleSGClick}>&times;</span>
          <h3>Selena Gomez</h3>
          <div>
            <h3>Biography:</h3>
            <p>Selena Gomez is an American singer, actress, and producer born on July 22, 1992, in Texas. She gained fame throughout her role on "Barney & Friends" and later starred in Disney Channel's "Wizards of Waverly Place." Selena gontinues to be a prominent figure in the entertainment industry.</p>
          </div>
          <div>
            
            <h3>Social Media Links:</h3>
            <ul>
              <li><a href="https://www.instagram.com/selenagomez/">Instagram</a></li>
              <li><a href="https://twitter.com/selenagomez">Twitter</a></li>
              <li><a href="https://www.facebook.com/selenagomez">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h3>My Favorite Songs:</h3>
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Title</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Come & Get It</td>
                  <td>2013</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Good for You</td>
                  <td>2015</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Rare</td>
                  <td>2020</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Baila Conmigo (with Rauw Alejandro)</td>
                  <td>2021</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Lose You to Love Me</td>
                  <td>2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </li>




    <li>
      <button onClick={handleCamilaClick} className="playlist-tab">
        Camila Cabello
      </button>
      {isCamilaVisible && (
        <div className="playlist-info">
          <span className="closebtn" onClick={handleCamilaClick}>&times;</span>
          <h3>Camila Cabello</h3>
          <div>
            <h3>Biography:</h3>
            <p>Camila Cabello is a Cuban-American singer and actress known for her powerful vocals and Latin-influenced pop music. She rose to fame as a member of a girl group Fifth Harmony and later embarked on a successful solo career. With hits like "Havana," she has become a prominent figure in the music industry.</p>
          </div>
          <div>
            
            <h3>Social Media Links:</h3>
            <ul>
              <li><a href="https://www.instagram.com/camila_cabello/">Instagram</a></li>
              <li><a href="https://twitter.com/camila_cabello">Twitter</a></li>
              <li><a href="https://www.facebook.com/camilacabello">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h3>My Favorite Songs:</h3>
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Title</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Havana (feat. Young Thug)</td>
                  <td>2017</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Senorita (with Shawn Mendes)</td>
                  <td>2019</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Consequences</td>
                  <td>2018</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Don't Go yet</td>
                  <td>2021</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>My Oh My (feat. DaBaby)</td>
                  <td>2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </li>









  </ol>
</section>




          
        </section>
      </div>
      <Footer />
    </div>
  );
}

