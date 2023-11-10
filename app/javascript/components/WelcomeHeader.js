import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import "./WelcomeHeader.css";

const WelcomeHeader = () => {
  return ( // Added return statement here
    <div className="welcome__container">
      <div>
        <h1>SynTactic</h1>
      </div>
        
    </div>
  );
}

export default WelcomeHeader;
