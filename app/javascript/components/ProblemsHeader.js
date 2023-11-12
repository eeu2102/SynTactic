import React, { useState, useEffect } from "react";
import "./ProblemsHeader.css";

const ProblemsHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Retrieve the auth token
    if (token) {
      fetch('/current_user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the token in the Authorization header
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data && data.language) {
          setSelectedLanguages(data.language); // Set the user's language preference
        }
      })
      .catch(error => {
        console.error('Error fetching user language:', error);
      });
    }
  }, []);

  return (
    <div className="header__container">
      <div className="home__link">
        <Link to="/home">
          <h1>SynTactic</h1>
        </Link>
      </div>
      <div className="header__buttons">
        <div className="selected__language">
          {selectedLanguage}
        </div>
        <div className="user__profile">
          <button id="user__dashboard" onClick={goToDashboard}>
            Dashboard
          </button>
        </div>
      </div>
    </div>
  )
};

export default ProblemsHeader;