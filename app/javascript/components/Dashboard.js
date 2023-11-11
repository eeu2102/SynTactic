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
          } else {
            console.log("PROBLEM"); // Log or handle errors
            navigate('/login'); // Redirect to login page if not authenticated
          }
        } catch (error) {
          console.error('Error fetching current user:', error);
        }
      } else {
        console.log('No token found');
        navigate('/home'); // Redirect to login page if there's no token
      }
    };
  
    getCurrentUser();
  }, [navigate]);
  
  const handleLogout = async () => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('authToken');
    console.log(token);
    console.log("RARIWRNO")
  
    // Remove the token from local storage
    localStorage.removeItem('authToken');
    
    // Optionally inform the backend about the logout for token invalidation
    try {
      const response = await fetch('/logout', {
        method: 'DELETE', // or 'DELETE', depending on your API design
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
        // If your backend expects a body, include it here
      });
  
      if (!response.ok) {
        console.error('Failed to invalidate token on the server.');
      }
    } catch (error) {
      console.error('There was an error during logout:', error);
    }
  
    // Redirect to the landing page
    navigate('/home');
  };
  

  const handleHomeClick = () => {
    navigate("/home/");
  };

  return (
    <div className="profile__container">
      <button onClick={handleLogout} className="logout__button">Logout</button>
      {/* <h1>Hi Jessica！</h1> */}
      <h1>Hi {username}!</h1>
      <h2 id="progress__tracker">Questions Solved: </h2>
      <button onClick={handleHomeClick} className="home__button">Home</button>
    </div>
  );
};

export default Dashboard;


