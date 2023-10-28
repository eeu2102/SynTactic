import React from "react";
import "./Results.css"

const Results = () => {

  return (
    <div className="results__container">
      <div className="user__score">
        <p>Your Score:</p>
        <p>Questions Solved:</p>
      </div>
      <div className="results__buttons">
        <button>Home</button>
        <button>Again</button>
      </div>
    </div>
  )
}

export default Results