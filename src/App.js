import './index.css';
import { HomePage } from './Homepage';
import { Feature1 } from './Feature1';
import { Feature2 } from './Feature2';
import { Profile } from './Profile';
import { useState } from 'react'; // Import useState

import { Routes, Route, Navigate } from 'react-router-dom';

function App(props) {
  const songs = props.songs;
  const [personalizedSongList, setPersonalizedSongList] = useState([]); // Use useState for personalizedSongList

  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route
        path="songbattles"
        element={
          <Feature1
            songs={songs}
            personalizedSongList={personalizedSongList}
            setPersonalizedSongList={setPersonalizedSongList} // Pass personalizedSongList as prop
          />
        }
      />
      <Route
        path="popplayoffs"
        element={
          <Feature2/>
        }
      />
      <Route
        path="profile"
        element={
          <Profile
            personalizedSongList={personalizedSongList} // Pass personalizedSongList as prop
            setPersonalizedSongList={setPersonalizedSongList} // Pass the setter function as prop
          />
        }
      />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
