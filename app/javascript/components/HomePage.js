//////////////
// About 10/30/2023:
// This file contains JS for the homepage page
// Displays header, lets user select their question category and question format
//////////////


import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [userLanguage, setUserLanguage] = useState("");


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
      <p className="home__quote">Pick a review <span id="topic">&#123;topic&#125;</span></p>
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
            <p className="modal__header">Pick a review <span id="method">&#60;method&#62;</span></p>
            <div className="review__methods">
              <button
                className="method"
                onClick={() =>
                  navigate(
                    `/problems?category=${selectedTopic}&method=multiple choice&language=${userLanguage}`
                  )
                }
              >
                Multiple Choice
              </button>
              <button
                className="method"
                onClick={() =>
                  navigate(
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
