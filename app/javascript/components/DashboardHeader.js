import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DashboardHeader.css";

const DashboardHeader = () => {
  return (
    <div className="dashboard__header__container">
      <span id="orange__banner">
        <Link to="/home">
          <p className="landing__header__text">&#60;SynTactic&#62;</p>
        </Link>
      </span>    
    </div>
  )
};

export default DashboardHeader;

