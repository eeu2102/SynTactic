// //////////////
// // About 10/30/2023:
// // This file contains JS for the profile page
// // --> Still yet to set up
// //////////////

// import React from "react";
// import "./Dashboard.css";
// import { useNavigate } from "react-router-dom";


// const Dashboard = () => {

//   const []

//   const navigate = useNavigate();

//   const handleHomeClick = () => {
//     navigate("/home/");
//   };

//   return (
//     <div className="profile__container">
//       <button onClick={}className="logout__button">Logout</button>
//       <h1>Hi Jessica！</h1>
//       <h2 id="progress__tracker">Questions Solved: </h2>
//       <button onClick={handleHomeClick} className="home__button">Home</button>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('/logout', { // Make sure to use the correct endpoint
        method: 'DELETE', // Or 'POST' if your backend is set up to listen to a POST request for logout
        headers: {
          'Content-Type': 'application/json',
          // Include CSRF token if needed for Rails security
        },
        // If your sessions are token-based you might need to include the token in the request
      });

      if (response.ok) {
        // Session terminated, now redirect to the login page
        navigate('/home'); // Assuming '/' is your landing page where the login button exists
      } else {
        // Handle any errors if the server couldn't terminate the session
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('There was an error during logout:', error);
    }
  };

  const handleHomeClick = () => {
    navigate("/home/");
  };

  return (
    <div className="profile__container">
      <button onClick={handleLogout} className="logout__button">Logout</button>
      <h1>Hi Jessica！</h1>
      <h2 id="progress__tracker">Questions Solved: </h2>
      <button onClick={handleHomeClick} className="home__button">Home</button>
    </div>
  );
};

export default Dashboard;

