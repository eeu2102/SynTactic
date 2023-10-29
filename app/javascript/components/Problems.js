import React, { useState } from "react";
import "./Problems.css"

const Problems = () => {
  const [questionArray, setQuestionArray] = useState([]);
  // populate array
  const totalQuestions = questionArray.length;
  // const totalQuestions = 5;
  const [questionIndex, setQuestionIndex] = useState(1);
  const [score, setScore] = useState(0);
  // const [questionIndex, setQuestionIndex] = useState(1);

  const progressPercentage = ((questionIndex)/totalQuestions)*100;
  const [questionData, setQuestionData] = useState({
    question: "",
    choices: ["", "", ""],
    correctAnswer: ""
  });

  const [showCorrectnessModal, setShowCorrectnessModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setAnswerCorrect] = useState(false);

  const handleAnswerChoice = (selectedChoice) => {
    if (selectedChoice === questionData.correctAnswer) {
      setAnswerCorrect(true);
      setScore(score + 1);
    }
    else {
      setAnswerCorrect(false);
    }
    showCorrectnessModal(true);
  }

  const handleNextQuestion = () => {
    if (questionIndex + 1 < totalQuestions) {
      setShowCorrectnessModal(false);
      setAnswerCorrect(false);
      setSelectedAnswer(null);
      setQuestionIndex(questionIndex + 1);
    }
    else {
      setShowCorrectnessModal(false);
      setShowResultModal(true);
    }
  }


  return (
    <div className="problems__container">
      <div className="progress__container">
        {/* <div className="progress__bar" style={{ width: `${progressPercentage}%` }}></div> */}
        <div className="progress__bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="question">
        <h1>{questionData.question}</h1>
      </div>
      <div className="answer__choices">
        <button className="answer__choice" onClick={() => handleAnswerChoice("A")}>
          <span>A</span>
          {questionData.choices[0]}
        </button>
        <button className="answer__choice" onClick={() => handleAnswerChoice("B")}>
          <span>B</span>
          {questionData.choices[1]}
        </button>
        <button className="answer__choice" onClick={() => handleAnswerChoice("C")}>
          <span>C</span>
          {questionData.choices[2]}
        </button>
      </div>

      {showCorrectnessModal && (
        <div className="problems__modal">
          {isAnswerCorrect ? (
              <p id="correct__answer">Correct!</p>
          ) : (
              <p id="incorrect__answer">Incorrect. The correct answer is: {questionData.correctAnswer}</p>
           ) }
          <button className="next__button" onClick={handleNextQuestion}>Next</button>
        </div>
      )}

      {showResultModal && (
        <div className="results__container">
        <h1>Practice Complete!</h1>
        <div className="user__score">
          <h2>Your Score: { score } out of 5???</h2>
          <h2>Questions Solved: +{ score }!</h2>
        </div>
        <div className="results__buttons">
          <a href="">Home</a>
          <a href="">Again</a>
        </div>
      </div>
      )}

    </div>
  )
}

export default Problems