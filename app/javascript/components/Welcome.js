import React from 'react';
import "./Welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLanguageSelection = async (language) => {
    // Send the language preference to the server
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('/update_language', { // Adjust the endpoint as necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ language }),
      });
  
      if (response.ok) {
        // If the update is successful, navigate to the home
        navigate('/home');
      } else {
        console.error('Failed to update language preference');
      }
    } catch (error) {
      console.error('There was an error updating language preference:', error);
    }
  };

  return (
    <div className="welcome__container">
      <div className="welcome__message">
        <p className="welcome__text">Welcome to SynTactic!</p>
      </div>
      <div className="language__selection">
        <div className="selection__text">
          <p id="select__language">Select a <span id="language">&#123;&nbsp;language&nbsp;&#125;</span></p>
          <p id="change__language">You can always change your practice language later!</p>
        </div>
        <div className="language__options">
          <button onClick={() => handleLanguageSelection('Java')}className="language__choice">Java</button>
          <button onClick={() => handleLanguageSelection('Python')} className="language__choice">Python</button>
          <button onClick={() => handleLanguageSelection('Ruby')} className="language__choice">Ruby</button>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
