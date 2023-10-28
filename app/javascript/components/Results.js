import React from "react";
import { useParams } from "react-router-dom";
// ^^^^ how will we send the parameters over?
// useHistory instead??
import "./Results.css"


const Results = () => {

  const { score, questionsSolved } = useParams();

  return (
    <div className="results__container">
      <h1>Practice Complete!</h1>
      <div className="user__score">
        <h2>Your Score: { score } out of 5???</h2>
        <h2>Questions Solved: +{questionsSolved}!</h2>
      </div>
      <div className="results__buttons">
        <a href="\home\">Home</a>
        <a href="">Again</a>
      </div>
    </div>
  )
}

export default Results;