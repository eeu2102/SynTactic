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

  const [questionArray, setQuestionArray] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100;

  //initializing variables to hold question data
  const [questionData, setQuestionData] = useState({
    question: "",
    choices: ["", "", ""],
    correctAnswer: "",
  });

  //initializing variables (cont)
  const [showCorrectnessModal, setShowCorrectnessModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setAnswerCorrect] = useState(false);

  //depending on the category + method, fetch a question accordingly
  //parse through the question's features, assign to variables
  // NOTE: we still have some issues with getting it to exactly how we want it
  //eventually, this section should fetch random questions and go through the question database randomly
  useEffect(() => {
    if (category && method) {
      fetch(`/questions?category=${category}&method=${method}`)
        .then((response) => response.json())
        .then((data) => {
          setQuestionArray(data);
          setTotalQuestions(data.length);
          if (data[0]) {
            const firstQuestion = data[0];
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
        });
    }
  }, [category, method]);

  //handling cases if it was the last question, answer was right, answer was wrong
  const handleAnswerChoice = (selectedChoice) => {
    if (showCorrectnessModal) return;
    setSelectedAnswer(selectedChoice);
    if (selectedChoice === questionData.correctAnswer) {
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
  };

  //if the user clicks the home icon
  const handleHomeClick = () => {
    navigate("/home/");
  };

  //if the user wants to go through the same set of questions again 
  const handleAgainClick = () => {
    setQuestionIndex(0);
    setScore(0);
    setShowResultModal(false);
    // Reset the questionData to the first question
    const firstQuestion = questionArray[0];
    if (firstQuestion) {
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
  };

  return (
    <div className="problems__container">
      <div className="progress__container">
        <div
          className="progress__bar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="question">
        <h1>{questionData.question}</h1>
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
            Next
          </button>
        </div>
      )}

      {showResultModal && (
        <div className="results__modal">
          <div className="overlay"></div>
          <div className="results">
            <h1>Practice Complete!</h1>
            <div className="user__score">
              <h2>
                Your Score: {score} out of {totalQuestions}
              </h2>
              <h2>Questions Solved: +{score}!</h2>
            </div>
            <div className="results__buttons">
              <button onClick={handleHomeClick}>Home</button>
              <button onClick={handleAgainClick}>Again</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Problems;
