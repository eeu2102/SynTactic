import React from 'react';
import "./WelcomeHeader.css";

const WelcomeHeader = () => {
  return ( // Added return statement here
    <div className="welcome__header__container">
      <div>
        <h1 className="welcome__header__text">SynTactic</h1>
      </div>
    </div>
  );
}

export default WelcomeHeader;
