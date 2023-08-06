// App.js (or index.js)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing Routes instead of Switch
import Login from './login';
//import SecondScreen from './Game';
import Game from './Game';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main login page */}
        <Route path="/" element={<Login />} />
        {/* Route for the second screen */}
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}
