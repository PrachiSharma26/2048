import React  from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Game from "./Game";
import Login from "./login";




export default function Home() {
 
  
  return  (
    
    <Router> 
      <div className="main-body">
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Game" element={<Game />} />
      
      </Routes>
      </div>
    </Router>
  );
}