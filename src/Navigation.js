import React from 'react';

import { Link } from 'react-router-dom';


export function Navigation(props){
    return(
      <nav>
      <div id="hamburger-menu"><Link to="#"><span className="menu" aria-label="menu"></span></Link></div>
      <div id="tabs">
          <Link to="/home"><span className="home" aria-label="home"></span>Home</Link>
          <Link to="/songbattles"><span className="feature1" aria-label="feature1"></span>Song Battles!</Link>
          <Link to="/popplayoffs"><span className="feature2" aria-label="feature2"></span>Pop Playoffs!</Link>
          <Link to="/profile"><span className="profile" aria-label="profile"></span>Profile</Link>
      </div>
      {/* <div id="search-bar">
          <label for="text">Search</label>
          <input type="search" placeholder="Discover new music"></input>
      </div> */}
      <div id="profile"></div>
      </nav>
    );
}

export function Footer(props){
    return(
        <footer>
            <p>&copy; Melody Madness. All rights reserved.</p>
            <p>Authors: Kassy Chaput, Juliette Jones, Beth Gronski, Tiffany Chung</p>
            <p><Link to="mailto:info@melodymadness.com">info@melodymadness.com</Link></p>
        </footer>
    );
}