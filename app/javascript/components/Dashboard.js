// //////////////
// // About 10/30/2023:
// // This file contains JS for the profile page
// // --> Still yet to set up
// //////////////

import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const [username, setUsername] = useState('');
  const [progress, setProgress] = useState(0);


  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentUser = async () => {
      const token = localStorage.getItem('authToken'); // Retrieve the token
  
      if (token) {
        try {
          const response = await fetch('/current_user', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
            },
          });
          const data = await response.json();
          if (response.ok) {
            setUsername(data.username); // Set the username if the request was successful
            setProgress(data.progress); // Set the progress
            

          } else {
            navigate('/login'); // Redirect to login page if not authenticated
          }
        } catch (error) {
          console.error('Error fetching current user:', error);
        }
      } else {
        console.log('No token found');
        navigate('/login'); // Redirect to login page if there's no token
      }
    };
  
    getCurrentUser();
  }, [navigate]);
  
  
  const handleLogout = async () => {
    const token = localStorage.getItem('authToken');
  
    localStorage.removeItem('authToken');
    
    try {
      const response = await fetch('/logout', {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        console.error('Failed to invalidate token on the server.');
      }
    } catch (error) {
      console.error('There was an error during logout:', error);
    }
      navigate('/login');
  };
  

  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <div className="profile__container">
      <span id="dashboard__orange__circle"></span>
      <span id="dashboard__blue__circle"></span>
      <p className="dashboard__greeting">&#123;&nbsp;Hi {username}&nbsp;&#125;</p>
      <p className="progress__tracker">Questions Solved: {progress} </p>
      <div className="dashboard__buttons">
        <button onClick={handleHomeClick} className="dashboard__button" id="home__button">Home</button>
        <button onClick={handleLogout} className="dashboard__button" id="logout__button">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;


