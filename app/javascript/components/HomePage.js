//////////////
// About 10/30/2023:
// This file contains JS for the homepage page
// Displays header, lets user select their question category and question format
//////////////


import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [userLanguage, setUserLanguage] = useState(null);

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
          setUserLanguage(data.language); // Set the user's language preference
          console.log("YAY");
          console.log(data.language);
        }
      })
      .catch(error => {
        console.error('Error fetching user language:', error);
      });
    }
  }, []);


  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setShowModal(true);
  };

  return (
    <div className="home__container">
      <h1>Welcome to SynTactic</h1>
      <h2 id="sub__header">Pick a Review Topic</h2>
      <div className="topics__container">
        <button
          className="topic"
          onClick={(e) => {
            handleTopicClick("declaration");
          }}
        >
          Declaration and Instantiation
        </button>
        <button
          className="topic"
          onClick={(e) => {
            handleTopicClick("control flow");
          }}
        >
          Control Flow
        </button>
        <button
          className="topic"
          onClick={(e) => {
            handleTopicClick("data structures");
          }}
        >
          Data Structures
        </button>
      </div>

      {showModal && (
        <div className="home__modal">
          <div className="overlay" onClick={() => setShowModal(false)}></div>
          <div className="modal">
            <h1 id="modal__header">Pick a Review Method:</h1>
            <div className="review__methods">
              <button
                className="method"
                onClick={() =>
                  navigate(
                    // `/problems?category=${selectedTopic}&method=multiple choice`
                    `/problems?category=${selectedTopic}&method=multiple choice&language=${userLanguage}`
                    // navigate(`/problems?category=${topic}&method=selectedMethod&language=${userLanguage}`);
                  )
                }
              >
                Multiple Choice
              </button>
              <button
                className="method"
                onClick={() =>
                  navigate(
                    // `/problems?category=${selectedTopic}&method=flash cards`
                    `/problems?category=${selectedTopic}&method=flash card&language=${userLanguage}`
                  )
                }
              >
                Flash Cards
              </button>
            </div>
            <button id="back__button" onClick={() => setShowModal(false)}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
