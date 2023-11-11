import React from 'react';
import "./Welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome__container">
      <div className="welcome__message">
        <h1>Welcome to Syntactic</h1>
      <h2>Syntactic is going to win $5k from fastpitch and go out to eatttttt</h2>
      </div>
      <div className="language__selection">
        <div className="selection__text">
          <h2 id="select__language">Select a Language:</h2>
          <p id="change__language">You can always change your practice language later!</p>
        </div>
        <div className="language__options">
          <button onClick={() => {navigate('/homepage')}}className="language__choice">Java</button>
          <button onClick={() => {navigate('/homepage')}} className="language__choice">Python</button>
          <button onClick={() => {navigate('/homepage')}} className="language__choice">Ruby</button>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
