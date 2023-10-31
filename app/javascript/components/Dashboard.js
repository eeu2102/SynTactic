//////////////
// About 10/30/2023:
// This file contains JS for the profile page
// --> Still yet to set up
//////////////

import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home/");
  };

  return (
    <div className="profile__container">
      <h1>Hi Jessica！</h1>
      <h2 id="progress__tracker">Questions Solved: </h2>
      <button onClick={handleHomeClick} className="home__button">Home</button>
    </div>
  );
};

export default Dashboard;
