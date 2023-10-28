import React from "react";
import { useParams } from "react-router-dom";
// ^^^^ how will we send the parameters over?
// useHistory instead??
import "./Results.css"


const Results = () => {

  const { score, questionsSolved } = useParams();

  return (
    <div className="results__container">
      <div className="user__score">
        <p>Your Score: { score } out of 5???</p>
        <p>Questions Solved: +{questionsSolved}!</p>
      </div>
      <div className="results__buttons">
        <a href="\home\">Home</a>
        <a href="">Again</a>
      </div>
    </div>
  )
}

export default Results;