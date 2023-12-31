import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProblemsHeader.css";


const ProblemsHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const goToHome = () => {
    navigate("/home");
  };

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
          setSelectedLanguage(data.language); // Set the user's language preference
        }
      })
      .catch(error => {
        console.error('Error fetching user language:', error);
      });
    }
  }, []);

  return (
    <div className="problems__header__container">
      <span id="orange__banner">
          <button onClick={goToHome}
          className="problems__header__text">&#60;SynTactic&#62;</button>
      </span>
         
      <div className="problems__header__buttons">
        <div className="problems__selected__language">
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