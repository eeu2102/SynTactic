import React, { useState, useEffect } from "react";
import "./Problems.css";

const Problems = () => {
  const [questionArray, setQuestionArray] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100;

  const [questionData, setQuestionData] = useState({
    question: "",
    choices: ["", "", ""],
    correctAnswer: "",
  });

  const [showCorrectnessModal, setShowCorrectnessModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setAnswerCorrect] = useState(false);

  useEffect(() => {
    fetch("/questions") // Adjust if you have a different endpoint
      .then((response) => response.json())
      .then((data) => {
        setQuestionArray(data);
        setTotalQuestions(data.length);
        if (data[0]) {
          // If there's data, set the first question
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
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswerChoice = (selectedChoice) => {
    setSelectedAnswer(selectedChoice);
    if (selectedChoice === questionData.correctAnswer) {
      setAnswerCorrect(true);
      setScore(score + 1);
    } else {
      setAnswerCorrect(false);
    }
    setShowCorrectnessModal(true);
  };

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
          className="answer__choice"
          onClick={() => handleAnswerChoice("A")}
        >
          <span>A</span>
          {questionData.choices[0]}
        </button>
        <button
          className="answer__choice"
          onClick={() => handleAnswerChoice("B")}
        >
          <span>B</span>
          {questionData.choices[1]}
        </button>
        <button
          className="answer__choice"
          onClick={() => handleAnswerChoice("C")}
        >
          <span>C</span>
          {questionData.choices[2]}
        </button>
      </div>

      {showCorrectnessModal && (
        <div className="problems__modal">
          {isAnswerCorrect ? (
            <p id="correct__answer">Correct!</p>
          ) : (
            <p id="incorrect__answer">
              Incorrect. The correct answer is: {questionData.correctAnswer}
            </p>
          )}
          <button className="next__button" onClick={handleNextQuestion}>
            Next
          </button>
        </div>
      )}

      {showResultModal && (
        <div className="results__container">
          <h1>Practice Complete!</h1>
          <div className="user__score">
            <h2>
              Your Score: {score} out of {totalQuestions}
            </h2>
            <h2>Questions Solved: +{score}!</h2>
          </div>
          <div className="results__buttons">
            <a href="">Home</a>
            <a href="">Again</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Problems;
