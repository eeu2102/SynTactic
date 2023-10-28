import React, { useState, useEffect } from "react";
import "./Problems.css"

const Problems = () => {
  const [questionArray, setQuestionArray] = useState([]);
  // populate array
  // const totalQuestions = questionArray.length;
  const totalQuestions = 5;
  // const [questionIndex, setQuestionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(1);

  const progressPercentage = ((questionIndex)/totalQuestions)*100;
  // const progressPercentage = 10;
  const [questionData, setQuestionData] = useState({
    question: "",
    choices: ["", "", ""],
    answer: ""
  });
  
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setAnswerCorrect] = useState(false);

  const handleAnswerChoice = (selectedChoice) => {
    if (selectedChoice === questionData.correctAnswer) {
      setAnswerCorrect(true);
    }
    else {
      setAnswerCorrect(false);
    }
    showModal(true);
  }

  const handleNextQuestion = () => {
    handleNext = () => {
      setShowModal(false);
      setAnswerCorrect(false);
      setSelectedAnswer(null);
      setQuestionIndex(questionIndex + 1);
    }
  }

  // useEffect(() => {

  // })

  return (
    <div className="problems__container">
      <div className="progress__container">
        {/* <div className="progress__bar" style={{ width: `${progressPercentage}%` }}></div> */}
        <div className="progress__bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="question">
        <h1>Enter Question Text</h1>
      </div>
      <div className="answer__choices">
        <button className="answer__choice">
          <span>A</span>
          Answer Choice
        </button>
        <button className="answer__choice">
          <span>B</span>
          Answer Choice
        </button>
        <button className="answer__choice">
          <span>C</span>
          Answer Choice
        </button>
      </div>

      {showModal && (
        <div className="problems__modal">
          {isAnswerCorrect ? (
              <p id="correct__answer">Correct!</p>
          ) : (
              <p id="incorrect__answer">Incorrect. The correct answer is: {questionData.correctAnswer}</p>
           ) }
          <button className="next__button" onClick={handleNextQuestion()}>Next</button>
        </div>
      )}

    </div>
  )
}

export default Problems