import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home__container">
      <h1>Welcome to SynTactic</h1> 
      <h2 id="sub__header">Pick a Review Topic</h2>
      <div className="topics__container">
        <a href="" className="topic">Declaration and Instantiation</a>
        <a href="" className="topic">Control Flow</a>
        <a href="" className="topic">Data Structures</a>
      </div> 
    </div>
  ) 
}

export default HomePage;