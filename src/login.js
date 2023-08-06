import React from 'react';
import { Link } from 'react-router-dom';
import Game from './Game';
import './login.css'; // Import the CSS file for styling (create a new Login.css file)

export default function Login() {
  return (
    <div className="login-page">
      <div className="center-content">
        <img
          src="https://i.pinimg.com/originals/6d/cd/94/6dcd94c7c4bf4800648ef7cbe0113c33.gif"
          alt="Welcome"
          className="logo"
        />
        <div className='rules'>
        How to play:
        Use your arrow keys to move the tiles. 
        When two tiles with the same number touch, they merge into one!
        </div>
        {/* Link to navigate to the Game */}
        <div className='link'>
        <Link to="/Game" className="login-btn">
          Click to start
        </Link>
        </div>
      </div>
    </div>
  );
}
