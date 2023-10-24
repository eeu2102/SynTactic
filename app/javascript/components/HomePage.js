import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home__container">
      <h1>Welcome to SynTactic</h1> 
      <h2 id="sub__header">Pick a Review Topic</h2>
      <div className="topics__container">
        <a href="">Declaration and Instantiation</a>
        <a href="">Control Flow</a>
        <a href="">Data Structures</a>
      </div>
    </div>
  ) 
}

export default HomePage;