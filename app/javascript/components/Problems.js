//////////////
// About 10/30/2023:
// This file contains JS for the problem pages 
// Logic contained: user interacts with questions, show the correctness of answers,  show the results modal at end of a set
//////////////

import React, { useState, useEffect } from "react";
import "./Problems.css";
import { useSearchParams, useNavigate } from "react-router-dom";

const Problems = () => {


  //initializing variables
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category");
  const method = searchParams.get("method");
  const language = searchParams.get("language");

  const [multipleChoice, setMultipleChoice] = useState(false);
  const [flashCards, setFlashcards] = useState(false);
  const [trueFalse, setTrueFalse] = useState(false);
  const [userLanguage, setUserLanguage] = useState('');

  const [questionArray, setQuestionArray] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100;

  //initialize variable to hold scoring
  const [score, setScore] = useState(0);

  //initializing variables to hold multiple choice question data
  const [questionData, setQuestionData] = useState({
    question: "",
    choices: ["", "", ""],
    correctAnswer: ""
  });

  // initializing variables to hold flashcard question data
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardData, setCardData] = useState({
    question: "",
    answer: ""
  })

  //initializing variables to hold true false question data and scoring
  const [tfData, setTFData] = useState({
    question: "",
    claim: "",
    answer: "",
  })


  //initializing variables (cont)
  const [showCorrectnessModal, setShowCorrectnessModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setAnswerCorrect] = useState(false);

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
  
  useEffect(() => {
    if (category && method === 'multiple choice') {
      console.log("MC");
      setMultipleChoice(true);
      setFlashcards(false);
      setTrueFalse(false);
      fetch(`/questions?category=${category}&method=${method}&coding_language=${userLanguage}`)
      .then(response => response.json())
      .then(data => {
        if (data.length) {
          const shuffled = data.sort(() => 0.5 - Math.random());
          let selected = shuffled.slice(0, 5);
  
          setQuestionArray(selected);
          setTotalQuestions(selected.length);
  
          if (selected[0]) {
            const firstQuestion = selected[0];
            setQuestionData({
              question: firstQuestion.question,
              choices: [
                firstQuestion.choice_a,
                firstQuestion.choice_b,
                firstQuestion.choice_c,
              ],
              correctAnswer: firstQuestion.answer,
            });
          }
        }
      });
    } else if (category && method === 'flash card') {
      console.log("FC");
      setMultipleChoice(false);
      setFlashcards(true);
      setTrueFalse(false);
      fetch(`/questions?category=${category}&method=${method}&coding_language=${userLanguage}`)
      .then(response => response.json())
      .then(data => {
        if (data.length) {
          const shuffled = data.sort(() => 0.5 - Math.random());
          let selected = shuffled.slice(0, 5);
  
          setQuestionArray(selected);
          setTotalQuestions(selected.length);
  
          if (selected[0]) {
            const firstCard = selected[0];
            setCardData({
              question: firstCard.question,
              answer: firstCard.answer
            });
          }
        }
      });
    } 
    else if (category && method === 'truefalse') {
      console.log("TF");
      setMultipleChoice(false);
      setFlashcards(false);
      setTrueFalse(true);
      fetch(`/questions?category=${category}&method=${method}&coding_language=${userLanguage}`)
      .then(response => response.json())
      .then(data => {
        if (data.length) {
          const shuffled = data.sort(() => 0.5 - Math.random());
          let selected = shuffled.slice(0, 5);
  
          setQuestionArray(selected);
          setTotalQuestions(selected.length);
  
          if (selected[0]) {
            const firstTF = selected[0];
            setTFData({
              question: firstTF.question,
              claim: firstTF.choice_a,
              answer: firstTF.answer
            });
          }
        }
      });
    }

  }, [category, method, userLanguage]);
  

  // shows correctness of answer after selection
  const handleAnswerChoice = (selectedChoice) => {
    if (showCorrectnessModal) return;
    setSelectedAnswer(selectedChoice);
    if (selectedChoice === questionData.correctAnswer || 
        selectedChoice === tfData.answer) {
    // if (selectedChoice === tfData.answer) {
      setAnswerCorrect(true);
      setScore(score + 1);
    } else {
      setAnswerCorrect(false);
    }
    setShowCorrectnessModal(true);
  };

  //continuing through question set, showing next question if not done
  //else, showing the results modal
  const handleNextQuestion = () => {
    const nextIndex = questionIndex + 1;
    if (method === `multiple choice`) {
      if (nextIndex < totalQuestions) {
        setShowCorrectnessModal(false);
        setAnswerCorrect(false);
        setSelectedAnswer(null);
        setQuestionIndex(nextIndex);

        // Update the questionData with the next question from questionArray
        const nextQuestion = questionArray[nextIndex];
        setQuestionData({
          question: nextQuestion.question,
          choices: [
            nextQuestion.choice_a,
            nextQuestion.choice_b,
            nextQuestion.choice_c,
          ],
          correctAnswer: nextQuestion.answer,
        });
      } else {
        setShowCorrectnessModal(false);
        setShowResultModal(true);
      }
    }

    else if (method === `flash card`) {
      if (nextIndex < totalQuestions) {
        setIsFlipped(false);
        setQuestionIndex(nextIndex);
        
        const nextCard = questionArray[nextIndex];
        setCardData({
          question: nextCard.question,
          answer: nextCard.answer
        });
      } else {
        setShowResultModal(true);
      }
    }

    else if (method === `truefalse`) {
      if (nextIndex < totalQuestions) {
        setShowCorrectnessModal(false);
        setAnswerCorrect(false);
        setSelectedAnswer(null);
        setQuestionIndex(nextIndex);
        
        const nextTF = questionArray[nextIndex];
        setTFData({
          question: nextTF.question,
          claim: nextTF.choice_a,
          answer: nextTF.answer
        });
      } else {
        setShowCorrectnessModal(false);
        setShowResultModal(true);
      }
    }

    
  };

  //if the user clicks the home icon
  const handleHomeClick = () => {
    if (method === `multiple choice` || method === `truefalse`) {
      updateProgress(score);
    }
    navigate("/home");
  };

  //if the user wants to go through the questions again 
  const handleAgainClick = async () => {
    setSelectedAnswer(null);
    setQuestionIndex(0);
    setShowResultModal(false);
    
    // Reset the questionData to the first question for multiple choice
    if (method === `multiple choice`) {
      console.log("MC")
      await updateProgress(score);
      if (category && method) {
        const response = await fetch(`/questions?category=${category}&method=${method}&coding_language=${userLanguage}`);
        const data = await response.json();
  
        if (data.length) {
          const shuffled = data.sort(() => 0.5 - Math.random());
          let selected = shuffled.slice(0, 5);
  
          setQuestionArray(selected);
          setTotalQuestions(selected.length);
          setScore(0);
  
          if (selected[0]) {
            const firstQuestion = selected[0];
            setQuestionData({
              question: firstQuestion.question,
              choices: [
                firstQuestion.choice_a,
                firstQuestion.choice_b,
                firstQuestion.choice_c,
              ],
              correctAnswer: firstQuestion.answer,
            });
          }
        }
      }
    }

    // Reset the questionData to the first question for flash cards
    else if (method === `flash card`) {
      console.log("FC")
      setIsFlipped(false);
      if (category && method) {
        const response = await fetch(`/questions?category=${category}&method=${method}&coding_language=${userLanguage}`);
        const data = await response.json();
  
        if (data.length) {
          const shuffled = data.sort(() => 0.5 - Math.random());
          let selected = shuffled.slice(0, 5);
  
          setQuestionArray(selected);
          setTotalQuestions(selected.length);
  
          if (selected[0]) {
            const firstCard = selected[0];
            setQuestionData({
              question: firstCard.question,
              answer: firstCard.answer
            });
          }
        }
      }
    }

    // Reset the questionData to the first question for true false
    else if (method === `truefalse`) {
      console.log("TF")
      await updateProgress(score);
      if (category && method) {
        const response = await fetch(`/questions?category=${category}&method=${method}&coding_language=${userLanguage}`);
        const data = await response.json();
  
        if (data.length) {
          console.log("hello");
          console.log(data.length);
          const shuffled = data.sort(() => 0.5 - Math.random());
          let selected = shuffled.slice(0, 5);
  
          setQuestionArray(selected);
          setTotalQuestions(selected.length);
          setScore(0);
  
          if (selected[0]) {
            const firstTF = selected[0];
            setTFData({
              question: firstTF.question,
              claim: firstTF.choice_a,
              answer: firstTF.answer,
            });
          }
        }
      }
    }
    
  };

  const updateProgress = async (newScore) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        await fetch('/update_progress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ score: newScore })
        });
      } catch (error) {
        console.error('Error updating progress:', error);
      }
    }
  };


  return (
    <div>
      { multipleChoice && (
        <div className="problems__container">
          <div className="progress__container">
            <div
              className="progress__bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <p className="progress__number">{questionIndex + 1}/{totalQuestions}</p>
          </div>
        
        
          <div className="question">
            <p>{questionData.question}</p>
          </div>
          <div className="answer__choices">
            <button
              onClick={() => handleAnswerChoice("A")}
              className={`answer__choice ${
                selectedAnswer === "A" ? "selected__choice" : ""
              }`}
            >
              <span>A</span>
              {questionData.choices[0]}
            </button>
            <button
              onClick={() => handleAnswerChoice("B")}
              className={`answer__choice ${
                selectedAnswer === "B" ? "selected__choice" : ""
              }`}
            >
              {/* disabled={showCorrectnessModal} */}
              <span>B</span>
              {questionData.choices[1]}
            </button>
            <button
              onClick={() => handleAnswerChoice("C")}
              className={`answer__choice ${
                selectedAnswer === "C" ? "selected__choice" : ""
              }`}
            >
              <span>C</span>
              {questionData.choices[2]}
            </button>
          </div>

          {showCorrectnessModal && (
            <div
              className={`problems__modal ${
                isAnswerCorrect ? "correct" : "incorrect"
              }`}
            >
              {isAnswerCorrect ? (
                <p className="correctness__modal" id="correct__answer">
                  Correct!
                </p>
              ) : (
                <p className="correctness__modal" id="incorrect__answer">
                  Incorrect. The correct answer is: {questionData.correctAnswer}
                </p>
              )}
              <button className="next__button" onClick={handleNextQuestion}>
                {/* Next */}
                {questionIndex + 1 === totalQuestions ? "Finish" : "Next"}
              </button>
            </div>
          )}
        </div>
      )}

      { flashCards && (
        <div className="problems__container">
          <div className="progress__container">
            <div
              className="progress__bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <p className="progress__number">{questionIndex + 1}/{totalQuestions}</p>
          </div>
          <div className={`card__container ${isFlipped ? 'flipped' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}>
            <div className="card__face card__front" id="card__front">
              <p className="problem__title">Question</p>
              <p className="card__text">{cardData.question}</p> 
              <button className="flip__button" onClick={() => setIsFlipped(!isFlipped)} disabled={isFlipped}>Flip Over</button>
            </div>
            <div className="card__face card__back" id="card__back">
              <p className="problem__title">Answer</p>
              <p className="card__text">{cardData.answer}</p>
              <button className="flip__button" onClick={() => setIsFlipped(!isFlipped)} disabled={!isFlipped}>Flip Over</button>
            </div>
          </div>
          <button className="next__button" id="next__card" onClick={handleNextQuestion}>
            {/* Next */}
            {questionIndex + 1 === totalQuestions ? "Finish" : "Next"}
          </button>
        </div>
      )}

      { trueFalse && (
        <div className="problems__container">
          <div className="progress__container">
            <div
              className="progress__bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <p className="progress__number">{questionIndex + 1}/{totalQuestions}</p>
          </div>
          <div className="tf__question">
            <p>{tfData.question}</p>
          </div>
          <div className="tf__claim">
            <p>{tfData.claim}</p>
          </div>
          <div className="true__false">
            <button
              onClick={() => handleAnswerChoice("TRUE")}
              className={`true__choice ${selectedAnswer === "TRUE" ? "selected__choice" : ""}`}>
              TRUE
            </button>
            <button
              onClick={() => handleAnswerChoice("FALSE")}
              className={`false__choice ${selectedAnswer === "FALSE" ? "selected__choice" : ""}`}>
              FALSE
            </button>
          </div>

          {showCorrectnessModal && (
            <div
              className={`problems__modal ${
                isAnswerCorrect ? "correct" : "incorrect"
              }`}
            >
              {isAnswerCorrect ? (
                <p className="correctness__modal" id="correct__answer">
                  Correct!
                </p>
              ) : (
                <p className="correctness__modal" id="incorrect__answer">
                  Incorrect. The correct answer is: {tfData.answer}
                </p>
              )}
              <button className="next__button" onClick={handleNextQuestion}>
                {/* Next */}
                {questionIndex + 1 === totalQuestions ? "Finish" : "Next"}
              </button>
            </div>
          )}
        </div>
      )}

      { showResultModal && multipleChoice && (
          <div className="results__modal">
              <div className="overlay"></div>
              <div className="results">
                <p className="problem__title">Practice Complete!</p>
                <div className="user__score">
                  <p id="score">Your Score: {score} out of {totalQuestions}</p>
                  <p>Questions Solved: +{score}!</p>
                </div>
                <div className="results__buttons">
                  <button onClick={handleHomeClick} id="home__button">Home</button>
                  <button onClick={handleAgainClick} id="again__button">Again</button>
                </div>
              </div>
            </div>
        )}
        
        { showResultModal && flashCards && (
          <div className="results__modal">
              <div className="overlay"></div>
              <div className="results">
                <p className="problem__title">Practice Complete!</p>
                <div className="results__buttons">
                  <button onClick={handleHomeClick} id="home__button">Home</button>
                  <button onClick={handleAgainClick} id="again__button">Again</button>
                </div>
              </div>
            </div>
        )}

        { showResultModal && trueFalse && (
          <div className="results__modal">
              <div className="overlay"></div>
              <div className="results">
                <p className="problem__title">Practice Complete!</p>
                <div className="user__score">
                  <p id="score">Your Score: {score} out of {totalQuestions}</p>
                  <p>Questions Solved: +{score}!</p>
                </div>
                <div className="results__buttons">
                  <button onClick={handleHomeClick} id="home__button">Home</button>
                  <button onClick={handleAgainClick} id="again__button">Again</button>
                </div>
              </div>
            </div>
        )}
            
        
    </div>
    
  );
};

export default Problems;


