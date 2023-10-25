import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import './Header.css'


const Header = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div className="header__container">
      {/* <header> */}
      <div className="home__link">
        <Link to="/home/">
          <h1>SynTactic</h1>
        </Link>
      </div>  
      <div className="drop__down">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="option1">Python</option>
          <option value="option2">Java</option>
          <option value="option3">C</option>
        </select>  
      </div> 
      <div className="profile__link">
        <a href="" target="__blank" id="nav__ig">
          <img className="profile__pic" />
        </a>
      </div> 
       
      {/* </header> */}
    </div>
    
  )
  
  };

export default Header;
