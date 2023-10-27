import React, { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setShowModal(true);
  }


  return (
    <div className="home__container">
      <h1>Welcome to SynTactic</h1> 
      <h2 id="sub__header">Pick a Review Topic</h2>
      <div className="topics__container">
        <button className="topic" onClick={(e) => { handleTopicClick('Declaration and Instantiation') }}>
          Declaration and Instantiation
        </button>
        <button className="topic" onClick={(e) => { handleTopicClick('Control Flow') }}>
          Control Flow
        </button>
        <button className="topic" onClick={(e) => { handleTopicClick('Data Structures') }}>
          Data Structures
        </button>
      </div> 

      {showModal && (
        <div className="home__modal">
          <div className="overlay" onClick={() => setShowModal(false)}></div>
          <div className="modal">
            <h1 id="modal__header">Pick a Review Method:</h1>
            <div className="review__methods">
              <button className="method" onClick={() => { /*navigate depending on selected topic */}}>Multiple Choice</button>
              <button className="method" onClick={() => { /*navigate depending on selected topic */}}>Flash Cards</button>
            </div>
            <button id="back__button" onClick={() => setShowModal(false)}>Back</button>
          </div>
        </div>
      )}
    </div>
  ) 
}

export default HomePage;